# FAQ


## Wait - what is Salesforce Explorer?
**Salesforce Explorer** is a productivity tool provided as a [web app](https://app.sf-explorer.com) and [Chrome extension](https://chrome.google.com/webstore/detail/salesforce-explorer/eabpolgjfkpchgffbkiedgfemcgbnbde) intended for Salesforce **administrators** and **developers**.

## Why did you build SF Explorer?
Most of the features where built because I needed it on my projects. I usually work in design authorities so I need to understand quickly what is going on in multiple sandboxes. I am the first user and if it helps me, it may help others, so I decided to package it.


## How is it built?
It is built with React, Typescript and [React SLDS](https://github.com/mashmatrix/react-lightning-design-system/blob/master/README.md) to provide a salesforce like UX experience.

## What server is involved with SF Explorer?
For the **web app**, the data transits through Heroku (EU hosted). No data is stored, we have no database, only compute with an Express server to do the proxy.

For the **Chrome app**, the server is only involved if you:
- Connect through OAuth (the server keeps our client secret safe)
- Do special operations like OpenAI or you use Einstein with a connected app
- Use Marketing Cloud app

## What analytics are used?
SF Explorer uses Google Analytics to track usage and improve the product. This helps us understand how features are being used and identify areas for improvement.

**Important:** No personal data or way to identify users is stored. No client data or metadata is sent to analytics.

## Is it open source?
Some pieces are. You can find the different components [here](https://github.com/orgs/sf-explorer/repositories)

## Can I use in my own project?
Yes please try it out and let me know what you think. You can provide feedback [here](https://github.com/sf-explorer/documentation/issues)

## Who are the contributors
Nicolas Despres and Florian Lebrun
