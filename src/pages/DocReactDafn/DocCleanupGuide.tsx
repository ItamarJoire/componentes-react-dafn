import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { PageTitle } from '../../ui'
import styles from './DocCleanupGuide.module.scss'

export const DocCleanupGuide = () => (
  <div className={styles['guide']}>
    <PageTitle title="Como remover esta documentação" />

    <h1>Como remover esta documentação</h1>

    <div className={styles['warning']} role="note">
      <FontAwesomeIcon icon={faTriangleExclamation} className={styles['warning-icon']} style={{ width: 20, height: 20 }} />
      <p>
        Esta rota (<code>/doc-react-dafn</code>) existe só para consulta durante o desenvolvimento. Ela vem com todo
        projeto criado a partir deste template e <strong>deve ser removida antes de subir para produção</strong>.
      </p>
    </div>

    <section className={styles['section']}>
      <h2>1. Apagar arquivos e pastas</h2>
      <pre className={styles['code-block']}>
        <code>{`rm -rf src/pages/DocReactDafn
rm scripts/generate-docs-manifest.mjs`}</code>
      </pre>
      <p className={styles['hint']}>
        No PowerShell: <code>Remove-Item -Recurse -Force src/pages/DocReactDafn</code> e{' '}
        <code>Remove-Item scripts/generate-docs-manifest.mjs</code>.
      </p>
    </section>

    <section className={styles['section']}>
      <h2>2. Reverter os pontos onde a rota foi ligada ao projeto</h2>
      <ul className={styles['checklist']}>
        <li>
          <code>src/routes/paths.ts</code> — remova <code>docReactDafn</code>, <code>docReactDafnCleanup</code> e a
          função <code>getDocComponentPath</code>.
        </li>
        <li>
          <code>src/routes/index.ts</code> — remova a exportação de <code>getDocComponentPath</code>.
        </li>
        <li>
          <code>src/routes/AppRoutes.tsx</code> — remova o bloco{' '}
          <code>{'<Route path={paths.docReactDafn}>...</Route>'}</code> e os imports de{' '}
          <code>DocReactDafn</code>, <code>DocOverview</code>, <code>DocComponentDetail</code> e{' '}
          <code>DocCleanupGuide</code>.
        </li>
        <li>
          <code>src/pages/index.ts</code> — remova a linha que exporta a partir de{' '}
          <code>./DocReactDafn</code>.
        </li>
        <li>
          <code>src/pages/Home/Home.tsx</code> — remova o item de lista com o link para{' '}
          <code>paths.docReactDafn</code>.
        </li>
      </ul>
    </section>

    <section className={styles['section']}>
      <h2>3. Remover o script de geração e a dependência</h2>
      <ul className={styles['checklist']}>
        <li>
          <code>package.json</code> — remova os scripts <code>predev</code> e <code>prebuild</code>.
        </li>
        <li>
          Rode <code>npm uninstall react-docgen-typescript</code>.
        </li>
        <li>
          <code>.gitignore</code> — remova a linha de <code>src/pages/DocReactDafn/manifest.generated.ts</code>.
        </li>
      </ul>
    </section>
  </div>
)
