import { Field, Form, Formik } from 'formik'
import Image from 'next/image'
import React, { useState } from 'react'
function Otaku() {
    const [Active, setActive] = useState(0)
    const [Vote, setVote] = useState('')


    const Cosplay=[
        {
            id:'amanrai',
            name:"Aman Rai"
        },
        {
            id:'rushalshrestha',
            name:"Rushal Shrestha"
        },
        {
            id:'bishantmanandhar',
            name:"Bishant Manandhar"
        },
        {
            id:'apilrai',
            name:"Apil Rai"
        },
        {
            id:'abiskarrai',
            name:"Abiskar Rai"
        },
        {
            id:'Nischal',
            name:"Nischal"
        },
        {
            id:'aldeep',
            name:"Aldeep"
        },
        {
            id:'xitiz',
            name:"Xitiz"
        },
        {
            id:'yangjee',
            name:"Yangjee"
        },
        {
            id:'anshu',
            name:"Anshu"
        },
        {
            id:'anjulipmagar',
            name:"Anjuli p Magar"
        },
        {
            id:'sonitmagar',
            name:"Soni T Magar"
        },
        {
            id:'muskangurung',
            name:"Muskan Gurung"
        },
        {
            id:'jarmitmagar',
            name:"Jarmit Magar"
        },
        {
            id:'kiesthapa',
            name:"Kies Thapa"
        },
    ]

    const data = [
        {
            id: 0, title: "PubG Mobiles"
        },
        {
            id: 1, title: "Singing"
        },
        {
            id: 2, title: "PubG Mobiles"
        },
        {
            id: 3, title: "PubG Mobiles"
        }, {
            id: 1, title: "Singing"
        },
        {
            id: 2, title: "PubG Mobiles"
        },
        {
            id: 3, title: "PubG Mobiles"
        }
    ]

    let mode;
    const FormData = [
        {
            label: 'Name',
            apikey: "name",
            type: 'text'
        },
        {
            label: 'Email',
            apikey: "email",
            type: 'email'
        }, {
            label: 'Address',
            apikey: "address",
            type: 'text'
        }, {
            label: 'Contact',
            apikey: "contact",
            type: 'text'
        },
    ]
    if (Vote) {
        mode = <div className='bg-black fixed top-0 left-0 right-0 w-screen z-50 h-screen bg-opacity-30 flex items-center justify-center '>
            <div className='w-4/12 h-fit p-4 px-6 bg-white rounded-xl'>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        address: "",
                        contact: ""
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {({ handleSubmit }) => {
                        return <Form onSubmit={handleSubmit}>
                            <div className='grid gap-6'>
                                {
                                    FormData.map((val, i) => {
                                        return <div key={i} className='w-full'>
                                            <label>{val.label}</label>
                                            <Field type='text' name={val.apikey} className='w-full py-2 px-2 border outline-none' />
                                        </div>

                                    })
                                }
                            </div>
                            <div className='flex   gap-3 py-5'>
                                <button className='bg-green-400 px-6 w-fit py-3 border-0 text-white'>Vote Now</button>
                                <button onClick={() => {
                                    setVote("")
                                }} className='bg-red-400 px-6 py-3 w-fit border-0 text-white'>Cancel</button>

                            </div>
                        </Form>
                    }}
                </Formik>
            </div>

        </div>
    }
    return (
        <div>
            <div>
                {mode}
                <div style={{
                    backgroundImage: `url('https://i.gifer.com/DRU.gif ')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: "100% 90%"

                }} className='h-80 w-11/12 mx-auto px-10  ' >

                </div>
            </div>
            <div className='grid grid-cols-12 gap-4 px-6'>
                <div style={{
                    backgroundImage: `url('https://i.gifer.com/Paw.gif')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} className='h-screen w-full col-span-2  ' >

                </div>
                <div className='col-span-8 pt-10 flex flex-col gap-8'>

                    <div className=''>
                        <div className='py-5 text-xl font-semibold '>Select and Vote here For Your Cosplay </div>
                        {/* <div className='grid grid-cols-6 gap-0 gap-y-6 relative'>
                        {
                            data.map((val, i) => {
                                return <div key={i} onClick={() => setActive(val.id)} className={`border flex items-center justify-center font-semibold border-gray-300 px-6 py-4 ${Active === val.id ? "bg-purple-500 text-white" : 'bg-transparent'}`}>
                                    {val.title}
                                </div>
                            })
                        }


                    </div> */}
                        <div className='grid grid-cols-4 gap-6 py-5'>
                            {
                                Cosplay.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => {
                                                setVote(val.id)
                                            }}
                                            className='h-44 flex items-center justify-center w-48   bg-cover  text-xl font-semibold text-white  '
                                            style={{
                                                backgroundImage: `url('https://i.gifer.com/RDpX.gif')`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center'
                                            }}  >
                                           {val.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                    {/* just for show */}
                    <div className=''>
                        <div className='py-5 text-xl font-semibold '>Events happening today !! Checkout </div>
                        <div className='grid grid-cols-6 gap-0 gap-y-6 relative'>
                            {
                                data.map((val, i) => {
                                    return <div key={i} className={`border flex items-center justify-center font-semibold border-gray-300 px-6 py-4 ${Active === val.id ? "bg-purple-500 text-white" : 'bg-transparent'}`}>
                                        {val.title}
                                    </div>
                                })
                            }


                        </div>
                        <div className='grid grid-cols-4 gap-6 py-5'>
                            {
                                data.map((val, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => {
                                                setVote(val.id)
                                            }}
                                            className='h-44 flex items-center justify-center w-48   bg-cover  text-xl font-semibold text-white  '
                                            style={{
                                                backgroundImage: `url('https://i.gifer.com/79uF.gif')`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center'
                                            }}  >
                                            Pubg Mobiles
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div style={{
                    backgroundImage: `url('https://i.gifer.com/Paw.gif')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} className='h-screen w-full col-span-2  ' >

                </div>
            </div>
        </div>
    )
}

export default Otaku
