# Flow
## Flow Description is required
Field: `Description`

### Config to use
```json
{
  "sObject": "Flow",
  "field": "Description",
  "tooling": true,
  "message": "Flow Description is required"
}
```

### SOQL Generated
```sql
Select Description, LastModifiedBy.Name
    from Flow
       where  LastModifiedDate > 2024-01-01T00:00:00Z  
       order by LastModifiedDate desc limit 200
```

## Flow Label must be Short Yet Meaningful
Field: `MasterLabel`
#### Example
Screen Flow:
-Reschedule Order Delivery

Autolaunched Flow:
- Users or Apps: Add Default Opportunity Team Members
- Flow Trigger: Case Before Handler
- Scheduled: Remind Opportunity Owners  
### Config to use
```json
{
  "sObject": "Flow",
  "field": "MasterLabel",
  "tooling": true,
  "message": "Flow Label must be Short Yet Meaningful",
  "additionalMessage": "\n**Autolaunched Flow:**\n- Users or Apps: <Verb(s)><Optional Noun Set>\n- Flow Trigger: <Object Name> Before Handler\n- Scheduled: <Short Process Description>",
  "badExample": "Send reminder – Not enough information; principal words not capitalized",
  "goodExample": "Screen Flow:\n-Reschedule Order Delivery\n\nAutolaunched Flow:\n- Users or Apps: Add Default Opportunity Team Members\n- Flow Trigger: Case Before Handler\n- Scheduled: Remind Opportunity Owners"
}
```

### SOQL Generated
```sql
Select MasterLabel, LastModifiedBy.Name
    from Flow
       where  LastModifiedDate > 2024-01-01T00:00:00Z  
       order by LastModifiedDate desc limit 200
```
