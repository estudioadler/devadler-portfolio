import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center pt-20">
      <h2 className="text-4xl font-neue">404</h2>
      <p>Página não encontrada</p>
      <Link href="/" className='underline'>Voltar para a página inicial</Link>
    </div>
  )
}