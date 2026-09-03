import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { PageTitle } from '../../ui'
import styles from './DocCleanupGuide.module.scss'

const TEMPLATE_REPO_URL = 'https://git.iti.gov.br/itamar.nascimento/componentes-react-dafn'

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
      O passo a passo para remover está no README do repositório template:{' '}
      <a href={TEMPLATE_REPO_URL} target="_blank" rel="noopener noreferrer">
        {TEMPLATE_REPO_URL}
      </a>
    </p>
  </div>
)
