import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

export function HeroSectionProfileComponent() {
  return (
    <section className="relative h-110 md:h-[500px] bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 border-b-2 border-green-300">
      {useIsMobile() ? (
        <div></div>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center opacity-10 mt-20">
          <Image src="/food.svg" alt="Food icon" width={1500} height={750} />
        </div>
      )}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 pb-6 drop-shadow-lg leading-tight">
          Min
          <br />
          <span className="text-emerald-200">profil</span>
        </h1>
        <h2 className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md leading-relaxed">
          Anpassa din MatMatch-upplevelse med personliga inställningar
        </h2>
        <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
          <span>🚫</span>
          <span>Allergier</span>
          <span>•</span>
          <span>❤️</span>
          <span>Preferenser</span>
          <span>•</span>
          <span>🔒</span>
          <span>Säkerhet</span>
        </div>
      </div>
    </section>
  );
}
