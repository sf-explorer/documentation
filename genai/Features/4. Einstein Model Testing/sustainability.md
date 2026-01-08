---
id: sustainability
slug: /einstein-model-testing/sustainability
title: AI Model Sustainability Guide
sidebar_label: Sustainability Guide
sidebar_position: 7
description: Understanding CO₂ emissions, water consumption, and environmental impact of AI models with actionable sustainability recommendations.
keywords:
  - sustainability
  - co2
  - carbon footprint
  - water consumption
  - green ai
  - environmental impact
---

# AI Model Sustainability Guide

Understanding and minimizing the environmental impact of AI model usage.

---

## Why Sustainability Matters

### The Environmental Impact of AI

AI models, especially large language models (LLMs), require significant computational resources:

- **Energy Consumption**: Large models like GPT-5 can use 20-100x more energy than efficient models
- **CO₂ Emissions**: Training GPT-3 produced ~552 tons of CO₂; inference adds up at scale
- **Water Usage**: Data centers use water for cooling - up to 17 liters per 1,000 tokens for largest models
- **Scaling Impact**: As AI adoption grows, cumulative environmental impact becomes significant

### Business & Environmental Benefits

| Benefit | Impact |
|---------|--------|
| **Cost Reduction** | More sustainable models are typically 5-50x cheaper |
| **Regulatory Compliance** | EU AI Act and sustainability reporting requirements |
| **Corporate Responsibility** | ESG goals and stakeholder expectations |
| **Performance** | Efficient models often have faster response times |

---

## How We Calculate Sustainability

### CO₂ Emissions Formula

```
CO₂ (grams) = (Tokens ÷ 1000) × CO₂_per_1k_tokens
```

**Data Sources:**
- Artificial Analysis benchmark data
- Model provider specifications
- Industry research on AI carbon footprints

**Factors Considered:**
- Model size (parameters)
- Hardware efficiency (DGX A100, H100, H200, TPU)
- Data center PUE (Power Usage Effectiveness)
- Carbon Intensity Factor (CIF) by region

### Water Consumption Formula

```
Water (liters) = (Tokens ÷ 1000) × Water_liters_per_1k_tokens
```

**Factors:**
- Direct cooling water usage
- Indirect water from power generation
- Data center location and climate

### Sustainability Rating System

Models are rated on a percentile-based scale:

| Rating | Percentile | CO₂ Range | Description |
|--------|------------|-----------|-------------|
| **A+** | Top 20% | < 1.0 g/1k | Most sustainable |
| **A** | 20-40% | 1.0-2.0 g/1k | Very sustainable |
| **B** | 40-60% | 2.0-5.0 g/1k | Moderate |
| **C** | 60-80% | 5.0-10.0 g/1k | Higher impact |
| **D** | Bottom 20% | > 10.0 g/1k | Highest impact |

---

## Complete Model Sustainability Reference

### All Models Ranked by CO₂ Efficiency

| Rank | Model | CO₂/1k (g) | Water/1k (L) | Cost/1k ($) | Rating |
|------|-------|------------|--------------|-------------|--------|
| 1 | Amazon Nova Lite | 0.10 | 0.07 | 0.0005 | **A+** |
| 2 | Gemini 2.0 Flash Lite | 0.12 | 0.15 | 0.0007 | **A+** |
| 3 | Gemini 2.5 Flash Lite | 0.15 | 0.18 | 0.0008 | **A+** |
| 4 | Gemini 2.0 Flash | 0.45 | 0.54 | 0.002 | **A+** |
| 5 | Amazon Nova Pro | 0.50 | 0.35 | 0.003 | **A+** |
| 6 | GPT-4.1 | 0.56 | 0.44 | 0.012 | **A+** |
| 7 | Gemini 2.5 Flash | 0.56 | 0.66 | 0.0025 | **A+** |
| 8 | GPT-4.1 Mini | 0.59 | 0.46 | 0.002 | **A+** |
| 9 | GPT-4o Mini | 0.64 | 0.46 | 0.0015 | **A+** |
| 10 | Claude 3 Haiku | 0.64 | 0.34 | 0.0008 | **A+** |
| 11 | Claude Haiku 4.5 | 0.78 | 0.41 | 0.001 | **A+** |
| 12 | O3 (Beta) | 0.99 | 0.78 | 0.006 | **A** |
| 13 | GPT-4o | 1.17 | 0.88 | 0.010 | **A** |
| 14 | Claude 3.7 Sonnet | 1.18 | 0.62 | 0.015 | **A** |
| 15 | Claude Sonnet 4 | 1.18 | 0.62 | 0.018 | **A** |
| 16 | Claude Sonnet 4.5 | 1.20 | 0.63 | 0.018 | **A** |
| 17 | Gemini 2.5 Pro | 1.54 | 1.84 | 0.010 | **A** |
| 18 | O4 Mini (Beta) | 5.13 | 4.04 | 0.002 | **B** |
| 19 | GPT-5 Mini | 7.75 | 6.10 | 0.005 | **B** |
| 20 | GPT-5 | 13.78 | 17.69 | 0.020 | **D** |
| 21 | GPT-5.1 (Beta) | 13.78 | 17.69 | 0.025 | **D** |

---

## Relatable Equivalents

To make environmental impact tangible, we convert metrics to everyday equivalents:

### CO₂ Equivalents

| CO₂ Amount | Equivalent |
|------------|------------|
| 1 gram | 0.004 km driving |
| 10 grams | Charging a smartphone |
| 100 grams | 1 dishwasher cycle |
| 1 kg | 4 km driving |

### Water Equivalents

