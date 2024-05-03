import React from "react";
import { Button } from "../ui/button";
import { Globe02Icon } from "hugeicons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const MultiLanguage = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-100 size-[52px]">
          <Globe02Icon size={20} strokeWidth={1} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Portugues</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Ingles</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
