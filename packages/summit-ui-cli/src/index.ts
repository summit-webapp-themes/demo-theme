#!/usr/bin/env node

import { Command } from 'commander';
import { addCommand } from './commands/add.js';

const program = new Command();

program
  .name('summit-ui-lib')
  .description('CLI to add Summit UI components to your Next.js project')
  .version('1.0.0');

program
  .command('add <component>')
  .description('Add a component from the Summit UI registry')
  .action(async (component: string) => {
    await addCommand(component);
  });

program.parse();
