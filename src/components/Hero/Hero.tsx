import Link from "next/link";
import { MyTechs } from "../MyTechs/MyTechs";

export const Hero = () => {
  const techs = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "tailwindcss",
    "+ mais",
  ];

  return (
    <section className="flex flex-col items-center py-10 px-4 md:px-8 container mx-auto">
      <h1 className="text-4xl md:text-6xl uppercase font-neue font-medium mb-6 lg:text-center">
        Desenvolvedor Front-end
      </h1>
      <div className="flex flex-col gap-6 max-w-xl items-center">
        <p className="lg:text-center text-neutral-500">
          Olá, sou o <span className="font-bold">Adler</span>, atualmente estou
          cursando o 5º semestre de{" "}
          <span className="font-bold">Engenharia de Software</span> com foco no{" "}
          <span className="font-bold">Desenvolvimento Front-end</span>. Tenho me
          dedicado aos estudos e buscando aprimorar minhas {". . "}
          <Link href={"/about"} className="underline underline-offset-4">
            ler mais
          </Link>
        </p>
        <div className="flex items-center md:justify-center flex-wrap gap-2 text-sm">
          {techs.map((tech) => (
            tech === "+ mais" ? (
              <Link href={"/skills"} key="mais">
                <MyTechs name={tech} />
              </Link>
            ) : (
              <MyTechs key={tech} name={tech} />
            )
          ))}
        </div>
      </div>
    </section>
  );
};