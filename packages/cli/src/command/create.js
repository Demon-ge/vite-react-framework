import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function createProject(projectName) {
  const targetPath = path.resolve(process.cwd(), projectName);
  
  if (fs.existsSync(targetPath)) {
    console.error('❌ 目录已存在，请更换名称');
    process.exit(1);
  }

  console.log('📦 正在创建项目...');
  fs.copySync(path.join(__dirname, '../templates/default'), targetPath);

  console.log('📥 安装依赖...');
  execSync(`cd ${targetPath} && npm install`, { stdio: 'inherit' });

  console.log('✅ 项目创建成功！');
  console.log(`👉 运行以下命令开始开发：\n  cd ${projectName} \n  npm run dev`);
}