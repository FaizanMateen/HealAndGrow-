import serenaBlakeImage from "@/../public/images/dr-serena-blake.jpg";
import { Libre_Franklin, Playfair_Display } from "next/font/google";
import Image from "next/image";

const PlayfairDisplayFont = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
});

const LibreFranklinFont = Libre_Franklin({
  subsets: ["latin"],
  weight: "300",
});

function AboutSection() {
  return (
    <>
      <section
        id="about-section"
        className="mx-5 mt-10 mb-16 flex h-full flex-col gap-10 md:mx-20 lg:mt-40 lg:mb-62 lg:flex-row lg:gap-15 xl:ml-60 xl:gap-30"
      >
        <h2
          className={`order-1 block lg:order-3 lg:hidden ${PlayfairDisplayFont.className} text-2xl font-bold text-[#7e7e6b] sm:text-3xl md:text-[32px]`}
        >
          About Dr. Serena Blake
        </h2>

        <article className="order-3 text-[#7e7e6b] lg:order-1">
          <h2
            className={`${PlayfairDisplayFont.className} mb-12 hidden text-2xl font-bold lg:block lg:text-4xl`}
          >
            About Dr. Serena Blake
          </h2>
          <div
            className={`flex flex-col gap-4 text-sm leading-6 md:text-base lg:text-lg lg:leading-8 xl:text-base ${LibreFranklinFont.className}`}
          >
            <p>
              In today&apos;s fast-paced world, finding a moment to prioritize
              your mental and emotional well-being can feel like an uphill
              battle. I believe therapy provides a vital sanctuary—a safe,
              supportive space where you can explore your inner world, uncover
              your strengths, and work toward meaningful change. My goal is to
              guide you in navigating life&apos;s challenges, whether it&apos;s
              managing anxiety, healing from trauma, or strengthening
              relationships, with tailored tools and compassionate care.
            </p>
            <p>
              As a licensed clinical psychologist (PsyD) based in Los Angeles,
              CA, I bring eight years of experience and over 500 client sessions
              to my practice at 1287 Maplewood Drive. My approach integrates
              evidence-based methods like cognitive-behavioral therapy (CBT) and
              mindfulness practices, infused with warmth, empathy, and a deep
              commitment to understanding your unique needs. Whether we meet
              in-person on Tuesdays and Thursdays (10 AM &mdash; 6 PM) or
              virtually via Zoom on Mondays, Wednesdays, and Fridays (1 PM
              &mdash; 5 PM), I strive to create a collaborative environment
              where you feel empowered to grow and thrive.
            </p>
            <p>
              My specialties include anxiety and stress management, relationship
              counseling, and trauma recovery. With a foundation in
              evidence-based techniques, I personalize each session to align
              with your goals, drawing on my extensive experience across diverse
              client needs. For appointments or inquiries, I welcome you to
              reach out at (323) 555-0192 or via email at
              serena@blakepsychology.com.
            </p>
          </div>
        </article>

        <figure className="relative order-2 mx-auto aspect-4/5 w-10/12 bg-gray-200 md:mt-2 lg:aspect-auto lg:h-[40rem] lg:w-[200rem]">
          <Image
            src={serenaBlakeImage}
            alt="Dr. Serena Blake"
            fill
            placeholder="blur"
            quality={80}
            className="object-cover"
          />
        </figure>
      </section>

      <div className="mx-auto mb-10 h-[2px] max-w-[95%] bg-[#7e7e6b] lg:mb-16 lg:max-w-[85rem]"></div>
    </>
  );
}

export default AboutSection;