| Water Amount | Equivalent |
|--------------|------------|
| 0.1 liters | 1/5 glass of water |
| 0.5 liters | 1 water bottle |
| 1 liter | 2 water bottles |
| 5 liters | 1 minute shower |

### Example: 10,000 Requests (500 tokens each)

| Model | CO₂ | Equivalent | Water | Equivalent |
|-------|-----|------------|-------|------------|
| GPT-5 | 68.9 kg | 275 km driving | 88.4 L | 18 min shower |
| GPT-4o Mini | 3.2 kg | 13 km driving | 2.3 L | 5 water bottles |
| Amazon Nova Lite | 0.5 kg | 2 km driving | 0.35 L | 1 glass water |

---

## Best Practices for Sustainable AI

### 1. Right-Size Your Model

**Rule of thumb:** Use the smallest model that meets quality requirements.

```
Simple tasks → Lite/Haiku models (A+)
Standard tasks → Mini models (A+)
Complex tasks → Pro/Full models (A/B)
Critical tasks → Premium models (C/D) - only when necessary
```

### 2. Optimize Token Usage

**Reduce input tokens:**
- Use concise prompts
- Remove unnecessary context
- Use efficient prompt templates

**Reduce output tokens:**
- Set appropriate max_tokens limits
- Request concise responses
- Use structured output formats

### 3. Implement Smart Routing

Route requests based on complexity:

```javascript
function selectModel(complexity) {
  switch(complexity) {
    case 'simple':
      return 'amazon-nova-lite';     // A+ rating
    case 'standard':
      return 'gpt-4o-mini';          // A+ rating
    case 'complex':
      return 'gpt-4.1';              // A+ rating
    case 'critical':
      return 'gpt-5';                // D rating - use sparingly
  }
}
```

### 4. Cache and Batch

- **Cache responses** for repeated queries
- **Batch similar requests** to reduce overhead
- **Use embeddings** for semantic caching

### 5. Monitor and Report

Track sustainability metrics:
- Total CO₂ emissions per day/week/month
- Water consumption trends
- Cost vs. sustainability correlation
- Model usage distribution

---

## Model Selection by Sustainability Priority

### 🌱 Sustainability-First (A+ Only)

Best for organizations prioritizing environmental impact:

| Model | CO₂/1k | Use Case |
|-------|--------|----------|
| Amazon Nova Lite | 0.10g | Simple tasks, high volume |
| Gemini 2.0 Flash Lite | 0.12g | Fast responses |
| GPT-4.1 | 0.56g | Complex tasks with sustainability |
| GPT-4o Mini | 0.64g | General purpose |
| Claude 3 Haiku | 0.64g | High-volume chatbots |

### ⚖️ Balanced Approach (A+ and A)

Good sustainability with broader capability:

| Model | CO₂/1k | Use Case |
|-------|--------|----------|
| GPT-4o | 1.17g | Multimodal tasks |
| Claude Sonnet 4 | 1.18g | Complex reasoning |
| Gemini 2.5 Pro | 1.54g | Research, analysis |

### 🎯 Quality-First (Accept Higher Impact)

When quality is paramount:

| Model | CO₂/1k | Use Case |
|-------|--------|----------|
| GPT-5 | 13.78g | Most complex tasks |
| GPT-5.1 | 13.78g | Cutting-edge features |

---

## ROI Calculator: Sustainability Switch

### Scenario: 100,000 requests/month

**Current State: GPT-5 for all requests**
- Monthly CO₂: 689 kg
- Monthly Water: 884 L
- Monthly Cost: $1,000

**After Optimization: Hybrid approach**
- 70% GPT-4o Mini → 224 kg CO₂
- 20% GPT-4.1 → 56 kg CO₂
- 10% GPT-5 → 69 kg CO₂

**Results:**
| Metric | Before | After | Savings |
|--------|--------|-------|---------|
| CO₂ | 689 kg | 349 kg | **49% reduction** |
| Water | 884 L | 450 L | **49% reduction** |
| Cost | $1,000 | $220 | **78% reduction** |

---

## Data Sources & Methodology

### Calculation Methodology

Our sustainability data is based on:

1. **Artificial Analysis Benchmarks**: Real-world inference measurements
2. **Hardware Specifications**: 
   - NVIDIA DGX A100/H100/H200
   - Google TPU v5e/v6e
3. **Data Center Metrics**:
   - PUE (Power Usage Effectiveness): 1.09-1.14
   - CIF (Carbon Intensity Factor): 0.231-0.34 gCO2e/Wh

### Assumptions

- Inference only (not training)
- Standard 300-token query baseline
- Average data center efficiency
- Regional carbon intensity averages

### Limitations

- Actual values vary by:
  - Geographic location
  - Time of day (grid mix)
  - Specific hardware configuration
  - Workload patterns
- Values are estimates; actual impact may differ ±20%

---

## Additional Resources

- [Salesforce Net Zero Cloud](https://www.salesforce.com/products/net-zero-cloud/)
- [AI Carbon Footprint Calculator](https://mlco2.github.io/impact/)
- [Artificial Analysis Benchmarks](https://artificialanalysis.ai/)
- [Green Software Foundation](https://greensoftware.foundation/)

---

## Key Takeaways

1. **Small changes = Big impact**: Switching from GPT-5 to GPT-4o Mini reduces CO₂ by 95%
2. **Cost and sustainability align**: Cheaper models are usually more sustainable
3. **Right-size your models**: Use premium models only when quality demands it
4. **Monitor and optimize**: Track your AI carbon footprint over time
5. **Hybrid approach wins**: Route requests to appropriate models based on complexity

---

**Building sustainable AI isn't just good for the planet—it's good for your bottom line.**

---

*Last Updated: January 2025*
*Data Version: Based on models.json with Artificial Analysis benchmark data*
