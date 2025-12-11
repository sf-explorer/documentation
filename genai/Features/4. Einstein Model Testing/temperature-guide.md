---
id: temperature-guide
slug: /einstein-model-testing/temperature-guide
title: Temperature Guide
sidebar_label: Temperature Guide
sidebar_position: 3
description: Understand and optimize the temperature parameter for creativity vs consistency in AI responses.
keywords:
  - temperature
  - creativity
  - consistency
  - parameters
---

# Temperature Guide

Master the temperature parameter to control creativity and consistency in AI responses.

---

## What is Temperature?

**Temperature** controls the randomness of AI responses on a scale from 0.0 to 2.0.

```
0.0 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.0
    Deterministic                      Random
    Consistent                         Creative
    Focused                            Diverse
```

---

## How It Works

### Low Temperature (0.0 - 0.3)

**Behavior:** Predictable, consistent, focused

**Characteristics:**
- ✅ Same input → Same output (mostly)
- ✅ Picks most probable tokens
- ✅ Factual and conservative
- ❌ Less creative
- ❌ Can be repetitive

**Use When:**
- Factual accuracy is critical
- Consistency matters
- Following templates
- Data extraction
- Classification tasks

**Examples:**
```
Temperature: 0.1
Prompt: "What is 2+2?"
Response: "4" (always)

Temperature: 0.1
Prompt: "Classify this email as spam or not spam"
Response: Highly consistent classification
```

---

### Medium Temperature (0.4 - 0.9)

**Behavior:** Balanced creativity and consistency

**Characteristics:**
- ✅ Good variety
- ✅ Mostly coherent
- ✅ Creative but controlled
- ✅ Natural-sounding responses

**Use When:**
- General conversation
- Customer support
- Content generation
- Most use cases

**Examples:**
```
Temperature: 0.7 (DEFAULT - RECOMMENDED)
Prompt: "Write a welcoming email to a new customer"
Response: Friendly, natural, varied responses
```

---

### High Temperature (1.0 - 2.0)

**Behavior:** Creative, diverse, unpredictable

**Characteristics:**
- ✅ Highly creative
- ✅ Unexpected ideas
- ✅ Diverse outputs
- ❌ Less factual
- ❌ May be incoherent
- ❌ Unpredictable quality

**Use When:**
- Creative writing
- Brainstorming
- Generating diverse options
- Experimental prompts

**Examples:**
```
Temperature: 1.5
Prompt: "Write a creative product description"
Response: Highly varied, creative, sometimes unexpected
```

---

## Temperature by Use Case

| Use Case | Recommended Temperature | Why |
|----------|------------------------|-----|
| **Code Generation** | 0.2 - 0.4 | Need accuracy, syntax correctness |
| **Data Extraction** | 0.0 - 0.2 | Consistency critical |
| **Classification** | 0.0 - 0.3 | Same input should give same category |
| **Customer Support** | 0.5 - 0.8 | Balance helpful & natural |
| **Content Writing** | 0.7 - 1.0 | Creative but coherent |
| **Brainstorming** | 1.0 - 1.5 | Maximum creativity |
| **Translation** | 0.3 - 0.5 | Accurate but natural |
| **Summarization** | 0.3 - 0.6 | Factual with some flexibility |

---

## Visual Examples

### Temperature: 0.0

```
Prompt: "Suggest a name for a tech startup"

Run 1: "TechVentures"
Run 2: "TechVentures"
Run 3: "TechVentures"
Run 4: "TechVentures"
Run 5: "TechVentures"

Result: Identical responses
```

### Temperature: 0.7

```
Prompt: "Suggest a name for a tech startup"

Run 1: "InnovateTech Solutions"
Run 2: "NexGen Dynamics"
Run 3: "CloudSphere Technologies"
Run 4: "DataPulse Systems"
Run 5: "TechFusion Labs"

Result: Varied but reasonable
```

### Temperature: 1.8

