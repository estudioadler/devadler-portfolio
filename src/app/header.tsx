"use client";
import Link from "next/link";
import { ButtonCta } from "../components/ButtonCta/ButtonCta";

import { ArrowRight01Icon } from "hugeicons-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Links } from "@/components/Links/Links";

export const Header = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Skills", link: "/skills" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center w-full h-20 md:h-32 pt-4 md:pt-0 px-4 md:px-8 container mx-auto">
      {/* logotipo */}
      <Link href={"/"} className="flex items-center gap-3">
        <Avatar className="shadow-sm border">
          <AvatarImage src="https://github.com/estudioadler.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="flex flex-col -space-y-0.5 text-neutral-900">
          <span className="">Adler Gabriel</span>
          <div className="flex items-center gap-1">
            <div className="size-1.5 bg-green-500 rounded-full"></div>
            <span className="text-[0.625rem] text-neutral-500 uppercase">
              Disponível.
            </span>
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        {/* botão de contato */}
        <div className="md:flex gap-2 items-center hidden">
          <Link
            href="https://api.whatsapp.com/send?phone=5531982688382"
            target="blank"
          >
            <ButtonCta
              iconLeft={<ArrowRight01Icon size={24} strokeWidth={1} />}
              variant={"black"}
              type={"button"}
            >Vamos conversar</ButtonCta>
          </Link>
        </div>

        {/* menu mobile */}
        <Sheet>
          <SheetTrigger>
            <div className=" bg-neutral-50 hover:bg-neutral-100 rounded-full p-5 grid grid-cols-2 gap-1 hover:transform hover:-rotate-90 transition ease-in-out duration-300">
              <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
              <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
              <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
              <span className="w-1 h-1 bg-neutral-900 rounded-full"></span>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="bg-neutral-900">
            <div className="flex flex-col items-start gap-12 py-12 px-4">
              <div className="w-full border-b border-neutral-700 pb-4">
                <span className=" text-[0.625rem] text-neutral-400 uppercase">
                  navegação
                </span>
              </div>
              {/* links do menu */}
              <ul className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>
                      <SheetClose className="flex gap-2">
                        <span className="text-5xl text-neutral-100 uppercase font-neue">
                          {item.label}
                        </span>
                      </SheetClose>
                    </Link>
                  </li>
                ))}
              </ul>
              {/*  */}
              <div className="w-full flex flex-col justify-between gap-8 text-neutral-100">
                <div className="w-full border-b border-neutral-700 pb-4">
                  <span className=" text-[0.625rem] text-neutral-400 uppercase">
                    Redes sociais
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <Links text="Github" url="https://github.com/estudioadler" />
                  <Links text="Linkedin" url="https://www.linkedin.com/in/adlergabriel" />
                  <Links text="Instagram" url="https://www.instagram.com/adler__gabriel/" />
                  <Links text="Behance" url="https://www.behance.net/estudioadler" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
