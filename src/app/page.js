"use client";
import React from "react";
import Image from "next/image";
import useLenis from "./hooks/useLenis";
const Home = () => {
  useLenis();

  return (
    <div className="bg-[#EBE3D8] h-auto w-screen text-black font-inter">
      <div className="lg:w-[70%] w-screen flex mx-auto lg:pt-[64px] pb-[64px] gap-[30px]">
        {/* ---side bar--- */}
        <div className="w-[10%] hidden lg:flex lg:flex-col lg:justify-between lg:items-center">
          <div className="flex flex-col items-center gap-[30px] ">
            <span className="[writing-mode:vertical-rl] font-extrabold text-[105px] leading-[105px]">
              MISO
            </span>
            <div className="flex flex-row-reverse">
              <span className="[writing-mode:vertical-rl] text-[30px] leading-[35px]">
                Life’s a buffet, and Miso’s <br /> already halfway through it.
              </span>
            </div>
            <img
              src="/Green_Oval.png"
              alt="Mascot bathing in miso soup"
              className=" rotate-90 mt-[100px]"
            />
          </div>
          <div className="flex flex-col items-center gap-[24px] pb-[24px]">
            <span className="[writing-mode:vertical-rl] text-[23px] font-black">
              Keep It Chomping'
            </span>
            <div className="w-[54px] h-[54px] bg-black rounded-full" />
            <div className="w-[54px] h-[54px] bg-black rounded-full" />
          </div>
        </div>
        {/* --- side bar --- */}
        <div className="flex-1 flex flex-col gap-[40px]">
          {/* ---banner area --- */}
          <span className="lg:inline-block hidden text-[271px] leading-none -mt-[37px] font-extrabold align-text-top">
            MISO
          </span>
          <div className="lg:relative lg:block hidden">
            <div className="absolute top-[-304px] right-[175px] z-1">
              <Image
                src="/Mascot_Banner.png"
                alt="Mascot Banner"
                width={873}
                height={873}
              />
            </div>
            <div className="absolute top-[-204px] right-0 z-1">
              <Image
                src="/Dark_Orange_Eat_Box.png"
                alt="Orange box with the word eat"
                width={173}
                height={81}
              />
            </div>
            <div className="w-full h-auto my-[350px]"></div>
            <div className="flex justify-end z-9999">
              <div className="text-[75px] z-9999 font-black text-white bg-black rounded-tl-[110px] px-[50px] pt-[22px] -mb-[10px]">
                いただきます
              </div>
            </div>
            <div className="flex items-center justify-end  bg-black">
              <div className="z-9999 text-white  bg-black text-[23px] text-center font-black py-[30px] pr-[20px] ">
                味噌（ミソ）の“世界を食べ尽くす旅”は終わらない——ひと口（とモグモグ）ずつ、全部味見していくぞ。
              </div>
            </div>
          </div>
          {/* ---banner area --- */}
          <div className="lg:hidden relative">
            <div className="text-[130px] font-black text-center absolute top-[-30px] left-0 right-0">
              MISO
            </div>
            <div className="w-screen h-auto my-[450px]"></div>
            <div className="absolute top-[100px] left-[-20px]">
              <Image
                src="/Mascot_Only_Banner.png"
                alt="Mascot Banner"
                width={461}
                height={514}
              />
            </div>
            <div className="absolute bottom-[200px] right-[15px]">
              <Image
                src="/Mascot_Small.png"
                alt="Small mascot"
                width={142}
                height={102}
              />
            </div>
            <div className="absolute top-[130px] right-[10px]">
              <Image
                src="/Dark_Orange_Eat_Box.png"
                alt="Dark orange eat box"
                width={113}
                height={52}
              />
            </div>
            <div className="flex justify-end z-9999">
              <div className="text-[36px] z-9999 font-black text-white bg-black rounded-tl-[50px] pl-[15px] pr-[10px] ml-[15px] pt-[15px]">
                いただきます
              </div>
            </div>
            <div className="relative overflow-hidden w-screen bg-black">
              <div className="flex w-max will-change-transform animate-[marquee_15s_linear_infinite]">
                {[...Array(2)].map((_, i) => (
                  <span
                    key={i}
                    className="shrink-0 whitespace-nowrap px-4 py-[15px] text-white text-[23px] font-black"
                  >
                    味噌（ミソ）の“世界を食べ尽くす旅”は終わらない——ひと口（とモグモグ）ずつ、全部味見していくぞ。
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden flex mx-[20px] items-center justify-between mb-[-24px]">
            <div className="flex items-center gap-[12px]">
              <div className="text-[40px] leading-[50px] font-black">MISO</div>
              <div className="text-[12px] leading-[14px]">
                Life’s a buffet, and Miso’s <br /> already halfway through it.
              </div>
            </div>
            <Image
              src="/Green_Oval.png"
              alt="Green oval with japanese text"
              width={68}
              height={32}
              className="w-[68px] h-[32px]"
            />
          </div>

          <div className="flex lg:flex-row mx-[20px] lg:mx-0 flex-col items-center gap-[16px] lg:justify-between lg:w-full">
            <div className="relative">
              <Image
                src="/Mascot_Eating_Ramen.png"
                alt="Mascot eating ramen"
                width={380}
                height={380}
                className="w-[342px] h-[342px] lg:w-[380px] lg:h-[380px]"
              />
              <div className="absolute top-[20px] lf:right-[-20%] right-[15px] z-10">
                <Image
                  src="/Orange_Box.png"
                  alt="Orange box with japanese text"
                  width={173}
                  height={81}
                  className="w-[156px] h-[73px] lg:w-[173px] lg:h-[81px]"
                />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Miso_Bowl.png"
                alt="Mascot bowl"
                width={380}
                height={380}
                className="w-[342px] h-[342px] lg:w-[380px] lg:h-[380px]"
              />
              <div className="absolute bottom-[35px] left-[20px]">
                <Image
                  src="/Yellow_Box.png"
                  alt="Yellow box with japanese text"
                  width={173}
                  height={81}
                  className="w-[156px] h-[73px] lg:w-[173px] lg:h-[81px]"
                />
              </div>
            </div>
            <div className="relative">
              <div>
                <Image
                  src="/Tonkatsu_Bowl.png"
                  alt="Tonkatsu bowl"
                  width={380}
                  height={380}
                  className="w-[342px] h-[342px] lg:w-[380px] lg:h-[380px]"
                />
              </div>
              <div className="absolute bottom-[10px] right-[10px]">
                <Image
                  src="/Green_Oval.png"
                  alt="Green oval with japanese text"
                  width={173}
                  height={81}
                  className="w-[156px] h-[73px] lg:w-[173px] lg:h-[81px]"
                />
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <div className="relative">
              <img
                src="/Mascot_Catching_Ramen.png"
                alt="Mascot bathing in miso soup"
                className="w-full h-auto"
              />
              <div className="absolute top-[-30px] right-[290px]">
                <Image
                  src="/Blue_Box.png"
                  alt="Blue box with japanese text"
                  width={173}
                  height={81}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-full bg-black text-white font-extrabold lg:text-[35px] text-[30px] mx-[20px] lg:mx-0 text-center py-[13px]">
            <span>CA: COMING SOON.</span>
          </div>
          <div className="w-[100%]">
            <video
              src="/Miso_Video.mov"
              alt="Video of mascot bathing in miso soup"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-auto"
            />
          </div>
          {/* --- footer area --- */}
          <div className="flex lg:flex-row flex-col w-full gap-[68px]">
            <div className="flex flex-col justify-between w-full">
              <div className="flex lg:flex-row flex-col gap-[12px] lg:gap-[45px]">
                <div className="bg-black whitespace-nowrap text-white font-extrabold text-[24px] text-center py-[13px] px-[25px] mx-[20px] lg:mx-0">
                  <span>Big Bags - Bigger Bellies</span>
                </div>
                <div className="w-full font-noto-sans font-extrabold text-[35px] text-center lg:text-left pb-[20px] lg:pb-0">
                  <span>いただきます</span>
                </div>
              </div>
              <div className="lg:w-full border flex lg:flex-row gap-[40px] lg:gap-0 flex-col justify-between items-center border-black mx-[32px] lg:mx-0">
                <div className="font-extrabold text-[24px] pt-[7px] lg:py-[13px] px-[25px]">
                  <span>BUY HERE:</span>
                </div>
                <div className="font-extrabold text-[30px] px-[25px] pb-[7px]">
                  <span>MISO</span>
                </div>
              </div>
            </div>
            <div className="lg:w-[33%] flex justify-center lg:justify-end">
              <img
                src="/Footer_Image.png"
                alt="Brand label"
                className="h-[140px] w-[272]"
              />
            </div>
          </div>
          {/* ---footer area --- */}
          <div className="flex flex-col items-center lg:hidden gap-[24px]">
            <div className="text-[23px] font-black">Keep It Chomping'</div>
            <div className="flex gap-[24px]">
              <div className="w-[54px] h-[54px] bg-black rounded-full" />
              <div className="w-[54px] h-[54px] bg-black rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
