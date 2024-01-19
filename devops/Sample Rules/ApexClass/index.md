# ApexClass
## An Apex class name must be PascalCase
Field: `Name`
Regex: `^[A-Z][A-Za-z0-9]*$`  
#### Example
CustomerAssessmentController  
### Config to use
```json
{
  "sObject": "ApexClass",
  "field": "Name",
  "when": "NamespacePrefix = null",
  "regex": "^[A-Z][A-Za-z0-9]*$",
  "message": "An Apex class name must be PascalCase",
  "goodExample": "CustomerAssessmentController"
}
```

### SOQL Generated
```sql
Select Name, LastModifiedBy.Name
    from ApexClass
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and NamespacePrefix = null 
       order by LastModifiedDate desc limit 200
```

## An ApexClass must have a Description
Field: `description`
#### Example

```js
/** 
 * BoatDataService exposes utilities to manipulate data related to boat
 * @author "John Doe"
 * @date 25/04/2023
**/
public with sharing class BoatDataService {
    public static final String LENGTH_TYPE = 'Length'; 

    @AuraEnabled(cacheable=true)
    public static List<Boat__c> getBoats(String boatTypeId) {
    }
}
```
  
### Config to use
```json
{
  "sObject": "ApexClass",
  "field": "Body",
  "computedField": "description",
  "when": "NamespacePrefix = null",
  "nameField": "Name",
  "message": "An ApexClass must have a Description",
  "goodExample": "\n```js\n/** \n * BoatDataService exposes utilities to manipulate data related to boat\n * @author \"John Doe\"\n * @date 25/04/2023\n**/\npublic with sharing class BoatDataService {\n    public static final String LENGTH_TYPE = 'Length'; \n\n    @AuraEnabled(cacheable=true)\n    public static List<Boat__c> getBoats(String boatTypeId) {\n    }\n}\n```\n"
}
```

### SOQL Generated
```sql
Select Body, Name, LastModifiedBy.Name
    from ApexClass
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and NamespacePrefix = null 
       order by LastModifiedDate desc limit 200
```

## An ApexClass must have an author
Field: `author`
#### Example

```js
/** 
 * BoatDataService exposes utilities to manipulate data related to boat
 * @author "John Doe"
 * @date 25/04/2023
**/
public with sharing class BoatDataService {
    public static final String LENGTH_TYPE = 'Length'; 

    @AuraEnabled(cacheable=true)
    public static List<Boat__c> getBoats(String boatTypeId) {
    }
}
```
  
### Config to use
```json
{
  "sObject": "ApexClass",
  "field": "Body",
  "computedField": "author",
  "when": "NamespacePrefix = null",
  "nameField": "Name",
  "message": "An ApexClass must have an author",
  "goodExample": "\n```js\n/** \n * BoatDataService exposes utilities to manipulate data related to boat\n * @author \"John Doe\"\n * @date 25/04/2023\n**/\npublic with sharing class BoatDataService {\n    public static final String LENGTH_TYPE = 'Length'; \n\n    @AuraEnabled(cacheable=true)\n    public static List<Boat__c> getBoats(String boatTypeId) {\n    }\n}\n```\n"
}
```

### SOQL Generated
```sql
Select Body, Name, LastModifiedBy.Name
    from ApexClass
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and NamespacePrefix = null 
       order by LastModifiedDate desc limit 200
```

## Apex variables must be camelCase
Field: `SymbolTable.variables`
Regex: `^[a-z][A-Za-z0-9]*$`  

### Config to use
```json
{
  "sObject": "ApexClass",
  "field": "SymbolTable",
  "computedField": "SymbolTable.variables",
  "regex": "^[a-z][A-Za-z0-9]*$",
  "tooling": true,
  "when": "NamespacePrefix = null",
  "nameField": "Name",
  "message": "Apex variables must be camelCase"
}
```

### SOQL Generated
```sql
Select SymbolTable, Name, LastModifiedBy.Name
    from ApexClass
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and NamespacePrefix = null 
       order by LastModifiedDate desc limit 200
```

## Apex methods must be camelCase
Field: `SymbolTable.methods`
Regex: `^[a-z][A-Za-z0-9]*$`  

### Config to use
```json
{
  "sObject": "ApexClass",
  "field": "SymbolTable",
  "computedField": "SymbolTable.methods",
  "regex": "^[a-z][A-Za-z0-9]*$",
  "tooling": true,
  "when": "NamespacePrefix = null",
  "nameField": "Name",
  "message": "Apex methods must be camelCase"
}
```

### SOQL Generated
```sql
Select SymbolTable, Name, LastModifiedBy.Name
    from ApexClass
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and NamespacePrefix = null 
       order by LastModifiedDate desc limit 200
```
