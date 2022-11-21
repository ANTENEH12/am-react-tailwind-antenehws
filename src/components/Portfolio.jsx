
import React from 'react'
import Amazonimage from '../icons/Amazon Image 2022-.jpeg'
import Amessengerimage from '../icons/AMessenger Image 2022-.jpeg'
import ANetfliximage from '../icons/ANetflix Image 2022-.jpeg'
import Appleimage from '../icons/Apple Image 2022-.jpeg'


const Portfolio = () => {

    const Portfolio =[
        {
            id:1,
            src:Amazonimage
            
        },
        {
            id:2,
            src:Amessengerimage
        },
        {
            id:3,
            src:ANetfliximage
        },
        {
            id:4,
            src:Appleimage
        },
        
    ]




  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-thBlue w-full text-white md:h-screen'>
         <div className='max-w-scree-lg p-2 mx-auto flex flex-col justify-center w-full h-full'>
        
        
        <div className='pb-8'>
            <p className='text-6xl font-signature ml-20 inline border-b-4 border-blue-500'>Portfolio</p>
            <p className='py-4 ml-20'>Check my clons work here</p>
        </div>
      



        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0'>


        {
            Portfolio.map(({id, src}) =>(

<div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt=""
                className='rounded-md duration-200 hover:scale-110'
                />
           
            <div className='flex items-center justify-center '>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-110'>Demo</button>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-110'>Code</button>
            </div>
             </div>



            ))
        }
            
             </div>
             </div>
    </div>
  )
}

export default Portfolio