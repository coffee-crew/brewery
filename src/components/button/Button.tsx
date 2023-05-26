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
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--${type}`].join(' ')}
      style={{ backgroundColor: backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
