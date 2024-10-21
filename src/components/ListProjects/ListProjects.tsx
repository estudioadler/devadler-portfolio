import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { TitleSection } from "../TitleSection/TitleSection";

export const ListProjects = () => {
  const projects = [
    {
      alt: "Analu Store",
      title: "Analu Store",
      imgUrl: "/analu.png",
      url: "https://github.com/estudioadler",
      description: "Loja de roupas e acessórios.",
    },
    {
      alt: "Speech Notes",
      title: "Speech Notes",
      imgUrl: "/speechnotes.png",
      url: "https://github.com/estudioadler",
      description: "Sistema de notas em áudio e textos.",
    },
    {
      alt: "Redesign - Colaborar Ead",
      title: "Redesign - Colaborar Ead",
      imgUrl: "/redesignColaborar.png",
      url: "https://github.com/estudioadler",
      description: "Plataforma de Ensino a Distância.",
    },
    {
      alt: "Essencial Enfermagem",
      title: "Essencial Enfermagem",
      imgUrl: "/essencial.png",
      url: "https://github.com/estudioadler/Essencial-Enfermagem---landing-page",
      description: "Landing page para empresa de cuidado ao idoso.",
    },
  ];

  return (
    <>
    <div className="p-4 md:p-8">
      <TitleSection>
        Projetos
      </TitleSection>
    </div>
    <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 container mx-auto">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="w-full rounded-2xl overflow-hidden cursor-pointer hover:shadow-md transition-all"
        >
          <CardHeader className="rounded-t-2xl border-b">
            <Image
              src={project.imgUrl}
              alt={project.alt}
              width={1000}
              height={800}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-4 flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={project.url}
                target="_blank"
                className="flex items-center text-xs text-muted-foreground hover:text-primary"
              >
                Ver Projeto
                <ArrowUpRight strokeWidth={1} className="ml-1 w-4 h-4 text-muted-foreground" />
              </Link>
              <Link
                href={project.url}
                target="_blank"
                className="flex items-center text-xs text-muted-foreground hover:text-primary"
              >
                Ver Código
                <ArrowUpRight strokeWidth={1} className="ml-1 w-4 h-4 text-muted-foreground" />
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
    </>
  );
};
