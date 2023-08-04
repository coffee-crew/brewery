interface RangeSurveyButtonProps {
  number: number
  onClick?: () => void
}

export const RangeSurveyButton = ({ number, onClick }: RangeSurveyButtonProps) => (
  <button
    type="button"
    value={number}
    onClick={onClick}
    className="m-2 rounded-sm bg-gray-200 p-2 text-black hover:bg-gray-400 focus:bg-gray-400 focus:outline-none active:bg-gray-400"
  >
    {number}
  </button>
)
