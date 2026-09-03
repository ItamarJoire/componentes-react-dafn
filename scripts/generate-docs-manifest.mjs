#!/usr/bin/env node
import { withCustomConfig } from 'react-docgen-typescript'
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const uiDir = resolve(root, 'src/ui')
const outDir = resolve(root, 'src/pages/DocReactDafn')
const outFile = resolve(outDir, 'manifest.generated.ts')

const parser = withCustomConfig(resolve(root, 'tsconfig.app.json'), {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
})

function formatType(prop) {
  const type = prop.type
  if (!type) return 'unknown'
  if (type.name === 'enum' && Array.isArray(type.value)) {
    return type.value.map(entry => entry.value).join(' | ')
  }
  return type.name
}

const componentNames = readdirSync(uiDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .sort()

const manifest = {}

for (const name of componentNames) {
  const componentFile = resolve(uiDir, name, `${name}.tsx`)
  if (!existsSync(componentFile)) continue

  const parsed = parser.parse(componentFile)
  const doc = parsed.find(entry => entry.displayName === name) ?? parsed[0]
  if (!doc) continue

  manifest[name] = {
    name,
    description: doc.description ?? '',
    props: Object.entries(doc.props ?? {})
      .map(([propName, prop]) => ({
        name: propName,
        type: formatType(prop),
        required: Boolean(prop.required),
        defaultValue: prop.defaultValue?.value ?? null,
        description: prop.description ?? ''
      }))
      .sort((a, b) => Number(b.required) - Number(a.required) || a.name.localeCompare(b.name))
  }
}

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const header = [
  '// Arquivo gerado automaticamente por scripts/generate-docs-manifest.mjs',
  '// Não edite manualmente — as alterações serão perdidas no próximo `npm run dev` ou `npm run build`.'
].join('\n')

const content = `${header}\nimport type { DocsManifest } from './types'\n\nexport const docsManifest: DocsManifest = ${JSON.stringify(manifest, null, 2)}\n`

writeFileSync(outFile, content, 'utf-8')

console.log(`[docs-manifest] Documentação gerada para ${Object.keys(manifest).length} componentes.`)
