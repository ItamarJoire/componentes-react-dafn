#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const REPO_URL = 'https://git.iti.gov.br/itamar.nascimento/componentes-react-dafn.git';

const target = process.argv[2];

if (!target) {
  console.error('Uso: npm create componentes-react-dafn@latest <nome-da-pasta>');
  process.exit(1);
}

const dest = resolve(process.cwd(), target);

if (existsSync(dest) && readdirSync(dest).length > 0) {
  console.error(`A pasta "${target}" já existe e não está vazia.`);
  process.exit(1);
}

console.log(`Clonando template em ${target}...`);
execFileSync('git', ['clone', '--depth', '1', REPO_URL, dest], { stdio: 'inherit' });

rmSync(resolve(dest, '.git'), { recursive: true, force: true });

console.log('\nPronto! Agora rode:');
console.log(`  cd ${target}`);
console.log('  npm install');
console.log('  npm run dev');
