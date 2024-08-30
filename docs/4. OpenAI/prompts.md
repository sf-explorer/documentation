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
Create a custom metadata name `SFExplorer_Prompt__mdt` to receive your prompts:

```js
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

### Add a layout

```js
{
  "fullName": "SFExplorer_Prompt__mdt-SFExplorer_Prompt Layout",
  "layoutSections": [
    {
      "customLabel": "false",
      "detailHeading": "false",
      "editHeading": "true",
      "label": "Information",
      "layoutColumns": [
        {
          "layoutItems": [
            {
              "behavior": "Required",
              "field": "MasterLabel"
            },
            {
              "behavior": "Required",
              "field": "DeveloperName"
            },
            {
              "behavior": "Edit",
              "field": "Entity__c"
            },
            {
              "behavior": "Edit",
              "field": "Prompt__c"
            },
            {
              "behavior": "Edit",
              "field": "Condition__c"
            }
          ]
        },
        {
          "layoutItems": [
            {
              "behavior": "Edit",
              "field": "IsProtected"
            },
            {
              "behavior": "Required",
              "field": "NamespacePrefix"
            }
          ]
        }
      ],
      "style": "TwoColumnsTopToBottom"
    },
    {
      "customLabel": "false",
      "detailHeading": "false",
      "editHeading": "true",
      "label": "System Information",
      "layoutColumns": [
        {
          "layoutItems": {
            "behavior": "Readonly",
            "field": "CreatedById"
          }
        },
        {
          "layoutItems": {
            "behavior": "Readonly",
            "field": "LastModifiedById"
          }
        }
      ],
      "style": "TwoColumnsTopToBottom"
    },
    {
      "customLabel": "false",
      "detailHeading": "false",
      "editHeading": "false",
      "layoutColumns": "",
      "style": "CustomLinks"
    }
  ],
  "showEmailCheckbox": "false",
  "showHighlightsPanel": "false",
  "showInteractionLogPanel": "false",
  "showRunAssignmentRulesCheckbox": "false",
  "showSubmitAndAttachButton": "false"
}
```

### Add a record

```js
{
  "DeveloperName": "Description",
  "MasterLabel": "Description",
  "Label": "Description",
  "QualifiedApiName": "Description",
  "Entity__c": "CustomField",
  "Prompt__c": "Give me a short description for a field named '$\\{item.FullName}' knowing I am working in the insurance industry",
  "Condition__c": null
}
```

```js
{
  "DeveloperName": "OpportunitySuggestion",
  "MasterLabel": "OpportunitySuggestion",
  "Label": "OpportunitySuggestion",
  "QualifiedApiName": "OpportunitySuggestion",
  "Entity__c": "Opportunity",
  "Prompt__c": "What should I do if an opportunity is worth ${item.Amount} and the stage is ${item.StageName}",
  "Condition__c": null
}
```