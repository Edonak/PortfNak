"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "Nos actions",
    path: "/actions",
  },
  {
    name: "A Propos",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[2rem] text-secondary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className=" text-center text-2xl">
        <Link href="/">
          <Image
            src="/images/logo.png" 
            alt="Logo"
            width={100} 
            height={100} 
            priority 
          />
        </Link>
        </div>
        <nav  className="text-secondary flex flex-col justify-center items-center gap-8">
            {links.map((link, index)=> {
                return(
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}text-xl capitalize hover:text-accent transition-all`}>
                    {link.name}
                    </Link>
                )
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
