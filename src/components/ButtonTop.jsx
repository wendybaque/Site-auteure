import React from 'react'
import down from "../assets/down.png";

export default function ButtonTop() {
  return (
    <div className='w-20 h-20 m-2 p-2 float-right'>
      <a href="#" alt="retourner en haut de la page"><button type="button" class="animate-bounce relative w-12 h-12 inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-700 group-hover:from-cyan-500 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <img src={down} alt=" flèche vers le haut" className='w-12 h-12 rotate-180'/>
      </button></a>
    </div>
  )
}