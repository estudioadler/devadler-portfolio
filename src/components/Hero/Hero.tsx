import Link from "next/link";
import { ButtonCta } from "../ButtonCta/ButtonCta";

export const Hero = () => {
  return (
    <section className="flex flex-col py-24 md:py-40 px-4 md:px-36 container mx-auto">
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-medium">
          Olá, 
          <br className="block md:hidden"/>
          <span className="text-muted-foreground italic"> Eu sou o Adler</span>,
          Desenvolvedor Front-end
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <ButtonCta>
            <Link href="/#about">Entre em contato</Link>
          </ButtonCta>
        </div>
      </div>
    </section>
  );
};
