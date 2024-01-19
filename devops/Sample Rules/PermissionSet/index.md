# PermissionSet
## Description is required
Field: `Description`

### Config to use
```json
{
  "sObject": "PermissionSet",
  "field": "Description",
  "nameField": "Name",
  "when": "IsOwnedByProfile = false and NamespacePrefix = null",
  "message": "Description is required"
}
```

### SOQL Generated
```sql
Select Description, Name, LastModifiedBy.Name
    from PermissionSet
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and IsOwnedByProfile = false and NamespacePrefix = null 
       order by LastModifiedDate desc limit 200
```

## Name is required
Field: `Name`
#### Example
### For Object/Field pern sets,
Start with the Object Name, and with the CRUD access provided, and anything special goes in the middle. Like this:

* Account - (R/C/E)
* Case - (R)
* Case - Delete Access - No Fields - (R/C/E/D)
* Contact - General Access - (R/E)
* Contact - Sensitive Fields Only - (R)

### For System Permissions
Start each Perm Set with SYS so that their grouped together:
* SYS - Reports
* SYS - Dashboards
* SYS - View Setup

### For App access
Start with APP:
* APP - Sales App
* APP - Service App

### For Tabs:
* TAB - Accounts Tab
* TAB - Tasks Tab

### For Apex Class access:
* APEX - Account LWC Controller
* APEX - Case Invocable Actions  
### Config to use
```json
{
  "sObject": "PermissionSet",
  "field": "Name",
  "when": "IsOwnedByProfile = false and NamespacePrefix = null",
  "message": "Name is required",
  "goodExample": "### For Object/Field pern sets,\nStart with the Object Name, and with the CRUD access provided, and anything special goes in the middle. Like this:\n\n* Account - (R/C/E)\n* Case - (R)\n* Case - Delete Access - No Fields - (R/C/E/D)\n* Contact - General Access - (R/E)\n* Contact - Sensitive Fields Only - (R)\n\n### For System Permissions\nStart each Perm Set with SYS so that their grouped together:\n* SYS - Reports\n* SYS - Dashboards\n* SYS - View Setup\n\n### For App access\nStart with APP:\n* APP - Sales App\n* APP - Service App\n\n### For Tabs:\n* TAB - Accounts Tab\n* TAB - Tasks Tab\n\n### For Apex Class access:\n* APEX - Account LWC Controller\n* APEX - Case Invocable Actions"
}
```

### SOQL Generated
```sql
Select Name, LastModifiedBy.Name
    from PermissionSet
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and IsOwnedByProfile = false and NamespacePrefix = null 
       order by LastModifiedDate desc limit 200
```
