# OmniUiCard
## Flexcards must have a description
Field: `Description`

### Config to use
```json
{
  "sObject": "OmniUiCard",
  "field": "Description",
  "nameField": "Name",
  "message": "Flexcards must have a description"
}
```

### SOQL Generated
```sql
Select Description, Name, LastModifiedBy.Name
    from OmniUiCard
       where  LastModifiedDate > 2024-01-01T00:00:00Z  
       order by LastModifiedDate desc limit 200
```
