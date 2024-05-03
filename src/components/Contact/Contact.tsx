"use client";

import Link from "next/link";
import { Formulario } from "../Formulario/Formulario";
export const Contact = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-between py-8 md:py-20 px-4 md:px-8 container mx-auto">
      <div className="flex flex-col gap-8 max-w-md">
        <h1 className="text-4xl font-medium uppercase font-neue">
          Vamos começar um projeto juntos.
        </h1>
        <p className="text-neutral-500">
          Sinta-se à vontade para entrar em contato comigo. Estou sempre aberto
          a novas oportunidades, colaborações e conversas envolventes sobre o
          emocionante campo da tecnologia e além.
        </p>
        {/*social links*/}
        <div className="flex items-center gap-4">
          <Link href="https://github.com/estudioadler" target="blank">
            Github
          </Link>
          <Link href="https://www.linkedin.com/in/adlergabriel" target="blank">
            Linkedin
          </Link>
          <Link href="https://twitter.com/a_gabriel20" target="blank">
            Instagram
          </Link>
          <Link href="https://www.behance.net/estudioadler" target="blank">
            Behance
          </Link>
        </div>
      </div>

      {/*form*/}
      <Formulario />
    </section>
  );
};
