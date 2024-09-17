---
title: Prompts
description: SF Explorer offers a native integration with chatGPT
keywords:
  - openAI
  - chatGPT
---

# Prompt studio

## Standard rules


| name           | entity         | Prompt                                                                                                                                            | condition        |
| -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| GetDescription | CustomField    | Explain me this salesforce formula $\{item.Metadata.formula\}                                                                                       | Metadata.formula |
| GetDescription | CustomField    | Give me a short description for a field named '$\{item.FullName}' which label is $\{item.Metadata.label\}                                            |                  |
| Explain        | ValidationRule | Explain me this validation rule: '$\{item.Metadata.errorConditionFormula\}'                                                                         |                  |
| Explain        | ValidationRule | Write me a Salesforce validation rule given the following description '$\{item.Metadata.description\}'                                              |                  |


## Create your own rules
Create your rules

### Custom the custom metadata
Create a custom metadata name `SFExplorer_Prompt__mdt` to receive your prompts.
