import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table } from '../ui/Table'

interface User {
  id: string
  name: string
  email: string
  profile: 'Administrador' | 'Editor' | 'Visualizador'
}

const users: User[] = [
  { id: '1', name: 'Ana Souza', email: 'ana.souza@exemplo.gov.br', profile: 'Administrador' },
  { id: '2', name: 'Bruno Lima', email: 'bruno.lima@exemplo.gov.br', profile: 'Editor' },
  { id: '3', name: 'Carla Mendes', email: 'carla.mendes@exemplo.gov.br', profile: 'Visualizador' },
  { id: '4', name: 'Diego Alves', email: 'diego.alves@exemplo.gov.br', profile: 'Editor' },
  { id: '5', name: 'Elaine Costa', email: 'elaine.costa@exemplo.gov.br', profile: 'Visualizador' },
  { id: '6', name: 'Fábio Rocha', email: 'fabio.rocha@exemplo.gov.br', profile: 'Administrador' },
  { id: '7', name: 'Gabriela Dias', email: 'gabriela.dias@exemplo.gov.br', profile: 'Editor' },
  { id: '8', name: 'Hugo Martins', email: 'hugo.martins@exemplo.gov.br', profile: 'Visualizador' },
  { id: '9', name: 'Igor Barbosa', email: 'igor.barbosa@exemplo.gov.br', profile: 'Editor' },
  { id: '10', name: 'Juliana Ramos', email: 'juliana.ramos@exemplo.gov.br', profile: 'Administrador' },
  { id: '11', name: 'Kleber Nunes', email: 'kleber.nunes@exemplo.gov.br', profile: 'Visualizador' },
  { id: '12', name: 'Larissa Pinto', email: 'larissa.pinto@exemplo.gov.br', profile: 'Editor' },
  { id: '13', name: 'Marcelo Teixeira', email: 'marcelo.teixeira@exemplo.gov.br', profile: 'Visualizador' }
]

export const UsersTableExample = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [search, setSearch] = useState('')

  const filtrados = useMemo(() => users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())), [search])

  const paginaAtual = useMemo(() => {
    const init = (page - 1) * pageSize
    return filtrados.slice(init, init + pageSize)
  }, [filtrados, page, pageSize])

  return (
    <Table
      title="Usuários"
      columns={[
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'E-mail' },
        { key: 'profile', label: 'Perfil', align: 'center' }
      ]}
      data={paginaAtual}
      getRowId={row => row.id}
      rowActions={[
        {
          label: 'Visualizar',
          icon: <FontAwesomeIcon icon={faEye} style={{ width: 16, height: 16 }} />,
          onClick: row => console.log('Visualizar', row)
        },
        {
          label: 'Editar',
          icon: <FontAwesomeIcon icon={faPenToSquare} style={{ width: 16, height: 16 }} />,
          onClick: row => console.log('Editar', row)
        },
        {
          label: 'Excluir',
          icon: <FontAwesomeIcon icon={faTrash} style={{ width: 16, height: 16 }} />,
          onClick: row => console.log('Excluir', row)
        }
      ]}
      onSearch={query => {
        setSearch(query)
        setPage(1)
      }}
      pagination={{
        page,
        pageSize,
        totalItems: filtrados.length,
        onPageChange: setPage,
        onPageSizeChange: size => {
          setPageSize(size)
          setPage(1)
        }
      }}
    />
  )
}
