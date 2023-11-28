import React from 'react'
import Shape from './Shape'
import PartnerLog from '../../BecomePartner/Singn & Login/PartnerLog'
import Link from 'next/link'


function Partners() {
    const data=[
        {h1:"Refer Partners",
        p:"ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {h1:"Franchise Partner",
        p:"ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
    ]
  return (
    <div className='w-full py-10'>
        <div className='w-full h-fit relative'>
            <div className='w-full h-fit mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row xxl:flex-row'>
                <div className='w-full md:w-2/4 lg:w-2/4 xl:w-2/4 xxl:w-2/4 md:pl-12 lg:pl-16 xl:pl-20 xxl:pl-28 h-fit px-16 sm:px-20 md:px-0 lg:px-0 xl:px-0 xxl:px-0'>
                    <h1 className='w-fit border-b-4 pb-2 border-purple text-xl md:text-2xl lg:text-2xl xl:text-3xl xxl:text-3xl my-0'>
                        Partners
                    </h1>
                    <div className='my-6 flex flex-col gap-5'>
                        {data.map((val,i)=>{
                            return <div key={i}>
                                <h1 className='text-lg md:text-xl lg:text-xl xl:text-2xl xxl:text-2xl font-normal my-0'>
                                    {val.h1}
                                </h1>
                                <p className='md:pr-10 lg:max-w-[38ch] xl:max-w-[48ch] xxl:max-w-[58ch] text-sm md:text-base lg:text-base xl:text-base xxl:text-base font-light md:leading-6 lg:leading-5 xl:leading-6 xxl:leading-6 text-justify my-2'>
                                    {val.p}
                                </p>
                                <div className=''>
                                    <button className='w-20 sm:w-28 md:w-32 lg:w-40 xl:w-44 xxl:w-44 h-8 md:h-9 lg:h-9 xl:h-10 xxl:h-11 my-2 md:my-3 lg:my-4 xl:my-5 xxl:my-5 text-sm md:text-base lg:text-base xl:text-base xxl:text-base capitalize text-center border-2 rounded-3xl mx-2 border-purple hover:bg-white hover:scale-110 hover:text-purple bg-purple text-white transition-all duration-400 ease-in-out '>
                                        <Link href={{
                    pathname: `/signup`}}>Join now</Link>
                                    </button>
                                    <button className='w-28 sm:w-28 md:w-32 lg:w-40 xl:w-44 xxl:w-44 h-8 md:h-9 lg:h-9 xl:h-10 xxl:h-11 my-2 md:my-3 lg:my-4 xl:my-5 xxl:my-5 text-sm md:text-base lg:text-base xl:text-base xxl:text-base capitalize text-center  border-2 rounded-3xl mx-2 border-purple bg-white text-purple hover:bg-purple hover:scale-110 hover:text-white
                                    transition-all duration-400 ease-in-out'>
                                        Explore more
                                    </button>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='w-full md:w-2/4 lg:w-2/4 xl:w-2/4 xxl:w-2/4 relative px-16 sm:px-20 md:px-0 lg:px-0 xl:px-0 xxl:px-0'>
                    <h1 className='w-fit border-b-4 pb-2 border-purple text-xl md:text-2xl lg:text-2xl xl:text-3xl xxl:text-3xl my-0'>
                    Already Have A Partner Account ?
                    </h1>
                    <button className='w-20 md:w-24 lg:w-28 xl:w-40 xxl:w-40 h-8 md:h-9 lg:h-9 xl:h-10 xxl:h-11 text-sm md:text-base lg:text-base xl:text-base xxl:text-base mt-5 capitalize text-center border-2 rounded-3xl mx-2 border-purple hover:bg-white hover:scale-110 hover:text-purple bg-purple text-white transition-all duration-400 ease-in-out'>
                        <Link href={{pathname:`/login`}}>
                            Login
                        </Link>
                    </button>
                    <div className='hidden md:block lg:block xl:block xxl:block w-full md:h-[300px] lg:h-[380px] xl:h-[400px] xxl:h-[450px] absolute md:top-32 lg:bottom-10 xxl:bottom-4 right-0'>
                        <Shape/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners