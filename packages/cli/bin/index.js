#!/usr/bin/env node
import { program } from 'commander';
import createProject from '../src/commands/create.js';
import dev from '../src/commands/dev.js';
import build from '../src/commands/build.js';

program
  .command('create <projectName>')
  .description('创建一个新项目')
  .action(createProject);

program
  .command('dev')
  .description('启动开发服务器')
  .action(dev);

program
  .command('build')
  .description('构建生产环境')
  .action(build);

program.parse(process.argv);