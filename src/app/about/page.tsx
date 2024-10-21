import { Contact } from "@/components/Contact/Contact";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col gap-6 py-10 px-4 md:px-8 container mx-auto">
        <h1 className="text-4xl md:text-6xl uppercase font-neue font-medium">
          Sobre mim
        </h1>
        <div className="flex flex-col gap-6 max-w-2xl text-neutral-500">
          <p>
            Olá, sou o <span className="font-bold">Adler</span>, atualmente
            cursando o 3º semestre de{" "}
            <span className="font-bold">Engenharia de Software</span> com foco
            no <span className="font-bold">Desenvolvimento Front-end</span>.
            Tenho me dedicado aos estudos e buscando aprimorar minhas{" "}
            <Link href="/skills" className="underline">
              Skills
            </Link>{" "}
            em uma variedade de ferramentas.
          </p>
          <p>
            Além disso, trago uma bagagem de 6 anos como
            <span className="font-bold"> Designer Gráfico Freelancer</span>.
            Durante esse período, pude criar uma ampla gama de materiais
            digitais e impressos, desenvolvendo uma visão criativa que
            complementa minha abordagem técnica na programação.
          </p>
          <p>
            Meu objetivo imediato é entrar no mercado de trabalho como
            estagiário, onde poderei aplicar minhas habilidades em desenvolvimento e design gráfico para contribuir com projetos desafiadores,
            enquanto continuo aprendendo e crescendo profissionalmente. Estou
            ansioso para colaborar com uma equipe dinâmica e dedicada, onde
            possa agregar valor e expandir meus conhecimentos na área.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
}
