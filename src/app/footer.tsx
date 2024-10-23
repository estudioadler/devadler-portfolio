
import { CopyrightIcon } from "hugeicons-react";

export const Footer = () => {
  // Obtém a data atual
  const currentDate = new Date();

  // Obtém o ano da data atual
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="flex justify-between items-center w-full py-8 px-4 md:px-8 container mx-auto">
      <div className="flex gap-2 items-center text-sm text-neutral-500">
        <CopyrightIcon size={18} />
        {currentYear} - Adler Gabriel | All rights reserved.
      </div>
    </footer>
  );
};
 