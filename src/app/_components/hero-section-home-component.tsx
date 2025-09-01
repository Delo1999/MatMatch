import Image from "next/image";

export function HeroSectionHomeComponent() {
  return (
    <section className="relative h-110 md:h-[500px] border-b-2 border-green-300">
      <div className="absolute inset-0">
        <Image
          src="/image-1.jpeg"
          alt="Food background"
          fill
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Ingredienser in
          <br />
          <span>recept ut!</span>
        </h1>
        <h2 className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md leading-relaxed">
          Tomt i huvudet men fullt i kylen? MatMatch hjälper dig ta fram recept
          på det du redan har hemma.
        </h2>
      </div>
    </section>
  );
}
