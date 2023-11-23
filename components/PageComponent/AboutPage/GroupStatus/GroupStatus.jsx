<<<<<<< HEAD
import React from 'react'

function GroupStatus() {

  const status=[
    {
      counting:"2017",
      description:"Year We Were Founded"
    },
    {
      counting:"100 +",
      description:"our Employee"
    },
    {
      counting:"720 +",
      description:"our Students"
    },
    {
      counting:"543",
      description:"Placement"
    },
    {
      counting:"1042",
      description:"Project Finished"
    }
  
  ]

  return (
    <div className='grid grid-cols-5 place-content-center place-items-center px-40 py-5  '>
      {
        status.map((val,i)=>{
          return(
            <div key={i} className=" w-fit h-fit grid flex-col justify-center items-center  text-[#515151] p-2 rounded-md ">
              <div className="Poppins h-fit">
                <p className='text-4xl font-semibold'>{val.counting}</p>
              </div>
              <div className="h-fit">
                <p className=' Poppins text-xs '>{val.description}</p>
              </div>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default GroupStatus
=======
import React from 'react'

function GroupStatus() {

  const status=[
    {
      counting:"2017",
      description:"Year We Were Founded"
    },
    {
      counting:"100 +",
      description:"Our Employee"
    },
    {
      counting:"720 +",
      description:"Our Students"
    },
    {
      counting:"543",
      description:"Placement"
    },
    {
      counting:"1042",
      description:"Project Finished"
    }
  
  ]

  return (
    <div className=' w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 xxl:grid-cols-5 gap-2 place-content-center place-items-center px-0 py-5  '>
      {
        status.map((val,i)=>{
          return(
            <div key={i} className=" w-full h-fit grid flex-col justify-center sm:justify-start md:justify-center lg:justify-center xl:justify-center items-center  text-[#515151] p-2 rounded-md ">
              <div className="Poppins h-fit">
                <p className='text-4xl font-semibold text-center'>{val.counting}</p>
              </div>
              <div className="h-fit">
                <p className=' Poppins text-xs text-center'>{val.description}</p>
              </div>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default GroupStatus
>>>>>>> a909855a8a48935018c4a4bc572233757ac96f4d
