import heroSectionVideo from "@/../public/videos/hero-section-video.mp4";
import { Lato, Playfair_Display } from "next/font/google";

const PlayfairDisplayFont = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

const LatoFont = Lato({
  subsets: ["latin"],
  weight: "400",
});

function HeroSection() {
  return (
    <main id="hero-section" className="h-full w-full bg-[#f3f0e8] pb-1 md:pb-5">
      <div className="mx-5 mb-12 md:mx-15">
        <div className="relative h-175 overflow-hidden">
          {/* Video Background */}
          <video
            className="absolute h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroSectionVideo} type="video/mp4" />
          </video>

          {/* Black Overlay */}
          <div className="absolute inset-0 z-10 bg-black/35"></div>

          {/* Content Overlay */}
          <div
            className={`absolute inset-0 z-20 mt-38 flex flex-col items-center gap-4 px-6 text-center text-white sm:gap-6 md:gap-8 ${PlayfairDisplayFont.className}`}
          >
            <h1 className="mb-1 text-4xl font-semibold sm:text-5xl md:mb-4 md:text-6xl">
              Psychological Care for
            </h1>
            <h1 className="mb-1 text-4xl font-semibold sm:text-5xl md:mb-4 md:text-6xl">
              Change, Insight, and Well-Being
            </h1>
            <p className="mb-2 text-xs font-medium tracking-wide text-gray-100 sm:text-sm md:mb-8 md:text-xl">
              Offering individual psychotherapy for adults via telehealth in
              Michigan and{" "}
              <a
                href="https://psypact.gov/page/psypactmap"
                rel="research document"
                target="_blank"
                className="underline decoration-1 underline-offset-4"
              >
                most U.S. states
              </a>{" "}
              through PSYPACT participation.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform"
              rel="form"
              target="_blank"
              className={`rounded-[50%] border-none bg-[#94b0b0] px-6 py-5 text-xs tracking-[0.1rem] text-white transition duration-150 ease-in-out hover:bg-[#789597]/90 hover:opacity-80 sm:text-sm md:px-8 md:py-10 md:text-base ${LatoFont.className}`}
            >
              SCHEDULE A CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
