import { useTheme } from "next-themes";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between z-1 relative">
      <div>
        <Image src="/people-trust-logo.svg" alt="" width={200} height={50} />
      </div>
      <div>
        <ul className="flex items-center gap-4 [&>*]:text-white">
          <li>Home</li>
          <li>How it Works</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="border-[2px] border-white w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
        >
          <Image
            src={"/dark.svg"}
            alt=""
            width={22}
            height={22}
            className=" dark:hidden"
          />
          <Image
            src={"/sun.svg"}
            alt=""
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
    </header>
  );
};

export default Header;
