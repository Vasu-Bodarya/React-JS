import React from 'react'
import Slider from '../Components/Slider-1/Slider1'
import Header from '../Components/Header/Header'
import Categories from '../Components/Categories/Categories'
import Popular from '../Components/Popular/Popular'
import Parts from '../Components/Parts/Parts'
import Delivery from '../Components/Delivery/Delivery'
import Slider2 from '../Components/Slider-2/Slider2'
import Product from '../Components/Product/Poduct'
import Testimonial from '../Components/Testimonial/Testimonial'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>

      <Header />
      <Slider />
      <Categories />
      <Popular />
      <Parts />
      <Delivery />
      <Slider2 />
      <Product />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
