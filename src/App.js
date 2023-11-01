import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, Header, MainContainer, MenuContainer, OrderSection } from './components'
import { AboutSection } from './components/'
import { AnimatePresence } from "framer-motion";
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunction';
import { actionType } from './context/reducer';

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
    <div class = 'w-screen flex flex-col bg-white '>
        <Header/>

        <main className='w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer/> }/>
            <Route path='/createItem' element={<CreateContainer/> }/>
            <Route path='/aboutUs' element={<AboutSection/> }/>
            <Route path='/orderPage' element={<MenuContainer/> }/>
          </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App