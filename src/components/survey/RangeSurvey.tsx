'use client'
import { useState } from 'react'

interface RangeSurveyProps {
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

export const RangeSurvey = ({ description, max, min, title, step }: RangeSurveyProps) => {
  const [selectedRating, setSelectedRating] = useState('0')

  const handleRatingClick = (event: any) => {
    setSelectedRating(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(`Submitted rating: ${selectedRating}`)
  }

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

  let surveyRange = range(min.number, max.number, step)

  return (
    <form onSubmit={handleSubmit} className="max-w-lg flex-col content-center items-center rounded border-4 bg-white">
      <div className="m-2">
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div className="m-2">
        {surveyRange.map((number) => {
          return (
            <>
              <button
                type="button"
                value={number}
                onClick={handleRatingClick}
                className="m-2 rounded-sm bg-gray-200 p-2 text-black hover:bg-gray-400 focus:bg-gray-400 focus:outline-none active:bg-gray-400"
              >
                {number}
              </button>
            </>
          )
        })}
        <div className="flow-root">
          <div className="float-left m-2">{min.label}</div>
          <div className="float-right m-2">{max.label}</div>
        </div>
      </div>

      <button
        type="submit"
        value="submit"
        className="m-2 rounded-xl bg-gray-200 p-2 text-black hover:bg-gray-400 focus:bg-gray-400 focus:outline-none active:bg-gray-400"
      >
        Submit
      </button>
    </form>
  )
}
