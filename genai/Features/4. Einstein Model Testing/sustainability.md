# AI Model Sustainability

## What is Sustainability?

Sustainability in AI refers to the environmental impact of running AI models, particularly focusing on:

- **Carbon Dioxide (CO₂) Emissions**: The greenhouse gases released during model inference
- **Water Consumption**: The water used for cooling data centers that host AI models
- **Energy Usage**: The electricity consumed to power computational resources

As AI adoption grows, understanding and minimizing these environmental impacts becomes crucial for responsible AI development and deployment.

## Why Sustainability Matters

### Environmental Impact

AI models, especially large language models (LLMs), require significant computational resources:

- **Data Centers**: Consume massive amounts of electricity for training and inference
- **Cooling Systems**: Require substantial water for temperature regulation
- **Carbon Footprint**: Contribute to greenhouse gas emissions that drive climate change

### Business Impact

Beyond environmental concerns, sustainability metrics also correlate with:

- **Cost Efficiency**: More sustainable models often have lower operational costs
- **Regulatory Compliance**: Increasing regulations around carbon reporting and environmental impact
- **Corporate Responsibility**: Demonstrating commitment to sustainable practices
- **Long-term Viability**: Ensuring AI development remains sustainable as adoption scales

### Making Informed Decisions

By understanding sustainability metrics, you can:

- **Choose Appropriate Models**: Select models that balance performance with environmental impact
- **Optimize Usage**: Make informed decisions about when to use larger vs. smaller models
- **Track Impact**: Monitor and report on your organization's AI carbon footprint
- **Reduce Costs**: Lower environmental impact often correlates with lower operational costs

## How We Calculate Sustainability

### CO₂ Emissions Calculation

We calculate CO₂ emissions using the following formula:

```
CO₂ (grams) = (Tokens ÷ 1000) × CO₂_per_1k_tokens
```

**Assumptions:**

- CO₂ values are measured in **grams per 1,000 tokens**
- Values are based on published research and industry estimates for model inference
- Calculations assume standard data center operations and average energy mix
- Values may vary based on:
  - Geographic location of data centers
  - Energy source (renewable vs. fossil fuels)
  - Model optimization and hardware efficiency
  - Actual workload patterns

**Data Sources:**

- Published research on AI model carbon footprints
- Industry benchmarks from major cloud providers
- Estimates based on model size and computational requirements

### Water Consumption Calculation

We calculate water consumption using the following formula:

```
Water (liters) = (Tokens ÷ 1000) × Water_liters_per_1k_tokens
```

**Assumptions:**

- Water consumption is measured in **liters per 1,000 tokens**
- Values account for:
  - Direct water usage for cooling systems
  - Indirect water usage in power generation
  - Average data center water efficiency
- Actual consumption varies based on:
  - Cooling technology (air vs. water cooling)
  - Climate and geographic location
  - Data center efficiency measures

### Sustainability Rating System

We use a **percentile-based rating system** to help you quickly identify the most sustainable models:

- **A+**: Top 20% most sustainable (lowest CO₂ emissions)
- **A**: Next 20% (very low CO₂ emissions)
- **B**: Middle 20% (moderate CO₂ emissions)
- **C**: Next 20% (higher CO₂ emissions)
- **D**: Bottom 20% (highest CO₂ emissions)

**How Ratings Are Calculated:**

1. All models with available CO₂ data are ranked from lowest to highest emissions
2. The range between minimum and maximum CO₂ values is calculated
3. Each model's percentile position within this range determines its rating
4. Ratings are **relative** to the current set of available models

**Important Notes:**

- Ratings are **dynamic** and update as new models are added
- Models without CO₂ data receive no rating (shown as "N/A")
- Ratings help compare models but should be considered alongside performance and cost
- Lower emissions generally correlate with lower costs and faster response times

### Cost Calculation

We also track cost alongside sustainability metrics:

```
Cost (USD) = (Tokens ÷ 1000) × Cost_USD_per_1k_tokens
```

Cost data helps you understand the **total cost of ownership** including both financial and environmental costs.

## Model Sustainability Comparison

The following table shows all available Einstein AI models with their sustainability metrics:

| Model Name | Parameters (Billions) | CO₂ per 1k Tokens (g) | Water per 1k Tokens (L) | Cost per 1k Tokens (USD) | Sustainability Rating |
|------------|---------------------|----------------------|------------------------|-------------------------|----------------------|
| GPT-4o Mini | 100 | 0.006 | 0.015 | 0.0015 | A+ |
| GPT-4o Mini (OpenAI) | 100 | 0.006 | 0.015 | 0.0015 | A+ |
| Claude Haiku 4.5 (Beta) | 50 | 0.006 | 0.015 | 0.0010 | A+ |
| Claude 3 Haiku | 50 | 0.006 | 0.015 | 0.0008 | A+ |
| Amazon Nova Lite | 10 | 0.006 | 0.015 | 0.0005 | A+ |
| Gemini 2.0 Flash Lite | 10 | 0.006 | 0.015 | 0.0007 | A+ |
| GPT-4.1 Mini | 100 | 0.008 | 0.020 | 0.0020 | A+ |
| O4 Mini (Beta) | 100 | 0.008 | 0.020 | 0.0020 | A+ |
| Gemini 2.5 Flash Lite | 10 | 0.008 | 0.020 | 0.0008 | A+ |
| Gemini 2.0 Flash | 100 | 0.016 | 0.040 | 0.0020 | A+ |
| GPT-5 Mini | 100 | 0.024 | 0.060 | 0.0050 | A+ |
| O3 (Beta) | 2000 | 0.024 | 0.060 | 0.0060 | A+ |
| Gemini 2.5 Flash | 100 | 0.024 | 0.060 | 0.0025 | A+ |
| Amazon Nova Pro | 100 | 0.028 | 0.070 | 0.0030 | A+ |
| Claude Sonnet 4.5 (Beta) | 200 | 0.056 | 0.140 | 0.0180 | A |
| Claude Sonnet 4 | 200 | 0.056 | 0.140 | 0.0180 | A |
| Claude 3.7 Sonnet | 200 | 0.056 | 0.140 | 0.0150 | A |
| GPT-4o | 1700 | 0.064 | 0.160 | 0.0100 | A |
| GPT-4.1 | 1800 | 0.072 | 0.180 | 0.0120 | B |
| Gemini 2.5 Pro | 1000 | 0.080 | 0.200 | 0.0100 | B |
| GPT-5 | 2000 | 0.160 | 0.400 | 0.0200 | D |
| GPT-5.1 (Beta) | 2000 | 0.160 | 0.400 | 0.0250 | D |
| Azure OpenAI Text Embedding Ada 002 | - | N/A | N/A | N/A | N/A |
| OpenAI Text Embedding Ada 002 | - | N/A | N/A | N/A | N/A |

