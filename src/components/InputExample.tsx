import { useState } from 'react'
import { Input } from '../ui/Input'

export const InputExample = () => {
  const [nome, setNome] = useState('')
  const [usuario, setUsuario] = useState('')
  const [idade, setIdade] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [perfil, setPerfil] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [apelido, setApelido] = useState('Muito longo para caber')
  const [cargo, setCargo] = useState('Analista')

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        width: '100%'
      }}
    >
      <Input label="Nome" value={nome} onChange={setNome} placeholder="Digite seu nome" required />

      <Input label="Usuário" value={usuario} onChange={setUsuario} placeholder="Digite seu usuário" />

      <Input label="Idade" type="number" value={idade} onChange={setIdade} placeholder="0" />

      <Input label="Senha" type="password" value={senha} onChange={setSenha} placeholder="Digite sua senha" />

      <Input label="Telefone" type="tel" value={telefone} onChange={setTelefone} placeholder="(00) 00000-0000" />

      <Input label="CPF" type="cpf" value={cpf} onChange={setCpf} placeholder="000.000.000-00" />

      <Input
        label="Perfil"
        type="dropdown"
        value={perfil}
        onChange={setPerfil}
        options={[
          { label: 'Administrador', value: 'admin' },
          { label: 'Editor', value: 'editor' },
          { label: 'Visualizador', value: 'viewer' }
        ]}
      />

      <Input
        label="E-mail"
        value={email}
        onChange={setEmail}
        placeholder="nome@exemplo.gov.br"
        status={email && !email.includes('@') ? 'error' : 'default'}
        message={email && !email.includes('@') ? 'Informe um e-mail válido' : undefined}
        helperText="Usaremos apenas para contato."
      />

      <Input label="Apelido" value={apelido} onChange={setApelido} status="success" message="Apelido disponível." />

      <Input
        label="Cargo"
        value={cargo}
        onChange={setCargo}
        status="warning"
        message="Esse cargo será revisado pelo RH."
      />

      <Input label="Campo desabilitado" value="Não editável" onChange={() => {}} disabled />

      <Input
        label="Mensagem"
        type="textarea"
        value={mensagem}
        onChange={setMensagem}
        placeholder="Escreva sua mensagem"
        rows={4}
      />
    </div>
  )
}
