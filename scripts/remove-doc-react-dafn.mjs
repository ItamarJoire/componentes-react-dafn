#!/usr/bin/env node
// Remove a rota /doc-react-dafn e todas as suas dependências do projeto.
// Uso: node scripts/remove-doc-react-dafn.mjs

import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import { createInterface } from 'node:readline/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const p = (...segments) => resolve(root, ...segments)

function editFile(path, transform) {
  if (!existsSync(path)) {
    console.log(`  (ignorado, não existe) ${path}`)
    return
  }
  const original = readFileSync(path, 'utf8')
  const usesCRLF = original.includes('\r\n')
  const normalized = original.replace(/\r\n/g, '\n')
  const updated = transform(normalized)
  const final = usesCRLF ? updated.replace(/\n/g, '\r\n') : updated
  if (final !== original) {
    writeFileSync(path, final)
    console.log(`  editado: ${path}`)
  } else {
    console.log(`  sem alterações necessárias: ${path}`)
  }
}

function removeFiles(paths) {
  for (const path of paths) {
    if (existsSync(path)) {
      rmSync(path, { recursive: true, force: true })
      console.log(`  removido: ${path}`)
    } else {
      console.log(`  (ignorado, não existe) ${path}`)
    }
  }
}

async function confirm() {
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const answer = await rl.question(
    'Isso vai remover a rota /doc-react-dafn e todas as suas dependências do projeto. Continuar? (s/N) '
  )
  rl.close()
  return /^s(im)?$/i.test(answer.trim())
}

async function main() {
  console.log('Este script remove a rota de documentação /doc-react-dafn e tudo que depende dela.\n')

  if (!(await confirm())) {
    console.log('Cancelado.')
    process.exit(0)
  }

  console.log('\n1. Apagando a pasta da documentação')
  removeFiles([p('src/pages/DocReactDafn')])

  console.log('\n2. Revertendo os pontos onde a rota foi ligada ao projeto')

  editFile(p('src/routes/paths.ts'), src =>
    src
      .replace(/\n\s*docReactDafn: '\/doc-react-dafn',?/, '')
      .replace(/\n\s*docReactDafnCleanup: '\/doc-react-dafn\/como-remover',?/, '')
      .replace(/\s*\n\nexport const getDocComponentPath = \(slug: string\) => `\$\{paths\.docReactDafn\}\/\$\{slug\}`\n/, '\n')
      .replace(/,(\s*\n\}\s*as const)/, '$1')
  )

  editFile(p('src/routes/index.ts'), src =>
    src.replace(/export \{ getDocComponentPath, paths \} from '\.\/paths'/, "export { paths } from './paths'")
  )

  editFile(p('src/routes/AppRoutes.tsx'), src =>
    src
      .replace(
        "import { DocCleanupGuide, DocComponentDetail, DocOverview, DocReactDafn, Home, Login, NotFound } from '../pages'",
        "import { Home, Login, NotFound } from '../pages'"
      )
      .replace(/\s*<Route path=\{paths\.docReactDafn\}[\s\S]*?<\/Route>\n/, '\n')
  )

  editFile(p('src/pages/index.ts'), src =>
    src.replace(/export \{ DocReactDafn, DocOverview, DocComponentDetail, DocCleanupGuide \} from '\.\/DocReactDafn'\n?/, '')
  )

  editFile(p('src/pages/Home/Home.tsx'), src =>
    src.replace(
      /\s*<li>\s*<a className=\{styles\['login-link'\]\}[^>]*href=\{paths\.docReactDafn\}>\s*Documentação DAFN \(\{paths\.docReactDafn\}\)\s*<\/a>\s*<\/li>/,
      ''
    )
  )

  console.log('\n3. Removendo a dependência de geração da documentação')

  editFile(p('package.json'), src => {
    const pkg = JSON.parse(src)
    delete pkg.scripts?.predev
    delete pkg.scripts?.prebuild
    delete pkg.devDependencies?.['react-docgen-typescript']
    return JSON.stringify(pkg, null, 2) + '\n'
  })

  editFile(p('.gitignore'), src =>
    src.replace(/\n# Documentação DAFN \(gerada em predev\/prebuild a partir de src\/ui\/\*\/types\.ts\)\nsrc\/pages\/DocReactDafn\/manifest\.generated\.ts\n\n?/, '\n')
  )

  if (existsSync(p('node_modules/react-docgen-typescript'))) {
    console.log('\n  rodando npm uninstall react-docgen-typescript...')
    try {
      execSync('npm uninstall react-docgen-typescript', { cwd: root, stdio: 'inherit' })
    } catch {
      console.log('  falha ao rodar npm uninstall automaticamente; rode manualmente se necessário.')
    }
  }

  console.log('\n4. Apagando a pasta scripts (inclui este próprio script)')
  removeFiles([p('scripts')])

  console.log('\nConcluído.')
}

main()
