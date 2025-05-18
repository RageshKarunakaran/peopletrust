import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import CenterSlider from "@/components/center-slider";
import Accordion from "@/components/accordian";
import { useEffect, useState } from "react";
import TeamSlider from "@/components/center-slider";
import ImageSlider from "@/components/slider";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <main className={` ${isDarkMode ? 'bg-white' : 'bg-[#000]'}  p-5`}>
        <div className={`${isDarkMode ? 'bg-skyblue' : 'bg-[#001432]'} rounded-xl  h-[719px] overflow-hidden relative`}>
          <div className={`${isDarkMode ? 'bg-darkblue' : 'bg-[linear-gradient(360deg,_#164997_0%,_rgba(14,54,115,0.8)_30.9%,_rgba(0,20,50,0.7)_58.4%)]'} absolute left-1/2 -translate-x-1/2 w-[130%] h-[996px] rounded-b-full z-0 top-[-363px]`}></div>
          <div className="p-4">
            {/* Header Start */}
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            {/* Header End */}
            <div>
              <span className="absolute top-[254px] left-[162px]">
                <Image
                  src="/3dicons-shield-dynamic-premium 1.svg"
                  alt=""
                  width={120}
                  height={120}
                />
              </span>
              <span className="absolute bottom-[172px] left-[320px]">
                <Image
                  src="/3dicons-file-text-dynamic-clay 1.svg"
                  alt=""
                  width={120}
                  height={120}
                />
              </span>
              <span className="absolute bottom-[107px] left-1/2 -translate-x-1/2">
                <Image
                  src="/3dicons-dollar-dynamic-color.svg"
                  alt=""
                  width={120}
                  height={120}
                />
              </span>
              <span className="absolute bottom-[172px] right-[320px]">
                <Image
                  src="/3dicons-wallet-dynamic-premium.svg"
                  alt=""
                  width={120}
                  height={120}
                />
              </span>
              <span className="absolute top-[254px] right-[162px]">
                <Image
                  src="/3dicons-dollar-dynamic-color.svg"
                  alt=""
                  width={120}
                  height={120}
                />
              </span>
            </div>
            {/* Hero Section Start */}
            <div className="flex flex-col items-center justify-center gap-4 z-1 relative top-[120px]">
              <h1 className="text-white text-[54px] font-bold leading-16 text-center">
                Decentralized Lending &<br /> Borrowing Made Simple
              </h1>
              <p className="text-[18px] font-normal text-white text-center">
                Earn interest by lending or secure instant loans with crypto
                <br /> collateral. Join the future of finance today.
              </p>
              <a
                href=""
                className="text-base font-medium text-darkblue bg-white rounded-[74px] py-4 px-7"
              >
                Get Started Now
              </a>
            </div>
            {/* Hero Section End */}
          </div>
           ̰
        </div>

        {/* Leading Section Start */}
        <section className="pt-20 pb-10">
          <h3 className="text-[28px] font-medium text-darkblue dark:text-white text-center mb-4">
            Lending
          </h3>
          <p className="text-xl font-light text-textgray text-center leading-normal">
            Put your idle assets to work and earn passive income. Our
            decentralized platform allows lenders
            <br /> to provide liquidity in exchange for competitive interest
            rates.{" "}
          </p>
          <ul className="flex items-center justify-center gap-[100px] mt-[87px] [&>*]:shadow-[35px_35px_100px_10px_#0000001A]">
            <li className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} h-[260px] px-4 rounded-[28px] flex flex-col justify-center items-center gap-4 w-[211px]`}>
              <Image src="/secure.gif" alt="" width={100} height={100} />
              <p className="text-base font-medium text-textgray text-center">
                Secure and smart contract-driven lending
              </p>
            </li>
            <li className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} h-[260px] px-4 rounded-[28px] flex flex-col justify-center items-center gap-4 w-[211px]`}>
              <Image src="/transparent.gif" alt="" width={100} height={100} />
              <p className="text-base font-medium text-textgray text-center">
                Transparent interest rates
              </p>
            </li>
            <li className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} h-[260px] px-4 rounded-[28px] flex flex-col justify-center items-center gap-4 w-[211px]`}>
              <Image src="/flexible.gif" alt="" width={100} height={100} />
              <p className="text-base font-medium text-textgray text-center">
                Flexible withdrawal options
              </p>
            </li>
          </ul>
        </section>
        {/* Leading Section End */}

        {/* How Lending Works Section Start */}
        <section className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} py-10 my-10 rounded-[28px] mx-[100px] relative overflow-hidden`}>
          <span className="absolute right-0 top-0">
            <Image
              src="/vector-2.svg"
              alt=""
              width={354}
              height={599}
              className="-rotate-0"
            />
          </span>
          <h3 className="text-[28px] font-medium text-darkblue text-center mb-4">
            How Lending Works
          </h3>
          <ul className="flex items-center justify-center gap-[50px] mt-[50px] px-[199px] flex-wrap">
            <li className="bg-gradient-to-b from-darkblue to-skyblue px-9 rounded-[20px] pb-[69px] relative overflow-hidden h-[219px] min-w-[375px]">
              <Image
                src="/card-mask.svg"
                alt=""
                width={300}
                height={200}
                className="w-full h-full absolute left-0 top-0 object-cover"
              />
              <div className="">
                <span className="absolute right-6 top-0">
                  <Image
                    src="/people-trust-brand.svg"
                    alt=""
                    width={107}
                    height={72}
                  />
                </span>
                <div className="mt-[70px] relative z-1">
                  <p className="text-base text-white font-normal opacity-55">
                    Step 1
                  </p>
                  <h5 className="text-xl text-white font-medium mt-5 mb-2">
                    Sign Up & Verify
                  </h5>
                  <p className="text-base text-white font-normal">
                    Complete KYC and connect your wallet.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-gradient-to-b from-darkblue to-skyblue px-9 rounded-[20px] pb-[69px] relative overflow-hidden h-[219px] min-w-[375px]">
              <Image
                src="/card-mask.svg"
                alt=""
                width={300}
                height={200}
                className="w-full h-full absolute left-0 top-0 object-cover"
              />
              <div className="">
                <span className="absolute right-6 top-0">
                  <Image
                    src="/people-trust-brand.svg"
                    alt=""
                    width={107}
                    height={72}
                  />
                </span>
                <div className="mt-[70px] relative z-1">
                  <p className="text-base text-white font-normal opacity-55">
                    Step 2
                  </p>
                  <h5 className="text-xl text-white font-medium mt-5 mb-2">
                    Lend USDT
                  </h5>
                  <p className="text-base text-white font-normal">
                    Complete KYC and connect your wallet.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-gradient-to-b from-darkblue to-skyblue px-9 rounded-[20px] pb-[69px] relative overflow-hidden h-[219px] min-w-[375px]">
              <Image
                src="/card-mask.svg"
                alt=""
                width={300}
                height={200}
                className="w-full h-full absolute left-0 top-0 object-cover"
              />
              <div className="">
                <span className="absolute right-6 top-0">
                  <Image
                    src="/people-trust-brand.svg"
                    alt=""
                    width={107}
                    height={72}
                  />
                </span>
                <div className="mt-[70px] relative z-1">
                  <p className="text-base text-white font-normal opacity-55">
                    Step 3
                  </p>
                  <h5 className="text-xl text-white font-medium mt-5 mb-2">
                    Earn
                  </h5>
                  <p className="text-base text-white font-normal">
                    Receive passive income as borrowers utilize
                    <br /> your funds.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <span className="absolute left-0 bottom-0">
            <Image
              src="/vector-2.svg"
              alt=""
              width={354}
              height={599}
              className="-rotate-180"
            />
          </span>
        </section>
        {/* How Lending Works Section End */}

        {/* Borrowing Section Start */}
        <section className="py-10">
          <h3 className="text-[28px] font-medium text-darkblue text-center mb-4">
            Borrowing
          </h3>
          <p className="text-xl font-light text-textgray text-center leading-normal">
            Access liquidity without selling your assets. Our borrowing
            solutions are designed for individuals
            <br /> who need quick and efficient financial support.{" "}
          </p>
          <ul className="flex items-center justify-center gap-[100px] mt-[87px] [&>*]:shadow-[35px_35px_100px_10px_#0000001A]">
            <li className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} h-[260px] px-4 rounded-[28px] flex flex-col justify-center items-center gap-4 w-[211px]`}>
              <Image src="/credit.gif" alt="" width={100} height={100} />
              <p className="text-base font-medium text-textgray text-center">
                No credit checks or intermediaries
              </p>
            </li>
            <li className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} h-[260px] px-4 rounded-[28px] flex flex-col justify-center items-center gap-4 w-[211px]`}>
              <Image src="/loan.gif" alt="" width={100} height={100} />
              <p className="text-base font-medium text-textgray text-center">
                Instant loan approvals
              </p>
            </li>
            <li className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} h-[260px] px-4 rounded-[28px] flex flex-col justify-center items-center gap-4 w-[211px]`}>
              <Image src="/rates.gif" alt="" width={100} height={100} />
              <p className="text-base font-medium text-textgray text-center">
                Competitive and dynamic interest rates
              </p>
            </li>
            <li className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} h-[260px] px-4 rounded-[28px] flex flex-col justify-center items-center gap-4 w-[211px]`}>
              <Image src="/asset-options.gif" alt="" width={100} height={100} />
              <p className="text-base font-medium text-textgray text-center">
                Collateralized borrowing with multiple asset options (ETH &
                WBTC)
              </p>
            </li>
          </ul>
        </section>
        {/* Borrowing Section End */}

        {/* How Lending Works Section Start */}
        <section className={`${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'} py-10 my-10 rounded-[28px] mx-[100px] relative overflow-hidden`}>
          <span className="absolute right-0 top-0">
            <Image
              src="/vector-2.svg"
              alt=""
              width={354}
              height={599}
              className="-rotate-0"
            />
          </span>
          <h3 className="text-[28px] font-medium text-darkblue text-center mb-4">
            How Borrowing Works
          </h3>
          <ul className="flex items-center justify-center gap-[50px] mt-[50px] px-[199px] flex-wrap">
            <li className="bg-gradient-to-b from-darkblue to-skyblue px-9 rounded-[20px] pb-[69px] relative overflow-hidden h-[219px] min-w-[375px]">
              <Image
                src="/card-mask.svg"
                alt=""
                width={300}
                height={200}
                className="w-full h-full absolute left-0 top-0 object-cover"
              />
              <div className="">
                <span className="absolute right-6 top-0">
                  <Image
                    src="/people-trust-brand.svg"
                    alt=""
                    width={107}
                    height={72}
                  />
                </span>
                <div className="mt-[70px] relative z-1">
                  <p className="text-base text-white font-normal opacity-55">
                    Step 1
                  </p>
                  <h5 className="text-xl text-white font-medium mt-5 mb-2">
                    Sign Up & Verify
                  </h5>
                  <p className="text-base text-white font-normal">
                    Complete KYC and connect your wallet.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-gradient-to-b from-darkblue to-skyblue px-9 rounded-[20px] pb-[69px] relative overflow-hidden h-[219px] min-w-[375px]">
              <Image
                src="/card-mask.svg"
                alt=""
                width={300}
                height={200}
                className="w-full h-full absolute left-0 top-0 object-cover"
              />
              <div className="">
                <span className="absolute right-6 top-0">
                  <Image
                    src="/people-trust-brand.svg"
                    alt=""
                    width={107}
                    height={72}
                  />
                </span>
                <div className="mt-[70px] relative z-1">
                  <p className="text-base text-white font-normal opacity-55">
                    Step 2
                  </p>
                  <h5 className="text-xl text-white font-medium mt-5 mb-2">
                    Lend USDT
                  </h5>
                  <p className="text-base text-white font-normal">
                    Complete KYC and connect your wallet.
                  </p>
                </div>
              </div>
            </li>
            <li className="bg-gradient-to-b from-darkblue to-skyblue px-9 rounded-[20px] pb-[69px] relative overflow-hidden h-[219px] min-w-[375px]">
              <Image
                src="/card-mask.svg"
                alt=""
                width={300}
                height={200}
                className="w-full h-full absolute left-0 top-0 object-cover"
              />
              <div className="">
                <span className="absolute right-6 top-0">
                  <Image
                    src="/people-trust-brand.svg"
                    alt=""
                    width={107}
                    height={72}
                  />
                </span>
                <div className="mt-[70px] relative z-1">
                  <p className="text-base text-white font-normal opacity-55">
                    Step 3
                  </p>
                  <h5 className="text-xl text-white font-medium mt-5 mb-2">
                    Earn
                  </h5>
                  <p className="text-base text-white font-normal">
                    Receive passive income as borrowers utilize
                    <br /> your funds.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <span className="absolute left-0 bottom-0">
            <Image
              src="/vector-2.svg"
              alt=""
              width={354}
              height={599}
              className="-rotate-180"
            />
          </span>
        </section>
        {/* How Lending Works Section End */}

        {/* Loan to value start */}
        <section className="py-[60px]">
          <div className="flex items-center justify-center gap-[30px] mb-[60px]">
            <div className="">
              <Image
                src="/loan-to-value.png"
                alt=""
                width={500}
                height={330}
                className=""
              />
            </div>
            <div className="w-[456px]">
              <h5 className="text-[28px] font-medium text-darkblue mb-5">
                Loan-to-Value (LTV)
              </h5>
              <p className="text-xl font-light text-textgray">
                The LTV ratio determines how much collateral a borrower needs to
                lock to receive the funds By requiring over-collateralization,
                the borrower is less likely to face immediate liquidation if the
                market moves against their collateral.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[30px] mb-[60px]">
            <div className="order-2">
              <Image
                src="/liquidity-threshold.png"
                alt=""
                width={500}
                height={330}
                className=""
              />
            </div>
            <div className="w-[456px]">
              <h5 className="text-[28px] font-medium text-darkblue mb-5">
                Liquidity Threshold
              </h5>
              <p className="text-xl font-light text-textgray">
                This is the point at which your collateral is subject to
                liquidation. If market fluctuations cause your LTV to exceed the
                liquidity threshold, part or all of your collateral may be
                liquidated to cover the outstanding loan.
              </p>
            </div>
          </div>
        </section>
        {/* Loan to value end */}

        {/* Roadmap start */}
        <section className="py-[60px] px-[156px]">
          <h3 className="text-[28px] font-medium text-darkblue text-center mb-4">
            Roadmap
          </h3>
          <div className="mt-20">
          <Image
              src="/roadmap-light.svg"
              alt=""
              width={1156}
              height={475}
              className="w-full h-auto"
            />
          </div>
        </section>
        {/* Roadmap end */}

        {/* Our Team start */}
        <section className="py-[60px]  relative">
          <h3 className="text-[28px] font-medium text-darkblue text-center mb-4">
            Our Team
          </h3>
          <div className="mt-20">
            {/* <TeamSlider/> */}
          </div>
        </section>
        {/* Our Team end */}

        {/* What Our Partners Say start */}
        <section className="py-[60px] mx-20">
          <h3 className="text-[28px] font-medium text-darkblue text-center mb-4">
            What Our Partners Say
          </h3>
          <div className="mt-20">
            <ImageSlider isDarkMode={isDarkMode}/>
          </div>
        </section>
        {/* What Our Partners Say end */}

        {/* Call to action start */}
        <section className="py-[60px] px-[156px]">
          <Image
            src="/Illustration.png"
            alt=""
            width={1158}
            height={557}
            className="w-full"
          />
        </section>
        {/* Call to action end */}

        {/* Asked and get answerd start */}
        <section className="py-[60px]">
          <h3 className="text-[28px] font-medium text-darkblue text-center mb-4">
            Asked and get answerd
          </h3>
          <Accordion />
        </section>
        {/* Asked and get answerd end */}
      </main>
      <footer className="bg-darkblue">
        <div className="pt-[73px] pb-[90px] px-[159px] flex items-end justify-between">
          <div className="">
            <h4 className="text-[42px] font-medium text-white leading-12 mb-4">
              Call users to the
              <br /> newsletter
            </h4>
            <p className="text-base font-medium text-white leading-6">
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry.{" "}
            </p>
          </div>
          <div>
            <div className="group w-72 md:w-80 lg:w-96">
              <div className="relative flex items-center">
                <input
                  id="10"
                  type="text"
                  placeholder="Enter Your E-Mail"
                  className="peer relative h-[50px] w-full rounded-full bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
                />
                <button className="absolute right-2 h-[34px] w-[109px] rounded-full bg-skyblue text-base font-medium text-white transition-all duration-200 ease-in-out group-focus-within:bg-blue-400 group-focus-within:hover:bg-blue-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-20">
          <div className="py-12 flex items-center justify-between">
            <div>
            <Image src="/people-trust-logo.svg" alt="" width={200} height={50} />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <a href="">
                  <Image src="/youtube.png" alt="" width={24} height={24} />
                </a>
                <a href="">
                  <Image src="/facebook.png" alt="" width={24} height={24} />
                </a>
                <a href="">
                  <Image src="/twitter.png" alt="" width={24} height={24} />
                </a>
                <a href="">
                  <Image src="/instagram.png" alt="" width={24} height={24} />
                </a>
                <a href="">
                  <Image src="/linkedin.png" alt="" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full bg-white h-[1px]"></div>
          <div className="py-12 flex items-center justify-between">
            <div>
              <p className="text-sm font-normal text-white">
                PeopleTrust @ 202X. All rights reserved.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <a className="text-base font-medium text-white" href="">
                  One
                </a>
                <a className="text-base font-medium text-white" href="">
                  Two
                </a>
                <a className="text-base font-medium text-white" href="">
                  Three
                </a>
                <a className="text-base font-medium text-white" href="">
                  Four
                </a>
                <a className="text-base font-medium text-white" href="">
                  Five
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
