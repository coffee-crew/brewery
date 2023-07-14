"use client"
import { ChangeEvent, useState, useCallback } from 'react';


interface SurveyProps {
  title: string;
  lowest: string;
  highest: string;
}

export const Survey = ({ title, lowest, highest  }: SurveyProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState("0");

	const handleRatingClick = (event: any) => {
		setSelectedRating(event.target.value);
	};

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // alert(`Rating: ${selectedRating}`);
    console.log(`Submitted rating: ${selectedRating}`);
  };


  return (
    <div className="absolute bottom-0 right-0">
       {isOpen ? (
        <div className='flex flex-col items-end'>      
          <button className="bg-white rounded w-10 flex flex-col items-center" onClick={() => setIsOpen(!isOpen)}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6">
              <path 
                strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <form onSubmit={handleSubmit} className="border-4 bg-white rounded max-w-lg flex-col items-center content-center" >
            <div className="m-2"><b>{title}</b></div>
            <div className="m-2">
              <button type="button" value="0" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">0</button>
              <button type="button" value="1" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">1</button>
              <button type="button" value="2" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">2</button>
              <button type="button" value="3" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">3</button>
              <button type="button" value="4" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">4</button>
              <button type="button" value="5" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">5</button>
              <button type="button" value="6" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">6</button>
              <button type="button" value="7" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">7</button>
              <button type="button" value="8" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">8</button>
              <button type="button" value="9" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">9</button>
              <button type="button" value="10" onClick={handleRatingClick} className="m-2 p-2 text-black rounded-sm bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">10</button>
              <div className="flow-root">
                <div className="float-left m-2">{lowest}</div>
                <div className="float-right m-2">{highest}</div>
              </div>
            </div>

            <button type="submit" value="submit" className="m-2 p-2 text-black rounded-xl bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400">Submit</button>
          </form>
        </div>
      ) : (
        <div className='flex flex-col items-end'>
          <button className="bg-white rounded w-10 flex flex-col items-center" onClick={() => setIsOpen(!isOpen)}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
          <div className="bg-white rounded max-w-lg flex-col items-center content-center">
            <div className="m-2 "><b>{title}</b></div>
            <button type="button" className="m-2 p-2 text-black rounded-xl bg-gray-200 hover:bg-gray-400 active:bg-gray-400 focus:outline-none focus:bg-gray-400" onClick={() => setIsOpen(!isOpen)}>
              Reply
            </button>
          </div>
        </div>
      )}

    </div>
  )
};
