---
title: Prompts
description: SF Explorer offers a native integration with chatGPT
keywords:
  - openAI
  - chatGPT
---

# Installation

## Create your metadata type
This metadata will receive your prompts

```json
{
  "fullName": "SFExplorer_Prompt__mdt",
  "fields": [
    {
      "fullName": "Entity__c",
      "externalId": "false",
      "fieldManageability": "DeveloperControlled",
      "label": "Entity",
      "length": "255",
      "required": "false",
      "type": "Text",
      "unique": "false"
    },
    {
      "fullName": "Prompt__c",
      "fieldManageability": "DeveloperControlled",
      "label": "Prompt",
      "length": "32768",
      "type": "LongTextArea",
      "visibleLines": "8"
    },
    {
      "fullName": "Condition__c",
      "externalId": "false",
      "fieldManageability": "DeveloperControlled",
      "label": "Condition",
      "length": "255",
      "required": "false",
      "type": "Text",
      "unique": "false"
    }
  ],
  "label": "SFExplorer_Prompt",
  "pluralLabel": "SFExplorer_Prompts",
  "visibility": "Public"
}
```

## Standard rules

Create your rules, for example:

| name           | entity         | Prompt                                                                                                                                            | condition        |
| -------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| GetDescription | CustomField    | Explain me this salesforce formula $\{item.Metadata.formula\}                                                                                       | Metadata.formula |
| GetDescription | CustomField    | Give me a short description for a field named '$\{item.FullName}' which label is $\{item.Metadata.label\}                                            |                  |
| Explain        | ValidationRule | Explain me this validation rule: '$\{item.Metadata.errorConditionFormula\}'                                                                         |                  |
| Explain        | ValidationRule | Write me a Salesforce validation rule given the following description '$\{item.Metadata.description\}'                                              |                  |