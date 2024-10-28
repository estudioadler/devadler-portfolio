import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface ILinkprops {
  icon?: React.ReactNode;
  url?: string;
  text?: string;
}

export const Links = ({ url = "", text }: ILinkprops) => {
  return (
    <Link href={url} target="_blank">
      <button className="group relative inline-flex items-center justify-center text-muted-foreground hover:text-primary dark:hover:text-neutral-50">
        <span className="text-sm">{text}</span>
        <div className="relative h-5 w-5 overflow-hidden">
          <div className="text-muted-foreground absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
            <ArrowUpRight strokeWidth={1} className="size-5" />
            <ArrowUpRight strokeWidth={1} className="size-5 -translate-x-4" />
          </div>
        </div>
      </button>
    </Link>
  );
};
