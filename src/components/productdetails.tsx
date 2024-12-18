import React from 'react'
import Image from 'next/image'
const Productdetails = () => {
  return (
         <><div className='w-[390px] h-[1055px] md:h-[759px] flex-col md:w-full flex md:flex-row container mx-auto bg-white '>
            {/* first Section */}
            <div className='pt-0 md:pt-5 w-[390px] md:w-[721px] h-[380px] md:h-[759px]'>
          <Image src={"/Image Left.png"} width={721} height={759} alt="profile"></Image>
          </div>
          <div className='text-[#2A254B] flex flex-col justify-evenly items-start px-7 md:px-28 py-16 md:py-20'>
              <h1 className='text-2xl md:text-3xl'>The Dandy Chair</h1>
              <h1>£250</h1>
              <p className='py-3 md:py-0'> Product Description</p>
              <p className='font-light md:font-normal w-[342px] md:w-[522px] pr-6'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                  <div className='py-6 md:py-0 text-sm md:text-base'>
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                  </div>
                  <p className='mb-4 md:mb-0'>Dimensions</p>
              <div className='grid grid-cols-3 gap-10 leading-9'>
                  <div>
                      <p>Height</p>
                      <p>110cm</p>
                  </div>
                  <div>
                      <p>Width</p>
                      <p>75cm</p>
                  </div>
                  <div>
                      <p>Depth</p>
                      <p>50cm</p>
                  </div>
              </div>
              <div>
                <p className='my-4 md:hidden'>Quantitity</p>
                <div className='flex-col md:flex-row flex'>
                    <p className='mr-4 hidden md:block'>Amount</p>
                  <input type='text' placeholder='-    1    +' className='w-[300px] md:w-[209px] h-[56px] mr-36 bg-gray-50 text-center' />
                  <button className=' w-[300px] md:w-[143px] h-[56px] font-normal text-base text-white bg-[#2A254B]'>Add to cart</button>
                  </div>
              </div>
          </div>
      </div> {/* Section Section */}
      <div className='w-[390px] h-[811px] bg-white md:h-[761px] md:w-full container pr-6 md:mx-auto'>
                {/* first Section */}
              <h3 className=' text-[20px] pl-6 text-[#2A254B] md:text-[32px] leading-10 font-normal md:pl-20 mb-7 pt-16'>You might also like</h3>
                  {/* Second Section */}
              <div className=' flex flex-wrap md:flex justify-evenly items-center'>
                  <div className='w-[163px] md:w-[305px] h-[288px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                      <Image src={"/The Dandy chair.png"} width={305} height={375} alt="profile"></Image>
                      <h4 className='mt-6 font-normal'>The Dandy chair</h4>
                      <p className='mt-2'>£250</p>
                  </div >
                  <div className='w-[163px] md:w-[305px] h-[288px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                  <Image src={"/Rustic Vase Set.png"} width={305} height={375} alt="profile"></Image>
                  <h4 className='mt-6 font-normal'>Rustic Vase Set</h4>
                  <p className='mt-2'>£155</p>
                  </div>
                  <div className='w-[163px] md:w-[305px] h-[288px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                  <Image src={"/The Silky Vase.png"} width={305} height={375} alt="profile"></Image>
                  <h4 className='mt-6 font-normal'>The Silky Vase</h4>
                  <p className='mt-2'>£125</p>
                  </div>
                  <div className='w-[163px] md:w-[305px] h-[288px] md:h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                  <Image src={"/The Lucy Lamp.png"} width={305} height={375} alt="profile"></Image>
                  <h4 className='mt-6 font-normal'>The Lucy Lamp</h4>
                  <p className='mt-2'>£399</p>
                  </div>
                  </div>
                   {/* Third Section */}
                  <div className='flex justify-center items-center mt-8'>
                  <button className=' bg-[#F9F9F9] px-24 h-[56px] text-[#2A254B] md:px-8 py-4 font-normal text-[16px] rounded'>View collection</button>
              </div>
              </div>
          </>
             )
}

export default Productdetails
