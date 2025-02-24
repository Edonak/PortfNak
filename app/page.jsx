export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-24 bg-primary ">
          <div>
            <span className="text-xl">Développeur Web & UI/UX Designer </span>
            <h1 className="h1 mb-6">
              Bonjour je suis <br />
              <span className="text-accent">Edouard Nakasila</span>
            </h1>
            <p className="max-w-[500px] mb-9 text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            similique iure quibusdam nobis rem eum, quae, fugit itaque excepturi
            sunt, vel magni veritatis saepe explicabo?
            </p>
          </div>
          <div>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </main>
  );
}
