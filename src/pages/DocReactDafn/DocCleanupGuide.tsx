import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { PageTitle } from '../../ui'
import styles from './DocCleanupGuide.module.scss'

export const DocCleanupGuide = () => (
  <div className={styles['guide']}>
    <PageTitle title="Remover rota de documentação" />

    <h1>Remover rota de documentação</h1>

    <div className={styles['warning']} role="note">
      <FontAwesomeIcon icon={faTriangleExclamation} className={styles['warning-icon']} style={{ width: 20, height: 20 }} />
      <p>
        Esta rota (<code>/doc-react-dafn</code>) existe só para consulta durante o desenvolvimento. Ela vem com todo
        projeto criado a partir deste template e <strong>deve ser removida antes de subir para produção</strong>.
      </p>
    </div>

    <p>
      Rode o script abaixo na raiz do projeto. Ele apaga os arquivos da documentação, reverte os pontos onde a rota
      foi ligada ao projeto (rotas, páginas, <code>package.json</code> e <code>.gitignore</code>) e remove a
      dependência <code>react-docgen-typescript</code>.
    </p>

    <pre className={styles['codeBlock']}>
      <code>node scripts/remove-doc-react-dafn.mjs</code>
    </pre>

    <p>
      O script pede confirmação antes de alterar qualquer coisa. Para pular a confirmação, use a flag{' '}
      <code>--yes</code>:
    </p>

    <pre className={styles['codeBlock']}>
      <code>node scripts/remove-doc-react-dafn.mjs --yes</code>
    </pre>

    <p>
      Depois de rodar, revise o diff (<code>git diff</code>) antes de commitar.
    </p>
  </div>
)
