---
id: parameters
slug: /einstein-model-testing/parameters
title: Parameters Reference
sidebar_label: Parameters Reference
sidebar_position: 4
description: Complete reference for all AI model configuration parameters including temperature, max tokens, top-p, and more.
keywords:
  - parameters
  - configuration
  - max tokens
  - top-p
  - frequency penalty
---

# Parameters Reference

Complete guide to all configuration parameters available when testing AI models.

---

## Overview

Control AI model behavior through these key parameters:

| Parameter | Range | Default | Impact |
|-----------|-------|---------|--------|
| **Temperature** | 0.0 - 2.0 | 0.7 | Creativity vs consistency |
| **Max Tokens** | 1 - 4096 | 500 | Response length limit |
| **Top P** | 0.0 - 1.0 | 1.0 | Token selection diversity |
| **Frequency Penalty** | -2.0 - 2.0 | 0.0 | Reduce repetition |
| **Presence Penalty** | -2.0 - 2.0 | 0.0 | Encourage topic diversity |

---

## Temperature

**Controls randomness/creativity of responses**

### Range: 0.0 - 2.0

```
0.0 ━━━━━━━━━━━ 0.7 ━━━━━━━━━━━ 2.0
Deterministic    DEFAULT    Random
```

### When to Use

- **0.0 - 0.3**: Facts, data extraction, classification
- **0.4 - 0.9**: General use, customer support, content
- **1.0 - 2.0**: Creative writing, brainstorming

**See:** **[Temperature Guide](./temperature-guide)** for detailed guidance

---

## Max Tokens

**Limits the maximum length of the response**

### Range: 1 - 4096 (varies by model)

**Understanding Tokens:**
- 1 token ≈ 4 characters
- 1 token ≈ 0.75 words
- 100 tokens ≈ 75 words

### Common Settings

| Setting | Tokens | Words | Use Case |
|---------|--------|-------|----------|
| **Short** | 100 | ~75 | Quick answers, classifications |
| **Medium** | 500 | ~375 | Standard responses |
| **Long** | 1000 | ~750 | Detailed explanations |
| **Very Long** | 2000 | ~1500 | Articles, reports |

### Example

```json
{
  "maxTokens": 500,
  "prompt": "Explain quantum computing"
}
```

**Response:** Will stop at ~375 words or 500 tokens, whichever comes first.

### Best Practices

✅ **Set appropriate limits:**
- Short answers: 100-300 tokens
- Standard: 300-800 tokens
- Detailed: 800-2000 tokens

✅ **Consider cost:**
- Fewer tokens = lower cost
- Only pay for tokens you need

❌ **Avoid:**
- Setting too low (cuts off mid-sentence)
- Setting unnecessarily high (wastes cost)

---

## Top P (Nucleus Sampling)

**Controls diversity of token selection**

### Range: 0.0 - 1.0

**How It Works:**
- Selects from the top P probability mass
- Alternative to temperature
- More predictable than temperature at extremes

```
Top P = 1.0: Consider all tokens
Top P = 0.9: Consider top 90% probability mass
Top P = 0.5: Consider top 50% (most likely tokens)
Top P = 0.1: Consider top 10% (very focused)
```

### When to Use

| Top P | Behavior | Use Case |
|-------|----------|----------|
| **1.0** | All tokens considered | Maximum diversity |
| **0.9** | Top 90% | **DEFAULT - Balanced** |
| **0.5** | Top 50% | Focused responses |
| **0.1** | Top 10% | Very conservative |

### Example

```json
{
  "temperature": 0.8,
  "topP": 0.9
}
```

**Result:** Creative but still reasonable

### Temperature vs Top P

**General Rule:** Use one or the other, not both at extreme values

```javascript
// ✅ Good combinations
{temperature: 0.7, topP: 1.0}
{temperature: 1.0, topP: 0.9}

// ❌ Avoid
{temperature: 0.0, topP: 0.1}  // Too restrictive
{temperature: 2.0, topP: 1.0}  // Too random
```

---

## Frequency Penalty

**Reduces repetition of tokens based on frequency**

### Range: -2.0 - 2.0

**How It Works:**
- Positive: Decreases likelihood of repeated tokens
- Negative: Increases likelihood of repeated tokens
- 0: No penalty (default)

```
-2.0 ━━━━━━━━━ 0.0 ━━━━━━━━━ 2.0
More repetition  DEFAULT  Less repetition
```

### When to Use

| Value | Effect | Use Case |
|-------|--------|----------|
| **0.0** | No penalty | **DEFAULT** |
| **0.5 - 1.0** | Gentle reduction | Avoid minor repetition |
| **1.0 - 2.0** | Strong reduction | Prevent repetition |
| **-0.5 - -1.0** | Encourage patterns | Technical writing, lists |

### Example

```json
{
  "frequencyPenalty": 0.5,
  "prompt": "List the benefits of AI"
}
```

**Without Penalty:**
```
AI offers benefits like efficiency. The efficiency of AI...
AI provides efficiency... The efficiency benefits...
```

