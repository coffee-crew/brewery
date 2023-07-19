'use client'
import { useState } from 'react'
import { RangeSurvey } from './RangeSurvey'

interface SurveyModalProps {
  description?: string
  max: {
    label: string
    number: number
  }
  min: {
    label: string
    number: number
  }
  step: number
  title: string
}

export const SurveyModal = ({ description, max, min, title, step }: SurveyModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-0 right-0 z-50">
      {isOpen ? (
        <div className="flex flex-col items-end">
          <button className="flex w-10 flex-col items-center rounded bg-white" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <RangeSurvey title={title} description={description} min={min} max={max} step={step} />
        </div>
      ) : (
        <div className="flex flex-col items-end">
          <button className="flex w-10 flex-col items-center rounded bg-white" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
          <div className="max-w-lg flex-col content-center items-center rounded bg-white">
            <div className="m-2 ">
              <b>{title}</b>
            </div>
            <button
              type="button"
              className="m-2 rounded-xl bg-gray-200 p-2 text-black hover:bg-gray-400 focus:bg-gray-400 focus:outline-none active:bg-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              Reply
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
