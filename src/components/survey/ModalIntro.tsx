interface ModalIntroProps {
  title: string
  onClick: () => void
}

export const ModalIntro = ({ title, onClick }: ModalIntroProps) => {
  return (
    <div className="max-w-lg flex-col content-center items-center rounded bg-white">
      <div className="m-2 font-bold">{title}</div>
      <button
        type="button"
        className="m-2 rounded-xl bg-gray-200 p-2 text-black hover:bg-gray-400 focus:bg-gray-400 focus:outline-none active:bg-gray-400"
        onClick={onClick}
      >
        Reply
      </button>
    </div>
  )
}
