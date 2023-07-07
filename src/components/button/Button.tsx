import React from 'react'
import './button.css'

interface ButtonProps {
  /**
   * Button contents
   */
  label: string
  /**
   * Button type (changes appearance)
   */
  type: 'primary' | 'secondary'
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, backgroundColor, size = 'medium', type = 'secondary', ...props }: ButtonProps) => {
  // TODO: implement dynamic tailwind classes based on button types
  const baseClasses = 'font-bold border-2 border-white border-solid rounded-full cursor-pointer inline-block py-4 px-6 text-center bg-white';

  const buttonTypeClasses = {

  } as const;

  // width: 100%;
  // height: 100%;
  // position: absolute;
  // top: 0;
  // left: 0;
  // z-index: -1;

  return (
    <>
      <button
        type="button"
        className={`${baseClasses} box-sha relative before:bg-gradient-to-r before:from-orange-500 before:to-cyan-500 before:p-4 before:blur-3xl before:w-full before:h-full before:top-0 before:left-0 before:-z-10 before:absolute hover:animate-button-hover`}
        style={{ backgroundColor: backgroundColor }}
        {...props}
      >
        {label}
      </button>

      <div className="w-48 h24 p-4 bg-gradient-conic from-purple-500 via-pink-500 to-red-500 rounded-full animate-background-gradient transition-all"></div>
      
      <div className="w-48 h24 p-4 bg-gradient-to-tl from-purple-800 via-purple-600 to-purple-400 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500"></div>
      
      <button className="m-2 p-10 text-white rounded-xl transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100">Hover me</button>
    </>
  )
}
