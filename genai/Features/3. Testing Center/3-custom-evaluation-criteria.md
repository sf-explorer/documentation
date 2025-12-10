---
id: custom-evaluation-criteria
slug: /custom-evaluation-criteria
title: Custom Evaluation Criteria
sidebar_label: Custom Evaluations
sidebar_position: 8
description: Test specific strings or numbers in agent responses using JSONPath expressions with custom string and numeric comparisons
image: ../../images/testing_center.png
keywords:
  - agentforce
  - custom evaluations
  - JSONPath
  - string comparison
  - numeric comparison
  - test assertions
  - action validation
---

# Custom Evaluation Criteria

Test specific strings or numbers in agent responses, extending testing capabilities beyond standard expectations like topics and actions.

## The Problem

**Standard test expectations don't cover all testing needs.**

When testing AI agents, teams need to validate:

- 🎯 **Action Inputs**: "Did the agent pass the correct account ID?"
- 📊 **Action Outputs**: "Did the API call return success?"
- ⚡ **Performance**: "Was the response time under 10 seconds?"
- 🔢 **Counts**: "Were fewer than 5 API calls made?"
- 📝 **Data Formats**: "Is the phone number formatted correctly?"
- ✉️ **Content Validation**: "Does the email contain the customer's name?"

**In short**: You need granular control over what gets tested in agent responses.

## How GenAI Explorer Solves This

GenAI Explorer provides **custom evaluation criteria** with:

✅ **Two Evaluation Types**
   - String comparisons (equals, contains, starts with, ends with)
   - Numeric comparisons (equals, greater than, less than, etc.)

✅ **JSONPath Expressions**
   - Extract any value from test results
   - Target specific action inputs/outputs
   - Access nested data structures

✅ **Visual Editor**
   - Guided dialog for creating evaluations
   - JSONPath pattern examples
   - Real-time preview of logic

✅ **Flexible Assertions**
   - Test exact matches or partial matches
   - Compare ranges and thresholds
   - Validate data formats

## Custom Evaluation Types

### String Comparison

Test text values with four operators:

| Operator | Description | Example |
|----------|-------------|---------|
| `equals` | Exact match (case-sensitive) | "Jon" equals "Jon" ✓ |
| `contains` | Substring match | "Hello Jon" contains "Jon" ✓ |
| `startswith` | Prefix match | "Hello World" starts with "Hello" ✓ |
| `endswith` | Suffix match | "example.com" ends with ".com" ✓ |

### Numeric Comparison

Test numbers with five operators:

| Operator | Symbol | Description | Example |
|----------|--------|-------------|---------|
| `equals` | = | Equal to | 10 = 10 ✓ |
| `greater_than` | &gt; | Greater than | 15 &gt; 10 ✓ |
| `greater_than_or_equal` | &gt;= | Greater or equal | 10 &gt;= 10 ✓ |
| `less_than` | &lt; | Less than | 5 &lt; 10 ✓ |
| `less_than_or_equal` | &lt;= | Less or equal | 10 &lt;= 10 ✓ |

## How to Add Custom Evaluations

### Step 1: Open Test Editor

1. Navigate to your AI Evaluation Definition
2. Click **Edit** on a test case
3. Scroll to the **🔬 Custom Evaluations** section
4. Click **"Add Custom Evaluation"**

### Step 2: Configure Evaluation

**Example 1: Validate Email Recipient**

```
Evaluation Type: String Comparison
Label: Expected recipient match
Operator: equals

☑ Actual value is a JSONPath reference
Actual Value: 
  $.generatedData.invokedActions[*][?(@.function.name == 'DraftGenericReplyEmail')].function.input.recipient

Expected Value: alice@example.com
```

**Example 2: Check Subject Contains Keyword**

```
Evaluation Type: String Comparison
Label: Subject mentions project
Operator: contains

☑ Actual value is a JSONPath reference
Actual Value:
  $.generatedData.invokedActions[*][?(@.function.name == 'DraftGenericReplyEmail')].function.input.subject

Expected Value: project
```

**Example 3: Response Time Threshold**

```
Evaluation Type: Numeric Comparison
Label: Response under 10 seconds
Operator: less_than

☑ Actual value is a JSONPath reference
Actual Value:
  $.generatedData.latencyMs

Expected Value: 10000
```

### Step 3: Save and Test

