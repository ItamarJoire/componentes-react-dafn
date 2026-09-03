# componentes-react-dafn

Base de componentes React + TypeScript + Vite para iniciar novos projetos.

## Como usar este projeto como base

Use o `npm create` para baixar uma cópia limpa deste repositório (sem o histórico de commits) para uma nova pasta:

```bash
npm create componentes-react-dafn@latest nome-do-novo-projeto
cd nome-do-novo-projeto
npm install
npm run dev
```

Depois disso, o novo diretório é um projeto independente: você pode inicializar seu próprio git (`git init`) e editar `package.json` (campo `name`) livremente.

## Como remover a rota de documentação

Toda cópia gerada a partir deste template vem com a rota `/doc-react-dafn`, usada só para consulta durante o desenvolvimento. Ela **deve ser removida antes de subir para produção**.

### 1. Apagar arquivos e pastas

```bash
rm -rf src/pages/DocReactDafn
rm scripts/generate-docs-manifest.mjs
```

No PowerShell:

```powershell
Remove-Item -Recurse -Force src/pages/DocReactDafn
Remove-Item scripts/generate-docs-manifest.mjs
```

### 2. Reverter os pontos onde a rota foi ligada ao projeto

- `src/routes/paths.ts` — remova `docReactDafn`, `docReactDafnCleanup` e a função `getDocComponentPath`.
- `src/routes/index.ts` — remova a exportação de `getDocComponentPath`.
- `src/routes/AppRoutes.tsx` — remova o bloco `<Route path={paths.docReactDafn}>...</Route>` e os imports de `DocReactDafn`, `DocOverview`, `DocComponentDetail` e `DocCleanupGuide`.
- `src/pages/index.ts` — remova a linha que exporta a partir de `./DocReactDafn`.
- `src/pages/Home/Home.tsx` — remova o item de lista com o link para `paths.docReactDafn`.

### 3. Remover o script de geração e a dependência

- `package.json` — remova os scripts `predev` e `prebuild`.
- Rode `npm uninstall react-docgen-typescript`.
- `.gitignore` — remova a linha de `src/pages/DocReactDafn/manifest.generated.ts`.
