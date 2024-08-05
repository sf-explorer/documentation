


import React, { useEffect, useState } from "react"
import BrowserOnly from "@docusaurus/BrowserOnly"

const fallback: any = [
    {
        "url": "https://api.github.com/repos/sf-explorer/documentation/issues/5",
        "repository_url": "https://api.github.com/repos/sf-explorer/documentation",
        "labels_url": "https://api.github.com/repos/sf-explorer/documentation/issues/5/labels{/name}",
        "comments_url": "https://api.github.com/repos/sf-explorer/documentation/issues/5/comments",
        "events_url": "https://api.github.com/repos/sf-explorer/documentation/issues/5/events",
        "html_url": "https://github.com/sf-explorer/documentation/issues/5",
        "id": 2447791390,
        "node_id": "I_kwDOJAfjVM6R5lUe",
        "number": 5,
        "title": "Generate flow documentation as Mermaid Diagram",
        "user": {
            "login": "nicolas-despres",
            "id": 10028497,
            "node_id": "MDQ6VXNlcjEwMDI4NDk3",
            "avatar_url": "https://avatars.githubusercontent.com/u/10028497?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nicolas-despres",
            "html_url": "https://github.com/nicolas-despres",
            "followers_url": "https://api.github.com/users/nicolas-despres/followers",
            "following_url": "https://api.github.com/users/nicolas-despres/following{/other_user}",
            "gists_url": "https://api.github.com/users/nicolas-despres/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nicolas-despres/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nicolas-despres/subscriptions",
            "organizations_url": "https://api.github.com/users/nicolas-despres/orgs",
            "repos_url": "https://api.github.com/users/nicolas-despres/repos",
            "events_url": "https://api.github.com/users/nicolas-despres/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nicolas-despres/received_events",
            "type": "User",
            "site_admin": false
        },
        "labels": [],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2024-08-05T07:12:59Z",
        "updated_at": "2024-08-05T07:15:26Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "active_lock_reason": null,
        "body": "```mermaid\r\nflowchart TB\r\n    Start-->Screen1 -->Action1 --> Screen2\r\n \r\n```",
        "reactions": {
            "url": "https://api.github.com/repos/sf-explorer/documentation/issues/5/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/sf-explorer/documentation/issues/5/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
    {
        "url": "https://api.github.com/repos/sf-explorer/documentation/issues/4",
        "repository_url": "https://api.github.com/repos/sf-explorer/documentation",
        "labels_url": "https://api.github.com/repos/sf-explorer/documentation/issues/4/labels{/name}",
        "comments_url": "https://api.github.com/repos/sf-explorer/documentation/issues/4/comments",
        "events_url": "https://api.github.com/repos/sf-explorer/documentation/issues/4/events",
        "html_url": "https://github.com/sf-explorer/documentation/issues/4",
        "id": 2447789752,
        "node_id": "I_kwDOJAfjVM6R5k64",
        "number": 4,
        "title": "Add record type info in OpenAPI Spec",
        "user": {
            "login": "nicolas-despres",
            "id": 10028497,
            "node_id": "MDQ6VXNlcjEwMDI4NDk3",
            "avatar_url": "https://avatars.githubusercontent.com/u/10028497?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nicolas-despres",
            "html_url": "https://github.com/nicolas-despres",
            "followers_url": "https://api.github.com/users/nicolas-despres/followers",
            "following_url": "https://api.github.com/users/nicolas-despres/following{/other_user}",
            "gists_url": "https://api.github.com/users/nicolas-despres/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nicolas-despres/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nicolas-despres/subscriptions",
            "organizations_url": "https://api.github.com/users/nicolas-despres/orgs",
            "repos_url": "https://api.github.com/users/nicolas-despres/repos",
            "events_url": "https://api.github.com/users/nicolas-despres/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nicolas-despres/received_events",
            "type": "User",
            "site_admin": false
        },
        "labels": [],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2024-08-05T07:12:00Z",
        "updated_at": "2024-08-05T07:12:00Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "active_lock_reason": null,
        "body": null,
        "reactions": {
            "url": "https://api.github.com/repos/sf-explorer/documentation/issues/4/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/sf-explorer/documentation/issues/4/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
    {
        "url": "https://api.github.com/repos/sf-explorer/documentation/issues/3",
        "repository_url": "https://api.github.com/repos/sf-explorer/documentation",
        "labels_url": "https://api.github.com/repos/sf-explorer/documentation/issues/3/labels{/name}",
        "comments_url": "https://api.github.com/repos/sf-explorer/documentation/issues/3/comments",
        "events_url": "https://api.github.com/repos/sf-explorer/documentation/issues/3/events",
        "html_url": "https://github.com/sf-explorer/documentation/issues/3",
        "id": 2447701802,
        "node_id": "I_kwDOJAfjVM6R5Pcq",
        "number": 3,
        "title": "Jupyter Notebook equivalent",
        "user": {
            "login": "nicolas-despres",
            "id": 10028497,
            "node_id": "MDQ6VXNlcjEwMDI4NDk3",
            "avatar_url": "https://avatars.githubusercontent.com/u/10028497?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nicolas-despres",
            "html_url": "https://github.com/nicolas-despres",
            "followers_url": "https://api.github.com/users/nicolas-despres/followers",
            "following_url": "https://api.github.com/users/nicolas-despres/following{/other_user}",
            "gists_url": "https://api.github.com/users/nicolas-despres/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nicolas-despres/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nicolas-despres/subscriptions",
            "organizations_url": "https://api.github.com/users/nicolas-despres/orgs",
            "repos_url": "https://api.github.com/users/nicolas-despres/repos",
            "events_url": "https://api.github.com/users/nicolas-despres/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nicolas-despres/received_events",
            "type": "User",
            "site_admin": false
        },
        "labels": [],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2024-08-05T06:18:42Z",
        "updated_at": "2024-08-05T06:19:21Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "active_lock_reason": null,
        "body": "\r\n\r\n\r\n> Jupyter Notebooks allows users to configure and arrange workflows in data science, scientific computing, computational journalism, and machine learning. \r\n\r\nSF Explorer intends to bring similar functionality with Salesforce dedicated components:\r\n- Markdown\r\n- Anonymous Apex\r\n- SOQL\r\n- ERD\r\n- Sandbox\r\n- EinsteinGPT, chatGPT\r\n- ...\r\n\r\nThe notebook will be exportable to various format such as Mardown, Confluence, Dashboard and Notion.\r\nThe notebook will be stored in salesforce and editable by any salesforce user\r\nThe notebook components will be connected together: one component output can be reused in another one as input\r\n\r\nSome work in progress:\r\n<img width=\"1203\" alt=\"image\" src=\"https://github.com/user-attachments/assets/832ab637-d457-4fbe-86f3-a5b88199dbd9\">\r\n\r\n<img width=\"1203\" alt=\"image\" src=\"https://github.com/user-attachments/assets/20aa1221-1002-49de-a591-7ef6232f49e7\">\r\n\r\n\r\n",
        "reactions": {
            "url": "https://api.github.com/repos/sf-explorer/documentation/issues/3/reactions",
            "total_count": 1,
            "+1": 0,
            "-1": 0,
            "laugh": 1,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/sf-explorer/documentation/issues/3/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    },
    {
        "url": "https://api.github.com/repos/sf-explorer/documentation/issues/2",
        "repository_url": "https://api.github.com/repos/sf-explorer/documentation",
        "labels_url": "https://api.github.com/repos/sf-explorer/documentation/issues/2/labels{/name}",
        "comments_url": "https://api.github.com/repos/sf-explorer/documentation/issues/2/comments",
        "events_url": "https://api.github.com/repos/sf-explorer/documentation/issues/2/events",
        "html_url": "https://github.com/sf-explorer/documentation/issues/2",
        "id": 2447637531,
        "node_id": "I_kwDOJAfjVM6R4_wb",
        "number": 2,
        "title": "Improve login experience by saving previously used orgs",
        "user": {
            "login": "nicolas-despres",
            "id": 10028497,
            "node_id": "MDQ6VXNlcjEwMDI4NDk3",
            "avatar_url": "https://avatars.githubusercontent.com/u/10028497?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nicolas-despres",
            "html_url": "https://github.com/nicolas-despres",
            "followers_url": "https://api.github.com/users/nicolas-despres/followers",
            "following_url": "https://api.github.com/users/nicolas-despres/following{/other_user}",
            "gists_url": "https://api.github.com/users/nicolas-despres/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nicolas-despres/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nicolas-despres/subscriptions",
            "organizations_url": "https://api.github.com/users/nicolas-despres/orgs",
            "repos_url": "https://api.github.com/users/nicolas-despres/repos",
            "events_url": "https://api.github.com/users/nicolas-despres/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nicolas-despres/received_events",
            "type": "User",
            "site_admin": false
        },
        "labels": [
            {
                "id": 5179758521,
                "node_id": "LA_kwDOJAfjVM8AAAABNLzXuQ",
                "url": "https://api.github.com/repos/sf-explorer/documentation/labels/enhancement",
                "name": "enhancement",
                "color": "a2eeef",
                "default": true,
                "description": "New feature or request"
            }
        ],
        "state": "open",
        "locked": false,
        "assignee": {
            "login": "nicolas-despres",
            "id": 10028497,
            "node_id": "MDQ6VXNlcjEwMDI4NDk3",
            "avatar_url": "https://avatars.githubusercontent.com/u/10028497?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nicolas-despres",
            "html_url": "https://github.com/nicolas-despres",
            "followers_url": "https://api.github.com/users/nicolas-despres/followers",
            "following_url": "https://api.github.com/users/nicolas-despres/following{/other_user}",
            "gists_url": "https://api.github.com/users/nicolas-despres/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nicolas-despres/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nicolas-despres/subscriptions",
            "organizations_url": "https://api.github.com/users/nicolas-despres/orgs",
            "repos_url": "https://api.github.com/users/nicolas-despres/repos",
            "events_url": "https://api.github.com/users/nicolas-despres/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nicolas-despres/received_events",
            "type": "User",
            "site_admin": false
        },
        "assignees": [
            {
                "login": "nicolas-despres",
                "id": 10028497,
                "node_id": "MDQ6VXNlcjEwMDI4NDk3",
                "avatar_url": "https://avatars.githubusercontent.com/u/10028497?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/nicolas-despres",
                "html_url": "https://github.com/nicolas-despres",
                "followers_url": "https://api.github.com/users/nicolas-despres/followers",
                "following_url": "https://api.github.com/users/nicolas-despres/following{/other_user}",
                "gists_url": "https://api.github.com/users/nicolas-despres/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/nicolas-despres/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/nicolas-despres/subscriptions",
                "organizations_url": "https://api.github.com/users/nicolas-despres/orgs",
                "repos_url": "https://api.github.com/users/nicolas-despres/repos",
                "events_url": "https://api.github.com/users/nicolas-despres/events{/privacy}",
                "received_events_url": "https://api.github.com/users/nicolas-despres/received_events",
                "type": "User",
                "site_admin": false
            }
        ],
        "milestone": null,
        "comments": 0,
        "created_at": "2024-08-05T05:33:54Z",
        "updated_at": "2024-08-05T05:59:44Z",
        "closed_at": null,
        "author_association": "MEMBER",
        "active_lock_reason": null,
        "body": "<img width=\"517\" alt=\"image\" src=\"https://github.com/user-attachments/assets/c7d335df-b2e8-46f4-8cda-c942af305da5\">\r\n",
        "reactions": {
            "url": "https://api.github.com/repos/sf-explorer/documentation/issues/2/reactions",
            "total_count": 1,
            "+1": 1,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/sf-explorer/documentation/issues/2/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    }
]

const Roadmap = (props: any) => {
    let [issues, setIssues] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/repos/sf-explorer/documentation/issues?q=is%3Aopen+is%3Aissue")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(data => {
                if (data && Array.isArray(data)) {
                    setIssues(data)
                }
                //setIssues(data)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <ul>{issues?.filter(issue => issue.author_association === 'MEMBER').map(issue => {
            return <li><a href={issue.html_url} target="_blank">{issue.title}</a> {issue.reactions?.total_count ? <>({issue.reactions?.total_count} reaction(s))</>:<></>}</li>
        })}</ul>
    )
}

export default Roadmap