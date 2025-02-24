import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-4 xl:12 text-white bg-primary fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <h1 className="text-2xl "><span className="text-accent font-bold ">E</span>douard</h1>
        </Link>
        {/**Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        {/**Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
