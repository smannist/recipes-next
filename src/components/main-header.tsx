import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 right-0 bg-transparent z-10">
      <header className="flex items-center">
        <Link
          href="/"
          className="flex items-center no-underline text-[#c07755] font-bold text-4xl uppercase tracking-wider"
        >
          <Image
            className="w-20 h-20 relative drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] mr-10 ml-20 mt-5"
            src={logo}
            alt="Logo"
            priority
          />
          Recipes
        </Link>
      </header>
      <nav>
        <ul className="list-none m-0 p-0 flex gap-6 text-xl text-[#c07755] font-bold">
          <li>
            <Link
              href="/recipes"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Browse Recipes
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
