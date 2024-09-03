import React from 'react';

const Card1 = () => {
  return (
    <div className='inline-block w-[720px] h-[316px] relative bg-[#363C43] top-[28px] left-[722px] border border-gray-700 rounded-2xl'
    style={{ boxShadow: '6px 6px 3px ' }}
    >
      <div className='grid grid-cols-3 gap-6 w-[620px] h-[59px] absolute top-[20px] left-[58px] rounded-3xl px-3 bg-black p-2'>
        <div className='flex items-center justify-center bg-[#28292F] text-[#A3ADB2] rounded-2xl shadow-custom
        hover:cursor-pointer hover:btnShadow hover:scale-110 transition-all duration-200 hover:bg-[#4A4E54] hover:text-white'
      
        >
          About Me
        </div>
        <div className='flex items-center justify-center bg-[#28292F] text-[#A3ADB2] rounded-2xl shadow-custom
        hover:cursor-pointer hover:btnShadow hover:scale-110 transition-all duration-200 hover:bg-[#4A4E54] hover:text-white'>
          Experiences
        </div>
        <div className='flex items-center justify-center bg-[#28292F] text-[#A3ADB2] rounded-2xl shadow-custom
        hover:cursor-pointer hover:btnShadow hover:scale-110 transition-all duration-200 hover:bg-[#4A4E54] hover:text-white'>
          Recommended
        </div>
      </div>
      <p className='absolute text-[20px] top-[100px] w-[575px] h-[175px] font-thin left-[65px] text-[#969696] leading-[25.5px]'>
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
        <br></br>
        <br></br>
        I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just
        starting school, so my calendar is usually blocked between 9–10 AM. This is a...
      </p>

      {/* vertical line */}
      <div className='absolute w-[0.40rem] rounded-2xl h-[55px]  right-4 top-[30%] bg-gradient-to-b from-gray-400 to-gray-600 '
      style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)' }}
      ></div>
      <div className='relative top-6 left-4 w-6 h-6'>

      {/* question marks */}
      <div className='w-[24px] h-[24px] border-2 border-gray-500 text-center bg-gradient-to-b from-[#4A4E54] to-[#A3ADBA]  rounded-full leading-5 '>
        <div className='w-[21px] h-[21px] bg-[#4A4E54] rounded-full'>
          <span className='text-gray-300'>?</span>
        </div>
        
      </div>
    
      <div class="p-1 rounded bg-[#363C43] absolute top-[110px] ">
          <div class="grid grid-cols-2 gap-[0.10rem] w-5 h-8 shadow-2xl">
              <div class="bg-[#4A4E54] rounded-sm"></div>
              <div class="bg-[#4A4E54] rounded-sm"></div>
              <div class="bg-[#4A4E54] rounded-sm"></div>
              <div class="bg-[#4A4E54] rounded-sm"></div>
              <div class="bg-[#4A4E54] rounded-sm"></div>
              <div class="bg-[#4A4E54] rounded-sm"></div>
          </div>
      </div>


</div>

    </div>
  );
};

export default Card1;
