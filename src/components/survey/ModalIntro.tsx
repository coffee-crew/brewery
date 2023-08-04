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
        className="m-2 rounded-xl bg-sky-500 p-2 text-white hover:bg-sky-700 focus:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-900 active:bg-sky-700 disabled:bg-sky-700 disabled:opacity-50"
        onClick={onClick}
      >
        Reply
      </button>
    </div>
  )
}
