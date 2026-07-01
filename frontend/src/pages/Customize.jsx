import React, { useContext, useRef, useState } from 'react'
import Card from '../components/Card'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import { RiImageAddLine } from "react-icons/ri";
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";

function Customize() {
  const { serverUrl, userData, setUserData,
    backendImage, setBackendImage, frontendImage, setFrontendImage,
    selectedImage, setSelectedImage } = useContext(userDataContext)
    const navigate=useNavigate()

  const inputImage = useRef()

  const handleImage = (e) => {
    const file = e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))

  }
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[Indigo] to-[blue] flex justify-center items-center flex-col p-[20px]'>
      <MdArrowBack className='absolute top-[30px] left-[30px] cusror-pointer text-white w-[25px] h-[25px]' onClick={() => navigate("/")}/>
      <h1 className='text-white text-[30px] mb-[30px] text-center p-[20px]'>Select your <span className='text-blue-200'>Assistant Image</span></h1>
      <div className='w-[90%] max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />

        <div className={`w-[70px] lg:w-[140px]  h-[160px] lg:h-[250px] bg-[Indigo] border-2 border-[#030326] 
        rounded-2xl overflow-hidden hover:shadow-2xl
         hover:shadow-black cursor-pointer hover:border-4 hover:border-black 
         flex items-center justify-center  ${selectedImage == "input" ? "border-4 border-white shadow-2xl shadow-black " : null}`} onClick={() => {inputImage.current.click()
          setSelectedImage("input")
         }}>

          {!frontendImage && <RiImageAddLine className='text-white w-[25px] h-[25px]' />}

          {frontendImage && <img src={frontendImage} className='h-full object-cover' />}
        </div>
        <input type='file' accept='image/*' ref={inputImage} hidden onChange={handleImage} />
      </div>
      {selectedImage &&  <button className='min-w-[150px] h-[60px] bg-white rounded-full text-black font-semibold cursor-pointer text-[19px] mt-[30px]' onClick={() =>navigate("/customize2") }>Next</button>}


    </div>
  )
}

export default Customize

