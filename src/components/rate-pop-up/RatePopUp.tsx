'use client';
import React, { useState } from 'react';
import { BsHandThumbsUp, BsFillHandThumbsUpFill } from "react-icons/bs";

export const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };


  return (
    <>
         <button className="absolute z-50 bottom-20 right-0 bg-purple-500 hover:bg-purple-700 text-white font-bold p-4 rounded-ss-md rounded-se-md [writing-mode:vertical-lr]" onClick={openPopup}>  
         <div className="rotate-180">Feedback</div></button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded">
            <div  className="">
            <button className="bg-gray-400 text-white font-bold py-1 px-3 rounded mt-0 right-0" onClick={closePopup}>X</button>
            </div>
            <h2 className="writing-vertical-lr text-xl font-bold mt-10 mb-2">Rate this website</h2>
            <div className="text-yellow-400 mt-4 flex gap-3">
              <BsFillHandThumbsUpFill />
              <BsFillHandThumbsUpFill />
              <BsHandThumbsUp />
              <BsHandThumbsUp />
              <BsHandThumbsUp />
              <BsHandThumbsUp />
            </div>
          </div>
        </div>
         )}
    </>
  );
};
