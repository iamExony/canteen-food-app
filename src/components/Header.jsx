import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

import { MdShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
    const firebaseAuth = getAuth(app);

    const provider = new GoogleAuthProvider();
    
    const [{user, cartShow, cartItems}, dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false)
  
    const login = async () => {
        if(!user) {
            const {user : {refreshToken, providerData}}= await signInWithPopup(firebaseAuth, provider);

        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]))
    }else {
        setIsMenu(!isMenu);
    }
        }

    const logout = () => {
        setIsMenu(false)
        localStorage.clear();

        dispatch({
            type : actionType.SET_USER,
            user: null
        })
    }

    const showCart = () => {
        dispatch({
            type : actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        })
    }
  return (
    <header class='w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-primary '>
        {/*Desktop and  Tablet */}
        <div class='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={'/'} className= 'flex items-center gap-2'>
                <img src={Logo} className='w-10 object-cover' alt="logo" />
                <p className="text-headingColor text-xl font-bold">Unique Taste</p>
            </Link>

            <div className='flex items-center gap-8'>
            <motion.ul 
            initial={{opacity: 0, x:200}}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 0, x:200}}
            className='flex items-center gap-8'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
            </motion.ul>

            <div className='relative flex items-center' onClick={showCart}>
            <MdShoppingCart className='text-textColor text-2xl cursor-pointer'/>
            
            {cartItems && cartItems.length > 0 && (
                <div className="absolute -top-0.5 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">{cartItems.length}</p> 
                </div>
            )}
           </div>

            <div className='relative'>
            <motion.img
            whileTap={{scale: 0.6}} 
            src={user ? user.photoURL : Avatar} alt={user ? user.displayName : 'Avatar'} 
            className='w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
            onClick={login}/>

            {
                isMenu && (
                    <motion.div 
                    initial = {{opacity : 0, scale : 0.6}} 
                    animate = {{opacity : 1, scale : 1}} 
                    exit = {{opacity : 0, scale : 0.6}} 
                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                {
                    user && user.email === "ezeonyemaechianthony@gmail.com" && (
                    <Link to={'/createItem'}>
                        <p 
                        className= 'flex items-center gap-3 cursor-pointer transition-all duration-100  hover:bg-slate-100 ease-in-out text-textColor text-base p-4 py-2'>
                            New Item <MdAdd 
                              onClick = {() => setIsMenu(false)}/>
                            </p>
                    </Link>
                    )}
               {/*  <p>{user.displayName.slice(0, 5)}</p> */}
                
                <p 
                className= 'flex items-center gap-3 cursor-pointer transition-all duration-100  hover:bg-slate-100 ease-in-out text-textColor text-base p-4 py-2'
                onClick={logout}
                >Logout <MdLogout /></p>
            </motion.div>
                )
            }
            </div>
            </div>
        </div>

        {/* Mobile */}
        <div class='flex items-center justify-between md:hidden w-full h-full'>
            <div className='relative flex items-center' onClick={showCart}>
            <MdShoppingCart className='text-textColor text-2xl cursor-pointer'/>
            {cartItems && cartItems.length > 0 && (
                <div className="absolute -top-0.5 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">{cartItems.length}</p> 
                </div>
            )}
            </div>

        <Link to={'/'} className= 'flex items-center gap-2'>
                <img src={Logo} className='w-10 object-cover' alt="logo" />
                <p className="text-headingColor text-xl font-bold">Unique Taste</p>
            </Link>

        <div className='relative'>
            <motion.img
            whileTap={{scale: 0.6}} 
            src={user ? user.photoURL : Avatar} alt={user ? user.displayName : 'Avatar'} 
            className='w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
            onClick={login}/>

            {
                isMenu && (
                    <motion.div 
                    initial = {{opacity : 0, scale : 0.6}} 
                    animate = {{opacity : 1, scale : 1}} 
                    exit = {{opacity : 0, scale : 0.6}} 
                    className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                {
                    user && user.email === "ezeonyemaechianthony@gmail.com" && (
                    <Link to={'/createItem'}>
                        <p 
                        className= 'flex items-center gap-3 cursor-pointer transition-all duration-100  hover:bg-slate-100 ease-in-out text-textColor text-base p-4 py-2'>
                            New Item <MdAdd />
                            </p>
                    </Link>
                    )}
                     <ul 
                className='flex flex-col'>
                <li className='text-base hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer p-4 py-2' onClick = {() => setIsMenu(false)}>Home</li>
                <li className='text-base hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer p-4 py-2' onClick = {() => setIsMenu(false)}>Menu</li>
                <li className='text-base hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer p-4 py-2' onClick = {() => setIsMenu(false)}>About Us</li>
                <li className='text-base hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer p-4 py-2' onClick = {() => setIsMenu(false)}>Service</li>
            </ul>
               {/*  <p>{user.displayName.slice(0, 5)}</p> */}
                
                <p 
                className= 'flex items-center justify-center gap-3 cursor-pointer transition-all duration-100  hover:bg-slate-300 ease-in-out text-textColor text-base m-2 p-2 shadow-md rounded-md bg-gray-200'
                onClick={logout}
                >Logout <MdLogout /></p>
            </motion.div>
                )
            }
            </div>
            </div>
            
    </header>
  )
}

export default Header