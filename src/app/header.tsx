// Updated Header component with fixed text positioning
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AtSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: "Sobre mim", link: "/about" },
    { label: "Projetos", link: "/projects" },
    { label: "Skills", link: "/skills" },
    { label: "Contato", link: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center w-full h-16 md:h-24 px-4 md:px-16 container mx-auto">
      {/* logotipo */}
      <div className="flex items-center justify-between w-full">
        <Link href={"/"} className="flex items-center gap-1">
          <AtSign size={14} />
          devadler
        </Link>
        <nav>
          <ul className="items-center gap-4 md:gap-8 hidden md:flex">
            {menuItems.map((menuItem) => (
              <li key={menuItem.label} className="relative">
                <Link
                  href={menuItem.link}
                  className="group relative text-sm flex flex-col items-center"
                >
                  <span className="relative inline-flex overflow-hidden h-5">
                    <div className="translate-y-0 skew-y-0 transition duration-300 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                      {menuItem.label}
                    </div>
                    <div className="absolute translate-y-[110%] skew-y-12 transition duration-300 group-hover:translate-y-0 group-hover:skew-y-0">
                      {menuItem.label}
                    </div>
                  </span>
                  {pathname === menuItem.link && (
                    <span className="absolute -bottom-2 w-1 h-1 bg-current rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* menu mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="link"
              className="underline-none md:hidden px-0 flex items-center uppercase text-xs"
            >
              <span className="sr-only">Abrir menu</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col items-start justify-between gap-12 pb-8 pt-16">
              {/* links do menu */}
              <ul className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>
                      <SheetClose className="flex gap-2">
                        <span className="text-4xl uppercase font-neue hover:italic">
                          {item.label}
                        </span>
                      </SheetClose>
                    </Link>
                  </li>
                ))}
              </ul>
              {/*  */}
              <div className="w-full flex flex-col gap-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Redes Sociais
                  </h3>
                  <nav className="flex flex-col space-y-3">
                    <Link className="text-sm hover:underline" href="#">
                      Instagram
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                      Dribbble
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                      LinkedIn
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                      Behance
                    </Link>
                    <Link className="text-sm hover:underline" href="#">
                      Github
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
