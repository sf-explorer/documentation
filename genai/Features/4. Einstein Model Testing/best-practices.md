---
id: best-practices
slug: /einstein-model-testing/best-practices
title: Best Practices
sidebar_label: Best Practices
sidebar_position: 6
description: Expert tips and best practices for effective AI model testing, evaluation, and sustainable deployment.
keywords:
  - best practices
  - testing
  - evaluation
  - tips
  - sustainability
---

# Best Practices

Expert tips for effective model testing, evaluation, and sustainable deployment.

---

## Testing Strategy

### 1. Start Simple

✅ **Begin with defaults:**
- Model: GPT-4o Mini (A+ sustainability rating)
- Temperature: 0.7
- Max Tokens: 500

**Why:** Establish a baseline with a well-balanced, sustainable model.

### 2. Test Multiple Models

✅ **Compare across providers:**
```
Test 1: GPT-4o Mini (Azure) - Default
Test 2: Claude 3 Haiku (AWS) - Speed focus
Test 3: Gemini 2.5 Flash (Google) - Alternative
Test 4: GPT-4.1 (Azure) - Quality focus
```

**Compare:** Quality, speed, cost, and CO₂ emissions.

### 3. Use Real Data

✅ **Test with actual use case prompts:**
- Real customer questions
- Actual data to analyze
- Production-like scenarios

✅ **Leverage prompt history:**
- Review what prompts worked before
- Re-run successful tests
- Track performance over time

❌ **Don't:** Only test with toy examples.

---

## Model Selection Framework

### Decision Matrix

```
Quality Requirements:
  Critical (99%) → GPT-4.1 or GPT-5 (if absolutely needed)
  High (95%) → GPT-4o or Claude Sonnet 4
  Medium (90%) → GPT-4o Mini or GPT-4.1 Mini
  Basic (85%) → Claude 3 Haiku or Amazon Nova Lite

Sustainability Priority:
  Most sustainable → Amazon Nova Lite (A+, 0.10g CO₂)
  Very sustainable → Gemini 2.0 Flash Lite (A+, 0.12g CO₂)
  Good balance → GPT-4o Mini (A+, 0.64g CO₂)
  High quality + sustainable → GPT-4.1 (A+, 0.56g CO₂)
```

### Hybrid Approach (Recommended)

**Best Practice:** Use multiple models based on task complexity

```javascript
function selectModel(request) {
  const complexity = analyzeComplexity(request);
  
  switch(complexity) {
    case 'complex':
      return 'GPT-4.1';           // 10% of requests, A+ rating
    case 'standard':
      return 'GPT-4o-Mini';       // 60% of requests, A+ rating
    case 'simple':
      return 'Claude-3-Haiku';    // 30% of requests, A+ rating
  }
}
```

**Result:** All A+ sustainability ratings while meeting quality needs.

---

## Evaluation Criteria

### Define Success Metrics

**Before testing, define:**

1. **Quality Threshold**
   ```
   Customer Support: 90% helpful responses
   Code Generation: 95% syntactically correct
   Data Classification: 98% accuracy
   ```

2. **Performance Requirements**
   ```
   Response Time: < 2 seconds
   Token Usage: < 500 tokens average
   Cost per Request: < $0.01
   ```

3. **Sustainability Goals**
   ```
   CO₂ per Request: < 1.0g
   Sustainability Rating: A+ or A preferred
   Monthly CO₂ Budget: < 10 kg
   ```

### Measure Objectively

**Quantitative Metrics:**
- Accuracy (for classification)
- Response time (milliseconds)
- Token count (cost proxy)
- CO₂ emissions (grams)
- Water consumption (liters)

**Qualitative Assessment:**
- Relevance (1-5 scale)
- Clarity (1-5 scale)
- Accuracy (1-5 scale)

---

## Sample Size Requirements

### Minimum Test Runs

| Use Case | Min Tests | Why |
|----------|-----------|-----|
| **Classification** | 50 | Need statistical significance |
| **Content Generation** | 10 | Check consistency |
| **Customer Support** | 20 | Vary user intents |
| **Data Analysis** | 15 | Test edge cases |

### Testing Pattern

```javascript
// ✅ Good: Multiple runs with metrics
const results = [];
for (let i = 0; i < 20; i++) {
  const result = await testModel(prompt, settings);
  results.push({
    quality: result.quality,
    responseTime: result.duration,
    tokens: result.tokens,
    co2: result.co2Grams,
    cost: result.costUsd
  });
}
analyzeResults(results);

// ❌ Poor: Single test
const result = await testModel(prompt, settings);
deployToProduction(); // Risky!
```

---

## Sustainability Best Practices

### 1. Prefer A+ Rated Models

**A+ rated models (lowest CO₂):**
- Amazon Nova Lite (0.10g/1k)
- Gemini 2.0 Flash Lite (0.12g/1k)
- GPT-4.1 (0.56g/1k)
- GPT-4o Mini (0.64g/1k)
- Claude 3 Haiku (0.64g/1k)

### 2. Monitor Environmental Impact

```javascript
const monthlyMetrics = {
  totalRequests: 10000,
  totalCO2Grams: 6400,    // 6.4 kg
  totalWaterLiters: 4600,
  avgCO2PerRequest: 0.64,
  sustainabilityRating: 'A+'
};

// Set sustainability alerts
if (monthlyMetrics.totalCO2Grams > 10000) { // 10 kg threshold
  alert("Monthly CO₂ budget exceeded");
}
```

### 3. Right-Size Your Models

**Before:** GPT-5 for all tasks
- CO₂: 13.78g per 1k tokens
- Cost: $0.020 per 1k tokens

**After:** Model routing
- Simple: Claude 3 Haiku (0.64g, $0.0008)
- Standard: GPT-4o Mini (0.64g, $0.0015)
- Complex: GPT-4.1 (0.56g, $0.012)

