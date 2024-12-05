
import { Certificates } from '@/components/Certificates/Certificates'
import { Contact } from '@/components/Contact/Contact'

export const metadata = {
  title: 'Certificados - Adler Gabriel',
  description: 'Meus certificados.',
}


export default function CertificatesPage() {
  return (
    <>
    <div className="flex flex-col gap-6 py-12 px-4 md:px-36 container mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium">Certificados</h1>
        <p className="max-w-2xl text-neutral-500">
          Nesta sessão, você encontrará uma seleção dos meus certificados de
          cursos e treinamentos que realizei ao longo da minha carreira. Cada
          certificado foi cuidadosamente escolhido para demonstrar minhas habilidades,
          experiência e capacidade de entregar soluções inovadoras e de alta
          qualidade.
        </p>
      </div>
    <Certificates />
    <Contact/>
    </>
  )
}
