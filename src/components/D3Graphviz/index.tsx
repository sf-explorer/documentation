import React, { useRef, useState, useEffect } from 'react';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition'
import { graphviz } from 'd3-graphviz'
import { easeLinear } from 'd3-ease'


const defaultOptions = {
    fit: true,
    height: 600,
    width: 800,
    zoom: false,
    useWorker: false,
};

const InsurancePolicy=`digraph {
    compound=true;
    rankdir=LR;
    node [
        labeljust="l"
        colorscheme="pubu7"
        fillcolor=1
        style="filled"
        shape=rect
    ]

    //objects
    Group [label=" Group (3k)" fillcolor=1 tooltip="() " ]
    User [label=" User (4.1k)" fillcolor=1 tooltip="(Read) Represents a user in your organization." ]
    Account [label="🔐 Account (60)" fillcolor=5 tooltip="(Private) Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners)." ]
    InsurancePolicy [label="🔐 InsurancePolicy (1)" fillcolor=5 tooltip="(Private) Represents the type of insurance policy, such as auto, home, life, or annuity." ]
    Product2 [label=" Product2 (630)" fillcolor=5 tooltip="(ReadWrite) Represents a product that your company sells." ]
    Producer [label=" Producer " fillcolor=1 tooltip="() undefined" ]
    Opportunity [label="🔐 Opportunity (131)" fillcolor=5 tooltip="(Private) Represents an opportunity, which is a sale or pending deal." ]
    Quote [label="👨‍👦 Quote (16)" fillcolor=5 tooltip="(ControlledByParent) Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later." ]
    LegalEntity [label=" LegalEntity " fillcolor=1 tooltip="() undefined" ]
    ContractGroupPlan [label=" ContractGroupPlan " fillcolor=1 tooltip="() undefined" ]
    Attachment [label=" Attachment (20)" fillcolor=1 tooltip="() " ]
    Case [label="🔐 Case (24)" fillcolor=5 tooltip="(Private) Represents a case, which is a customer issue or problem." ]
    ContentDocumentLink [label=" ContentDocumentLink (31)" fillcolor=1 tooltip="() " ]
    ContentVersion [label="🔐 ContentVersion (17)" fillcolor=1 tooltip="(Private) " ]
    EntitySubscription [label=" EntitySubscription (2)" fillcolor=1 tooltip="() " ]
    Event [label="👨‍👦 Event (24)" fillcolor=1 tooltip="(ControlledByParent) Represents an event in the calendar. In the user interface, event and task records are collectively referred to as activities." ]
    EventRelation [label=" EventRelation (43)" fillcolor=1 tooltip="() " ]
    FeedComment [label=" FeedComment (2)" fillcolor=1 tooltip="() " ]
    FeedItem [label=" FeedItem (28)" fillcolor=1 tooltip="() " ]
    InsurancePolicyParticipant [label="👨‍👦 InsurancePolicyParticipant (1)" fillcolor=5 tooltip="(ControlledByParent) A junction object that associates the InsurancePolicy object with the Account object. This object represents the participants of an insurance policy. Insurance policy participants include policy owners and beneficiaries." ]
    Task [label="👨‍👦 Task (1)" fillcolor=1 tooltip="(ControlledByParent) Represents a business activity such as making a phone call or other to-do items. In the user interface, Task and Event records are collectively referred to as activities." ]
    TaskRelation [label=" TaskRelation (3)" fillcolor=1 tooltip="() " ]

    // Relations
    Attachment -> InsurancePolicy [label="ParentId" fontcolor="black"]
    Case -> InsurancePolicy [label="SourceId" fontcolor="black"]
    ContentDocumentLink -> InsurancePolicy [label="LinkedEntityId" fontcolor="black"]
    ContentVersion -> InsurancePolicy [label="FirstPublishLocationId" fontcolor="black"]
    EntitySubscription -> InsurancePolicy [label="ParentId" fontcolor="black"]
    Event -> InsurancePolicy [label="WhatId" fontcolor="black"]
    EventRelation -> InsurancePolicy [label="RelationId" fontcolor="black"]
    FeedComment -> InsurancePolicy [label="ParentId" fontcolor="black"]
    FeedItem -> InsurancePolicy [label="ParentId" fontcolor="black"]
    InsurancePolicy -> InsurancePolicy [label="OriginalPolicyId" fontcolor="black"]
    InsurancePolicy -> InsurancePolicy [label="ParentPolicyId" fontcolor="black"]
    InsurancePolicy -> InsurancePolicy [label="PriorPolicyId" fontcolor="black"]
    InsurancePolicyParticipant -> InsurancePolicy [label="InsurancePolicyId" fontcolor="black"]
    Task -> InsurancePolicy [label="WhatId" fontcolor="black"]
    TaskRelation -> InsurancePolicy [label="RelationId" fontcolor="black"]
    InsurancePolicy->Group [label="OwnerId" fontcolor="black" color="black" tooltip="Owner ID"] 
    InsurancePolicy->User [label="CreatedById" fontcolor="black" color="black" tooltip="Created By ID"] 
    InsurancePolicy->User [label="LastModifiedById" fontcolor="black" color="black" tooltip="Last Modified By ID"] 
    InsurancePolicy->Account [label="NameInsuredId" fontcolor="black" color="black" tooltip="Account ID"] 
    InsurancePolicy->InsurancePolicy [label="PriorPolicyId" fontcolor="black" color="black" tooltip="Insurance Policy ID"] 
    InsurancePolicy->Product2 [label="ProductId" fontcolor="black" color="black" tooltip="Product ID"] 
    InsurancePolicy->InsurancePolicy [label="ParentPolicyId" fontcolor="black" color="black" tooltip="Insurance Policy ID"] 
    InsurancePolicy->Producer [label="ProducerId" fontcolor="black" color="black" tooltip="Producer ID"] 
    InsurancePolicy->Opportunity [label="SourceOpportunityId" fontcolor="black" color="black" tooltip="Opportunity ID"] 
    InsurancePolicy->Quote [label="SourceQuoteId" fontcolor="black" color="black" tooltip="Quote ID"] 
    InsurancePolicy->LegalEntity [label="UnderwritingEntityId" fontcolor="black" color="black" tooltip="Legal Entity ID"] 
    InsurancePolicy->InsurancePolicy [label="OriginalPolicyId" fontcolor="black" color="black" tooltip="Insurance Policy ID"] 
    InsurancePolicy->ContractGroupPlan [label="ContractGroupPlanId" fontcolor="black" color="grey" tooltip=""] 
    InsurancePolicy->InsurancePolicy [label="RenewedFromPolicyId" fontcolor="black" color="grey" tooltip=""] 
    InsurancePolicy->Account [label="WritingCarrierAccountId" fontcolor="black" color="grey" tooltip=""] 
}`

