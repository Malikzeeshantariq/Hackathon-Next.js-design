import React from 'react'
import Image from 'next/image'
const Productdetails = () => {
  return (
         <><div className='h-[759px] w-full flex flex-row container mx-auto bg-white '>
            {/* first Section */}
          <Image src={"/Image Left.png"} width={721} height={759} alt="profile"></Image>
          <div className='text-[#2A254B] flex flex-col justify-evenly items-start px-28 py-12'>
              <h1 className='text-3xl'>The Dandy Chair</h1>
              <h1>£250</h1>
              <p>Description</p>
              <p className='font-normal w-[522px]'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
              <ol>
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
              </ol>
              <p>Dimensions</p>
              <div className='inline-flex gap-16'>
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
                  <input type='text' placeholder='Amount     -    1    +' className='w-[209px] h-[56px] mr-36 bg-gray-50' />
                  <button className='w-[143px] h-[56px] font-normal text-base text-white bg-[#2A254B]'>Add to cart</button>
              </div>
          </div>
      </div> {/* Section Section */}
      <div className='bg-white h-[761px] w-full container mx-auto'>
              {/* first Section */}
              <h3 className=' text-[#2A254B] text-[32px] leading-10 font-normal pl-20 mb-7 pt-16'>You might also like</h3>
              {/* Second Section */}
              <div className='flex justify-evenly items-center'>
                  <div className='w-[305px] h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                      <Image src={"/The Dandy chair.png"} width={305} height={375} alt="profile"></Image>
                      <h4 className='mt-6 font-normal'>The Dandy chair</h4>
                      <p className='mt-2'>£250</p>
                  </div>
                  <div className='w-[305px] h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                      <Image src={"/Rustic Vase Set.png"} width={305} height={375} alt="profile"></Image>
                      <h4 className='mt-6 font-normal'>Rustic Vase Set</h4>
                      <p className='mt-2'>£155</p>
                  </div>
                  <div className='w-[305px] h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                      <Image src={"/The Silky Vase.png"} width={305} height={375} alt="profile"></Image>
                      <h4 className='mt-6 font-normal'>The Silky Vase</h4>
                      <p className='mt-2'>£125</p>
                  </div>
                  <div className='w-[305px] h-[482px] hover:scale-110 transition duration-1000 hover:shadow-md'>
                      <Image src={"/The Lucy Lamp.png"} width={305} height={375} alt="profile"></Image>
                      <h4 className='mt-6 font-normal'>The Lucy Lamp</h4>
                      <p className='mt-2'>£399</p>
                  </div>
              </div>
              {/* Third Section */}
              <div className='flex justify-center items-center mt-8'>
                  <button className=' bg-[#F9F9F9] h-[56px] text-[#2A254B] px-8 py-4 font-normal text-[16px] rounded'>View collection</button>
              </div>
          </div></>
             )
}

export default Productdetails
