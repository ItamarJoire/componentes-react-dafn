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

Rode o script abaixo na raiz do projeto:

```bash
node scripts/remove-doc-react-dafn.mjs
```

Ele apaga `src/pages/DocReactDafn`, reverte os pontos onde a rota foi ligada ao projeto (`src/routes/paths.ts`, `src/routes/index.ts`, `src/routes/AppRoutes.tsx`, `src/pages/index.ts` e `src/pages/Home/Home.tsx`), remove os scripts `predev`/`prebuild` e a dependência `react-docgen-typescript` do `package.json`, limpa a entrada correspondente do `.gitignore` e, por fim, apaga a própria pasta `scripts` (incluindo este script).

O script sempre pede confirmação antes de alterar qualquer coisa.
