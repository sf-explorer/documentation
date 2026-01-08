# AI Model Sustainability & CO2 Consumption

This document provides comprehensive data on the environmental impact of AI models used in the SF Explorer application, including CO2 emissions, water consumption, and energy usage.

## Overview

AI model inference has a measurable environmental footprint. Understanding these impacts helps make informed decisions about model selection, balancing performance needs with sustainability goals.

### Key Metrics

- **CO2 Emissions (gCO2e)**: Grams of CO2 equivalent per 1,000 tokens
- **Water Consumption (L)**: Liters of water per 1,000 tokens (cooling + energy production)
- **Host Provider**: Cloud infrastructure hosting the model
- **PUE (Power Usage Effectiveness)**: Data center efficiency (lower is better, 1.0 is ideal)
- **CIF (Carbon Intensity Factor)**: gCO2e per Wh of electricity

## Model CO2 Consumption Data

### OpenAI Models (Azure)

| Model | CO2 (g/1k tokens) | Water (L/1k tokens) | Host | Source |
|-------|-------------------|---------------------|------|--------|
| GPT-5 | 13.778 | 17.686 | Azure | Artificial Analysis (gpt-5-2025-08-07 high, DGX H200/H100) |
| GPT-5 Mini | 7.746 | 6.102 | Azure | Artificial Analysis (gpt-5-mini-2025-08-07 high, DGX H200/H100) |
| GPT-4.1 | 0.555 | 0.437 | Azure | Artificial Analysis (gpt-4.1-2025-04-14, DGX H200/H100) |
| GPT-4.1 Mini | 0.588 | 0.464 | Azure | Artificial Analysis (gpt-4.1-mini-2025-04-14, DGX H200/H100) |
| GPT-4o | 1.165 | 0.878 | Azure | Artificial Analysis (gpt-4o-2024-11-20, DGX H200/H100) |
| GPT-4o Mini | 0.639 | 0.463 | Azure | Artificial Analysis (gpt-4o-mini-2024-07-18, DGX A100) |
| O3 | 0.990 | 0.780 | Azure | Artificial Analysis (o3-2025-04-16, DGX H200/H100) |
| O4 Mini | 5.132 | 4.043 | Azure | Artificial Analysis (o4-mini-2025-04-16 high, DGX H200/H100) |

### Anthropic Models (AWS Bedrock)

| Model | CO2 (g/1k tokens) | Water (L/1k tokens) | Host | Source |
|-------|-------------------|---------------------|------|--------|
| Claude 4.5 Sonnet | 1.200 | 0.630 | AWS | Artificial Analysis (claude-sonnet-4-5-20250929, DGX H200/H100) |
| Claude 4 Sonnet | 1.178 | 0.620 | AWS | Artificial Analysis (claude-sonnet-4-20250514, DGX H200/H100) |
| Claude 4.5 Haiku | 0.784 | 0.413 | AWS | Artificial Analysis (claude-haiku-4-5-20251001, DGX H200/H100) |
| Claude 3 Haiku | 0.644 | 0.339 | AWS | Artificial Analysis (claude-3-haiku-20240307, DGX H200/H100) |

### Google Models (Vertex AI)

| Model | CO2 (g/1k tokens) | Water (L/1k tokens) | Host | Source |
|-------|-------------------|---------------------|------|--------|
| Gemini 2.5 Pro | 1.543 | 1.838 | Google | Artificial Analysis (gemini-2.5-pro, TPU V6e) |
| Gemini 2.5 Flash | 0.556 | 0.663 | Google | Artificial Analysis (google/gemini-2.5-flash, TPU V6e) |
| Gemini 2.5 Flash Lite | 0.150 | 0.180 | Google | Estimated based on Gemini 2.5 Flash |
| Gemini 2.0 Flash | 0.450 | 0.540 | Google | Estimated based on Gemini 2.5 Flash |
| Gemini 2.0 Flash Lite | 0.120 | 0.145 | Google | Estimated based on Gemini 2.5 Flash Lite |

### Amazon Models (AWS Bedrock)

| Model | CO2 (g/1k tokens) | Water (L/1k tokens) | Host | Source |
|-------|-------------------|---------------------|------|--------|
| Amazon Nova Pro | 0.500 | 0.350 | AWS | Estimated based on similar models |
| Amazon Nova Lite | 0.100 | 0.070 | AWS | Estimated based on similar lightweight models |

## Environmental Factors by Cloud Provider

Different cloud providers have varying environmental impacts based on their infrastructure and energy sources:

