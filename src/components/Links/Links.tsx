import Link from "next/link";

interface ILinkprops {
    children: string,
    icon?: React.ReactNode
    url?: string
}

export const Links = ({children, icon, url=""}:ILinkprops) => {
  return (
    <>
    <div className="relative">{icon}</div>
    <Link href={url} target="blank" className="absolute -top-0.5 underline-hover-effect">
      {children}
    </Link>
    </>
    
  );
};
