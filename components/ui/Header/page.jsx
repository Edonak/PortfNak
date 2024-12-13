import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "../button";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-4 xl:12 text-black bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl "><span className="text-accent font-bold ">E</span>douard</h1>
        </Link>
        {/**Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/don">
            <Button>Faire un don</Button>
          </Link>
        </div>
        {/**Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
