---
description: Edit custom metadata
title: Custom Metadata
keywords:
  - metadata api
  - json
---


# Custom Metadata Edition

## Problematic
A number of frameworks and project implementations use `Custom Metadata` and `textarea` to stored structured information in json or XML.
The approach is powerful but today the **Salesforce Admin UI** is not appropriate for this type of manipulation as it lacks:
* Automatic indentation
* Collapsing sections
* Syntax validation
* Syntax coloration

Today you have to manual copy into third party tools and it is error prone.

## Proposed solution

**SF Explorer** provides the missing edition capabilities with:
* `Ace Editor` for syntax coloration
* Standard `JSON` parsing and validation
* Default `JSON` formating with `JSON.stringify`
* `Salesforce Metadata API` to update the metadata in salesforce

Metadata can be retrieved and then edited from the query builder or the Metadata menu entry

![example](./customMetadata.png) 

:::info Roadmap
This feature is going to be enhanced with the folling tools:
* **Prettier** is going to be used in a future version for enhanced formating capabilities
* **Monaco Editor** is going to replace Ace Editor
:::

