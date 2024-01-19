# OmniProcess
## OmniProcess must have less than 100 elements
Field: `OmniProcessElements.totalSize`

### Config to use
```json
{
  "sObject": "OmniProcess",
  "field": "Name",
  "relatedFields": [
    "(select id from OmniProcessElements)"
  ],
  "computedField": "OmniProcessElements.totalSize",
  "lessThan": 100,
  "message": "OmniProcess must have less than 100 elements"
}
```

### SOQL Generated
```sql
Select Name, (select id from OmniProcessElements), LastModifiedBy.Name
    from OmniProcess
       where  LastModifiedDate > 2024-01-01T00:00:00Z  
       order by LastModifiedDate desc limit 200
```
