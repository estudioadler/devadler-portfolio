import { CardProject } from "../CardProject/CardProject";

interface IProject {
  alt: string;
  name: string;
  imgUrl: string[];
  url: string;
  description: string;
  status: string;
  techs: string[];
}

export const ListProjects = () => {
  const projects: IProject[] = [
    {
      alt: "Analu Store",
      name: "Analu Store",
      imgUrl: ["/analustore.png"],
      url: "https://github.com/estudioadler/analu-store",
      description: "Loja de roupas e acessórios.",
      status: "Em desenvolvimento",
      techs: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      alt: "Essencial Enfermagem",
      name: "Essencial Enfermagem",
      imgUrl: ["/essencial01.png"],
      url: "https://github.com/estudioadler/Essencial-Enfermagem---landing-page",
      description: "Landing page para empresa de cuidado ao idoso.",
      status: "Em desenvolvimento",
      techs: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <CardProject
          key={index}
          name={project.name}
          description={project.description}
          alt={project.alt}
          imgUrl={project.imgUrl}
          url={project.url}
          textButton="Ver projeto"
          techs={project.techs}
        />
      ))}
    </div>
  );
};
