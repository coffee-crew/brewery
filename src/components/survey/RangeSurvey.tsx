'use client'
import { SetStateAction, useState } from 'react'
import { RangeSurveyButton } from './RangeSurveyButton'

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
  const [selectedRating, setSelectedRating] = useState<string>()

  const handleRatingClick = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedRating(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSelectedRating(undefined)
    console.log(`Submitted rating: ${selectedRating}`)
  }

  const range = (start: number, stop: number, step: number): number[] =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

  const surveyRange = range(min.number, max.number, step)

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg flex-col content-center items-center rounded bg-white shadow-md shadow-black"
    >
      <div className="m-2">
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
      <div className="m-2">
        {surveyRange.map((number) => (
          <RangeSurveyButton key={number} number={number} onClick={handleRatingClick} />
        ))}
        <div className="flex justify-between">
          <div className="m-2">{min.label}</div>
          <div className="m-2">{max.label}</div>
        </div>
      </div>

      <button
        type="submit"
        value="submit"
        className="m-2 rounded-xl bg-sky-500 p-2 text-white hover:bg-sky-700 focus:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-900 active:bg-sky-700 disabled:bg-sky-700 disabled:opacity-50"
        disabled={!selectedRating}
      >
        Submit
      </button>
    </form>
  )
}
