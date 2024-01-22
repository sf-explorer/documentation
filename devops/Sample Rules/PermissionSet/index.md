# PermissionSet
## Description is required
Field: `Description`   



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

