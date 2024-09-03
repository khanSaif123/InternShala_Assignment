import React, { useState } from 'react';
import '../App.css'
import imageSrc from '../components/image.png'
const Card2 = () => {
  const [images, setImages] = useState([{}, {}, {}]); // Start with 3 images by default
  const [currentSlide, setCurrentSlide] = useState(0);

  const addImage = () => {
    setImages([...images, {}]);
    // Automatically move to the new slide if it's created by adding the image
    if ((currentSlide + 1) * 3 === images.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if ((currentSlide + 1) * 3 < images.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const visibleImages = images.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <div
      className='inline-block w-[720px] h-[316px] absolute bg-[#363C43] top-[400px] left-[722px] border border-gray-700 rounded-2xl'
      style={{ boxShadow: '6px 6px 3px ' }}
    >
      {/* Gallery and btns */}
      <div className='flex w-[83%] mx-auto justify-between mt-6'>
        <div className="px-9 py-4 bg-black text-white font-semibold rounded-2xl">Gallery</div>
        <div className='flex gap-10'>
          <div
            className='neomorphism cursor-pointer bg-[#4A4E54] w-[131px] h-[46px] text-center leading-[2.8rem] text-[12px] text-white font-semibold rounded-full'
            onClick={addImage}
          >
            <span className="text-[15px]">+</span> ADD IMAGE
          </div>
          <div className='flex gap-6'>
            <button
              className='w-[45px] h-[45px] neomorphism2 rounded-full text-[#6F787C]
              text-[25px] text-center relative bg-[#101213] cursor-pointer'
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
            >
              <span className='absolute top-[1px] left-[12px]'>←</span>
            </button>
            <button
              className='w-[45px] h-[45px] neomorphism2 rounded-full cursor-pointer text-[#6F787C]
              text-[25px] text-center relative bg-[#101213]'
              onClick={handleNextSlide}
              disabled={(currentSlide + 1) * 3 >= images.length}
            >
              <span className='absolute top-[1px] left-[12px]'>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* question marks */}
      <div className='w-[24px] h-[24px] border-2 border-gray-500 text-center bg-gradient-to-b from-[#4A4E54] to-[#A3ADBA]  rounded-full leading-5 absolute top-6 left-5'>
        <div className='w-[21px] h-[21px] bg-[#4A4E54] rounded-full'>
        <span className='text-gray-300'>?</span>
        </div>
        
      </div>

      <div className="p-1 rounded bg-[#363C43] absolute top-[110px] left-5">
        <div className="grid grid-cols-2 gap-[0.10rem] w-5 h-8 shadow-2xl">
          <div className="bg-[#4A4E54] rounded-sm"></div>
          <div className="bg-[#4A4E54] rounded-sm"></div>
          <div className="bg-[#4A4E54] rounded-sm"></div>
          <div className="bg-[#4A4E54] rounded-sm"></div>
          <div className="bg-[#4A4E54] rounded-sm"></div>
          <div className="bg-[#4A4E54] rounded-sm"></div>
        </div>
      </div>

      {/* images */}
      <div className="w-[600px] h-[180px] absolute left-[65px] top-[100px] rounded-3xl overflow-hidden">
        <div className="grid grid-cols-3 gap-4 h-full overflow-hidden">
          {visibleImages.map((image, index) => (
            <div key={index} className="bg-gray-200 rounded-xl overflow-hidden"><img width="100%" src={imageSrc} alt={`Image ${index + 1}`}/></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;
