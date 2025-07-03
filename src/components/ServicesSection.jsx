import { services } from "@/assets/data/data-services";
import { Libre_Franklin, Playfair_Display } from "next/font/google";
import Image from "next/image";

const PlayfairDisplayFont = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

const LibreFranklinFont = Libre_Franklin({
  subsets: ["latin"],
  weight: "300",
});

function ServicesSection() {
  return (
    <section id="services-section" className="h-full bg-[#f3f0e8]">
      <div className="mx-auto flex flex-col items-center justify-center px-10 pt-12">
        <h3
          className={`mb-8 text-center text-3xl leading-relaxed text-[#41413F] md:text-[38px] ${PlayfairDisplayFont.className}`}
        >
          Therapy can be a space where you invest in yourself—
          <br />
          One of the highest forms of self-care.
        </h3>
        <div className="text-center leading-6 md:leading-8">
          <p className={`${LibreFranklinFont.className} text-[#41413F]`}>
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
          </p>
          <p className={`${LibreFranklinFont.className} text-[#41413F]`}>
            {" "}
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don&apos;t have to face it
          </p>
          <p className={`${LibreFranklinFont.className} text-[#41413F]`}>
            alone. Therapy offers you the time and space to work toward wellness
            and peace.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-22 h-[0.5px] max-w-[85rem] bg-[#7e7e6b]"></div>

      <article className="mx-auto px-0 sm:px-10 xl:px-0">
        <h4
          className={`mt-30 text-center text-[38px] text-[#41413F] ${PlayfairDisplayFont.className}`}
        >
          Area of Focus
        </h4>

        <div className="mt-26 flex flex-col items-start justify-center gap-20 pb-20 md:px-12 xl:flex-row xl:gap-12">
          {services.map((item) => (
            <div className="flex flex-col items-center gap-12" key={item.id}>
              <figure className="relative flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-full sm:h-92 sm:w-92">
                <Image
                  src={item.pic}
                  alt="first service pic"
                  quality={80}
                  fill
                  placeholder="blur"
                  className="object-cover"
                />
              </figure>

              <div className="mx-4 flex flex-col items-center justify-center gap-8">
                <h5
                  className={`${PlayfairDisplayFont.className} text-center text-xl text-[#41413F] sm:max-w-85`}
                >
                  {item.heading}
                </h5>
                <p
                  className={`${LibreFranklinFont.className} text-center text-sm leading-7 text-[#41413F] lg:mx-5`}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="mx-auto flex flex-col items-center justify-center gap-8 bg-[#94B0B0] px-5 pt-14 pb-20 sm:px-10 xl:px-0">
        <h6 className={`${PlayfairDisplayFont.className} text-center text-3xl`}>
          Rates and Insurance
        </h6>

        <div
          className={`${LibreFranklinFont.className} text-center leading-10 sm:leading-12`}
        >
          <p>Individual Therapy Session &mdash; $200</p>
          <p>Couples Therapy Session &mdash; $240</p>
          <p className="mt-5">
            I accept private pay only and do not accept insurance directly.
            However, I provide a superbill that you can submit to your insurance
            provider for potential reimbursement.
          </p>
          <p className="mt-5">
            For out-of-network plans, I&apos;ve partnered with Mentaya using
            this tool to help you check your eligibility for reimbursement for
            my services.
          </p>
        </div>
      </article>
    </section>
  );
}

export default ServicesSection;
