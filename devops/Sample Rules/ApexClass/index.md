# ApexClass
## An Apex class name must be PascalCase and use a correct Suffix
Field: `Name`   
Regex: `^[A-Z][A-Za-z0-9_]*(_Controller|_ServiceIn|_ServiceOut|_Test|_Helper|_Interface|_Mock|_ServiceAPI|_Util|_Batchable|_Queuable|_Schedulable)$`    
#### Example

* ActivityTimeline_Controller
* ActivityTimeline_Controller_Test
* RetrieveInteractions_ServiceOut
* RetrieveInteractions_ServiceOut_Mock
* RetrieveInteractions_ServiceOut_Test
  


## An ApexClass must follow the best practices
Field: `Body`   
#### Example
* No DML in loop
* Optimize SOQL with related lists
* **No Hardcoded values**  
  


## An ApexClass must have a Description
Field: `Body.description`   
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
  


## An ApexClass must have an author
Field: `Body.author`   
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
  


## Apex variables must be camelCase
Field: `SymbolTable.variables`   
Regex: `^[a-z][A-Za-z0-9]*$`    



## Apex methods must be camelCase
Field: `SymbolTable.methods`   
Regex: `^[a-z][A-Za-z0-9]*$`    


