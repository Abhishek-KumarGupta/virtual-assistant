import React, { useContext } from "react";
import { userDataContext } from '../context/UserContext'

function Card({ image }) {
    const { serverUrl, userData, setUserData,
        backendImage, setBackendImage, frontendImage, setFrontendImage,
        selectedImage, setSelectedImage } = useContext(userDataContext)

    return (
        <div className={`w-[70px] lg:w-[140px]  h-[160px] lg:h-[250px] bg-[blue] border-2 border-[#030326] rounded-2xl overflow-hidden hover:shadow-2xl 
    hover:shadow-black cursor-pointer hover:border-4 hover:border-white
     ${selectedImage == image ? "border-4 border-white shadow-2xl shadow-black " : null}`}
            onClick={() => {
                setSelectedImage(image)
                setBackendImage(null)
                setFrontendImage(null)
                }}>

            <img src={image} className='h-full object-cover' />
        </div>
    )
}

export default Card