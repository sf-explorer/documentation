# EntityDefinition
## A custom object Description is required
Field: `Description`

### Config to use
```json
{
  "sObject": "EntityDefinition",
  "field": "Description",
  "nameField": "QualifiedApiName",
  "message": "A custom object Description is required",
  "tooling": true,
  "when": "QualifiedApiName like '%__c' and IsCustomizable = true"
}
```

### SOQL Generated
```sql
Select Description, QualifiedApiName, LastModifiedBy.Name
    from EntityDefinition
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and QualifiedApiName like '%__c' and IsCustomizable = true 
       order by LastModifiedDate desc limit 200
```

## A custom object Name must be PascalCase
Field: `qualifiedApiName`
Regex: `^[A-Z][A-Za-z]*$`  
#### Example
InsurancePolicy  
### Config to use
```json
{
  "sObject": "EntityDefinition",
  "field": "QualifiedApiName",
  "computedField": "qualifiedApiName",
  "when": "QualifiedApiName like '%__c' and IsCustomizable = true",
  "regex": "^[A-Z][A-Za-z]*$",
  "message": "A custom object Name must be PascalCase",
  "goodExample": "InsurancePolicy",
  "badExample": "Insurance_Policy"
}
```

### SOQL Generated
```sql
Select QualifiedApiName, LastModifiedBy.Name
    from EntityDefinition
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and QualifiedApiName like '%__c' and IsCustomizable = true 
       order by LastModifiedDate desc limit 200
```

## Less than 100 custom fields
Field: `Fields.totalSize`

### Config to use
```json
{
  "sObject": "EntityDefinition",
  "field": "qualifiedApiName",
  "when": "QualifiedApiName like '%__c' and IsCustomizable = true",
  "relatedFields": [
    "(select QualifiedApiName from Fields where QualifiedApiName like '%__c')"
  ],
  "computedField": "Fields.totalSize",
  "lessThan": 100,
  "message": "Less than 100 custom fields"
}
```

### SOQL Generated
```sql
Select qualifiedApiName, (select QualifiedApiName from Fields where QualifiedApiName like '%__c'), LastModifiedBy.Name
    from EntityDefinition
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and QualifiedApiName like '%__c' and IsCustomizable = true 
       order by LastModifiedDate desc limit 200
```

## Maximum one custom trigger
Field: `ApexTriggers.totalSize`

### Config to use
```json
{
  "sObject": "EntityDefinition",
  "field": "QualifiedApiName",
  "when": "QualifiedApiName like '%__c' and IsCustomizable = true",
  "relatedFields": [
    "(select Name from ApexTriggers where NamespacePrefix = null limit 10 )"
  ],
  "computedField": "ApexTriggers.totalSize",
  "tooling": true,
  "lessThan": 2,
  "message": "Maximum one custom trigger"
}
```

### SOQL Generated
```sql
Select QualifiedApiName, (select Name from ApexTriggers where NamespacePrefix = null limit 10 ), LastModifiedBy.Name
    from EntityDefinition
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and QualifiedApiName like '%__c' and IsCustomizable = true 
       order by LastModifiedDate desc limit 200
```
