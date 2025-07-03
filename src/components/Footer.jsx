import { Libre_Franklin, Playfair_Display } from "next/font/google";

const PlayfairDisplayFont = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

const LibreFranklinFont = Libre_Franklin({
  subsets: ["latin"],
  weight: "300",
});

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#efebe1] px-4 py-12 text-center text-base font-light text-gray-600"
    >
      <div className="space-y-4">
        {/* Name */}
        <h2
          className={`mb-12 font-serif text-3xl ${PlayfairDisplayFont.className}`}
        >
          Dr. Serena Blake, PsyD, Clinical Psychologist
        </h2>

        {/* Contact Info */}
        <div className="space-y-3">
          <p>
            <a
              href="mailto:serena@blakepsychology.com"
              className={`underline underline-offset-2 hover:text-gray-500 ${LibreFranklinFont.className}`}
            >
              serena@blakepsychology.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:3235550192"
              className="underline underline-offset-2 hover:text-gray-500"
            >
              (323) 555-0192
            </a>
          </p>
          <p className={`${LibreFranklinFont.className}`}>
            1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
        </div>

        {/* Office Hours */}
        <div
          className={`text-sm leading-relaxed ${LibreFranklinFont.className}`}
        >
          <p>In-person: Tue & Thu, 10 AM – 6 PM</p>
          <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM – 5 PM</p>
        </div>

        {/* Navigation Links */}
        <div className={`mb-20 space-x-4 ${LibreFranklinFont.className}`}>
          <a
            href="#"
            className="underline underline-offset-2 hover:text-gray-500"
          >
            Home
          </a>
          <a
            href="#"
            className="underline underline-offset-2 hover:text-gray-500"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="underline underline-offset-2 hover:text-gray-500"
          >
            Good Faith Estimate
          </a>
        </div>

        {/* Client Portal */}
        <div className="mb-18">
          <a
            href="https://www.sessionshealth.com/"
            target="_blank"
            className={`mt-4 block text-lg underline underline-offset-2 hover:text-gray-500 ${LibreFranklinFont.className}`}
          >
            Client Portal
          </a>
        </div>

        {/* Footer Note */}
        <p className={`mt-6 text-base ${LibreFranklinFont.className}`}>
          © 2025 Dr. Serena Blake, PsyD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
