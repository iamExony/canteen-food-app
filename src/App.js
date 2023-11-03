import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ContactSection, CreateContainer, Header, HomeSection, MainContainer } from './components'
import { AnimatePresence } from "framer-motion";
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunction';
import { actionType } from './context/reducer';
import AboutSection from './components/about/AboutSection';

const App = () => {
 const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
    <div class = 'w-screen h-auto flex flex-col bg-primary'>
        <Header/>

        <main className='mt-14 md:mt-20 px-4 py-4 md:px-16 w-full'>
          <Routes>
             <Route path='/*' element={<HomeSection/> }/>
            <Route path='/createItem' element={<CreateContainer/> }/>
            <Route path='/orderItem' element={<MainContainer/> }/>
            <Route path='/aboutUs' element={<AboutSection/> }/>
            <Route path='/contactUs' element={<ContactSection/> }/>
          </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App