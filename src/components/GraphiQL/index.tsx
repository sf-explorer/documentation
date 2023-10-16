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

const GraphiQLServer = (props: any) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const GraphiQL = require('./GraphiQL').default;
        return <GraphiQL {...props} />
      }}
    </BrowserOnly>
  )
}


export default GraphiQLServer