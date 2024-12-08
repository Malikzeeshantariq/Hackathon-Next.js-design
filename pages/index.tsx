import type { NextPage } from "next";
import Image from "next/image";

const HomeV: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-xl text-dark-primary font-headings-h1">
      <div className="w-[1440px] relative bg-white h-[132px] overflow-hidden shrink-0 text-5xl text-gray-100">
        <div className="absolute top-[20px] left-[687px]">Avion</div>
        <div className="absolute top-[90px] left-[382px] flex flex-row items-start justify-start gap-11 text-base text-slategray-100 font-body-medium">
          <div className="relative">Plant pots</div>
          <div className="relative">Ceramics</div>
          <div className="relative">Tables</div>
          <div className="relative">Chairs</div>
          <div className="relative">Crockery</div>
          <div className="relative">Tableware</div>
          <div className="relative">Cutlery</div>
        </div>
        <div className="absolute w-[96.32%] top-[69.5px] right-[1.77%] left-[1.91%] border-firebrick border-t-[1px] border-solid box-border h-px" />
        <Image
          className="absolute top-[26px] left-[1396px] w-4 h-4 overflow-hidden"
          width={16}
          height={16}
          alt=""
          src="/useravatar.svg"
        />
        <Image
          className="absolute top-[26px] left-[1364px] w-4 h-4 overflow-hidden"
          width={16}
          height={16}
          alt=""
          src="/shoppingcart.svg"
        />
        <Image
          className="absolute top-[26px] left-[28px] w-4 h-4 overflow-hidden"
          width={16}
          height={16}
          alt=""
          src="/search.svg"
        />
      </div>
      <div className="w-[1440px] relative bg-white h-[704px] overflow-hidden shrink-0 text-lg text-white font-body-medium">
        <div className="absolute top-[60px] left-[80px] bg-dark-primary w-[1280px] h-[584px] overflow-hidden">
          <div className="absolute top-[443px] left-[60px] leading-[150%]">
            <p className="m-0">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand
            </p>
            <p className="m-0">{`with nice fonts, tasteful colors and a beautiful way to display things digitally `}</p>
            <p className="m-0">using modern web technologies.</p>
          </div>
          <Image
            className="absolute top-[0px] left-[760px] w-[520px] h-[584px] overflow-hidden object-cover"
            width={520}
            height={584}
            alt=""
            src="/right-image@2x.png"
          />
          <div className="absolute top-[60px] left-[60px] flex flex-col items-start justify-start gap-[41px] text-13xl font-headings-h1">
            <div className="w-[513px] relative leading-[140%] inline-block">
              The furniture brand for the future, with timeless designs
            </div>
            <div className="bg-whitesmoke overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-base font-body-medium">
              <div className="relative leading-[150%]">View collection</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] relative bg-white h-[355px]">
        <div className="absolute top-[60px] left-[529px] text-5xl leading-[140%]">
          What makes our brand different
        </div>
        <div className="absolute top-[145px] left-[86px] flex flex-col items-start justify-start gap-4">
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/delivery.svg"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">Next day as standard</div>
            <div className="w-[270px] relative text-base leading-[150%] font-body-medium inline-block">
              <p className="m-0">Order before 3pm and get your order</p>
              <p className="m-0">the next day as standard</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[145px] left-[1065px] flex flex-col items-start justify-start gap-[13px]">
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/sprout.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[11px]">
            <div className="w-[196px] relative leading-[140%] inline-block">
              Recycled packaging
            </div>
            <div className="w-[265px] relative text-base leading-[150%] font-body-medium inline-block">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </div>
          </div>
        </div>
        <div className="absolute top-[145px] left-[739px] flex flex-col items-start justify-start gap-4">
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/purchase.svg"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="w-[196px] relative leading-[140%] inline-block">
              Unbeatable prices
            </div>
            <div className="w-[235px] relative text-base leading-[150%] font-body-medium inline-block">
              For our materials and quality you won’t find better prices
              anywhere
            </div>
          </div>
        </div>
        <div className="absolute top-[145px] left-[415px] flex flex-col items-start justify-start gap-4">
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/checkmarkoutline.svg"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">Made by true artisans</div>
            <div className="w-[266px] relative text-base leading-[150%] font-body-medium inline-block">
              <p className="m-0">Handmade crafted goods made with</p>
              <p className="m-0">real passion and craftmanship</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] relative bg-white h-[761px]">
        <div className="absolute top-[80px] left-[80px] text-13xl text-darkslateblue">
          New ceramics
        </div>
        <div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
          <Image
            className="w-[305px] relative h-[375px] object-cover"
            width={305}
            height={375}
            alt=""
            src="/parent@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">The Dandy chair</div>
            <div className="relative text-lg leading-[150%] font-body-medium">
              £250
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_-_315px)] flex flex-col items-start justify-start gap-6">
          <Image
            className="w-[305px] relative h-[375px] object-cover"
            width={305}
            height={375}
            alt=""
            src="/parent1@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">Rustic Vase Set</div>
            <div className="relative text-lg leading-[150%] font-body-medium">
              £155
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
          <Image
            className="w-[305px] relative h-[375px] object-cover"
            width={305}
            height={375}
            alt=""
            src="/parent2@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">The Silky Vase</div>
            <div className="relative text-lg leading-[150%] font-body-medium">
              £125
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_228.5px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
          <Image
            className="w-[305px] relative h-[375px] object-cover"
            width={305}
            height={375}
            alt=""
            src="/parent3@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">The Lucy Lamp</div>
            <div className="relative text-lg leading-[150%] font-body-medium">
              £399
            </div>
          </div>
        </div>
        <div className="absolute top-[649px] left-[635px] bg-light-grey overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-base text-darkslateblue font-body-medium">
          <div className="relative leading-[150%]">View collection</div>
        </div>
      </div>
      <div className="w-[1440px] relative bg-white h-[744px]">
        <div className="absolute top-[64px] left-[80px] text-13xl leading-[140%] text-darkslateblue">
          Our popular products
        </div>
        <div className="absolute top-[calc(50%_-_236px)] left-[calc(50%_+_10px)] flex flex-col items-start justify-start gap-6">
          <Image
            className="w-[305px] relative h-[375px] object-cover"
            width={305}
            height={375}
            alt=""
            src="/parent@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">The Dandy chair</div>
            <div className="relative text-lg leading-[150%] font-body-medium">
              £250
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_236px)] left-[calc(50%_+_335px)] flex flex-col items-start justify-start gap-6">
          <Image
            className="w-[305px] relative h-[375px] object-cover"
            width={305}
            height={375}
            alt=""
            src="/parent4@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">The Dandy chair</div>
            <div className="relative text-lg leading-[150%] font-body-medium">
              £250
            </div>
          </div>
        </div>
        <div className="absolute top-[640px] left-[635px] bg-light-grey overflow-hidden flex flex-row items-center justify-center py-4 px-8 text-base text-darkslateblue font-body-medium">
          <div className="relative leading-[150%]">View collection</div>
        </div>
        <div className="absolute top-[calc(50%_-_238px)] left-[calc(50%_-_640px)] flex flex-col items-start justify-start gap-6">
          <Image
            className="w-[630px] relative h-[375px] overflow-hidden shrink-0 object-cover"
            width={630}
            height={375}
            alt=""
            src="/product-cardlarge@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[140%]">The Poplar suede sofa</div>
            <div className="relative text-lg leading-[150%] font-body-medium">
              £980
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] relative bg-light-grey h-[481px] text-center text-17xl">
        <div className="absolute top-[52px] left-[93px] bg-white w-[1273px] h-[364px] overflow-hidden">
          <div className="absolute top-[68px] left-[351px] flex flex-col items-center justify-start gap-4">
            <div className="w-[571px] relative leading-[140%] inline-block">
              Join the club and get the benefits
            </div>
            <div className="w-[470px] relative text-base leading-[150%] font-body-medium inline-block">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </div>
          </div>
          <div className="absolute top-[254px] left-[400px] w-[472px] flex flex-row items-start justify-start text-left text-base font-body-medium">
            <div className="self-stretch flex-1 relative bg-light-grey overflow-hidden">
              <div className="absolute top-[17px] left-[32px] opacity-[0.2]">
                your@email.com
              </div>
            </div>
            <div className="bg-dark-primary overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-white">
              <div className="relative leading-[150%]">Sign up</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] relative h-[603px] text-5xl text-darkslateblue">
        <div className="absolute top-[0px] left-[0px] bg-white w-[720px] h-[603px] overflow-hidden">
          <div className="absolute top-[72px] left-[84px] flex flex-col items-start justify-start gap-[25px]">
            <div className="relative leading-[140%]">
              <p className="m-0">
                From a studio in London to a global brand with
              </p>
              <p className="m-0">over 400 outlets</p>
            </div>
            <div className="w-[536px] relative text-base font-body-medium text-slategray-200 inline-block">
              <p className="m-0">{`When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. `}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
            </div>
          </div>
          <div className="absolute top-[493px] left-[84px] bg-light-grey overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-base font-body-medium">
            <div className="relative leading-[150%]">Get in touch</div>
          </div>
        </div>
        <Image
          className="absolute top-[0px] left-[720px] w-[720px] h-[603px] overflow-hidden object-cover"
          width={720}
          height={603}
          alt=""
          src="/image@2x.png"
        />
      </div>
      <div className="w-[1440px] relative bg-dark-primary h-[380px] overflow-hidden shrink-0 text-sm text-white font-body-medium">
        <div className="absolute top-[58px] left-[82px] flex flex-col items-start justify-start gap-3">
          <div className="relative text-base font-headings-h1">Menu</div>
          <div className="relative">New arrivals</div>
          <div className="relative">Best sellers</div>
          <div className="relative">Recently viewed</div>
          <div className="relative">Popular this week</div>
          <div className="relative">All products</div>
        </div>
        <div className="absolute top-[58px] left-[299px] flex flex-col items-start justify-start gap-3">
          <div className="relative text-base font-headings-h1">Categories</div>
          <div className="relative">Crockery</div>
          <div className="relative">Furniture</div>
          <div className="relative">Homeware</div>
          <div className="relative">Plant pots</div>
          <div className="relative">Chairs</div>
          <div className="relative">Crockery</div>
        </div>
        <div className="absolute top-[336px] left-[80px]">
          Copyright 2022 Avion LTD
        </div>
        <div className="absolute top-[58px] left-[516px] flex flex-col items-start justify-start gap-3">
          <div className="relative text-base font-headings-h1">Our company</div>
          <div className="relative">About us</div>
          <div className="relative">Vacancies</div>
          <div className="relative">Contact us</div>
          <div className="relative">Privacy</div>
          <div className="relative">Returns policy</div>
        </div>
        <div className="absolute top-[58px] left-[730px] text-base font-headings-h1">
          Join our mailing list
        </div>
        <div className="absolute top-[311.5px] left-[79.5px] border-primary border-t-[1px] border-solid box-border w-[1278px] h-px" />
        <div className="absolute top-[334px] left-[1093px] flex flex-row items-start justify-start gap-6">
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/logolinkedin.svg"
          />
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/logolinkedin.svg"
          />
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/logolinkedin.svg"
          />
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/logolinkedin.svg"
          />
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/logolinkedin.svg"
          />
          <Image
            className="w-6 relative h-6 overflow-hidden shrink-0"
            width={24}
            height={24}
            alt=""
            src="/logolinkedin.svg"
          />
        </div>
        <div className="absolute top-[94px] left-[730px] w-[627px] flex flex-row items-start justify-start text-base">
          <div className="self-stretch flex-1 relative bg-gray-200 overflow-hidden">
            <div className="absolute top-[17px] left-[32px]">
              your@email.com
            </div>
          </div>
          <div className="bg-white overflow-hidden flex flex-row items-start justify-start py-4 px-8 text-darkslateblue">
            <div className="relative leading-[150%]">Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeV;
