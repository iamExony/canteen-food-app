import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { MdAttachMoney, MdCloudUpload, MdDelete, MdFastfood, MdFoodBank } from 'react-icons/md';
import { categories } from '../utils/data';
import Loader from './Loader';
import { deleteObject, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase.config';
import { saveItem } from '../utils/firebaseFunction';
import { getAllFoodItems } from '../utils/firebaseFunction';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';



const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState("Something is Wrong");
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);
  const [{foodItems}, dispatch] = useStateValue();

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on('state_changed', (snapshot) =>{
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, (error) => {
      console.log(error);
      setFields(true);
      setMsg('Erro while uploading : Try Again 🥰');
      setAlertStatus('danger');
      setTimeout(() => {
      setFields(false);
      setIsLoading(false)
      }, 4000);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setImageAsset(downloadURL);
        setIsLoading(false);
        setFields(true);
        setMsg('Image uploaded successfully 😊');
        setAlertStatus('success')
        setTimeout(() => {
          setFields(false)
        },4000)
      })
    })
  };
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image is successfully deleted 😎")
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      },4000);
    })
  };
  const saveDetails = () => {
    setIsLoading(true);
    try{
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty 🥰");
        setAlertStatus('danger');
        setTimeout(() => {
        setFields(false);
        setIsLoading(false)
        }, 4000);
      } else {
        const data = {
        id : `${Date.now()}`,
        "title" : title,
        imageURL : imageAsset,
        category : category,
        calories : calories,
        qty : 1,
        price : price
        }
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded Successfully ☺");
        clearData();
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        },4000);
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg('Erro while uploading : Try Again 🥰');
      setAlertStatus('danger');
      setTimeout(() => {
      setFields(false);
      setIsLoading(false)
      }, 4000);
    }
    fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  }

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };

  return (
    <div className='w-full h-auto  min-h-screen flex items-center justifiy-center'>
      <div className="w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-4 flex items-center  
      flex-col justify-center gap-4">
    {
      fields && (
        <motion.p 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className={`w-full p-2 rounded-lg text-center font-semibold text-lg 
        ${alertStatus === 'danger' 
        ? 'bg-red-400 text-red-800' 
        : 'bg-emerald-400 text-emerald-800'}`}>
          {msg}
        </motion.p>
      )
    }
    <div 
    className="w-full py-2 border-b flex 
    items-center border-gray-300 gap-2">
      <MdFastfood className='text-xl text-gray-700'/>
      <input type='text' value={title} placeholder='Give me a title' 
      onChange={(e) => setTitle(e.target.value)}
      className='w-full h-full text-lg bg-transparent font-semibold text-textColor outline-none border-none placeholder:text-gray-400' required/>
    </div>
    <div className="w-full">
    <select onChange={(e) => setCategory(e.target.value)} className='border-b-2 w-full text-base outline-none border-gray-200 rounded-md cursor-pointer p-2'>
  <option value="other" className='bg-white'>Select Categories</option>
  {categories && categories.map((category) => (
    <option key={category.id} 
    className='text-base border-0 outline-none capitalize bg-white text-headingColor' 
    value={category.urlName}>{category.name}</option>
  ))}
</select>
    </div>

    <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
      {isLoading ? (
      <Loader />
      ) : (
      <>
            {!imageAsset ? (
            <>
        <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer gap-2'>
      <div className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
        <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700'/>
        <p className='text-gray-500  hover:text-gray-700'>
          Click here to upload 
          </p>        
      </div>
      <input type="file" name="uploadimage" id="" accept='image/*'
      onChange={uploadImage} className='w-0 h-0'/>
      </label>
        </>): (<>
        <div className="relative h-full">
          <img src={imageAsset} alt='uploaded-image' className='w-full h-full object-cover'/>
          <button className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer
          outline-none hover:shadow-md duration-500 transition-all ease-in-out'
          onClick={deleteImage}>
            <MdDelete className='text-white'/>
          </button>
        </div>
        </>)}
      </>)}
    </div>

    <div className="w-full flex flex-col md:flex-row items-center gap-3">
      <div className="w-full py-2 border-border-gray-300 flex items-center gap-2">
        <MdFoodBank className='text-gray-700 text-2xl'/>
        <input type="text" 
        required
        placeholder='Calories'
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        className='w-full h-full text-lg bg-transparent 
        outline-none border-none 
        placeholder:text-gray-400'
        text-textColor/>
      </div>

      <div className="w-full py-2 border-border-gray-300 flex items-center gap-2">
        <MdAttachMoney className='text-gray-700 text-2xl'/>
        <input type="text" 
        required
        placeholder='Prices'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className='w-full h-full text-lg bg-transparent 
        outline-none border-none 
        placeholder:text-gray-400'
        text-textColor/>
      </div>
    </div>
    <div className="flex items-center w-full">
      <button type='button' 
      onClick={saveDetails}
      className="ml-0 md:auto w-full md:w-auto border-none 
      outline-none bg-emerald-500 px-12 py-2 rounded-lg 
      text-lg text-white font-semi-bold">Save  </button>
    </div>
    </div>
    </div>
  )
}

export default CreateContainer