1. Click **"Add Evaluation"**
2. Review the custom evaluation card
3. Click **"Save Changes"** on the test editor
4. Run your test to see results

## Understanding JSONPath

JSONPath expressions extract values from the test results JSON structure.

### Test Results Structure

When you run a test, the agent generates data like this:

```json
{
  "generatedData": {
    "invokedActions": [
      {
        "function": {
          "name": "DraftGenericReplyEmail",
          "input": { 
            "recipient": "alice@example.com",
            "subject": "Re: Project Update"
          },
          "result": "Success"
        }
      }
    ],
    "latencyMs": 2500
  }
}
```

### Common JSONPath Patterns

#### Get Action Input Field
```jsonpath
$.generatedData.invokedActions[*][?(@.function.name == 'ActionName')].function.input.fieldName
```

**Explanation:**
- `$.generatedData` - Start at root
- `.invokedActions[*]` - Look through all actions
- `[?(@.function.name == 'ActionName')]` - Filter to specific action
- `.function.input.fieldName` - Get the input field

**Example:**
```jsonpath
$.generatedData.invokedActions[*][?(@.function.name == 'DraftGenericReplyEmail')].function.input.recipient
```
Returns: `"alice@example.com"`

#### Get Action Output
```jsonpath
$.generatedData.invokedActions[*][?(@.function.name == 'ActionName')].function.result
```

**Example:**
```jsonpath
$.generatedData.invokedActions[*][?(@.function.name == 'CreateCase')].function.result
```
Returns: `"Success"`

#### Get Performance Metric
```jsonpath
$.generatedData.latencyMs
```
Returns: `2500`

### How Filtering Works

Given this data:
```json
{
  "generatedData": {
    "invokedActions": [
      {
        "function": {
          "name": "DraftGenericReplyEmail",
          "input": { "recipient": "alice@example.com" }
        }
      },
      {
        "function": {
          "name": "OtherFunction",
          "input": { "recipient": "bob@example.com" }
        }
      }
    ]
  }
}
```

This expression:
```jsonpath
$.generatedData.invokedActions[*][?(@.function.name == 'DraftGenericReplyEmail')].function.input.recipient
```

