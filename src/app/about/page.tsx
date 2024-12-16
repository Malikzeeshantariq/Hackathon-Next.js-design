import Getintouch from '@/components/getintouch'
import Image from 'next/image'
import React from 'react'
import Productdetails from '@/components/productdetails'
import Featureblock from '@/components/featureblock'
import Footerend from '@/components/footerend'
import Footer from '@/components/footer'
import { CiCircleCheck } from 'react-icons/ci'
import Aboutusheader from '@/components/aboutusheader'
import { Headerproductlisting } from '@/components/headerproductlisting'

const Aboutpage = () => {
  return (
    <><div>
      <Headerproductlisting/>
      <Aboutusheader/>
      <div className='bg-white w-full h-[246px] flex justify-center items-center container mx-auto'>
        <h1 className='text-4xl w-[704px] h-[100px] text-normal'>A brand built on the love of craftmanship,
        quality and outstanding customer service</h1>
      </div>
      <Getintouch/>
    </div>
    <div className='w-full h-[603px] bg-white container mx-auto flex relative'>
            <Image src={"/Image.png"} width={720} height={603} alt="profile"></Image>
           <div className='w-[480px] h-[68px] absolute top-[72px] right-[270px]'>
            <p className='font-normal text-2xl mb-6'>Our service isn’t just personal, it’s actually
            hyper personally exquisite</p>
            <p className='font-extralight text-base mb-6'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
            <p className='font-extralight text-base'> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <button className='bg-gray-50 h-[56px] font-normal text-gray-500 px-2 py-1 mt-40'>Get in touch</button>
        </div>
        </div>
        <Featureblock/>
        {/* Join tje club section */}
        <div className="relative w-full h-[444px] bg-cover bg-center flex items-center container mx-auto"
        style={{ backgroundImage: `url('join the club.png')` }}>
         <div className=' text-white h-[364px] w-full flex flex-col justify-evenly items-center gap-3'>
        <h1 className='w-[571px] h-3 font-normal text-4xl pt-4'>Join the club and get the benefits</h1>
        <p className='w-[470px] h-[48px]'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
        <div className='inline-flex justify-between gap-3'>
        <CiCircleCheck className='bg-white text-black text-xl rounded-full' />
        <p>Exclusive offers</p>
        <CiCircleCheck className='bg-white text-black text-xl rounded-full'/>
        <p>Free events</p>
        <CiCircleCheck className='bg-white text-black text-xl rounded-full'/>
        <p>Large discounts</p>
        </div>
        <div>
       <input type='text' placeholder='your@email.com' className='w-[354px] h-[56px] px-4 pl-5'/>
      <button className='w-[118px] h-[56px] font-normal text-base text-white bg-[#2A254B]'>Sign up</button>
       </div>
       </div>  
        </div> 
        <Footer/>
        <Footerend/>            
        </>

  )
}

export default Aboutpage 
