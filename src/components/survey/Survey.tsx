"use client"
import { useState } from 'react';


interface SurveyProps {
  title: string;
  lowest: string;
  highest: string;
}

export const Survey = ({ title, lowest, highest  }: SurveyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // const [rating, setRating] = useState(0);

  return (
    <div className="absolute bottom-0 right-0">
      <button className="border-2 bg-white rounded drop-shadow-sm shadow-md w-10" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        )}
       </button>
       {isOpen ? (      
        <div className="border-4 bg-white rounded drop-shadow-sm max-w-lg flex-col items-center content-center">
          <div className="m-2 "><b>{title}</b></div>
          <div className="m-2">        
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">0</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">1</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">2</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">3</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">4</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">5</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">6</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">7</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">8</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">9</button>
            <button className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">10</button>
            <div className="flex w-44 m-2 justify-around">
              <div className="flex">{lowest}</div>
              <div className="flex">{highest}</div>
            </div>
          </div>
          <button className="m-2 p-2 text-black rounded-xl bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">
            Send your answer
          </button>
        </div>
      ) : (
        <div className="border-4 bg-white rounded drop-shadow-sm max-w-lg flex-col items-center content-center">
          <div className="m-2 "><b>{title}</b></div>
          <button className="m-2 p-2 text-black rounded-xl bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400" onClick={() => setIsOpen(!isOpen)}>
            Reply
          </button>
        </div>
      )}

    </div>
  )
}