Returns: `"alice@example.com"` (not bob's email)

**Why?** The filter `[?(@.function.name == 'DraftGenericReplyEmail')]` only matches the first action.

## Real-World Use Cases

### 1. Validate Action Inputs

**Scenario:** Ensure correct account ID is passed

```
Type: String Comparison
Operator: startswith
Actual: $.generatedData.invokedActions[*][?(@.function.name == 'GetAccountInfo')].function.input.accountId
Expected: 001
```

### 2. Verify Action Success

**Scenario:** Check case creation succeeded

```
Type: String Comparison
Operator: contains
Actual: $.generatedData.invokedActions[*][?(@.function.name == 'CreateCase')].function.result
Expected: Success
```

### 3. Performance Testing

**Scenario:** Response within 5 seconds

```
Type: Numeric Comparison
Operator: less_than_or_equal
Actual: $.generatedData.latencyMs
Expected: 5000
```

### 4. API Call Limits

**Scenario:** Maximum 3 external calls

```
Type: Numeric Comparison
Operator: less_than_or_equal
Actual: $.generatedData.apiCallCount
Expected: 3
```

### 5. Data Format Validation

**Scenario:** Phone number has country code

```
Type: String Comparison
Operator: startswith
Actual: $.generatedData.invokedActions[*][?(@.function.name == 'FormatPhoneNumber')].function.result
Expected: +1
```

### 6. Content Requirements

**Scenario:** Email mentions customer name

```
Type: String Comparison
Operator: contains
Actual: $.generatedData.invokedActions[*][?(@.function.name == 'DraftEmail')].function.input.body
Expected: {{customerName}}
```

## Test Results Display

Custom evaluations appear as purple columns (🔬) in the test cases table:

**Pass (✓)**: 
- Green checkmark
- Shows comparison details
- Displays "10 < 10000" or "text contains 'keyword'"

**Fail (✗)**:
- Red error icon  
- Shows why it failed
- Displays "alice ≠ bob" or "15 ≥ 10"

**No Data (⚠)**:
- Orange warning
- "No test session found to evaluate"
- Run the test to get actual values

## Best Practices

### 1. Use Descriptive Labels

✅ **Good:**
- "Expected recipient match"
- "Subject contains project reference"
- "Response time under 10 seconds"

❌ **Bad:**
- "Test 1"
- "Check"
- "Custom eval"

### 2. Validate JSONPath First

Before using complex expressions:

1. Run test with results
2. Inspect the `generatedData` structure
3. Test your JSONPath against actual data
4. Verify it returns the expected value

### 3. Remember Case Sensitivity

String operators are **case-sensitive**:

```
"Jon" equals "jon"     ❌ Does not match
"Jon" equals "Jon"     ✅ Matches
```

For case-insensitive matching, use `contains` with known case.

### 4. Start Simple, Then Expand

1. **First**: Test basic fields (action names, simple inputs)
2. **Then**: Add nested field comparisons
3. **Finally**: Use complex filters and conditions

### 5. Character Limit

Each parameter field is limited to 100 characters. For long JSONPath:

- Break down complex paths
- Use shorter action names if possible
- Consider a different data structure

## Troubleshooting

### JSONPath Returns No Data

**Problem:** Custom evaluation shows "No actual value found"

**Solutions:**
1. ✓ Verify the action name is correct (case-sensitive)
2. ✓ Check that the field path exists in generated data
3. ✓ Ensure `isReference` checkbox is checked for JSONPath
4. ✓ Run test to generate fresh data

### String Comparison Fails Unexpectedly

**Problem:** Strings that look the same don't match

**Solutions:**
1. ✓ Check for extra whitespace (leading/trailing spaces)
2. ✓ Verify case sensitivity ("Jon" vs "jon")
3. ✓ Look for special characters
4. ✓ Use `contains` instead of `equals` for partial match

### Numeric Comparison Issues

**Problem:** Numbers don't compare correctly

**Solutions:**
1. ✓ Verify value is a number, not a string
2. ✓ Check decimal places (10.0 vs 10)
3. ✓ Ensure expected value is numeric
4. ✓ Use appropriate operator (>= vs >)

### Custom Evaluation Not Visible

**Problem:** Evaluation doesn't show in results

**Solutions:**
1. ✓ Save the test case after adding evaluation
2. ✓ Verify metadata is properly formatted
3. ✓ Refresh the page
4. ✓ Check that column isn't hidden

## Advanced Patterns

### Multiple Conditions

To test multiple values from the same action:

**Evaluation 1: Check recipient**
```
Actual: $.generatedData.invokedActions[*][?(@.function.name == 'SendEmail')].function.input.to
Expected: alice@example.com
```

**Evaluation 2: Check subject**
```
Actual: $.generatedData.invokedActions[*][?(@.function.name == 'SendEmail')].function.input.subject
Expected: Project Update
```

### Array Elements

Access specific array items:

```jsonpath
$.generatedData.invokedActions[*][?(@.function.name == 'ActionName')].additionalContext[0].value
```

The `[0]` gets the first context item.

### Nested Properties

Navigate deep structures:

```jsonpath
$.generatedData.invokedActions[*][?(@.function.name == 'ComplexAction')].function.input.metadata.customField.value
```

## Quick Reference

| Need | Type | Operator | Example Use |
|------|------|----------|-------------|
| Exact match | String | `equals` | Verify recipient |
| Contains text | String | `contains` | Check keywords |
| Starts with | String | `startswith` | Validate prefix |
| Ends with | String | `endswith` | Check domain |
| Performance | Numeric | `&lt;` or `&lt;=` | Response time |
| Limits | Numeric | `&lt;=` | API call count |
| Thresholds | Numeric | `&gt;` or `&gt;=` | Minimum value |
| Ranges | Numeric | Multiple evals | Min and max |

## Additional Resources

- [Salesforce Custom Evaluation Criteria Docs](https://developer.salesforce.com/docs/einstein/genai/guide/testing-api-custom-evaluation-criteria.html)
- [JSONPath Syntax Reference](https://goessner.net/articles/JsonPath/)
- [Agentforce Testing Overview](https://developer.salesforce.com/docs/einstein/genai/guide/testing-overview.html)

## Related Features

- [Adding Test Cases](/genai/adding-test-cases) - Create comprehensive test suites
- [Test Case Editing](/genai/test-case-editing) - Modify and refine tests
- [Conversation History](/genai/conversation-history) - Convert interactions to tests