```
Prompt: "Suggest a name for a tech startup"

Run 1: "Quantum Banana Ventures"
Run 2: "Cyber Dolphin Matrix"
Run 3: "Nebula Pickle Systems"
Run 4: "Digital Moonbeam Corp"
Run 5: "Fractal Waffle Technologies"

Result: Very creative, sometimes nonsensical
```

---

## Common Mistakes

### ❌ Mistake 1: Using High Temperature for Facts

```
Temperature: 1.5
Prompt: "What is the capital of France?"
Response: "Paris... or maybe Lyon... I think it's Paris"

FIX: Use temperature 0.0-0.2 for factual questions
```

### ❌ Mistake 2: Using Low Temperature for Creativity

```
Temperature: 0.0
Prompt: "Write a creative story about a dragon"
Response: [Same generic story every time]

FIX: Use temperature 0.8-1.2 for creative content
```

### ❌ Mistake 3: Forgetting to Test

```
Problem: Assumed temperature 0.7 works for everything

FIX: Test different temperatures for your specific use case
```

---

## Testing Strategy

### Step 1: Start with Defaults

Begin at **temperature 0.7** (the default for most models).

### Step 2: Test Consistency

Run the same prompt 5 times:
- Too similar? → Increase temperature
- Too varied? → Decrease temperature

### Step 3: Evaluate Quality

Check if responses meet your standards:
- Too generic? → Increase temperature
- Too random? → Decrease temperature

### Step 4: Find Your Range

Most use cases work well between **0.5 - 0.9**.

---

## Advanced Tips

### Tip 1: Combine with Top-P

Use both temperature and top-p for fine control:

```javascript
{
  temperature: 0.8,  // Allow creativity
  top_p: 0.9         // But limit to top 90% probable tokens
}
```

### Tip 2: Different Temperatures for Different Stages

```javascript
// Planning stage: Low temperature
planningTemp = 0.3

// Execution stage: Medium temperature
executionTemp = 0.7

// Creative flourish: Higher temperature
creativeTemp = 1.0
```

### Tip 3: Temperature Scheduling

```javascript
// Start conservative, get more creative
initialTemp = 0.5
if (needsMoreCreativity) {
  temperature = 0.8
}
```

---

## Quick Reference

### Temperature Cheat Sheet

```
0.0 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2.0

0.0-0.2  │ ✅ Facts, Extraction, Classification
         │ ❌ Creative Writing
         
0.3-0.5  │ ✅ Code, Translation, Summarization
         │ ❌ Brainstorming
         
0.6-0.9  │ ✅ General Use, Support, Content
         │ 👍 DEFAULT RANGE
         
1.0-1.5  │ ✅ Creative Writing, Brainstorming
         │ ❌ Facts, Consistency
         
1.6-2.0  │ ✅ Experimental, Artistic
         │ ❌ Most practical uses
```

---

## Testing Template

Use this template to find your optimal temperature:

```markdown
## Temperature Test

**Prompt:** [Your prompt here]
**Use Case:** [e.g., customer support]
**Quality Criteria:** [e.g., helpful, professional, accurate]

### Temperature 0.3
- Run 1: [Response]
- Run 2: [Response]
- Run 3: [Response]
- **Assessment:** Too similar/different? Quality good?

### Temperature 0.7
- Run 1: [Response]
- Run 2: [Response]
- Run 3: [Response]
- **Assessment:** Too similar/different? Quality good?

### Temperature 1.0
- Run 1: [Response]
- Run 2: [Response]
- Run 3: [Response]
- **Assessment:** Too similar/different? Quality good?

**Conclusion:** Optimal temperature = [X]
```

---

## Related Documentation

- **[Parameters Reference](./parameters)** - All configuration options
- **[Model Comparison](./model-comparison)** - Choose the right model
- **[Best Practices](./best-practices)** - Testing tips
- **[Sample Prompts](./sample-prompts)** - Ready-to-use examples

---

**Master temperature control to get the perfect balance of creativity and consistency for your use case.**