**Savings:** 95% CO₂ reduction, 90% cost reduction

---

## Cost Management

### Monitor Token Usage

**Track these metrics:**
```javascript
const metrics = {
  avgInputTokens: 150,
  avgOutputTokens: 300,
  totalTokens: 450,
  costPerRequest: 0.008,
  co2PerRequest: 0.29,     // grams
  requestsPerDay: 1000,
  dailyCost: 8.00,
  dailyCO2: 290             // grams
};
```

### Optimization Strategies

1. **Prompt Optimization**
   ```
   ❌ Verbose: "I would like you to please help me by..."
   ✅ Concise: "Summarize this text:"
   
   Savings: 20-30% fewer input tokens
   ```

2. **Token Limits**
   ```
   ❌ No limit: Average 800 tokens
   ✅ Set limit: 400 tokens
   
   Savings: 50% on output costs and CO₂
   ```

3. **Model Routing**
   ```
   ❌ All GPT-5: $200/month, 137 kg CO₂
   ✅ Mixed models: $30/month, 7 kg CO₂
   
   Savings: 85% cost, 95% CO₂
   ```

---

## Quality Assurance

### Pre-Deployment Checklist

- [ ] Tested with 20+ real prompts
- [ ] Success rate > threshold
- [ ] Response time acceptable
- [ ] Cost within budget
- [ ] CO₂ within sustainability goals
- [ ] Edge cases handled
- [ ] Error handling tested
- [ ] Monitoring in place

### Post-Deployment Monitoring

```javascript
// Monitor production metrics
setInterval(() => {
  const metrics = collectMetrics();
  
  if (metrics.quality < qualityThreshold) {
    alert("Quality degradation detected");
  }
  
  if (metrics.dailyCost > costBudget) {
    alert("Budget exceeded");
  }
  
  if (metrics.dailyCO2 > co2Budget) {
    alert("CO₂ budget exceeded - consider model optimization");
  }
}, 3600000); // Check hourly
```

---

## Common Mistakes

### ❌ Mistake 1: Using Premium Models for Simple Tasks

**Problem:** GPT-5 for classification = overkill
- Cost: $0.020 per 1k tokens
- CO₂: 13.78g per 1k tokens

**Solution:** Use Claude 3 Haiku or Amazon Nova Lite
- Cost: $0.0005-0.0008 per 1k tokens
- CO₂: 0.10-0.64g per 1k tokens
- Savings: 97% cost, 95% CO₂

### ❌ Mistake 2: Ignoring Sustainability Metrics

**Problem:** Focus only on cost, miss environmental impact

**Solution:** Track CO₂ alongside cost
- Use A+ rated models when possible
- Set monthly CO₂ budgets
- Report on sustainability metrics

### ❌ Mistake 3: Single Model Strategy

**Problem:** Using one model for everything

**Solution:** Implement model routing
```javascript
// Route based on complexity and sustainability
function selectModel(task) {
  if (task.complexity === 'high' && task.qualityCritical) {
    return 'GPT-4.1';      // A+ rating, high quality
  }
  return 'GPT-4o-Mini';    // A+ rating, balanced
}
```

### ❌ Mistake 4: Skipping Documentation

**Problem:** Can't reproduce or explain results

**Solution:** Document everything
- Test configurations
- Success criteria
- Sustainability metrics
- Rationale for model choices

**Pro Tip:** GenAI Explorer's prompt history automatically documents your tests!

---

## Testing Template

### Use This Structure

```markdown
## Test: [Test Name]

**Date:** [Date]
**Tester:** [Name]

### Configuration
- Model: GPT-4o Mini
- Temperature: 0.7
- Max Tokens: 500

### Test Results
- Success Rate: 92%
- Avg Response Time: 1.2s
- Avg Cost: $0.0007
- Avg CO₂: 0.29g
- Sustainability Rating: A+

### Comparison with Alternative
| Metric | GPT-4o Mini | Claude 3 Haiku |
|--------|-------------|----------------|
| Quality | 92% | 88% |
| Speed | 1.2s | 0.8s |
| Cost | $0.0007 | $0.0004 |
| CO₂ | 0.29g | 0.29g |

### Decision
[x] Deploy GPT-4o Mini (better quality)
[ ] Try different model
```

---

## Advanced Tips

### 1. A/B Testing with Sustainability

Compare approaches including environmental impact:
```
Group A: GPT-4o Mini, temp 0.5
Group B: Claude 3 Haiku, temp 0.7

Compare: Quality, Cost, Speed, CO₂ emissions
Winner: Based on your priorities
```

### 2. Sustainability-First Selection

When multiple models meet quality requirements:
```javascript
function selectMostSustainableModel(qualifiedModels) {
  return qualifiedModels.sort((a, b) => 
    a.co2PerToken - b.co2PerToken
  )[0]; // Return lowest CO₂ option
}
```

### 3. Prompt Versioning with Metrics

Track improvements across versions:
```
v1.0: Original prompt → 500 tokens, $0.0008, 0.32g CO₂
v1.1: Optimized prompt → 350 tokens, $0.0005, 0.22g CO₂
v1.2: Added examples → 400 tokens, $0.0006, 0.26g CO₂

Best: v1.1 (30% CO₂ reduction)
```

---

## Related Documentation

- **[Model Comparison](./model-comparison)** - Full model reference with sustainability
- **[Sustainability Guide](./sustainability)** - Deep dive into environmental impact
- **[Cost Optimization](./cost-optimization)** - Reduce spending
- **[Parameters Reference](./parameters)** - All settings
- **[Sample Prompts](./sample-prompts)** - Templates

---

**Follow these best practices for successful, sustainable AI model testing and deployment.**
