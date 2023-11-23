<<<<<<< HEAD
import React from 'react'

function TouchButton() {
  return (
    <div className='w-full px-36 mb-5 py-2 bg-main h-fit flex justify-between items-center'>
      <div className="text-xs text-white Poppins ">
      Ready to take your skills to the next level?
      </div>
      <div className="flex justify-end items-center">
        <button className='bg-[#FACC15] Poppins px-2 py-1.5 hover:scale-105 transition all duration-200 ease-in text-xs text-black font-medium rounded-full'>
          Get In Touch
        </button>
      </div>

    </div>
  )
}

=======
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

>>>>>>> a909855a8a48935018c4a4bc572233757ac96f4d
export default TouchButton;