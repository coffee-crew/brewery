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

// Let's dumb this component down as much as possible.
// Essentially, we can convert this into a component that is JUST taking care of showing a range of values.
// The actual implementation of the component can be different per use case.
export const RangeSurvey = ({ description, max, min, title, step }: RangeSurveyProps) => {
  // As highlighted above, we don't really care about state because of reusability. That is something the parent of this component can do.
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRating, setSelectedRating] = useState('0')

  // As highlighted above, we don't really care about state because of reusability. That is something the parent of this component can do.
  // AT: Maybe use React Context?
  const handleRatingClick = (event: any) => {
    setSelectedRating(event.target.value)
  }

  // As highlighted above, we don't really care about state because of reusability. That is something the parent of this component can do.
  // AT: Maybe use React Context?
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(`Submitted rating: ${selectedRating}`)
  }

  // We now receive a min and max object, containing values. Let's calculate the range between these values, INCLUDING the values, and store that into a range variable.
  // To calculate range: create an array of numbers, start from the lowest number, iterating up to the highest number

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

  let surveyRange = range(min.number, max.number, step)

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

          {/* We do not care about this form, if we do not define the submission event in this component. Remember: we don't want this here because we want to reuse this in other sections. */}
          {/* To be fair, anything outside this form can also be removed NODDERS */}
          <form
            onSubmit={handleSubmit}
            className="max-w-lg flex-col content-center items-center rounded border-4 bg-white"
          >
            <div className="m-2">
              <p>{title}</p>
              <p>{description}</p>
            </div>
            <div className="m-2">
              {/* We know what our range is. Given our range, render out X-amount of buttons, effectively decreasing a BUNCH of repetitive code. */}
              {/* range amount == amount of buttons */}
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
