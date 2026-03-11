import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

type PackageManager = 'npm' | 'pnpm' | 'yarn';

function detectPackageManager(): PackageManager {
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn';
  return 'npm';
}

function buildInstallCommand(pm: PackageManager, packages: string[]): string {
  const pkgList = packages.join(' ');
  switch (pm) {
    case 'pnpm':
      return `pnpm add ${pkgList}`;
    case 'yarn':
      return `yarn add ${pkgList}`;
    default:
      return `npm install ${pkgList}`;
  }
}

export function installDependencies(dependencies: string[]): void {
  if (dependencies.length === 0) return;
  const pm = detectPackageManager();
  const cmd = buildInstallCommand(pm, dependencies);
  execSync(cmd, { stdio: 'inherit', cwd: process.cwd() });
}
