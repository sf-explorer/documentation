---
id: sample-prompts
slug: /einstein-model-testing/sample-prompts
title: Sample Prompts Library
sidebar_label: Sample Prompts
sidebar_position: 5
description: Pre-built prompt templates for common scenarios including customer service, data analysis, and content generation.
keywords:
  - prompts
  - templates
  - examples
  - use cases
---

# Sample Prompts Library

Ready-to-use prompts for common scenarios. Copy, test, and adapt for your needs.

:::tip Prompt History
All prompts you test are automatically saved to your prompt history! 
- 🔄 Re-run any prompt with one click
- 📊 Compare results across different runs
- 💾 Export your successful prompts
:::

---

## Customer Service

### Email Response Generator

**Prompt:**
```text
Write a professional email response to this customer inquiry:

Customer: "{{customer_message}}"

Requirements:
- Be empathetic and helpful
- Address their concerns directly
- Provide clear next steps
- Professional but friendly tone
```text

**Recommended Settings:**
- Temperature: 0.7
- Max Tokens: 400
- Model: GPT-4o Mini

---

### Support Ticket Classifier

**Prompt:**
```text
Classify this support ticket into one of these categories:
- Technical Issue
- Billing Question
- Feature Request
- Account Access
- General Inquiry

Ticket: "{{ticket_text}}"

Category:
```text

**Recommended Settings:**
- Temperature: 0.2
- Max Tokens: 50
- Model: GPT-3.5 Turbo

---

### FAQ Answer Generator

**Prompt:**
```text
Answer this customer question based on our company policies:

Question: "{{customer_question}}"

Company Context:
- We offer 30-day returns
- Standard shipping is 5-7 business days
- Premium support available for enterprise customers

Answer:
```text

**Recommended Settings:**
- Temperature: 0.5
- Max Tokens: 300
- Model: GPT-4o Mini

---

## Data Analysis

### Data Summarizer

**Prompt:**
```text
Summarize this data in 3-5 key insights:

Data:
{{data_here}}

Key Insights:
1.
```text

**Recommended Settings:**
- Temperature: 0.4
- Max Tokens: 300
- Model: GPT-4o Mini

---

### Trend Analyzer

**Prompt:**
```text
Analyze these monthly sales figures and identify trends:

Data:
Jan: $45,000
Feb: $52,000
Mar: $48,000
Apr: $61,000
May: $67,000

Analysis:
```text

**Recommended Settings:**
- Temperature: 0.3
- Max Tokens: 400
- Model: GPT-4 Omni

---

### Report Generator

**Prompt:**
```text
Generate an executive summary from this data:

Metrics:
- Revenue: {{revenue}}
- Growth: {{growth}}%
- Customer Satisfaction: {{csat}}
- Support Tickets: {{tickets}}

Create a brief executive summary highlighting the most important points.
```text

**Recommended Settings:**
- Temperature: 0.5
- Max Tokens: 500
- Model: GPT-4 Omni

---

## Content Generation

### Product Description

**Prompt:**
```text
Write a compelling product description:

Product: {{product_name}}
Features: {{features}}
Target Audience: {{audience}}

Requirements:
- Highlight key benefits
- 2-3 paragraphs
- Persuasive but accurate
- Include call-to-action
```text

**Recommended Settings:**
- Temperature: 0.8
- Max Tokens: 400
- Model: GPT-4o Mini

---

### Social Media Post

**Prompt:**
```text
Create an engaging social media post:

Topic: {{topic}}
Platform: [LinkedIn/Twitter/Facebook]
Tone: [Professional/Casual/Exciting]
Max Length: {{character_limit}}

Include relevant hashtags.
```text

**Recommended Settings:**
- Temperature: 0.9
- Max Tokens: 200
- Model: GPT-4o Mini

---

### Blog Article Outline

**Prompt:**
```text
Create a detailed outline for a blog article:

Topic: {{topic}}
Target Audience: {{audience}}
Keywords to include: {{keywords}}

Create an outline with:
- Engaging title
- Introduction hook
- 5-7 main sections with subsections
- Conclusion with call-to-action
```text

**Recommended Settings:**
- Temperature: 0.7
- Max Tokens: 600
- Model: GPT-4 Omni

---

## Code Generation

### Function Generator

**Prompt:**
```text
Write a Python function to {{task_description}}.

Requirements:
- Include docstring
- Add error handling
- Use type hints
- Include example usage
```text

**Recommended Settings:**
- Temperature: 0.3
- Max Tokens: 800
- Model: GPT-4 Omni

---

### Code Review

**Prompt:**
```text
Review this code and suggest improvements:

```{{language}}
{{code_here}}
```text

Focus on:
- Code quality
- Potential bugs
- Performance
- Best practices
```text

**Recommended Settings:**
- Temperature: 0.4
- Max Tokens: 800
- Model: GPT-4 Omni

---

### Documentation Generator

**Prompt:**
```text
Generate documentation for this function:

```{{language}}
{{function_code}}
```text

Include:
- Description
- Parameters
- Return value
- Examples
- Edge cases
```text

