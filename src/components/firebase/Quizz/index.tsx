import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly';


export type Choice = {value: string, label: string}

export type QuizzProps = {
  id: string
  points?: number
  description?: string
  choices?: (Choice | string)[]
  response?: number
  explanation?: string
  course?: string
  colSize?: number
}

const QuizzServer = (props: QuizzProps) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const Quizz = require('./Quizz').default;
        return <Quizz {...props} />
      }}
    </BrowserOnly>
  )
}


export default QuizzServer