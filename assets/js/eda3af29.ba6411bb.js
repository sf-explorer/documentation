"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[620],{4003:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release01","metadata":{"permalink":"/documentation/blog/release01","editUrl":"https://github.com/sf-explorer/documentation/tree/master/blog/2023-07-04-release0.1.0/index.md","source":"@site/blog/2023-07-04-release0.1.0/index.md","title":"Release 0.1.0","description":"Release 0.1.0 is out this week and the extension already have more than 50 users.","date":"2023-07-04T00:00:00.000Z","formattedDate":"July 4, 2023","tags":[{"label":"Salesforce","permalink":"/documentation/blog/tags/salesforce"}],"readingTime":1.475,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Despres","title":"Senior Program Architect at Salesforce","url":"https://github.com/nicolas-despres","imageURL":"https://github.com/nicolas-despres.png","key":"ndespres"}],"frontMatter":{"slug":"release01","title":"Release 0.1.0","authors":["ndespres"],"tags":["Salesforce"]},"nextItem":{"title":"See you at Dreamforce ... 2024?","permalink":"/documentation/blog/Dreamforce24"}},"content":"import HomepageFeatures from \'../../src/components/HomepageFeatures\'\\n\\n\\n:::success\\nRelease 0.1.0 is out this week and the extension already have more than **50 users**.\\n:::\\n\\n## But wait - what is Salesforce Explorer ?\\n**Salesforce Explorer** is a productivity tool provided as a [chrome extension](https://chrome.google.com/webstore/detail/salesforce-explorer/eabpolgjfkpchgffbkiedgfemcgbnbde) intended for Salesforce **administrators** and **developers**.\\nIt contains features I needed on some of my previous assignments that I decided to package.\\n\\n\\n## What is included ?\\n\\nHere is the list of the most important features provided:\\n<HomepageFeatures />\\n\\n## But why?\\nMost of the time I started working on something because I needed it on my project and I could not find the capability in salesforce or I was not comfortable with the user experience.\\n\\n\\n## How is it built?\\nIt is built with React, Typescript and [React SLDS](https://github.com/mashmatrix/react-lightning-design-system/blob/master/README.md) to provide a salesforce like UX experience.\\n\\n\\n## Why not an Appexchange?\\nChrome extension architecture offers the following advantages\\n* First and foremost: **No need to be admin of your org to install/use it!**\\n* A single installation is enough for all your orgs\\n* React, Typescript, webpack and friends offer a better developer experience than lwc\\n* Interestingly you can access the tooling API from a chrome extension and in LWC to do the same you need to [a configuration with a connected app](https://salesforcecodex.com/salesforce/call-tooling-api-from-lightning-web-component/) which is more complex in my opinion\\n\\n## Is it open source?\\nNot yet, but the plan is to make it open source - code needs to be cleaned and documented first.\\n\\n## Can you use it on your project?\\nYes please try it out and let me know what you think. You can provide feedback [here](https://github.com/sf-explorer/documentation/issues)\\n\\n## Is it secure?\\nYes, like for the appexchange, chrome makes a security review for chrome extension and it has been approved"},{"id":"Dreamforce24","metadata":{"permalink":"/documentation/blog/Dreamforce24","editUrl":"https://github.com/sf-explorer/documentation/tree/master/blog/2023-07-01-dreamforce.md","source":"@site/blog/2023-07-01-dreamforce.md","title":"See you at Dreamforce ... 2024?","description":"Last month I answered the Dreamforce Call For Speaker with the 6 different proposed topics below, most of them experimenting one feature of SF Explorer.","date":"2023-07-01T00:00:00.000Z","formattedDate":"July 1, 2023","tags":[{"label":"Salesforce","permalink":"/documentation/blog/tags/salesforce"}],"readingTime":1.29,"hasTruncateMarker":false,"authors":[{"name":"Nicolas Despres","title":"Senior Program Architect at Salesforce","url":"https://github.com/nicolas-despres","imageURL":"https://github.com/nicolas-despres.png","key":"ndespres"}],"frontMatter":{"slug":"Dreamforce24","title":"See you at Dreamforce ... 2024?","authors":["ndespres"],"tags":["Salesforce"]},"prevItem":{"title":"Release 0.1.0","permalink":"/documentation/blog/release01"}},"content":"Last month I answered the Dreamforce Call For Speaker with the 6 different proposed topics below, most of them experimenting one feature of SF Explorer.\\n\\n| Title |   Abstract    |\\n|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\\n| Building a SF chrome extension with React and Typescript     | Learn why and how I build SF explorer using React, MaterialUI and Typescript that can interact with multiple orgs with ease. See how easily you can modify it or create your own          |\\n| [Compare complex records](https://docusaurus.io/docs/blog) such as flexipages                   | Learn how to use new SF Explorer chrome extension to compare any record across one or multiple orgs. This feature will be demonstrated with flexipage and group permission set comparison |\\n| Insurance Product best practices and visualization           | Configuration can be complex and hard to maintain. Learn the best practices and tools to help you configure hundreds of products in your orgs.                                            |\\n| Omnistudio vizualisation and best practices with SF Explorer | Learn omnistudio best practices and how to use SF Explorer to gain visibility on your omnistudio elements                                                                                 |\\n| Use generative AI in SF Explorer new chrome extension        | ChatGPT is everywhere. How can we leverage it to ease our admin work? In this session, discover how to ease your work with simple use cases implemented in a new chrome extension.        |\\n| Advanced Query Building with new chrome extension            | `Select Objects, Fields from MultipleOrgs With AutoCompletion, Chaining, ContextualVars, OpenAI, SharedTemplates` Curious about this query?                                                                           |\\n\\nNone of them as been accepted... So not this year -- Maybe 2024 ?"}]}')}}]);