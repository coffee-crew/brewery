'use client'
import { ReactNode, useState } from 'react'
import { ModalIntro } from './ModalIntro'
import { ModalExpand } from './ModalExpand'

interface SurveyModalProps {
  description?: string
  title: string
  children: ReactNode
}

export const SurveyModal = ({ description, title, children }: SurveyModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  console.log(`isOpen: ${isOpen}`)

  return (
    <div className="fixed bottom-0 right-0 z-50">
      <div className="flex flex-col items-end">
        <ModalExpand isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        {isOpen ? <>{children}</> : <ModalIntro title={title} onClick={() => setIsOpen(!isOpen)} />}
      </div>
    </div>
  )
}
