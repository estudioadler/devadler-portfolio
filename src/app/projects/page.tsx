import { Contact } from "@/components/Contact/Contact";
import { ListProjects } from "@/components/ListProjects/ListProjects";

export const metadata = {
  title: "Projetos - Adler Gabriel",
  description: "Projetos em desenvolvimento",
};

export default function ProjectPage() {
  return (
    <>
      <div className="flex flex-col gap-6 py-12 px-4 md:px-36 container mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium">Projetos</h1>
        <p className="max-w-2xl text-neutral-500">
          Nesta sessão, você encontrará uma seleção dos meus projetos de
          Desenvolvimento Front-end mais recentes. Cada projeto foi
          cuidadosamente escolhido para demonstrar minhas habilidades,
          experiência e capacidade de entregar soluções inovadoras e de alta
          qualidade.
        </p>
      </div>
      <ListProjects />
      <Contact />
    </>
  );
}
