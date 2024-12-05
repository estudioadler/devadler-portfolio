"use client";
import Link from "next/link";
export const Footer = () => {
  // Obtém a data atual
  const currentDate = new Date();

  // Obtém o ano da data atual
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="w-full bg-background px-6 md:px-16 pt-12 pb-10 border-t border-primary-foreground">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 justify-between w-full">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xl font-semibold">Pensar. Desenhar.</p>
              <p className="text-xl font-semibold">Desenvolver.</p>
              <p className="text-xl text-muted-foreground">Repetir.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navegue
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link className="text-sm hover:underline" href="/">
                Home
              </Link>
              <Link className="text-sm hover:underline" href="/about">
                Sobre
              </Link>
              <Link className="text-sm hover:underline" href="/projects">
                Projetos
              </Link>
              <Link className="text-sm hover:underline" href="/skills">
                Skills
              </Link>
              <Link className="text-sm hover:underline" href="/certificates">
                Certificados
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Redes Sociais
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                className="text-sm hover:underline"
                href="https://www.instagram.com/adler__gabriel/"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                className="text-sm hover:underline"
                href="https://dribbble.com/estudioadler"
                target="_blank"
              >
                Dribbble
              </Link>
              <Link
                className="text-sm hover:underline"
                href="https://www.linkedin.com/in/adlergabriel/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                className="text-sm hover:underline"
                href="https://www.behance.net/estudioadler"
                target="_blank"
              >
                Behance
              </Link>
              <Link
                className="text-sm hover:underline"
                href="https://github.com/estudioadler"
                target="_blank"
              >
                Github
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-sm text-muted-foreground">
            {currentYear} - Adler Gabriel | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
