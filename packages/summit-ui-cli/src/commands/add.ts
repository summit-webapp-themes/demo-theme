import chalk from 'chalk';
import ora from 'ora';
import { loadConfig } from '../utils/config.js';
import { fetchComponent } from '../utils/registry.js';
import { writeFiles } from '../utils/writer.js';
import { installDependencies } from '../utils/installer.js';
import type { RegistryItem } from '../types.js';

async function resolveWithDependencies(
  registryUrl: string,
  componentName: string,
  resolved: Map<string, RegistryItem> = new Map(),
): Promise<Map<string, RegistryItem>> {
  if (resolved.has(componentName)) return resolved;
  const item = await fetchComponent(registryUrl, componentName);
  resolved.set(componentName, item);
  for (const dep of item.registryDependencies ?? []) {
    await resolveWithDependencies(registryUrl, dep, resolved);
  }
  return resolved;
}

export async function addCommand(componentName: string): Promise<void> {
  let config;
  try {
    config = loadConfig();
  } catch (err) {
    console.error(chalk.red(`\n✖ ${(err as Error).message}`));
    process.exit(1);
  }

  console.log(chalk.bold(`\nSummit UI — adding ${chalk.cyan(componentName)}\n`));

  const spinner = ora(`Resolving ${componentName}...`).start();
  let resolved: Map<string, RegistryItem>;
  try {
    resolved = await resolveWithDependencies(config.registry, componentName);
    spinner.succeed(`Resolved ${resolved.size} component(s)`);
  } catch (err) {
    spinner.fail((err as Error).message);
    process.exit(1);
  }

  const allNpmDeps = new Set<string>();
  for (const item of resolved.values()) {
    item.dependencies.forEach((d) => allNpmDeps.add(d));
  }

  for (const [name, item] of resolved) {
    const fileSpinner = ora(`Writing ${name}...`).start();
    try {
      const written = writeFiles(item.files, name, config.outputDir);
      fileSpinner.succeed(
        `${chalk.green(name)} → ${written
          .map((f) => chalk.dim(f.replace(process.cwd() + '/', '')))
          .join(', ')}`,
      );
    } catch (err) {
      fileSpinner.fail(`Failed to write ${name}: ${(err as Error).message}`);
      process.exit(1);
    }
  }

  if (allNpmDeps.size > 0) {
    const depList = [...allNpmDeps];
    console.log(chalk.bold(`\nInstalling: ${chalk.cyan(depList.join(', '))}\n`));
    try {
      installDependencies(depList);
    } catch (err) {
      console.error(chalk.red(`\n✖ Install failed: ${(err as Error).message}`));
      process.exit(1);
    }
  }

  console.log(
    chalk.green(`\n✔ Done! ${chalk.bold(componentName)} added.\n`) +
      chalk.dim(`  Import: @/components/ui/${componentName}/${componentName}\n`),
  );
}
