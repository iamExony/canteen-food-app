import React, { useEffect, useState } from 'react'
import {IoFastFood} from 'react-icons/io5'
import { categories } from '../utils/data'
import {motion} from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import RowContainer from './RowContainer'

const MenuContainer = () => {
    const [filter, setFilter] = useState("chicken");
    const [{foodItems}, dispatch] = useStateValue();

    useEffect(() => {}, [filter])

  return (
    <section className="w-full my-6" id='menu'>
        <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg 
          before:content before:w-16 before:h-1 
          before:-bottom-2 before:left-0 
          before:bg-orange-500 transition-all ease-in-out
          bg-gradient-tr from-orange-400 to-orange-500 duration-100 mr-auto">Our Hot Dishes</p>
        
        <div className="w-full flex items-center 
        justify-start lg:justify-center 
        gap-8 mt-6 overflow-x-scroll 
        scrollbar-none">
        {categories && categories.map(category => (
            <motion.div
            whileTap={{scale: 0.6}}
            key={category?.id}
            className={`group ${filter === category.urlName ? 'bg-cartNumBg' : 'bg-card'}  w-24 min-w-12 h-28 cursor-pointer 
            rounded-lg drop-shadow-xl hover:bg-cartNumBg flex flex-col gap-3 items-center 
            justify-center duration-150 transition-all ease-in-out my-4`}
            onClick={() => setFilter(category?.urlName)}>
                <div className={`w-10 h-10 ${filter === category.urlName ? 'bg-card'  : 'bg-cartNumBg'} 
                rounded-full group-hover:bg-white shadow-lg 
                flex items-center justify-center`}>
                    <IoFastFood className={`${filter === category.urlName ? 'text-textColor'  : 'text-white'} group-hover:text-textColor text-lg`} />
                </div>
                <p className={`text-sm ${filter === category.urlName ? 'text-white'  : 'text-textColor'} group-hover:text-white`}>{category?.name}</p>
            </motion.div>         
        ))} 

        </div>

        <div className="w-full">
           {/*  <RowContainer flag={false} data={foodItems?.filter((n) => n.category === "fruits")}/> */}
            <RowContainer flag={false} data={foodItems?.category}/>
        </div>
        </div>
    </section>
  )
}

export default MenuContainer