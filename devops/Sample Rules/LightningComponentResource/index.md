# LightningComponentResource
## An LWC must have an author
Field: `Source.author`   
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
  


## An LWC must have a description
Field: `Source.description`   
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
  

