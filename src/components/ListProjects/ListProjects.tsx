import { CardProject } from "../CardProject/CardProject";

interface IProject {
  alt: string;
  name: string;
  imgUrl: string[];
  url: string;
  description: string;
  status: string;
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
    },
    {
      alt: "Glicotrack",
      name: "Glicotrack",
      imgUrl: ["/glicotrack-bg.png"],
      url: "https://github.com/estudioadler/glicotrack",
      description: "Aplicativo para controle de glicemia.",
      status: "Em desenvolvimento",
    },
    {
      alt: "Speechnotes",
      name: "Speechnotes",
      imgUrl: ["/speechnotes.png"],
      url: "https://github.com/estudioadler/speechnotes",
      description: "Aplicativo de anotações de voz.",
      status: "Em desenvolvimento",
    },
    {
      alt: "Aline Barcelos",
      name: "Aline Barcelos",
      imgUrl: ["/alinebarcelos.png"],
      url: "https://github.com/estudioadler/Aline-Barcelos-Photographer-Portfolio",
      description: "Portfólio de fotografia.",
      status: "Em desenvolvimento",
    }
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
        />
      ))}
    </div>
  );
};
