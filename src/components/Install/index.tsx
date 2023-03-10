import React from "react"
import BrowserOnly from "@docusaurus/BrowserOnly"

const InstallServer = (props:any) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const Install = require("./Install").default
        return <Install {...props} />
      }}
    </BrowserOnly>
  )
}

export default InstallServer
