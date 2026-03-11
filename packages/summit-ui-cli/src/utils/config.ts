import fs from 'fs';
import path from 'path';
import type { SummitConfig } from '../types.js';

const CONFIG_FILE = 'summit-ui-lib.config.json';

export function loadConfig(): SummitConfig {
  const configPath = path.join(process.cwd(), CONFIG_FILE);

  if (!fs.existsSync(configPath)) {
    throw new Error(
      `${CONFIG_FILE} not found.\n` +
        `Create one in your project root:\n\n` +
        `{\n` +
        `  "registry": "https://your-registry.vercel.app",\n` +
        `  "outputDir": "src/components/ui"\n` +
        `}\n`,
    );
  }

  const raw = fs.readFileSync(configPath, 'utf-8');

  try {
    const config = JSON.parse(raw) as SummitConfig;
    if (!config.registry) throw new Error(`"registry" field missing in ${CONFIG_FILE}`);
    if (!config.outputDir) throw new Error(`"outputDir" field missing in ${CONFIG_FILE}`);
    config.registry = config.registry.replace(/\/$/, '');
    return config;
  } catch (err) {
    if (err instanceof SyntaxError) throw new Error(`${CONFIG_FILE} is not valid JSON.`);
    throw err;
  }
}
