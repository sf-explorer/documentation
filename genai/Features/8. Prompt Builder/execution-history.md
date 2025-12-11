---
id: execution-history
slug: /prompt-builder/execution-history
title: Execution History
sidebar_label: Execution History
sidebar_position: 4
description: Track and monitor prompt template usage, performance, and costs in production.
keywords:
  - execution history
  - monitoring
  - tracking
  - performance
---

# Execution History

Track how your prompt templates are being used in production.

---

## Overview

**Execution History shows the last 10 calls** from production with full details:
- Token usage per call
- Response times
- Model and version used
- User who triggered it
- Full request/response data

---

## Execution History View



## What's Tracked

### Per Execution

| Field | Description |
|-------|-------------|
| **Timestamp** | When template was executed |
| **Version** | Which template version |
| **Model** | AI model used |
| **Tokens** | Input + output tokens |
| **User** | Who triggered execution |
| **Variables** | Input values provided |
| **Response** | AI-generated output |
| **Duration** | Response time |

---

## Use Cases

### 1. Debugging Production Issues

**Scenario:** Agent is getting wrong responses

**Steps:**
1. Open template in GenAI Explorer
2. Scroll to Execution History
3. Find the problematic execution
4. Click "View Details"
5. Check variable values
6. Identify the issue (empty, wrong, malformed)
7. Fix and test

### 2. Monitoring Token Usage

**Scenario:** Want to reduce costs

**Steps:**
1. Review last 10 executions
2. Note average token count
3. Identify high-token calls
4. Look for patterns (long variables, verbose output)
5. Optimize template

**See:** **[Token Optimization](./token-optimization)** for strategies

### 3. Version Performance Comparison

**Scenario:** New template version deployed

**Steps:**
1. Compare token counts between versions
2. Check response times
3. Review output quality
4. Decide if new version is better

---

## Execution Details

Click "View Details" to see:

```json
{
  "executionTime": "2025-12-10T10:30:00Z",
  "templateVersion": "v2",
  "model": "GPT-4 Omni",
  "tokens": {
    "input": 150,
    "output": 300,
    "total": 450
  },
  "duration": "2.3s",
  "user": "john.smith@company.com",
  "variables": {
    "Customer_Name": "John Smith",
    "Product": "Enterprise License"
  },
  "finalPrompt": "You are a customer service agent...",
  "response": "Hello John Smith! I'd be happy..."
}
```

---

## Full History in Data Cloud

The last 10 executions are shown in GenAI Explorer.  
**For complete history**, query Data Cloud:

:::info Example Query
:::

```sql
SELECT 
  req.gatewayRequestId__c,
  req.prompt__c,
  req.maskedPrompt__c,
  req.userId__c,
  req.totalTokens__c,
  req.promptTokens__c,
  req.completionTokens__c,
  gen.responseText__c,
  req.promptTemplateDevName__c,
  req.promptTemplateVersionNo__c,
  req.timestamp__c,
  req.model__c,
  req.provider__c
FROM
  GenAIGatewayRequest__dlm req,
  GenAIGatewayResponse__dlm res,
  GenAIGeneration__dlm gen
WHERE 
  req.gatewayRequestId__c = res.generationRequestId__c
  AND res.generationResponseId__c = gen.generationResponseId__c
  AND req.promptTemplateDevName__c = '"${id}"'
ORDER BY req.timestamp__c DESC
LIMIT 10
```

**See:** **[Data Cloud Integration](/genai/data-cloud-integration)** for more query examples

---

## Related Documentation

- **[Testing Templates](./testing-templates)** - Pre-deployment testing
- **[Token Optimization](./token-optimization)** - Reduce costs
- **[Best Practices](./best-practices)** - Monitoring tips

---

**Regular monitoring ensures templates perform well and stay cost-effective.**





