import { execSync } from 'child_process';

export default function dev() {
  console.log('🚀 启动开发服务器...');
  execSync('vite', { stdio: 'inherit' });
}