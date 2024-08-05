


import React, { useEffect, useState } from "react"
import BrowserOnly from "@docusaurus/BrowserOnly"

const Roadmap = (props:any) => {

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const RoadmapClient = require("./Roadmap").default
        return <RoadmapClient {...props} />
      }}
    </BrowserOnly>
  )
}

export default Roadmap