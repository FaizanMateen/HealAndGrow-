import seaShore from "@/../public/images/sea-shore.jpg";
import { Libre_Franklin } from "next/font/google";
import Image from "next/image";

const LibreFranklinFont = Libre_Franklin({
  subsets: ["latin"],
  weight: "200",
});

function QuoteSection() {
  return (
    <section className="relative h-[65vh] w-full">
      <Image
        src={seaShore} // Make sure this image is in /public
        alt="Ocean background"
        fill
        className="z-0 object-cover object-center"
        priority
      />

      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center bg-[#efebe1]/30 px-5 text-center ${LibreFranklinFont.className}`}
      >
        <p className="text-2xl leading-relaxed font-light sm:text-3xl md:text-4xl">
          ❝Therapy isn&apos;t about fixing you &mdash; it&apos;s about
          <br />
          helping you come home to yourself.❞
        </p>
        <p className="mt-6 text-lg font-light sm:text-xl">— Dr. Serena Blake</p>
      </div>
    </section>
  );
}

export default QuoteSection;
