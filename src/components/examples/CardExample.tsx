import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faHeart, faImage, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../ui/Button'
import { Card } from '../../ui/Card'
import styles from './CardExample.module.scss'

const shortText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'

const longText =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

const overflowText =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.'

const cardFooter = (
  <>
    <Button variant="tertiary">Button</Button>
    <span className={styles['card-footer-actions']}>
      <FontAwesomeIcon icon={faHeart} />
      <FontAwesomeIcon icon={faShareNodes} />
    </span>
  </>
)

export const CardExample = () => {
  return (
    <div className={styles['card-example']}>
      <div className={styles['card-example-item']}>
        <Card
          avatar={<FontAwesomeIcon icon={faCircleUser} />}
          title="Título do Card"
          subtitle="Subtítulo do Card"
          media={<FontAwesomeIcon icon={faImage} />}
          footer={cardFooter}
        >
          <p>{shortText}</p>
        </Card>
      </div>

      <div className={styles['card-example-item']}>
        <Card
          avatar={<FontAwesomeIcon icon={faCircleUser} />}
          title="Título do Card"
          subtitle="Subtítulo do Card"
          media={<FontAwesomeIcon icon={faImage} />}
          footer={cardFooter}
        >
          <p>{longText}</p>
        </Card>
      </div>

      <div className={styles['card-example-item']}>
        <Card
          className={styles['card-example-fixed-height']}
          avatar={<FontAwesomeIcon icon={faCircleUser} />}
          title="Título do Card"
          subtitle="Subtítulo do Card"
          media={<FontAwesomeIcon icon={faImage} />}
          footer={cardFooter}
        >
          <p>{overflowText}</p>
        </Card>
      </div>
    </div>
  )
}
