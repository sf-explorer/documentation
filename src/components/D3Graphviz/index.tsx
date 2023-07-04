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
    Group [label=" Group (30)" fillcolor=1 tooltip="() " ]
    User [label=" User (25)" fillcolor=1 tooltip="(Read) Represents a user in your organization." ]
    Account [label="🔐 Account (9)" fillcolor=5 tooltip="(Private) Represents an individual account, which is an organization or person involved with your business (such as customers, competitors, and partners)." ]
    InsurancePolicy [label="🔐 InsurancePolicy (25)" fillcolor=3 tooltip="(Private) Represents the type of insurance policy, such as auto, home, life, or annuity." ]
    Product2 [label=" Product2 (15)" fillcolor=3 tooltip="(ReadWrite) Represents a product that your company sells." ]
    Producer [label=" Producer (3)" fillcolor=3 tooltip="(ReadWrite) " ]
    Opportunity [label="🔐 Opportunity (19)" fillcolor=5 tooltip="(Private) Represents an opportunity, which is a sale or pending deal." ]
    Quote [label="👨‍👦 Quote (19)" fillcolor=5 tooltip="(ControlledByParent) Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later." ]
    LegalEntity [label=" LegalEntity " fillcolor=1 tooltip="() undefined" ]
    vlocity_ins__ContractLineItem__c [label="👨‍👦 ContractLineItem__c " fillcolor=3 tooltip="(ControlledByParent) " ]
    vlocity_ins__ProductionCode__c [label=" ProductionCode__c " fillcolor=1 tooltip="(ReadWrite) " ]
    Attachment [label=" Attachment (439)" fillcolor=1 tooltip="() " ]
    Claim [label=" Claim (10)" fillcolor=5 tooltip="(ReadWrite) " ]
    ContentDocumentLink [label=" ContentDocumentLink (258)" fillcolor=1 tooltip="() " ]
    ContentVersion [label="🔐 ContentVersion (131)" fillcolor=1 tooltip="(Private) " ]
    FeedItem [label=" FeedItem (16)" fillcolor=1 tooltip="() " ]
    InsurancePolicyAsset [label=" InsurancePolicyAsset (37)" fillcolor=1 tooltip="(ReadWrite) " ]
    InsurancePolicyCoverage [label="👨‍👦 InsurancePolicyCoverage (169)" fillcolor=1 tooltip="(ControlledByParent) A junction object that associates the InsurancePolicy object with the ProductCoverage object." ]
    InsurancePolicyMemberAsset [label="👨‍👦 InsurancePolicyMemberAsset (25)" fillcolor=1 tooltip="(ControlledByParent) " ]
    InsurancePolicyParticipant [label="👨‍👦 InsurancePolicyParticipant (24)" fillcolor=1 tooltip="(ControlledByParent) A junction object that associates the InsurancePolicy object with the Account object. This object represents the participants of an insurance policy. Insurance policy participants include policy owners and beneficiaries." ]
    InsurancePolicySurcharge [label="👨‍👦 InsurancePolicySurcharge (92)" fillcolor=1 tooltip="(ControlledByParent) " ]
    InsurancePolicyTransaction [label="👨‍👦 InsurancePolicyTransaction (25)" fillcolor=3 tooltip="(ControlledByParent) " ]
    ProducerCommission [label=" ProducerCommission (115)" fillcolor=5 tooltip="(ReadWrite) " ]
    RecordAction [label=" RecordAction (4)" fillcolor=1 tooltip="(ReadWrite) " ]
    vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c [label="👨‍👦 InsurancePolicyPaymentScheduleEntry__c (50)" fillcolor=1 tooltip="(ControlledByParent) " ]

    // Relations
    Attachment -> InsurancePolicy [label="Attachments" dir=back tooltip="ParentId" fontcolor=black penwidth=2]
    Claim -> InsurancePolicy [label="Claims" dir=back tooltip="PolicyNumberId" fontcolor=black ]
    ContentDocumentLink -> InsurancePolicy [label="ContentDocumentLinks" dir=back tooltip="LinkedEntityId" fontcolor=black penwidth=2]
    ContentVersion -> InsurancePolicy [label="FirstPublishLocationId" dir=back tooltip="FirstPublishLocationId" fontcolor=black ]
    FeedItem -> InsurancePolicy [label="ParentId" dir=back tooltip="ParentId" fontcolor=black penwidth=2]
    InsurancePolicy -> InsurancePolicy [label="DerivedPolicies" dir=back tooltip="OriginalPolicyId" fontcolor=black ]
    InsurancePolicy -> InsurancePolicy [label="ChildInsurancePolicies" dir=back tooltip="ParentPolicyId" fontcolor=black ]
    InsurancePolicy -> InsurancePolicy [label="PriorInsurancePolicies" dir=back tooltip="PriorPolicyId" fontcolor=black ]
    InsurancePolicy -> InsurancePolicy [label="OriginalPolicies__r" dir=back tooltip="vlocity_ins_fsc__OriginalPolicyId__c" fontcolor=black ]
    InsurancePolicyAsset -> InsurancePolicy [label="InsurancePolicyAssets" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]
    InsurancePolicyCoverage -> InsurancePolicy [label="InsurancePolicyCoverages" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]
    InsurancePolicyMemberAsset -> InsurancePolicy [label="InsurancePolicyId" dir=back tooltip="InsurancePolicyId" fontcolor=black ]
    InsurancePolicyParticipant -> InsurancePolicy [label="InsurancePolicyParticipants" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]
    InsurancePolicySurcharge -> InsurancePolicy [label="InsurancePolicySurcharges" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]
    InsurancePolicyTransaction -> InsurancePolicy [label="InsurancePolicyTransactions" dir=back tooltip="InsurancePolicyId" fontcolor=black penwidth=2]
    InsurancePolicyTransaction -> InsurancePolicy [label="CurrentPolicyTransactions" dir=back tooltip="InsurancePolicyVersionId" fontcolor=black ]
    ProducerCommission -> InsurancePolicy [label="ProducerCommissions" dir=back tooltip="InsurancePolicyId" fontcolor=black ]
    Quote -> InsurancePolicy [label="Quotes__r" dir=back tooltip="vlocity_ins_fsc__SourceInsurancePolicyId__c" fontcolor=black ]
    RecordAction -> InsurancePolicy [label="RecordActions" dir=back tooltip="RecordId" fontcolor=black penwidth=2]
    vlocity_ins_fsc__InsurancePolicyPaymentScheduleEntry__c -> InsurancePolicy [label="InsurancePolicyPaymentSchedule__r" dir=back tooltip="vlocity_ins_fsc__InsurancePolicyId__c" fontcolor=black penwidth=2]
    InsurancePolicy->Group [label="OwnerId" fontcolor="black" style="dotted" color="black" tooltip="Owner ID"] 
    InsurancePolicy->User [label="CreatedById" fontcolor="black" style="dotted" color="black" tooltip="Created By ID"] 
    InsurancePolicy->User [label="LastModifiedById" fontcolor="black" style="dotted" color="black" tooltip="Last Modified By ID"] 
    InsurancePolicy->Account [label="NameInsuredId" fontcolor="black" style="dotted" color="black" tooltip="Account ID"] 
    InsurancePolicy->InsurancePolicy [label="PriorPolicyId" fontcolor="black" style="dotted" color="black" tooltip="Insurance Policy ID"] 
    InsurancePolicy->Product2 [label="ProductId" fontcolor="black" style="dotted" color="black" tooltip="Product ID"] 
    InsurancePolicy->InsurancePolicy [label="ParentPolicyId" fontcolor="black" style="dotted" color="black" tooltip="Insurance Policy ID"] 
    InsurancePolicy->Producer [label="ProducerId" fontcolor="black" style="dotted" color="black" tooltip="Producer ID"] 
    InsurancePolicy->Opportunity [label="SourceOpportunityId" fontcolor="black" style="dotted" color="black" tooltip="Opportunity ID"] 
    InsurancePolicy->Quote [label="SourceQuoteId" fontcolor="black" style="dotted" color="black" tooltip="Quote ID"] 
    InsurancePolicy->LegalEntity [label="UnderwritingEntityId" fontcolor="black" style="dotted" color="black" tooltip="Legal Entity ID"] 
    InsurancePolicy->InsurancePolicy [label="OriginalPolicyId" fontcolor="black" style="dotted" color="black" tooltip="Insurance Policy ID"] 
    InsurancePolicy->vlocity_ins__ContractLineItem__c [label="ContractLineItemId__c" fontcolor="brown" style="dotted" color="black" tooltip="Plan"] 
    InsurancePolicy->InsurancePolicy [label="OriginalPolicyId__c" fontcolor="brown" style="dotted" color="black" tooltip="Original Policy"] 
    InsurancePolicy->vlocity_ins__ProductionCode__c [label="ProductionCodeId__c" fontcolor="brown" style="dotted" color="black" tooltip="Production Code"] 

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
