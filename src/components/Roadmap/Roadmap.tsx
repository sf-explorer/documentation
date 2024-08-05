


import React, { useEffect, useState } from "react"
import BrowserOnly from "@docusaurus/BrowserOnly"

const Roadmap = (props: any) => {
    let [issues, setIssues] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/repos/sf-explorer/documentation/issues?q=is%3Aopen+is%3Aissue")
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data)){

                } else {
                    setIssues([])
                }
                //setIssues(data)
    })
            .catch(e => console.error(e))
    }, [])

    return (
        <ul>{issues?.filter(issue=>issue.author_association === 'MEMBER').map(issue => {
            return <li><a href={issue.html_url} target="_blank">{issue.title}</a> ({issue.reactions?.total_count} reaction(s))</li>
        })}</ul>
    )
}

export default Roadmap