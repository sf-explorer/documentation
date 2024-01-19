# CustomField
## A CustomField API Name must be PascalCase
Field: `DeveloperName`
Regex: `^[A-Z][A-Za-z0-9]*$`  
#### Example
PhoneNumber  
### Config to use
```json
{
  "sObject": "CustomField",
  "field": "DeveloperName",
  "regex": "^[A-Z][A-Za-z0-9]*$",
  "message": "A CustomField API Name must be PascalCase",
  "tooling": true,
  "goodExample": "PhoneNumber",
  "badExample": "Phone_Number"
}
```

### SOQL Generated
```sql
Select DeveloperName, LastModifiedBy.Name
    from CustomField
       where  LastModifiedDate > 2024-01-01T00:00:00Z  
       order by LastModifiedDate desc limit 200
```

## Custom Fields must have a Description.
Field: `Description`

### Config to use
```json
{
  "sObject": "CustomField",
  "nameField": "DeveloperName",
  "field": "Description",
  "tooling": true,
  "message": "Custom Fields must have a Description.",
  "additionalMessage": "If you lack imagination, use SF Explorer ChatGPT native integration to generate it!"
}
```

### SOQL Generated
```sql
Select Description, DeveloperName, LastModifiedBy.Name
    from CustomField
       where  LastModifiedDate > 2024-01-01T00:00:00Z  
       order by LastModifiedDate desc limit 200
```
