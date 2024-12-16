import Email from '@/components/email'
import Featureblock from '@/components/featureblock'
import Footer from '@/components/footer'
import Footerend from '@/components/footerend'
import Header from '@/components/header'
import { Headerproductlisting, Nav,  } from '@/components/headerproductlisting'
import Productdetails from '@/components/productdetails'
import Topnav from '@/components/topnav'
import React from 'react'

const page = () => {
  return (
    <div>
      <Headerproductlisting/>
      <Topnav/>
      <Header/>
      <Productdetails/>
      <Featureblock/>
      <Email/>
      <Footer/>
      <Footerend/>
      </div>

  )
}

export default page