**Recommended Settings:**
- Temperature: 0.3
- Max Tokens: 600
- Model: GPT-4 Omni

---

## Business Communications

### Meeting Summary

**Prompt:**
```text
Summarize this meeting transcript:

Transcript:
{{meeting_notes}}

Create a summary with:
- Key discussion points
- Decisions made
- Action items with owners
- Next steps
```text

**Recommended Settings:**
- Temperature: 0.3
- Max Tokens: 500
- Model: GPT-4o Mini

---

### Professional Email

**Prompt:**
```text
Write a professional email:

To: {{recipient}}
Purpose: {{purpose}}
Key Points:
- {{point_1}}
- {{point_2}}
- {{point_3}}

Tone: [Formal/Professional/Friendly]
```text

**Recommended Settings:**
- Temperature: 0.6
- Max Tokens: 400
- Model: GPT-4o Mini

---

### Proposal Writer

**Prompt:**
```text
Write a business proposal for [service/product]:

Client: {{client_name}}
Their Need: {{problem_statement}}
Our Solution: {{solution_description}}
Budget Range: {{budget}}

Include:
- Executive summary
- Problem statement
- Proposed solution
- Timeline
- Pricing
- Next steps
```text

**Recommended Settings:**
- Temperature: 0.5
- Max Tokens: 1000
- Model: GPT-4 Omni

---

## Creative Content

### Story Starter

**Prompt:**
```text
Write the opening paragraph of a story:

Genre: {{genre}}
Setting: {{setting}}
Main Character: {{character_description}}
Tone: {{tone}}

Make it engaging and hook the reader immediately.
```text

**Recommended Settings:**
- Temperature: 1.2
- Max Tokens: 300
- Model: GPT-4 Omni

---

### Brainstorming Assistant

**Prompt:**
```text
Generate 10 creative ideas for {{topic}}:

Context: {{context}}
Target Audience: {{audience}}
Constraints: {{constraints}}

Make the ideas diverse and innovative.
```text

**Recommended Settings:**
- Temperature: 1.3
- Max Tokens: 600
- Model: GPT-4 Omni

---

### Marketing Slogan

**Prompt:**
```text
Create 5 catchy marketing slogans for:

Product/Service: {{name}}
Key Benefit: {{benefit}}
Target Audience: {{audience}}
Brand Personality: {{personality}}

Slogans should be memorable and concise (under 10 words).
```text

**Recommended Settings:**
- Temperature: 1.0
- Max Tokens: 300
- Model: GPT-4o Mini

---

## Prompt Engineering Tips

### Use Clear Structure

✅ **Good:**
```text
Task: Summarize this article
Input: {{text}}
Requirements:
- 3-5 sentences
- Focus on main points
- Professional tone
```text

❌ **Poor:**
```text
Can you like summarize this maybe? {{text}}
```text

### Provide Examples

```text
Classify customer sentiment as Positive, Negative, or Neutral:

Examples:
"Love this product!" → Positive
"It's okay, nothing special" → Neutral
"Waste of money" → Negative

Now classify: "{{customer_feedback}}"
```text

### Specify Format

```text
Generate a product description in this format:

**Overview:** [2-3 sentences]
**Key Features:**
- [Feature 1]
- [Feature 2]
- [Feature 3]
**Best For:** [Target audience]
```text

### Set Context

```text
You are a technical support specialist with 10 years of experience.
A customer is asking about {{technical_issue}}.
Explain the solution in simple terms they can understand.
```text

---

## Template Variables

Replace these placeholders with your actual content:

- **customer_message** - Customer's question or complaint
- **data_here** - Your data to analyze
- **product_name** - Product or service name
- **code_here** - Code to review or document
- **topic** - Subject matter
- **audience** - Target audience description
- **language** - Programming language
- **meeting_notes** - Meeting transcript or notes

---

## Testing Your Prompts

### Step 1: Start with a Template

Choose the closest template to your use case.

### Step 2: Customize

Replace variables with your specific content.

### Step 3: Test Multiple Runs

Run the prompt 3-5 times to check consistency.

**Pro Tip:** All tests are saved to your prompt history - easily compare runs!

### Step 4: Adjust Parameters

- Too generic? → Increase temperature
- Too random? → Decrease temperature
- Too long? → Reduce max tokens
- Repetitive? → Add frequency penalty

### Step 5: Refine

Iterate based on results until you get consistent quality.

**Remember:** Your prompt history tracks all iterations, making it easy to:
- Compare different versions
- Identify what works best
- Share successful prompts with your team
- Resume testing sessions anytime

---

## Related Documentation

- **[Temperature Guide](./temperature-guide)** - Optimize creativity
- **[Parameters Reference](./parameters)** - All settings explained
- **[Best Practices](./best-practices)** - Testing tips
- **[Model Comparison](./model-comparison)** - Choose the right model

---

**Start with these templates and adapt them to your specific needs for faster, better results.**

