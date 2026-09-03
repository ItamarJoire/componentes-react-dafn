import { useState } from 'react'
import { Search } from '../../ui/Search'

export const SearchExample = () => {
  const [ultimaBusca, setUltimaBusca] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '360px' }}>
      <Search placeholder="O que você procura?" onSearch={setUltimaBusca} />
      {ultimaBusca && <p>Última busca: {ultimaBusca}</p>}
    </div>
  )
}
