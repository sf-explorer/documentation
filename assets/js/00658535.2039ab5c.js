"use strict";(self.webpackChunkdocusaurus_lms_demo=self.webpackChunkdocusaurus_lms_demo||[]).push([[951],{79170:(o,e,t)=>{t.d(e,{Z:()=>u});var n=t(67294),l=t(94264),i=t(23838),c=t(29487),r=t(48312),a=t(21360);const s={fit:!0,height:600,width:800,zoom:!1,useWorker:!1},d={InsurancePolicy:'digraph {\n    compound=true;\n    rankdir=LR;\n    node [\n        labeljust="l"\n        colorscheme="pubu7"\n        fillcolor=1\n        style="filled"\n        shape=rect\n    ]\n\n    //objects\n    Group [label=" Group (30)" fillcolor=1 tooltip="() " ]\n    User [label=" User (25)" fillcolor=1 tooltip="(Read) Represents a user in your organization." ]\n    Account [label="\ud83d\udd10 Account (9)" fillcolor=5 tooltip="(Private) Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners)." ]\n    InsurancePolicy [label="\ud83d\udd10 InsurancePolicy (25)" fillcolor=3 tooltip="(Private) Represents the type of insurance policy, such as auto, home, life, or annuity." ]\n    Product2 [label=" Product2 (15)" fillcolor=3 tooltip="(ReadWrite) Represents a product that your company sells." ]\n    Producer [label=" Producer (3)" fillcolor=3 tooltip="(ReadWrite) " ]\n    Opportunity [label="\ud83d\udd10 Opportunity (19)" fillcolor=5 tooltip="(Private) Represents an opportunity, which is a sale or pending deal." ]\n    Quote [label="\ud83d\udc68\u200d\ud83d\udc66 Quote (19)" fillcolor=5 tooltip="(ControlledByParent) Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later." ]\n    LegalEntity [label=" LegalEntity " fillcolor=1 tooltip="() undefined" ]\n    vlocity_ins__ContractLineItem__c [label="\ud83d\udc68\u200d\ud83d\udc66 ContractLineItem__c " fillcolor=3 tooltip="(ControlledByParent) " ]\n    vlocity_ins__ProductionCode__c [label=" ProductionCode__c " fillcolor=1 tooltip="(ReadWrite) " ]\n    Attachment [label=" Attachment (439)" fillcolor=1 tooltip="() " ]\n    Claim [label=" Claim (10)" fillcolor=5 tooltip="(ReadWrite) " ]\n    ContentDocumentLink [label=" ContentDocumentLink (258)" fillcolor=1 tooltip="() " ]\n    ContentVersion [label="\ud83d\udd10 ContentVersion (131)" fillcolor=1 tooltip="(Private) " ]\n    FeedItem [label=" FeedItem (16)" fillcolor=1 tooltip="() " ]\n    InsurancePolicyAsset [label=" InsurancePolicyAsset (37)" fillcolor=1 tooltip="(ReadWrite) " ]\n    InsurancePolicyCoverage [label="\ud83d\udc68\u200d\ud83d\udc66 InsurancePolicyCoverage (169)" fillcolor=1 tooltip="(ControlledByParent) A junction object that associates the InsurancePolicy object with the ProductCoverage object." ]\n    InsurancePolicyMemberAsset [label="\ud83d\udc68\u200d\ud83d\udc66 InsurancePolicyMemberAsset (25)" fillcolor=1 tooltip="(ControlledByParent) " ]\n    InsurancePolicyParticipant [label="\ud83d\udc68\u200d\ud83d\udc66 InsurancePolicyParticipant (24)" fillcolor=1 tooltip="(ControlledByParent) A junction object that associates the InsurancePolicy object with the Account object. This object represents the participants of an insurance policy. Insurance policy participants include policy owners and beneficiaries." ]\n    InsurancePolicySurcharge [label="\ud83d\udc68\u200d\ud83d\udc66 InsurancePolicySurcharge (92)" fillcolor=1 tooltip="(ControlledByParent) " ]\n    InsurancePolicyTransaction [label="\ud83d\udc68\u200d\ud83d\udc66 InsurancePolicyTransaction (25)" fillcolor=3 tooltip="(ControlledByParent) " ]\n    ProducerCommission [label=" ProducerCommission (115)" fillcolor=5 tooltip="(ReadWrite) " ]\n    RecordAction [label=" RecordAction (4)" fillcolor=1 tooltip="(ReadWrite) " ]\n    vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c [label="\ud83d\udc68\u200d\ud83d\udc66 InsurancePolicyPaymentScheduleEntry__c (50)" fillcolor=1 tooltip="(ControlledByParent) " ]\n\n    // Relations\n    Attachment -> InsurancePolicy [label="Attachments" dir=back tooltip="ParentId" fontcolor=black penwidth=2]\n    Claim -> InsurancePolicy [label="Claims" dir=back tooltip="PolicyNumberId" fontcolor=black ]\n    ContentDocumentLink -> InsurancePolicy [label="ContentDocumentLinks" dir=back tooltip="LinkedEntityId" fontcolor=black penwidth=2]\n    ContentVersion -> InsurancePolicy [label="FirstPublishLocationId" dir=back tooltip="FirstPublishLocationId" fontcolor=black ]\n    FeedItem -> InsurancePolicy [label="ParentId" dir=back tooltip="ParentId" fontcolor=black penwidth=2]\n    InsurancePolicy -> InsurancePolicy [label="DerivedPolicies" dir=back tooltip="OriginalPolicyId" fontcolor=black ]\n    InsurancePolicy -> InsurancePolicy [label="ChildInsurancePolicies" dir=back tooltip="ParentPolicyId" fontcolor=black ]\n    InsurancePolicy -> InsurancePolicy [label="PriorInsurancePolicies" dir=back tooltip="PriorPolicyId" fontcolor=black ]\n    InsurancePolicy -> InsurancePolicy [label="OriginalPolicies__r" dir=back tooltip="vlocity_ins_fsc__OriginalPolicyId__c" fontcolor=black ]\n    InsurancePolicyAsset -> InsurancePolicy [label="InsurancePolicyAssets" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]\n    InsurancePolicyCoverage -> InsurancePolicy [label="InsurancePolicyCoverages" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]\n    InsurancePolicyMemberAsset -> InsurancePolicy [label="InsurancePolicyId" dir=back tooltip="InsurancePolicyId" fontcolor=black ]\n    InsurancePolicyParticipant -> InsurancePolicy [label="InsurancePolicyParticipants" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]\n    InsurancePolicySurcharge -> InsurancePolicy [label="InsurancePolicySurcharges" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]\n    InsurancePolicyTransaction -> InsurancePolicy [label="InsurancePolicyTransactions" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]\n    InsurancePolicyTransaction -> InsurancePolicy [label="CurrentPolicyTransactions" dir=back tooltip="InsurancePolicyVersionId" fontcolor=black ]\n    ProducerCommission -> InsurancePolicy [label="ProducerCommissions" dir=back tooltip="InsurancePolicyId" fontcolor=black ]\n    Quote -> InsurancePolicy [label="Quotes__r" dir=back tooltip="vlocity_ins_fsc__SourceInsurancePolicyId__c" fontcolor=black ]\n    RecordAction -> InsurancePolicy [label="RecordActions" dir=back tooltip="RecordId" fontcolor=black penwidth=2]\n    vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c -> InsurancePolicy [label="InsurancePolicyPaymentSchedule__r" dir=back tooltip="vlocity_ins_fsc__InsurancePolicyId__c" fontcolor=black penwidth=2]\n    InsurancePolicy->Group [label="OwnerId" fontcolor="black" style="dotted" color="black" tooltip="Owner ID"] \n    InsurancePolicy->User [label="CreatedById" fontcolor="black" style="dotted" color="black" tooltip="Created By ID"] \n    InsurancePolicy->User [label="LastModifiedById" fontcolor="black" style="dotted" color="black" tooltip="Last Modified By ID"] \n    InsurancePolicy->Account [label="NameInsuredId" fontcolor="black" style="dotted" color="black" tooltip="Account ID"] \n    InsurancePolicy->InsurancePolicy [label="PriorPolicyId" fontcolor="black" style="dotted" color="black" tooltip="Insurance Policy ID"] \n    InsurancePolicy->Product2 [label="ProductId" fontcolor="black" style="dotted" color="black" tooltip="Product ID"] \n    InsurancePolicy->InsurancePolicy [label="ParentPolicyId" fontcolor="black" style="dotted" color="black" tooltip="Insurance Policy ID"] \n    InsurancePolicy->Producer [label="ProducerId" fontcolor="black" style="dotted" color="black" tooltip="Producer ID"] \n    InsurancePolicy->Opportunity [label="SourceOpportunityId" fontcolor="black" style="dotted" color="black" tooltip="Opportunity ID"] \n    InsurancePolicy->Quote [label="SourceQuoteId" fontcolor="black" style="dotted" color="black" tooltip="Quote ID"] \n    InsurancePolicy->LegalEntity [label="UnderwritingEntityId" fontcolor="black" style="dotted" color="black" tooltip="Legal Entity ID"] \n    InsurancePolicy->InsurancePolicy [label="OriginalPolicyId" fontcolor="black" style="dotted" color="black" tooltip="Insurance Policy ID"] \n    InsurancePolicy->vlocity_ins__ContractLineItem__c [label="ContractLineItemId__c" fontcolor="brown" style="dotted" color="black" tooltip="Plan"] \n    InsurancePolicy->InsurancePolicy [label="OriginalPolicyId__c" fontcolor="brown" style="dotted" color="black" tooltip="Original Policy"] \n    InsurancePolicy->vlocity_ins__ProductionCode__c [label="ProductionCodeId__c" fontcolor="brown" style="dotted" color="black" tooltip="Production Code"] \n\n}',legend:'digraph {\n    compound=true;\n    #rankdir=LR;\n    node [\n        labeljust="l"\n        colorscheme="pubu7"\n        fillcolor=1\n        style="filled"\n        shape=rect\n    ]\n\n    \n    subgraph cluster_1 { \n         label = "legend";\n    \n     Inacessible [ fillcolor=1 tooltip="() " ]\n     Readable [ fillcolor=3 tooltip="() " ]\n     Writable [ fillcolor=5 tooltip="() " ]\n    }\n}'};function u(o){let{options:e,onClick:t,value:u="InsurancePolicy"}=o;const p=(0,n.useRef)(null),b=d[u]||"";return(0,n.useEffect)((()=>{if(b&&p.current){var o=(0,c.eR)().duration(750).ease(a.G);try{(0,r.f)(p.current,{...s,...e||{}}).transition(o).renderDot(b).on("end",(function(){t&&(0,l.Z)(".node").on("click",(function(){var o=(0,i.Z)(this).selectAll("title").text().trim();t&&t(o)}))}))}catch(n){console.error(n)}}}),[b,p.current]),n.createElement("div",{ref:p})}},49425:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=t(87462),l=(t(67294),t(3905)),i=t(79170);const c={description:"Browse and analyze your salesforce org focusing on the object you most use",title:"Object Manager",keywords:["Documentation","Salesforce","PermissionSet","PermissionSetGroup"]},r="Object Manager",a={unversionedId:"OrgDetails/index",id:"OrgDetails/index",title:"Object Manager",description:"Browse and analyze your salesforce org focusing on the object you most use",source:"@site/docs/1. OrgDetails/index.md",sourceDirName:"1. OrgDetails",slug:"/OrgDetails/",permalink:"/documentation/docs/OrgDetails/",draft:!1,editUrl:"https://github.com/sf-explorer/documentation/tree/master/docs/1. OrgDetails/index.md",tags:[],version:"current",frontMatter:{description:"Browse and analyze your salesforce org focusing on the object you most use",title:"Object Manager",keywords:["Documentation","Salesforce","PermissionSet","PermissionSetGroup"]},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/documentation/docs/Architecture"},next:{title:"Search",permalink:"/documentation/docs/Query/"}},s={},d=[{value:"1\ufe0f\u20e3 Grouping and filtering",id:"1\ufe0f\u20e3-grouping-and-filtering",level:3},{value:"2\ufe0f\u20e3 Object detail",id:"2\ufe0f\u20e3-object-detail",level:3},{value:"3\ufe0f\u20e3 Nb records",id:"3\ufe0f\u20e3-nb-records",level:3},{value:"4\ufe0f\u20e3 Custom fields",id:"4\ufe0f\u20e3-custom-fields",level:3},{value:"5\ufe0f\u20e3 Object Permissions",id:"5\ufe0f\u20e3-object-permissions",level:3},{value:"6\ufe0f\u20e3 Sharing model",id:"6\ufe0f\u20e3-sharing-model",level:3}],u={toc:d};function p(o){let{components:e,...c}=o;return(0,l.kt)("wrapper",(0,n.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"object-manager"},"Object Manager"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The best documentation is the one you don't write")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SF Explorer Object Manager")," retrieve the usage of your org objects and provide:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1\ufe0f\u20e3 Grouping and filtering based on the different exposed attributes (category, usage, record types...) "),(0,l.kt)("li",{parentName:"ul"},"2\ufe0f\u20e3 API Name and associated documentation - a click on the API Name provide extra detail on the object"),(0,l.kt)("li",{parentName:"ul"},"3\ufe0f\u20e3 Usage with associated percentage in org"),(0,l.kt)("li",{parentName:"ul"},"4\ufe0f\u20e3 The number of custom fields"),(0,l.kt)("li",{parentName:"ul"},"5\ufe0f\u20e3 ",(0,l.kt)("strong",{parentName:"li"},"Available permissions")," based on a given profile / list of permission set groups"),(0,l.kt)("li",{parentName:"ul"},"6\ufe0f\u20e3 Sharing model")),(0,l.kt)("p",null,"Each element listed above can be clicked to provide additionnal detail - see below"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"example",src:t(35509).Z,width:"3012",height:"1766"})," "),(0,l.kt)("h3",{id:"1\ufe0f\u20e3-grouping-and-filtering"},"1\ufe0f\u20e3 Grouping and filtering"),(0,l.kt)("p",null,"The proposed vizualisation is just an example - you can use excel like feature to regroup, sort or filter your data"),(0,l.kt)("h3",{id:"2\ufe0f\u20e3-object-detail"},"2\ufe0f\u20e3 Object detail"),(0,l.kt)("p",null,"Your salesforce model can be complex like the ",(0,l.kt)("strong",{parentName:"p"},"InsurancePolicy")," FSC object below. "),(0,l.kt)(i.Z,{value:"InsurancePolicy",mdxType:"D3Graphviz"}),(0,l.kt)("admonition",{title:"Interactive graph",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"A node can be click to zoom on the associated object. A tooltip is also providing additional contextual information.")),(0,l.kt)("p",null,"Note that the color of each node is associated to the selected profil/permission set group selected above (see 5\ufe0f\u20e3 Object Permissions)"),(0,l.kt)("img",{src:"/documentation/img/legend.png",alt:"drawing",width:"300"}),(0,l.kt)("h3",{id:"3\ufe0f\u20e3-nb-records"},"3\ufe0f\u20e3 Nb records"),(0,l.kt)("p",null,"Clicking on the number of record of a given object gives you a quick access to the query builder for you to search or compare records of that given object"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"example",src:t(57547).Z,width:"3088",height:"1304"})," "),(0,l.kt)("h3",{id:"4\ufe0f\u20e3-custom-fields"},"4\ufe0f\u20e3 Custom fields"),(0,l.kt)("p",null,"Custom fields columns gives you information on the level of customization your object contains"),(0,l.kt)("h3",{id:"5\ufe0f\u20e3-object-permissions"},"5\ufe0f\u20e3 Object Permissions"),(0,l.kt)("p",null,"To ease the transition to permission set groups, ",(0,l.kt)("strong",{parentName:"p"},"SF Explorer")," let you pick a profile and a list of permission set group to view/compare/analyze the impact on your model."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"example",src:t(20222).Z,width:"2700",height:"1616"})," "),(0,l.kt)("p",null," Once picked you can review the impact on each object with the ",(0,l.kt)("inlineCode",{parentName:"p"},"Permissions")," column."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"example",src:t(11201).Z,width:"3066",height:"768"})," "),(0,l.kt)("h3",{id:"6\ufe0f\u20e3-sharing-model"},"6\ufe0f\u20e3 Sharing model"),(0,l.kt)("p",null,"When the sharing model is Private or Public Read Only, SF Explorer provide a quick access the associated sharing table by clicking on the sharing rule"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"example",src:t(99186).Z,width:"3118",height:"1246"})))}p.isMDXComponent=!0},20222:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/comparePsets-b39a6a4d1940fbb05191a5c8ff073734.png"},35509:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/overview-8161875f299cd1c300c8f3ff42d03cee.png"},11201:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/psets-1310b3698abc8ad3018b106958d84c02.png"},57547:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/records-cdc16229d00e595407270a1d47c06326.png"},99186:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/sharing-c8c0b5fba8b1b417bebe1ab8639fce09.png"}}]);