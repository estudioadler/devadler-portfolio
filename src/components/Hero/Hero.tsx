import Link from "next/link";
import { MyTechs } from "../MyTechs/MyTechs";
import { ButtonCta } from "../ButtonCta/ButtonCta";
import { ArrowRight01Icon } from "hugeicons-react";

export const Hero = () => {
  const techs = ["JavaScript", "TypeScript", "React.js", "Next.js", "MYSQL"];
  return (
    <section className="flex flex-col items-center py-12 px-4 md:px-8 container mx-auto">
      <h1 className="text-4xl md:text-6xl uppercase font-neue font-medium mb-6 text-center">
        Desenvolvedor Front<br />-end <span className="text-neutral-400">&</span>{" "}
        ui designer
      </h1>
      <div className="flex flex-col gap-6 max-w-xl items-center">
        <p className="text-center text-neutral-500">
          Olá, sou o <span className="font-bold">Adler</span>, atualmente estou
          cursando o 3º semestre de{" "}
          <span className="font-bold">Engenharia de Software</span> com foco no{" "}
          <span className="font-bold">Desenvolvimento Front-end</span>. Tenho me
          dedicado aos estudos e buscando aprimorar minhas {". . . . "}
          <Link href={"/about"} className="underline pl-2">
            saiba mais
          </Link>
        </p>
        <div className="flex items-center flex-wrap gap-2 text-sm">
          {techs.map((tech) => (
            <MyTechs key={tech} name={tech} />
          ))}
        </div>
        <div className="flex md:hidden">
          <Link
            href="https://api.whatsapp.com/send?phone=5531982688382"
            target="blank"
          >
            <ButtonCta
              iconLeft={<ArrowRight01Icon size={24} strokeWidth={1} />}
              text="Vamos conversar"
              variant={"black"}
              type={"button"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
