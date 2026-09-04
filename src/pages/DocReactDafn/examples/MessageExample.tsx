import { useState } from 'react'
import { Message } from '../../../ui/Message'
import type { MessageVariant } from '../../../ui/Message'
import styles from './MessageExample.module.scss'

const messages: { variant: MessageVariant; text: string }[] = [
  { variant: 'success', text: 'Seus dados foram alterados conforme preenchimento do formulário.' },
  { variant: 'warning', text: 'Em caso de dúvida, não compartilhe sua senha com terceiros.' },
  { variant: 'error', text: 'Desculpe, nenhum resultado encontrado. Veja se houve algum erro de digitação.' },
  { variant: 'info', text: 'Seus dados só serão salvos após o preenchimento.' }
]

export const MessageExample = () => {
  const [visible, setVisible] = useState(() => messages.map(message => message.variant))

  return (
    <div className={styles['message-example']}>
      {messages
        .filter(message => visible.includes(message.variant))
        .map(message => (
          <Message
            key={message.variant}
            variant={message.variant}
            onClose={() => setVisible(current => current.filter(variant => variant !== message.variant))}
          >
            {message.text}
          </Message>
        ))}
    </div>
  )
}
