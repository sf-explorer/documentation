---
id: parameters
slug: /einstein-model-testing/parameters
title: Parameters Reference
sidebar_label: Parameters Reference
sidebar_position: 4
description: Reference for AI model configuration parameters.
keywords:
  - parameters
  - configuration
  - max tokens
  - temperature
---

# Parameters Reference

Guide to AI model configuration parameters.

---

## Current Implementation

The SF Explorer AI integration currently uses **default parameters** for all AI calls. Model selection is the primary way to control output behavior.

### Supported Parameters

| Parameter | Status | Notes |
|-----------|--------|-------|
| **Model Selection** | ✅ Supported | Choose model via Settings or API |
| **Prompt** | ✅ Supported | Your input text |
| **Temperature** | 🔜 Planned | Not yet configurable |
| **Max Tokens** | 🔜 Planned | Not yet configurable |
| **Top P** | 🔜 Planned | Not yet configurable |

---

## Model Selection (Primary Control)

Since advanced parameters aren't yet configurable, **choose the right model** for your use case:

| Use Case | Recommended Model | Why |
|----------|-------------------|-----|
| **Quick answers** | GPT-4o Mini, Claude 3 Haiku | Fast, cost-effective |
| **Complex reasoning** | GPT-4.1, Claude Sonnet 4 | Better accuracy |
| **Code generation** | GPT-4o, GPT-4.1 | Optimized for code |
| **Creative content** | GPT-5, Claude Sonnet 4.5 | Higher creativity |

---

## Parameter Concepts (Reference)

Understanding these concepts helps when parameters become configurable:

### Temperature (0.0 - 2.0)

Controls randomness/creativity:

```
0.0 ━━━━━━━━━━━ 0.7 ━━━━━━━━━━━ 2.0
Deterministic    Balanced      Creative
```

- **0.0 - 0.3**: Facts, data extraction
- **0.4 - 0.9**: General use
- **1.0 - 2.0**: Creative writing

### Max Tokens

Limits response length:

- 1 token ≈ 4 characters ≈ 0.75 words
- 100 tokens ≈ 75 words

| Setting | Tokens | Use Case |
|---------|--------|----------|
| Short | 100-300 | Quick answers |
| Medium | 300-800 | Standard responses |
| Long | 800-2000 | Detailed explanations |

### Top P (Nucleus Sampling)

Controls token selection diversity (0.0 - 1.0):

- **1.0**: Consider all tokens (default)
- **0.9**: Top 90% probability mass
- **0.5**: More focused responses

---

## Related Documentation

- **[Model Comparison](./model-comparison)** - Choose the right model
- **[Temperature Guide](./temperature-guide)** - Deep dive into temperature
- **[Best Practices](./best-practices)** - Testing tips

---

*Last Updated: January 2026*