**With Penalty (0.5):**
```
AI offers benefits like efficiency, accuracy, and scalability.
These advantages include cost reduction and improved decision-making...
```

### Best Practices

✅ Use **0.3 - 0.8** to reduce repetition  
✅ Increase if you see repeated phrases  
❌ Don't use extreme values unless necessary  

---

## Presence Penalty

**Encourages topic diversity based on presence**

### Range: -2.0 - 2.0

**How It Works:**
- Positive: Penalizes tokens that have appeared
- Negative: Rewards tokens that have appeared
- 0: No penalty (default)

**Difference from Frequency Penalty:**
- Frequency: "How often?" (counts occurrences)
- Presence: "Has it appeared?" (binary)

```
-2.0 ━━━━━━━━━ 0.0 ━━━━━━━━━ 2.0
Narrow focus    DEFAULT   Diverse topics
```

### When to Use

| Value | Effect | Use Case |
|-------|--------|----------|
| **0.0** | No penalty | **DEFAULT** |
| **0.3 - 0.8** | Gentle diversity | Explore related topics |
| **0.8 - 2.0** | Strong diversity | Brainstorming, ideation |
| **-0.5 - -1.0** | Focus on theme | Stay on topic |

### Example

```json
{
  "presencePenalty": 0.6,
  "prompt": "Discuss AI applications"
}
```

**Without Penalty:**
```
AI in healthcare... healthcare applications... healthcare benefits...
more healthcare examples... healthcare future...
```

**With Penalty (0.6):**
```
AI in healthcare, education, finance, and manufacturing.
Each sector benefits differently... Transportation uses AI for...
```

### Best Practices

✅ Use **0.3 - 0.8** for topic diversity  
✅ Combine with frequency penalty for best results  
❌ Extreme values can make responses incoherent  

---

## Stop Sequences

**Defines tokens where the model should stop generating**

### Format: Array of strings

**Use Cases:**
- End at specific markers
- Control output structure
- Prevent unwanted continuation

### Example

```json
{
  "stopSequences": ["\n\n", "###", "END"],
  "prompt": "List 3 items:\n1."
}
```

**Stops at:** Double newline, `###`, or `END`

### Common Stop Sequences

```javascript
// Stop at double newline
stopSequences: ["\n\n"]

// Stop at section markers
stopSequences: ["###", "---", "END"]

// Stop at specific phrases
stopSequences: ["The End", "Conclusion:", "Summary:"]
```

---

## Parameter Combinations

### For Different Use Cases

#### Factual Q&A
```json
{
  "temperature": 0.2,
  "maxTokens": 300,
  "topP": 1.0,
  "frequencyPenalty": 0.0,
  "presencePenalty": 0.0
}
```

#### Customer Support
```json
{
  "temperature": 0.7,
  "maxTokens": 500,
  "topP": 0.9,
  "frequencyPenalty": 0.3,
  "presencePenalty": 0.2
}
```

#### Creative Writing
```json
{
  "temperature": 1.0,
  "maxTokens": 1000,
  "topP": 0.95,
  "frequencyPenalty": 0.5,
  "presencePenalty": 0.6
}
```

#### Code Generation
```json
{
  "temperature": 0.3,
  "maxTokens": 800,
  "topP": 1.0,
  "frequencyPenalty": 0.0,
  "presencePenalty": 0.0
}
```

---

## Testing Strategy

### Step 1: Start with Defaults

```json
{
  "temperature": 0.7,
  "maxTokens": 500,
  "topP": 1.0,
  "frequencyPenalty": 0.0,
  "presencePenalty": 0.0
}
```

### Step 2: Adjust One at a Time

**If responses are:**
- Too random → Decrease temperature
- Too repetitive → Increase frequency penalty
- Too focused → Increase presence penalty
- Too long → Decrease max tokens

### Step 3: Fine-Tune

Test variations and measure:
- Quality
- Consistency
- Cost
- User satisfaction

---

## Quick Reference

### Parameter Cheat Sheet

```
TEMPERATURE        FREQUENCY PENALTY     PRESENCE PENALTY
0.0-0.3: Facts     0.0: Default          0.0: Default
0.4-0.9: General   0.3-0.8: Reduce reps  0.3-0.8: Topic diversity
1.0-2.0: Creative  >1.0: Strong avoid    >1.0: Explore widely

MAX TOKENS         TOP P                 STOP SEQUENCES
100-300: Short     0.1-0.5: Focused      Custom markers
300-800: Standard  0.9-1.0: Diverse      End indicators
800-2000: Long     1.0: All considered   Section breaks
```

---

## Related Documentation

- **[Temperature Guide](./temperature-guide)** - Deep dive into temperature
- **[Model Comparison](./model-comparison)** - Choose the right model
- **[Best Practices](./best-practices)** - Testing tips
- **[Sample Prompts](./sample-prompts)** - Ready-to-use examples

---

**Master these parameters to fine-tune AI responses for your specific needs.**

