import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-10">
      {/* Desktop Nav */}
      <div className="flex items-center justify-between max-lg:hidden">
        <div className="ml-6">
          <Image src="/people-trust-logo.svg" alt="Logo" width={200} height={50} />
        </div>

        <ul className="flex items-center gap-4 [&>*]:text-white">
          <li>Home</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border-[2px] border-white w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/dark.svg"
              alt="Dark mode"
              width={22}
              height={22}
              className="dark:hidden"
            />
            <Image
              src="/sun.svg"
              alt="Light mode"
              width={22}
              height={22}
              className="hidden dark:block"
            />
          </button>
          <button className="border-[2px] border-white py-[14px] px-7 rounded-[74px] text-base text-white font-medium cursor-pointer">
            Sign Up
          </button>
          <button className="border-[2px] border-white py-[14px] px-7 rounded-[74px] text-base text-white font-medium cursor-pointer">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex items-center justify-between w-full lg:hidden px-4 py-2">
        <Image src="/people-trust-logo.svg" alt="Logo" width={150} height={40} />

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border-[2px] border-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            <Image
              src="/dark.svg"
              alt="Dark"
              width={22}
              height={22}
              className="dark:hidden"
            />
            <Image
              src="/sun.svg"
              alt="Light"
              width={22}
              height={22}
              className="hidden dark:block"
            />
          </button>

          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <div className="border rounded-xl border-white w-10 h-10 flex flex-col items-center justify-center gap-1">
              <span className="w-6 bg-white h-[2px] block"></span>
              <span className="w-6 bg-white h-[2px] block"></span>
              <span className="w-6 bg-white h-[2px] block"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 text-white p-4">
          <ul className="flex flex-col gap-3">
            <li>Home</li>
            <li>How it Works</li>
            <li>Contact Us</li>
            <li>
              <button className="w-full py-2 border border-white rounded-md">Sign In</button>
            </li>
            <li>
              <button className="w-full py-2 border border-white rounded-md">Sign Up</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
