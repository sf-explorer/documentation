---
description: Explore graphQL winter'24 API with builtin examples
title: GraphQL
hide_table_of_contents: true
keywords:
  - GraphQL
  - Documentation
  - Salesforce
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import GraphQL from '../../../src/pages/graphQL'

# GraphQL

## Introduction
What is GraphQL:
* Specification for API Server + Query Language - Facebook 2015
* Single endpoint for all the resources, that can be aggregated
* Requests only the necessary data
* Schema-driven, enabling introspection - metadata friendly
* Widely adopted through a fast growing community

Useful resources:
- [GraphQL Foundation](https://graphql.org/)
- [Landscape](https://landscape.graphql.org/)
- [Salesforce doc](https://developer.salesforce.com/docs/platform/graphql/overview)
- [soql-to-graphql](https://github.com/nicolas-despres/soql-to-graphql/blob/main/Readme.md)
- [Full stack Tutorial](https://www.howtographql.com/)
- [SF Community group](https://trailhead.salesforce.com/fr/trailblazer-community/groups/0F94S000000kRExSAM)
- [annual survey results](https://2022.stateofgraphql.com/)


## Usage with SF Explorer
GraphQL offers very interesting use cases for salesforce. A number of tools are available in the community and **SF Explorer** ships with a built in version of **GraphiQL** with the following advantages:
* **No need to authenticate** - as easy as it should be
* **SOQL** transition tool
* **Sample queries** to get you started  
* **LWC** Generation with the graphql `wire` adapter

To give it a try navigate to **Code** and then select **GraphQL**:

![example](./soqlTransition.png) 


## SOQL transition tool (beta)

:::warning
This feature is in beta, not all SOQL equivalent like subqueries are supported but it will come in future releases
:::

If you are not familiar with graphQL but you are a **SOQL ninja** 🥷🏿, you can use the [SOQL transition tool](https://github.com/nicolas-despres/soql-to-graphql/blob/main/Readme.md):
* Write your query with **auto completion** and the syntax you know
* Generate the graphQL equivalent

### Playground

<GraphQL />

:::info
Beware that graphQL is case sensitive compared to SOQL
:::


## Provided examples
If you open the history button you will find a number of queries to help you get started:
* Search Accounts and their opportunities
* QueryAccountsWithCriteria
* QueryCasesWithCriteria
* Object info for Account and Case

<LiteYouTubeEmbed
              id="8kOW8amHmPI"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Security"
              poster="maxresdefault"
              webp
            />
