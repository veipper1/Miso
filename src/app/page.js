"use client";
import React from "react";
import Image from "next/image";
import useLenis from "./hooks/useLenis";
const Home = () => {
  useLenis();

  return (
    <div className="bg-[#EBE3D8] h-auto w-full text-black font-inter">
      <div className="fixed bottom-[50px] right-[20px] rotate-12  z-9999">
        <Image
          src="/Mobile_Soon.png"
          alt="Mascot saying that mobile version is coming soon"
          width={200}
          height={200}
        />
      </div>
      <div className="lg:w-[70%] flex mx-auto w-[100%] pt-[64px] pb-[64px] gap-[30px]">
        <div className="w-[10%] flex flex-col justify-between items-center">
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
        <div className="flex-1 flex flex-col gap-[40px]">
          <span className="font-inter inline-block text-[271px] leading-none -mt-[37px] font-extrabold align-text-top">
            MISO
          </span>
          <div className="relative">
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
              <div className="z-9999 text-white  bg-black text-[23px] text-center font-black py-[30px] ">
                味噌（ミソ）の“世界を食べ尽くす旅”は終わらない——ひと口（とモグモグ）ずつ、全部味見していくぞ。
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full">
            <div className="relative">
              <Image
                src="/Mascot_Eating_Ramen.png"
                alt="Mascot eating ramen"
                width={380}
                height={380}
              />
              <div className="absolute top-[20px] right-[-20%] z-10">
                <Image
                  src="/Orange_Box.png"
                  alt="Orange box with japanese text"
                  width={173}
                  height={81}
                />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Miso_Bowl.png"
                alt="Mascot bowl"
                width={380}
                height={380}
              />
              <div className="absolute bottom-[35px] left-[20px]">
                <Image
                  src="/Yellow_Box.png"
                  alt="Yellow box with japanese text"
                  width={173}
                  height={81}
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
                />
              </div>
              <div className="absolute bottom-[10px] right-[10px]">
                <Image
                  src="/Green_Oval.png"
                  alt="Green oval with japanese text"
                  width={173}
                  height={81}
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
          <div className="w-full bg-black text-white font-extrabold text-[35px] text-center py-[13px]">
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
          <div className="flex w-full gap-[68px]">
            <div className="flex flex-col justify-between w-full">
              <div className="flex gap-[45px]">
                <div className="bg-black whitespace-nowrap text-white font-extrabold text-[24px] text-center py-[13px] px-[25px]">
                  <span>Big Bags - Bigger Bellies</span>
                </div>
                <div className="w-full font-noto-sans font-extrabold text-[35px]">
                  <span>いただきます</span>
                </div>
              </div>
              <div className="w-full border flex justify-between items-center border-black">
                <div className="font-extrabold text-[24px] py-[13px] px-[25px]">
                  <span>BUY HERE:</span>
                </div>
                <div className="font-extrabold text-[30px] px-[25px]">
                  <span>MISO</span>
                </div>
              </div>
            </div>
            <div className="w-[33%] flex justify-end">
              <img
                src="/Footer_Image.png"
                alt="Brand label"
                className="h-[140px] w-[272]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
