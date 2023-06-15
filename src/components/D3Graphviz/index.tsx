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

const dot=`digraph {
    compound=true;
    rankdir=LR;
    node [
        labeljust="l"
        colorscheme="pubu7"
        fillcolor=1
        style="filled"
        shape=rect
    ]

    InsurancePolicy

    Group [label="Group" fillcolor=1]
    User [label="User" fillcolor=1]
    Account [label="Account" fillcolor=1]
    InsurancePolicy [label="InsurancePolicy" fillcolor=1]
    Product2 [label="Product2" fillcolor=1]
    Producer [label="Producer" fillcolor=1]
    Opportunity [label="Opportunity" fillcolor=1]
    Quote [label="Quote" fillcolor=1]
    LegalEntity [label="LegalEntity" fillcolor=1]
    ContractGroupPlan [label="ContractGroupPlan" fillcolor=1]
    Attachment [label="Attachment" fillcolor=1]
    Claim [label="Claim" fillcolor=1]
    ContentDocumentLink [label="ContentDocumentLink" fillcolor=1]
    ContentVersion [label="ContentVersion" fillcolor=1]
    FeedItem [label="FeedItem" fillcolor=1]
    InsurancePolicyAsset [label="InsurancePolicyAsset" fillcolor=1]
    InsurancePolicyCoverage [label="InsurancePolicyCoverage" fillcolor=1]
    InsurancePolicyMemberAsset [label="InsurancePolicyMemberAsset" fillcolor=1]
    InsurancePolicyParticipant [label="InsurancePolicyParticipant" fillcolor=1]
    InsurancePolicySurcharge [label="InsurancePolicySurcharge" fillcolor=1]

    // Relations
    Attachment -> InsurancePolicy [label="ParentId" fontcolor="black"]
    Claim -> InsurancePolicy [label="PolicyNumberId" fontcolor="black"]
    ContentDocumentLink -> InsurancePolicy [label="LinkedEntityId" fontcolor="black"]
    ContentVersion -> InsurancePolicy [label="FirstPublishLocationId" fontcolor="black"]
    FeedItem -> InsurancePolicy [label="ParentId" fontcolor="black"]
    InsurancePolicy -> InsurancePolicy [label="OriginalPolicyId" fontcolor="black"]
    InsurancePolicy -> InsurancePolicy [label="ParentPolicyId" fontcolor="black"]
    InsurancePolicy -> InsurancePolicy [label="PriorPolicyId" fontcolor="black"]
    InsurancePolicy -> InsurancePolicy [label="RenewedFromPolicyId" fontcolor="black"]
    InsurancePolicy -> InsurancePolicy [label="vlocity_ins_fsc__OriginalPolicyId__c" fontcolor="brown"]
    InsurancePolicyAsset -> InsurancePolicy [label="InsurancePolicyId" fontcolor="black"]
    InsurancePolicyCoverage -> InsurancePolicy [label="InsurancePolicyId" fontcolor="black"]
    InsurancePolicyMemberAsset -> InsurancePolicy [label="InsurancePolicyId" fontcolor="black"]
    InsurancePolicyParticipant -> InsurancePolicy [label="InsurancePolicyId" fontcolor="black"]
    InsurancePolicySurcharge -> InsurancePolicy [label="InsurancePolicyId" fontcolor="black"]
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
    InsurancePolicy->ContractGroupPlan [label="ContractGroupPlanId" fontcolor="black" color="black" tooltip="Contract Group Plan ID"] 
    InsurancePolicy->InsurancePolicy [label="RenewedFromPolicyId" fontcolor="black" color="black" tooltip="Insurance Policy ID"] 
    InsurancePolicy->Account [label="WritingCarrierAccountId" fontcolor="black" color="black" tooltip="Account ID"] 

}`

export default function D3GraphViz({ options, onClick }: {options?:any, onClick?: Function}) {
    const d3Container = useRef(null)
    
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
