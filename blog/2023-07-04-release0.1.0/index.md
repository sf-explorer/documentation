---
slug: release01
title: Release 0.1.0
authors: [ndespres]
tags: [Salesforce]
---
import HomepageFeatures from '../../src/components/HomepageFeatures'

# Release 0.1.0

:::info
Release 0.1.0 is out this week and the extension already have more than **50 users**.
:::

## But wait - what is Salesforce Explorer ?
**Salesforce Explorer** is a productivity tool provided as a [chrome extension](https://chrome.google.com/webstore/detail/salesforce-explorer/eabpolgjfkpchgffbkiedgfemcgbnbde) intended for Salesforce **administrators** and **developers**.
It contains features I needed on some of my previous assignments that I decided to package.


## What is included ?

Here is the list of the most important features provided:
<HomepageFeatures version="0.1.0" />

## But why?
Most of the time I started working on something because I needed it on my project and I could not find the capability in salesforce or I was not comfortable with the user experience.


## How is it built?
It is built with React, Typescript and [React SLDS](https://github.com/mashmatrix/react-lightning-design-system/blob/master/README.md) to provide a salesforce like UX experience.


## Why not an Appexchange?
Web extension architecture offers the following advantages
* First and foremost: **No need to be admin of your org to install/use it!**
* A single installation is enough for all your orgs
* React, Typescript, webpack and friends offer a better developer experience than lwc
* Interestingly you can access the tooling API from a web extension and in LWC to do the same you need to [a configuration with a connected app](https://salesforcecodex.com/salesforce/call-tooling-api-from-lightning-web-component/) which is more complex in my opinion

## Is it open source?
Not yet, but the plan is to make it open source - code needs to be cleaned and documented first.

## Can you use it on your project?
Yes please try it out and let me know what you think. You can provide feedback [here](https://github.com/sf-explorer/documentation/issues)

## Is it secure?
Yes, like for the appexchange, chrome makes a security review for chrome extension and it has been approved
