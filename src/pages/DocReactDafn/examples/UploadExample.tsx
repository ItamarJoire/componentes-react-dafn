import { Upload } from '../../../ui/Upload'

export const UploadExample = () => {
  return (
    <Upload
      label="Documentos"
      buttonText="Selecione o(s) arquivo(s)"
      helperText="Clique ou arraste os arquivos para cima do componente Upload"
      accept=".pdf,.jpg,.png"
      multiple
      onFilesSelected={files => console.log('Arquivos selecionados:', files)}
    />
  )
}
