# LightningComponentResource
## An LWC must have an author
Field: `author`
#### Example

Here is an example
```js
import { LightningElement, api } from 'lwc';

/**
 * Liste des contrats
 * @author "Nicolas Despres"
 * @see "Onglet Equipement" https://jira.atlassian.net/browse/XCC-71
 * @param contract string 
 */
export default class socle360EquipementDetailContrat extends LightningElement {
    @api
    contract
}
```
  
### Config to use
```json
{
  "sObject": "LightningComponentResource",
  "field": "Source",
  "computedField": "author",
  "when": "ManageableState = 'unmanaged' and FilePath like '%js'",
  "nameField": "FilePath",
  "goodExample": "\nHere is an example\n```js\nimport { LightningElement, api } from 'lwc';\n\n/**\n * Liste des contrats\n * @author \"Nicolas Despres\"\n * @see \"Onglet Equipement\" https://jira.atlassian.net/browse/XCC-71\n * @param contract string \n */\nexport default class socle360EquipementDetailContrat extends LightningElement {\n    @api\n    contract\n}\n```\n",
  "tooling": true,
  "message": "An LWC must have an author"
}
```

### SOQL Generated
```sql
Select Source, FilePath, LastModifiedBy.Name
    from LightningComponentResource
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and ManageableState = 'unmanaged' and FilePath like '%js' 
       order by LastModifiedDate desc limit 200
```

## An LWC must have a description
Field: `description`
#### Example

Here is an example
```js
import { LightningElement, api } from 'lwc';

/**
 * Liste des contrats
 * @author "Nicolas Despres"
 * @see "Onglet Equipement" https://jira.atlassian.net/browse/XCC-71
 * @param contract string 
 */
export default class socle360EquipementDetailContrat extends LightningElement {
    @api
    contract
}
```
  
### Config to use
```json
{
  "sObject": "LightningComponentResource",
  "field": "Source",
  "computedField": "description",
  "when": "ManageableState = 'unmanaged' and FilePath like '%js'",
  "nameField": "FilePath",
  "goodExample": "\nHere is an example\n```js\nimport { LightningElement, api } from 'lwc';\n\n/**\n * Liste des contrats\n * @author \"Nicolas Despres\"\n * @see \"Onglet Equipement\" https://jira.atlassian.net/browse/XCC-71\n * @param contract string \n */\nexport default class socle360EquipementDetailContrat extends LightningElement {\n    @api\n    contract\n}\n```\n",
  "tooling": true,
  "message": "An LWC must have a description"
}
```

### SOQL Generated
```sql
Select Source, FilePath, LastModifiedBy.Name
    from LightningComponentResource
       where  LastModifiedDate > 2024-01-01T00:00:00Z  and ManageableState = 'unmanaged' and FilePath like '%js' 
       order by LastModifiedDate desc limit 200
```
