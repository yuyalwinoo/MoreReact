import React from 'react'

function ColorItem({color,changeBackgroundHandler}) {
  return (
    <div className={`h-10 w-10 rounded-full ${color} border border-black/30 cursor-pointer`}
        onClick={()=>changeBackgroundHandler(color)}>
            
    </div>
  )
}

export default ColorItem