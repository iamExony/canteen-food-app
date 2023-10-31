import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const RowContainer = ({ flag, data, scrollValue}) => {
  const [items, setItems] = useState([]);
    const [{cartItems}, dispatch] = useStateValue();

    const addtocart = () => {
 //       console.log(item);
        dispatch({
            type : actionType.SET_CARTITEMS,
            cartItems : items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items)) 
    }
    const rowContainerRef = useRef();
    
    useEffect(() => {
        rowContainerRef.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    useEffect(() => {
        addtocart();
    }, [items])
  return (

    <div
    ref={rowContainerRef} 
    className={`w-full my-12 flex items-center gap-3 ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
    }`}>
        {data && data.length > 0 ? data.map(item => (
            <div 
            key={item?.id} 
            className="w-300 h-[250px] min-w-[300px] md:min-w-[340px] md:w-340 my-6 
            bg-cardOverlay p-2 backdrop-blur-lg rounded-lg hover:drop-shadow-lg
            flex flex-col items-center">
            <div className="w-full flex items-center justify-between">
                <motion.div
                whileHover={{ scale: 1.2}} 
                className='w-40 -mt-8 drop-shadow-2xl'>
                <img
                src={item?.imageURL}
                alt="chicken-test"
                className='w-full h-full object-contain' 
                />     
                </motion.div>


                <motion.div
                whileTap={{scale: 0.75}} 
                className="w-8 h-8 flex items-center justify-center relative rounded-full 
                bg-red-500 cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}>
                <MdShoppingCart className='text-white'/>
                </motion.div>
            </div>

            <div className="w-full flex-col flex gap-4 items-end justify-end">
            <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
            </p>
            <p className="mt-1 text-sm text-gray-500">{`${item?.calories} Calories`}</p>
            <div className="flex items-center gap-8">
            <p className='text-md text-headingColor font-semibold'><span className='text-xs text-red-600' style={{textDecoration: "line-through double"}}>N</span>{item?.price}</p>
            </div>
            </div>
        </div>
        )):(<div className='w-full flex flex-col items-center justify-center'>
            <img src={NotFound} alt='Not found image' className='h-340'/>
            <p className='text-xl text-headingColor font-semibold'>Items Not Available</p>
        </div>) }
    </div>
  )
}

export default RowContainer