| Provider | PUE | CIF (gCO2e/Wh) | WUE (Site) | WUE (Source) | Notes |
|----------|-----|----------------|------------|--------------|-------|
| **Azure** | 1.12 | 0.34 | 0.3 | 4.35 | Higher carbon intensity |
| **AWS** | 1.14 | 0.30 | 0.18 | 5.12 | Moderate carbon intensity |
| **Google** | 1.09 | 0.231 | 0.3 | 1.1 | **Lowest carbon** due to renewable energy |
| **xAI** | 1.5 | 0.385 | 0.36 | 3.142 | Higher PUE |
| **DeepSeek** | 1.27 | 0.6 | 1.2 | 6.016 | Highest carbon intensity |

### Key Takeaways

- **Google** has the lowest carbon footprint due to extensive renewable energy investments
- **Azure** and **AWS** have comparable environmental profiles
- **PUE** measures data center efficiency (1.0 = perfect, typical range 1.1-1.5)
- **CIF** varies significantly based on regional energy grid composition

## Sustainability Ratings

Models in the SF Explorer application are assigned sustainability ratings based on their CO2 emissions relative to other available models:

| Rating | Percentile | Description |
|--------|------------|-------------|
| **A+** | Top 20% | Most sustainable - lowest emissions |
| **A** | 21-40% | Very sustainable |
| **B** | 41-60% | Moderate impact |
| **C** | 61-80% | Higher impact |
| **D** | Bottom 20% | Least sustainable - highest emissions |

## Choosing Sustainable Models

### Best for Sustainability (A+ rated)

1. **Amazon Nova Lite** - 0.100 g CO2/1k tokens
2. **Gemini 2.0 Flash Lite** - 0.120 g CO2/1k tokens
3. **Gemini 2.5 Flash Lite** - 0.150 g CO2/1k tokens
4. **Gemini 2.0 Flash** - 0.450 g CO2/1k tokens
5. **Gemini 2.5 Flash** - 0.556 g CO2/1k tokens

### Best Balance of Performance & Sustainability

1. **GPT-4.1** - 0.555 g CO2/1k tokens (excellent reasoning)
2. **GPT-4.1 Mini** - 0.588 g CO2/1k tokens (fast, efficient)
3. **Claude 3 Haiku** - 0.644 g CO2/1k tokens (quick responses)
4. **GPT-4o Mini** - 0.639 g CO2/1k tokens (multimodal)
5. **Claude 4.5 Haiku** - 0.784 g CO2/1k tokens (fast Claude)

### High-Performance Models (Higher Emissions)

1. **GPT-5** - 13.778 g CO2/1k tokens (flagship reasoning)
2. **GPT-5 Mini** - 7.746 g CO2/1k tokens (GPT-5 quality, faster)
3. **O4 Mini** - 5.132 g CO2/1k tokens (reasoning model)
4. **Gemini 2.5 Pro** - 1.543 g CO2/1k tokens (Google flagship)

## Real-World Equivalents

To help contextualize emissions, here are equivalents for processing **1 billion prompts**:

| Model | Energy (MWh) | CO2 (Tons) | Water (kL) | Equivalent |
|-------|--------------|------------|------------|------------|
| GPT-5 (high) | 12,156 | 4,133 | 56,136 | ~898 cars/year |
| GPT-4o Mini | 564 | 192 | 1,910 | ~42 cars/year |
| Claude 3 Haiku | 644 | 193 | 3,398 | ~42 cars/year |
| Gemini 2.5 Flash | 723 | 167 | 995 | ~36 cars/year |

## Methodology

### Data Sources

- **Primary**: [Artificial Analysis](https://artificialanalysis.ai/) benchmark data
- **Hardware profiles**: DGX H200/H100, DGX A100, TPU V6e
- **Query length**: Short (300 tokens), Medium (1000 tokens), Long (1500 tokens)

### Calculation Formula

```
CO2 (gCO2e) = Energy (Wh) × CIF (gCO2e/Wh) × PUE
Water (mL) = Energy (Wh) × WUE × PUE
```

### Assumptions

1. **Query length normalization**: Values normalized to per-1,000-token basis
2. **Combined metrics**: Uses Mean Combined Energy/Carbon/Water values (average of min/max utilization)
3. **Estimated models**: Some models without direct benchmarks use extrapolated values from similar architectures

## References

- [Artificial Analysis AI Benchmarks](https://artificialanalysis.ai/)
- [Google Sustainability Report](https://sustainability.google/)
- [Microsoft Azure Sustainability](https://azure.microsoft.com/en-us/explore/global-infrastructure/sustainability)
- [AWS Sustainability](https://sustainability.aboutamazon.com/environment/the-cloud)

---

*Last updated: January 2026*

*Data source: `packages/sf-explorer-app/src/Framework/utils/co2Consumption.csv`*







