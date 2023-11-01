import React from 'react'
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png"
import { heroData } from '../utils/data';
import HomeSection from './home/HomeSection';


const HomeContainer = () => {

  return (
    <>
    <section className="md:grid-cols-2 gap-2 w-full" id='home'>
      <HomeSection/>      

        {/* <p className="text-base text-textColor  text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nisi facere vitae. Qui, veritatis! Officiis laboriosam itaque placeat, iusto inventore facilis, fugit sunt blanditiis, deleniti voluptates veritatis ad quae quaerat.
        </p>

        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-out duration-100">Order Now</button>
      </div>
      <div className="flex-1 flex items-center py-2 relative ">
        <img src={HeroBg} alt="Hero" className='ml-auto h-420  w-full lg:h-650 lg:w-auto '/>
      
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 lg:px-16 flex-wrap">
        {heroData && heroData.map(n =>(
          <div key={n.id} className="lg:w-190  min-w-[190px] drop-shadow-lg p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col">
          <img src={n.imageSrc} alt="I1" className='w-20 lg:w-40 -mt-11 lg:-mt-20'/>
          
          <p className='text-base lg:text-xl text-textColor font-semibold mt-2 lg:mt-4'>{n.name}</p>

          <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp}</p>

          <p className='text-md text-headingColor font-semibold'><span className='text-xs text-red-600' style={{textDecoration: "line-through double"}}>N</span>{n.price}</p>
      
       </div>
        ))}
        </div>
      </div> */} 
    </section>
    </>
  )
}

export default HomeContainer