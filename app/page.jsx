import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-24 bg-primary mt-16">
          <div>
            <span className="text-xl">Développeur Web & UI/UX Designer </span>
            <h1 className="h1 mb-6">
              Hello !! je suis <br />
              <span className="text-accent">Edouard Nakasila</span>
            </h1>
            <p className="max-w-[500px] mb-9 text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur similique iure quibusdam nobis rem eum, quae, fugit
              itaque excepturi sunt, vel magni veritatis saepe explicabo?
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="flex items-center gap-2 border border-white rounded-2xl bg-transparent hover:border-transparent transition-colors">
                <span>Télécharger CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </main>
  );
}
