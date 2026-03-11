import fs from 'fs';
import path from 'path';

const registry = JSON.parse(fs.readFileSync('registry.json', 'utf-8'));
const outputDir = path.join('public', 'r');

fs.mkdirSync(outputDir, { recursive: true });

if (registry.items.length === 0) {
  console.log('⚠️  No components in registry yet.');
  process.exit(0);
}

for (const item of registry.items) {
  const files = item.files.map((file) => ({
    path: file.path.replace(/^registry\/components\/[^/]+\//, ''),
    type: file.type,
    content: fs.readFileSync(file.path, 'utf-8'),
  }));

  const output = {
    name: item.name,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies ?? [],
    devDependencies: item.devDependencies ?? [],
    registryDependencies: item.registryDependencies ?? [], // ← added
    files,
  };

  const outPath = path.join(outputDir, `${item.name}.json`);
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`✅  Built → public/r/${item.name}.json`);
}

console.log(`\n🎉 Registry build complete. ${registry.items.length} component(s).`);
