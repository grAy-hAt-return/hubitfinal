import React from 'react'

function Shape() {
  return (
    <div className='w-full h-full  flex items-center'>
        <div className='w-full h-full flex relative'>
            <div className='w-2/3 h-full '></div>
            <div className='w-1/3 h-full bg-purple'></div>
            <div className='md:w-[300px] lg:w-[380px] xl:w-[400px] xxl:w-[450px] h-[100%] border-[20px] border-white bg-[url("https://plus.unsplash.com/premium_photo-1661371394983-42485fed3a58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbmRzaGFrZXxlbnwwfHwwfHx8MA%3D%3D")] bg-cover bg-center bg-no-repeat rounded-full absolute md:left-12 lg:left-16 xl:left-20 xxl:left-52'></div>
        </div>
    </div>
  )
}

export default Shape