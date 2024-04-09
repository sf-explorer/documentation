# EntityDefinition
## A custom object Name must be in english and PascalCase
Field: `QualifiedApiName`   
Regex: `^[A-Z][A-Za-z0-9]*(__c|__mdt|__ka|__kav)$`    
#### Example
InsurancePolicy  


## A custom object Description is required
Field: `Description`   
Regex: `^.{20,}$`    
#### Example
More than 20 chars  


## Less than 100 custom fields
Field: `Fields.totalSize`   



## Maximum one custom trigger per object
Field: `ApexTriggers.totalSize`   



## Maximum 15 record types per object
Field: `RecordTypes.totalSize`   


