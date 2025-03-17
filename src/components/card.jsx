import React from 'react'

export default function Card({tittle,description,image,techStack}) {

  return (
    
    <div className='flex   items-center px-44 py-6  '>
        <div className=' flex gap-6'>
        <div>
            <img src={image} alt='label' className=' h-[120px]'/>
        </div>
        <div className='  flex-col '>
            <p className='mb-2 font-bold text-gray-600'>{tittle}</p>
            <p className='text-gray-500'>{description}</p>
            <div className=' pt-10 text-sm text-gray-500 flex gap-4'>
                    
                    {techStack.map((item,index) => {
                        return <div key={index}>
                          <div>{item}</div>
                        
                         </div>
                    })}
            </div>
        </div>
        </div>
 </div>
        


 )
}