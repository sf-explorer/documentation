import React from "react"
import BrowserOnly from "@docusaurus/BrowserOnly"

const AvatarServer = (props) => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const Avatar = require("./Avatar").default
        return <Avatar {...props} />
      }}
    </BrowserOnly>
  )
}

export default AvatarServer
