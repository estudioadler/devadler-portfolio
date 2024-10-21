
import { Contact } from '@/components/Contact/Contact'

export const metadata = {
  title: 'Contato - Adler Gabriel',
  description: 'Entre em contato.',
}


export default function ContactPage() {
  return (
    <>
    <h1 className="text-4xl md:text-6xl uppercase font-neue font-medium py-10 px-4 md:px-8 container mx-auto">
      Contato
    </h1>
    <Contact/>
    </>
  )
}
