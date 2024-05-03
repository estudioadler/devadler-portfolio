import { CardProjects } from "../CardPojects/CardProjects"

export const ListProjects = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 md:px-8 container mx-auto'>
      <CardProjects
      alt='Analu Store'
      title='Analu Store'
      imgUrl='/analu.png'
      url='https://github.com/estudioadler'
      description='Loja de roupas e acessorios.'
      />
      <CardProjects
      alt='Speech Notes'
      title='Speech Notes'
      imgUrl='/speechnotes.png'
      url='https://github.com/estudioadler'
      description="Sistema de notas em audio e textos."
      />
      <CardProjects
      alt='Redesign - Colaborar Ead'
      title='Redesign - Colaborar Ead'
      imgUrl='/redesignColaborar.png'
      url='https://github.com/estudioadler'
      description='Plataforma de Ensino a Distância.'
      />
      <CardProjects
      alt=''
      title='Sistema de Agendamento.'
      imgUrl='/speechnotes.png'
      url='https://github.com/estudioadler'
      description="Sistema de cadastro de notas e anotações"
      />
    </section>
  )
}
