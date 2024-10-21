"use client";

import Link from "next/link";
import Formulario from "../Formulario/Formulario";
import { TitleSection } from "../TitleSection/TitleSection";
import { ArrowUp01, ArrowUpRight } from "lucide-react";
export const Contact = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-between py-10 md:py-20 px-4 md:px-8 container mx-auto">
      <div className="flex flex-col gap-8 max-w-md">
        <h2 className="font-neue uppercase text-2xl md:text-3xl font-medium">
        Vamos começar um projeto juntos.
        </h2>
        <p className="text-neutral-500">
          Sinta-se à vontade para entrar em contato comigo. Estou sempre aberto
          a novas oportunidades, colaborações e conversas envolventes sobre o
          emocionante campo da tecnologia e além.
        </p>
        {/*social links*/}
        <div className="flex-col flex md:flex-row gap-4">
          <Link className="flex items-center" href="https://github.com/estudioadler" target="blank">
            Github
            <ArrowUpRight strokeWidth={1} className="size-5"  />
          </Link>
          <Link className="flex items-center" href="https://www.linkedin.com/in/adlergabriel" target="blank">
            Linkedin
            <ArrowUpRight strokeWidth={1} className="size-5" />
          </Link>
          <Link className="flex items-center" href="https://www.instagram.com/adler__gabriel/" target="blank">
            Instagram
            <ArrowUpRight strokeWidth={1} className="size-5" />
          </Link>
          <Link className="flex items-center" href="https://www.behance.net/estudioadler" target="blank">
            Behance
            <ArrowUpRight strokeWidth={1} className="size-5" />
          </Link>
        </div>
      </div>

      {/*form*/}
      <Formulario />
    </section>
  );
};
