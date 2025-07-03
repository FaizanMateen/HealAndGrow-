import { faqs } from "@/assets/data/data-faqs";
import { Nunito_Sans } from "next/font/google";

const NunitoSansFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
});

function FaqSection() {
  return (
    <section
      id="faq-section"
      className="mx-5 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-auto xl:max-w-11/12"
    >
      <p
        className={`text-[#1E4246] ${NunitoSansFont.className} pt-16 pb-4 text-4xl font-extrabold`}
      >
        Frequently Asked Questions
      </p>

      <div className="pb-18">
        {faqs.map((item) => (
          <details
            key={item.id}
            className={`group border-b-1 py-6 pr-2 [&_summary::-webkit-details-marker]:hidden ${
              item.id === 1 ? "border-t-1" : ""
            } ${item.id === 6 ? "border-b-1" : ""}`}
          >
            <summary className="flex items-center justify-between gap-1.5 text-gray-900">
              <p
                className={`text-lg font-medium text-[#1E4246] ${NunitoSansFont.className} text-xl`}
              >
                {item.question}
              </p>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p
              className={`pt-4 text-[#1E4246] ${NunitoSansFont.className} text-[15px]`}
            >
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
