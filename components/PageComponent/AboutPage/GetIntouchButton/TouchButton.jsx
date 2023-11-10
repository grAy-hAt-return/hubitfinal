import React from 'react'

function TouchButton() {
  return (
    <div className='w-full px-10 md:px-16 lg:px-20 xl:px-36 xxl:px-40 mb-5 py-2 xxl:py-3 bg-main h-fit flex justify-between items-center'>
      <p className="text-xs xxl:text-sm text-white Poppins ">
      Ready to take your skills to the next level?
      </p>
      <div className="flex justify-end items-center">
        <button className='bg-[#FACC15] Poppins px-5 py-2 hover:scale-105 transition all duration-200 ease-in text-xs xxl:text-sm text-black font-medium rounded-full'>
          Get In Touch
        </button>
      </div>
    </div>
  )
}

export default TouchButton;