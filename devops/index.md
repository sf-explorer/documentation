---
sidebar_position: 1
description: Enforce your best practices from Salesforce UI and your pipelines
---

# Introduction

:::info
Let's bridge the gap between best practice theory and how we enforce it!
:::

**SF Explorer** allows you to define and perform simple checks on your orgs Data and Metadata in a simple yet flexible manner. 

You can access, run and configure those rules via **Devops > Best Practices**  
                                                      
![example](RuleExecution.png) 

:::info
You can run the report at a given date. Above 01/01/2024
:::

## UI integration
Once defined, errors will be showned contextually on your records as you navigate through SF Explorer:

![example](ui-integration.png) 



## Setup Enhancement

Enhance your Salesforce setup with checks and best practices with a new chrome extension called [SF Explorer Advanced Setup](https://chromewebstore.google.com/detail/salesforce-explorer-enhan/bfbpegnljabcaknhmlfejadihhcndmfi?hl=en-US)

It adds custom message into your Salesforce setup screen to enforce your project rules are enforced. Your Design Authority should be pleased!
You can add a custom messages for:
* New Custom Object
* New Permission Set
Those messages are configurable in the option page.

* It prevent user from creating duplicate fields
* It shows similar fields when opening a custom field

![example](AdvancedSetup.png) 



## Command line integration

It is simple to integrate those rules in your current pipelines, for example with a Github Action:

![example](pipeline.png) 

Create a file named `.env` with the following content:
```
USERNAME=XXX
PASSWORD=XXX
LOGINURL=https://login.salesforce.com
DATE=2023-12-01
```

Run the command:  
```cmd
npx @sf-explorer/devops.cli
```
The command will generate an output file name `testReport.xml` on a JUnit format.

## Sample Rules

### EntityDefinition
[A custom object Description is required](./Sample%20Rules/EntityDefinition/index.md)  
[A custom object Name must be PascalCase](./Sample%20Rules/EntityDefinition/index.md)  
[Less than 100 custom fields](./Sample%20Rules/EntityDefinition/index.md)  
[Maximum one custom trigger](./Sample%20Rules/EntityDefinition/index.md)  

### CustomField
[A CustomField API Name must be PascalCase](./Sample%20Rules/CustomField/index.md)  
[Custom Fields must have a Description.](./Sample%20Rules/CustomField/index.md)  

### Flow
[Flow Description is required](./Sample%20Rules/Flow/index.md)  
[Flow Label must be Short Yet Meaningful](./Sample%20Rules/Flow/index.md)  

### PermissionSet
[Description is required](./Sample%20Rules/PermissionSet/index.md)  
[Name is required](./Sample%20Rules/PermissionSet/index.md)  

### ApexClass
[An Apex class name must be PascalCase](./Sample%20Rules/ApexClass/index.md)  
[An ApexClass must have a Description](./Sample%20Rules/ApexClass/index.md)  
[An ApexClass must have an author](./Sample%20Rules/ApexClass/index.md)  
[Apex variables must be camelCase](./Sample%20Rules/ApexClass/index.md)  
[Apex methods must be camelCase](./Sample%20Rules/ApexClass/index.md)  

### LightningComponentResource
[An LWC must have an author](./Sample%20Rules/LightningComponentResource/index.md)  
[An LWC must have a description](./Sample%20Rules/LightningComponentResource/index.md)  

### OmniUiCard
[Flexcards must have a description](./Sample%20Rules/OmniUiCard/index.md)  

### OmniProcess
[OmniProcess must have less than 100 elements](./Sample%20Rules/OmniProcess/index.md)  