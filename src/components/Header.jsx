import logoImage from "@/../public/images/logo.png";
import Image from "next/image";

function Header() {
  return (
    <header id="header" className="bg-[#f3f0e8] py-5 md:py-10">
      <figure className="relative mx-5 aspect-4/1 w-48 sm:w-60 md:mx-15 md:w-80">
        <Image src={logoImage} alt="Brand logo" fill quality={80} />
      </figure>
    </header>
  );
}

export default Header;
