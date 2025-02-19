import React, { useState } from 'react'
import ColorItem from './ColorItem';

function BgChanger() {
    const colors = ['bg-white','bg-red-200','bg-green-200','bg-sky-200'];
    const [bgColor, setBgColor] = useState(colors[0]);
    const changeBackgroundHandler = (color)=>{
        setBgColor(color);
    }
  return (
    <div className={`flex flex-col gap-5 justify-center items-center w-full h-screen ${bgColor}`}>
        <h1 className='text-2xl uppercase font-bold'>Bg Changer with vite</h1>
        <div className='flex justify-center items-center gap-5'>
            {
                colors.map((color,index)=>(
                    <ColorItem 
                        key={index} 
                        color={color}
                        changeBackgroundHandler={changeBackgroundHandler}/>
                ))
            }
        </div>
    </div>
  )
}

export default BgChanger