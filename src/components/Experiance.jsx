import React from 'react'
import Page from './Page'
import {FaReact, FaHtml5, FaNodeJs} from 'react-icons/fa'
import {SiRedux} from "react-icons/si"
import {TbBrandJavascript,TbBrandTailwind} from 'react-icons/tb'

const Experiance = () => {

    const Experiance= [
        {
            id:1,
            icon: <FaReact size={50} className='text-white'/>,
            title:"React.js",
            subtitle: ""
        },
        {
            id:2,
            icon: <SiRedux size={50} className='text-white'/>,
            title:"Redux",
            subtitle: ""
        },
        {
            id:3,
            icon: <FaHtml5 size={50} className='text-white'/>,
            title:"HTML5",
            subtitle: ""
           
        },
        {
            id:4,
            icon: <FaNodeJs size={50} className='text-white'/>,
            title:"Node.js",
            subtitle: ""
        },
        {
            id:5,
            icon: <TbBrandJavascript size={50} className='text-white'/>,
            title:"JavaScript",
            subtitle: ""
        },
        {
            id:6,
            icon: <TbBrandTailwind size={50} className='text-white'/>,
            title:"Tailwind css",
            subtitle: ""
        },
       

    ]
  return (
    <div className='capitalize'>
      <Page name="Experiance" title="Experiance" subtitle={`this are the most used web development technologies`}>

        <div className='grid lg:grid-cols-2 gap-12 text-black'>
            {
                Experiance.map(({id, icon, title, subtitle})=>(
                    <div key={id} className='group bg-gradient-to-r from-thBlue to-thOrange rounded-lg flex
                     flex-col items-center justify-center p-8 text-center'>

                        <div className='flex items-center justify-center
                         duration-300 group-hover:scale-110 cursor-pointer'>
                            <div className='bg-blue-500 rounded-full p-5 m-4'>
                                {icon}
                            </div>
                            <h1 className='text-3xl lg:text-5xl my-8 capitalize'>{title}</h1>
                            <p className='text-lg'>{subtitle}</p>
                        </div>

                    </div>
                ))
            }
        </div>
      </Page>
    </div>
  )
}

export default Experiance
