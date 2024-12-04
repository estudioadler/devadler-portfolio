import Link from "next/link";
import { ButtonCta } from "../ButtonCta/ButtonCta";

export const Hero = () => {
  return (
    <section className="flex flex-col py-24 md:py-40 px-4 md:px-36 container mx-auto">
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-neue uppercase font-medium">
          Olá, 
          <br className="block md:hidden"/>
          <span className="text-muted-foreground italic"> Eu sou o Adler</span>,
          Desenvolvedor Front-end.
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <ButtonCta>
            <Link href="whatsapp://send?phone=55319822688382">Entre em contato</Link>
          </ButtonCta>
          <ButtonCta variant="outline">
            <Link href="/#about">Download CV</Link>
          </ButtonCta>
        </div>
      </div>
    </section>
  );
};
