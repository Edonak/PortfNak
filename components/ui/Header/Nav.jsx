"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links =[
    {
        name:"Accueil",
        path:"/",
    },
    {
        name:"Nos actions",
        path:"/actions",
    },
    {
        name:"A Propos",
        path:"/about",
    },
    {
        name:"Contact",
        path:"/contact",
    }
]

export default function Nav() {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <nav className="flex gap-8">
        {links.map((link, index) =>{
            return(
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent" }`}>
                    {link.name}
                </Link>
            )
        })}


    </nav>
  )
}