### Understanding the Table

**Parameters (Billions):**
- Estimated number of parameters in billions
- Larger models generally have higher emissions but better capabilities

**CO₂ per 1k Tokens:**
- Measured in grams
- Lower values indicate better sustainability
- Values range from 0.006g (most sustainable) to 0.160g (least sustainable)

**Water per 1k Tokens:**
- Measured in liters
- Accounts for both direct and indirect water usage
- Values range from 0.015L to 0.400L per 1,000 tokens

**Cost per 1k Tokens:**
- Measured in US Dollars
- Lower cost often correlates with lower environmental impact
- Values range from $0.0005 to $0.0250 per 1,000 tokens

**Sustainability Rating:**
- Letter grade (A+ to D) based on CO₂ emissions percentile
- Helps quickly identify the most sustainable options
- Models without CO₂ data show "N/A"

## Best Practices for Sustainable AI Usage

### 1. Choose the Right Model Size

- **Use smaller models** (Mini/Lite variants) for simple tasks
- **Reserve larger models** for complex reasoning and high-accuracy requirements
- Consider the **cost-benefit ratio** of model capabilities vs. environmental impact

### 2. Optimize Token Usage

- **Reduce prompt length** where possible
- **Use efficient prompting techniques** to minimize token consumption
- **Cache responses** for repeated queries
- **Batch requests** when feasible

### 3. Monitor and Track Impact

- Use the **Performance & Sustainability Metrics** in SF Explorer to track:
  - Total CO₂ emissions per session
  - Water consumption
  - Cost analysis
- Set **sustainability goals** for your AI usage
- **Report metrics** to stakeholders

### 4. Consider Model Recommendations

- Use the **Model Tester** to compare models before deployment
- Review **sustainability ratings** alongside performance metrics
- Test with **realistic workloads** to understand actual impact

### 5. Balance Multiple Factors

Sustainability is important, but consider it alongside:

- **Performance**: Model accuracy and capabilities
- **Cost**: Financial impact of model usage
- **Latency**: Response time requirements
- **Use Case**: Specific requirements of your application

## Relatable Equivalents

To help you understand the environmental impact, SF Explorer converts CO₂ emissions and water consumption into relatable equivalents:

### CO₂ Equivalents

- **Car kilometers driven**: How far you could drive a car to produce the same CO₂
- **Dishwasher hours**: Hours of dishwasher operation equivalent
- **Smartphone charges**: Number of smartphone charges equivalent
- **Tree days**: Days a tree would need to absorb the CO₂

### Water Equivalents

- **Water bottles**: Number of 500mL water bottles
- **Shower minutes**: Minutes of average shower usage
- **Glasses of water**: Number of 250mL glasses
- **Toilet flushes**: Number of standard toilet flushes

These equivalents help make abstract environmental metrics more tangible and understandable.

## Limitations and Disclaimers

### Data Accuracy

- Sustainability metrics are **estimates** based on available research and industry data
- Actual values may vary based on:
  - Geographic location of data centers
  - Energy mix (renewable vs. fossil fuels)
  - Model optimizations and hardware efficiency
  - Specific workload patterns

### Model Coverage

- Not all models have complete sustainability data
- Some models (especially embedding models) may not have published metrics
- Data is updated as new information becomes available

### Calculation Scope

- Calculations focus on **inference** (model usage), not training
- Training emissions are typically much higher but are one-time costs
- Infrastructure overhead (networking, storage) is approximated

### Rating System

- Ratings are **relative** to the current set of available models
- Ratings update automatically as new models are added
- A "D" rating doesn't mean a model is "bad" - it's simply less sustainable relative to other options

## Future Improvements

We're continuously working to improve sustainability tracking:

- **More accurate data**: Incorporating provider-specific emissions data
- **Geographic factors**: Accounting for regional energy mixes
- **Real-time updates**: Reflecting changes in model efficiency
- **Training emissions**: Including model training impact where available
- **Carbon offsetting**: Tracking and reporting offset programs

## Additional Resources

- [Salesforce Sustainability Cloud](https://www.salesforce.com/products/sustainability-cloud/)
- [AI Carbon Footprint Research](https://www.nature.com/articles/d41586-021-02372-4)
- [Green AI Initiative](https://www.greenai.org/)
- [EPA Carbon Equivalencies Calculator](https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator)

## Questions or Feedback?

If you have questions about sustainability metrics or suggestions for improvements, please reach out through our support channels or contribute to our documentation.

---

**Last Updated**: January 2025  
**Data Version**: Based on models.json v1.0