const legend =`digraph {
    compound=true;
    #rankdir=LR;
    node [
        labeljust="l"
        colorscheme="pubu7"
        fillcolor=1
        style="filled"
        shape=rect
    ]

    
    subgraph cluster_1 { 
         label = "legend";
    
     Inacessible [ fillcolor=1 tooltip="() " ]
     Readable [ fillcolor=3 tooltip="() " ]
     Writable [ fillcolor=5 tooltip="() " ]
    }
}`

const data = {
    InsurancePolicy,
    legend
}

export default function D3GraphViz({ options, onClick, value = 'InsurancePolicy' }: {options?:any, onClick?: Function, value?: string}) {
    const d3Container = useRef(null)
    const dot : string = data[value as keyof typeof data] || ''
    useEffect(
        () => {
            if (dot && d3Container.current) {
                var t: any = transition()
                    .duration(750)
                    .ease(easeLinear);
                try {
                    graphviz(d3Container.current, {
                        ...defaultOptions,
                        ...options || {},
                    }).transition(t)
                        .renderDot(dot)
                        .on("end", interactive)
                } catch(e){
                    console.error(e)
                }
              

            }

            function interactive() {
                onClick && selectAll('.node').on("click", function () {
                    var title = select(this).selectAll('title').text().trim();
                    
                    onClick && onClick(title)
                })
            }
        },
        [dot, d3Container.current])

    return (
        <div
            ref={d3Container}
        />
    );
}
