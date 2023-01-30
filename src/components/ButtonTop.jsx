import React from 'react'
import down from "../assets/down.png";

export default function ButtonTop() {
  return (
    <div className='w-20 h-20 m-2 p-2 float-right'>
      <a href="#" alt="retourner en haut de la page"><button type="button" className="animate-bounce m-2 relative w-12 h-12 inline-flex items-center justify-center overflow-y-hidden text-sm font-medium text-gray-900 rounded-lg group">
        <img src={down} alt=" flèche vers le haut" className='w-12 h-12 rotate-180'/>
      </button></a>
    </div>
  )
}