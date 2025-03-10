import fs from 'fs';
import path from 'path';

const pagesDir = path.resolve(process.cwd(), 'src/pages');
const routesFile = path.resolve(process.cwd(), 'src/routes.js');

function generateRoutes() {
  if (!fs.existsSync(pagesDir)) {
    console.error('❌ 目录 src/pages 不存在');
    process.exit(1);
  }

  const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx') || file.endsWith('.jsx'));

  const routes = files.map(file => {
    const name = file.replace(/\.(tsx|jsx)$/, '');
    return `{ path: '/${name.toLowerCase()}', component: () => import('./pages/${file}') }`;
  });

  const content = `export default [\n  ${routes.join(',\n  ')}\n];`;

  fs.writeFileSync(routesFile, content);
  console.log('✅ 生成路由文件：src/routes.js');
}

export default generateRoutes;