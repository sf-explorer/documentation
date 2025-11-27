---
id: adding-test-cases
slug: /adding-test-cases
title: Adding Test Cases
sidebar_label: Adding Test Cases
sidebar_position: 6
description: Create new test cases from scratch or convert real agent interactions into tests with multi-select support.
keywords:
  - agentforce
  - test cases
  - test creation
  - interaction history
  - bulk creation
---

# Adding Test Cases

Create comprehensive test suites by building test cases from scratch or converting real agent interactions into reusable tests.


## The Problem

**Creating comprehensive test suites manually is time-consuming and often misses edge cases.**

When testing AI agents, teams struggle with:

- ⏱️ **Time Consuming**: Manually writing dozens of test cases
- 🔍 **Missing Coverage**: Hard to think of all possible user inputs
- 🎯 **Real-World Gaps**: Test cases don't match actual user behavior
- 📝 **Repetitive Work**: Copy-pasting from interaction logs
- 🔄 **Iteration Speed**: Slow to expand test coverage
- 💡 **Discovery**: Not knowing what to test until users try it

**In short**: You need a fast way to build comprehensive test suites that reflect real user interactions.

## How GenAI Explorer Solves This

GenAI Explorer provides **flexible test case creation** with:

✅ **Dual Creation Modes**
   - Create from scratch with manual input
   - Convert real interactions into test cases automatically

✅ **Smart Action Filtering**
   - Actions automatically filtered by selected topic
   - Multi-select checkbox interface  
   - See available actions per topic instantly

✅ **Bulk Creation**
   - Select multiple interactions at once
   - Create 10+ test cases in seconds
   - Visual feedback for selections

✅ **Rich History View**
   - See recent agent sessions
   - Review topics, actions, and responses
   - Filter by timestamp and channel
   - Preview full conversations

✅ **Seamless Integration**
   - One-click "Add Test Case" button
   - Auto-numbering for new cases
   - Immediate save integration
   - Auto-recalculation of matches

**Impact:** Create test suites 10x faster, improve coverage by 300%, capture real user scenarios automatically.

## Overview

The Add Test Case feature provides two powerful ways to create test cases: manual creation for specific scenarios, and automatic creation from real agent interactions for comprehensive coverage.

## Accessing the Feature

### Location

The "Add Test Case" button is located in the test cases table toolbar (top right).

```
┌────────────────────────────────────────────────────┐
│ 📋 5 test cases • 3 types  [🔄 Refresh] [+ Add]   │
│                                                    │
│ [Test cases table...]                              │
└────────────────────────────────────────────────────┘
```

**Button**: Blue button with "+" icon labeled "Add Test Case"

### When to Use Each Mode

**From Scratch:**
- Testing specific edge cases
- Creating targeted validation tests
- Documenting expected behavior
- Building baseline test cases

**From History:**
- Capturing real user scenarios
- Expanding test coverage quickly
- Documenting actual agent behavior
- Creating regression tests

## Mode 1: Create from Scratch

### Overview

Build a test case manually by specifying the user utterance and expected outcomes.

### Fields

#### 1. User Utterance (Required)

**What it is:** The question or statement the user sends to the agent.

**Input:** Multiline text field (2 rows)

**Example:**
```
What is my account balance?
```

**Tips:**
- Be specific and clear
- Use natural language
- Match how users actually speak
- Vary phrasing for similar tests

#### 2. Expected Topic (Optional)

**What it is:** The conversational topic you expect the agent to identify.

**Input:** Dropdown selector

**Options:** Loaded from your GenAiPlanner configuration

**Example:**
```
ServiceTopic
BillingTopic  
SupportTopic
```

**Tips:**
- Select a topic to enable action selection
- Choose the most specific topic
- Leave blank if topic doesn't matter

#### 3. Expected Actions (Optional)

**What it is:** The actions you expect the agent to execute.

**Input:** Multi-select with checkboxes

**Behavior:**
- **Disabled** until topic is selected
- **Filtered** to show only actions from selected topic
- **Shows count:** "5 action(s) available from 'ServiceTopic'"

**Example:**
```
Selected Topic: ServiceTopic

Available Actions:
☑ GetBalance
☑ TransferFunds
☐ CheckAccountLimit
☐ UpdateProfile
☐ ResetPassword

2 actions selected
```

**Tips:**
- Select topic first
- Choose all actions the agent should execute
- Order doesn't matter
- Can select 1+ actions

#### 4. Expected Bot Response (Optional)

**What it is:** The text response you expect from the agent.

**Input:** Multiline textarea (3 rows)

**Example:**
```
Your balance is $1,234.56. You have available credit of $500.
```

**Tips:**
- Be specific about key information
- Can be partial or full match
- Leave blank if response text doesn't matter
- Focus on factual content

### Workflow

```
Step 1: Click "Add Test Case" button
   ↓
Step 2: Select "Create from Scratch" tab
   ↓
Step 3: Fill in fields:
   - Utterance (required)
   - Topic (optional)
   - Actions (optional, needs topic first)
   - Response (optional)
   ↓
Step 4: Click "Add Test Case"
   ↓
Result: New test case added to table
```

### Complete Example

**Input:**
```
Utterance: "I need to transfer $500 to my savings"
Topic: "TransferTopic"
Actions: ["ValidateAccount", "TransferFunds", "SendConfirmation"]
Response: "Successfully transferred $500 to your savings account."
```

**Generated Test Case:**
```json
{
  "number": "6",
  "inputs": {
    "utterance": "I need to transfer $500 to my savings"
  },
  "expectation": [
    {
      "name": "topic_sequence_match",
      "expectedValue": "TransferTopic"
    },
    {
      "name": "action_sequence_match",
      "expectedValue": "['ValidateAccount', 'TransferFunds', 'SendConfirmation']"
    },
    {
      "name": "bot_response_rating",
      "expectedValue": "Successfully transferred $500 to your savings account."
    }
  ]
}
```

## Mode 2: Select from History

### Overview

Convert real agent interactions into test cases by selecting from recent sessions.

### Loading Process

When you switch to the "Select from History" tab:

**Step 1: Find Sessions**
- Queries recent sessions for your agent
- Limited to last 50 sessions
- Sorted by timestamp (newest first)

**Step 2: Load Interactions**
- Gets all interactions from found sessions
- Limited to last 100 interactions
- Filters by agent name

**Step 3: Load Related Data**
- Input/output messages
- Action steps
- Topics
- Channel information

**Step 4: Display**
- Combines all data per interaction
- Shows rich preview of each
- Ready for selection

**Loading Time:** Usually 2-5 seconds depending on data volume.

### Interaction Display

Each interaction card shows:

```
┌──────────────────────────────────────────────────┐
│ ☐ "What is my account balance?"                  │
│                                                  │
│ [ServiceTopic] [GetBalance] [CheckLimit] [Chat] │
│                                                  │
│ │ Your current balance is $1,234.56. You have   │
│ │ available credit of $500.                     │
│                                                  │
│ 11/26/2025, 2:30:15 PM                          │
└──────────────────────────────────────────────────┘
```

**Components:**

1. **Checkbox** - Click to select/deselect
2. **Utterance** - User's question (bold, quoted)
3. **Chips:**
   - 🔵 Blue: Topics
   - 🟣 Purple: Actions
   - ⚪ Gray: Channel (Chat, Voice, etc.)
4. **Response Preview** - Bot's response (first 150 chars, italic, bordered)
5. **Timestamp** - When the interaction occurred

### Selection Behavior

**Click anywhere on card:** Toggles selection

**Selected state:**
- ✅ Checkbox checked
- 🔵 Blue border (2px)
- 💙 Light blue background

**Unselected state:**
- ☐ Checkbox unchecked
- ⚪ Gray border (1px)
- ⚪ White background

**Counter:** "(X selected)" shown at top

### Multi-Select Example

```
User clicks 3 interactions:

✓ Interaction 1: "What is my balance?"
   Topics: [ServiceTopic]
   Actions: [GetBalance]
   
✓ Interaction 2: "Transfer $500"
   Topics: [TransferTopic]
   Actions: [ValidateAccount, TransferFunds]
   
✓ Interaction 3: "Reset my password"
   Topics: [SecurityTopic]
   Actions: [ValidateIdentity, ResetPassword]

Clicks "Add 3 Test Cases"
   ↓
System creates:
   1. Test case #6: Balance inquiry
   2. Test case #7: Fund transfer
   3. Test case #8: Password reset
```

### Workflow

```
Step 1: Click "Add Test Case" button
   ↓
Step 2: Select "Select from History" tab
   ↓
Step 3: Wait for interactions to load (2-5 seconds)
   ↓
Step 4: Review available interactions
   ↓
Step 5: Click to select one or more
   ↓
Step 6: Click "Add X Test Case(s)"
   ↓
Result: X new test cases added to table
```

### Benefits

**Speed:**
- Create 10+ test cases in under a minute
- No manual typing required
- Automatic expectation extraction

**Accuracy:**
- Based on real interactions
- Captures actual topics and actions
- Preserves real bot responses

**Coverage:**
- Tests reflect real user behavior
- Discovers edge cases you might miss
- Documents what actually works

## Common Workflows

### Workflow 1: Quick Start (From Scratch)

**Scenario:** You're starting a new evaluation and want basic test cases.

**Steps:**
1. Click "Add Test Case"
2. Tab: "Create from Scratch"
3. Enter 3-5 common utterances
4. Add topics and actions for each
5. Click "Add Test Case" for each
6. Click "Save" in main view

**Time:** 5-10 minutes for 5 test cases

**Result:** Baseline test suite ready to run

### Workflow 2: Capture Production Behavior

**Scenario:** Your agent has been running in production, you want to test actual scenarios.

**Steps:**
1. Click "Add Test Case"
2. Tab: "Select from History"
3. Review recent interactions
4. Select all successful ones (5-15)
5. Click "Add X Test Cases"
6. Review in table
7. Click "Save"

**Time:** 2-3 minutes for 15 test cases

**Result:** Comprehensive test suite from real data

### Workflow 3: Regression Testing

**Scenario:** You changed your agent, want to ensure it still handles previous scenarios.

**Steps:**
1. Before changes: Add test cases from history
2. Save the evaluation
3. Make agent changes
4. Run tests
5. See what broke
6. Fix agent or update expectations

**Time:** Initial setup 5 minutes, ongoing validation seconds

**Result:** Confidence that changes didn't break existing behavior

### Workflow 4: Edge Case Testing

**Scenario:** You discovered an edge case, want to add it to your suite.

**Steps:**
1. Test the edge case with your agent
2. Click "Add Test Case"
3. Tab: "Select from History"
4. Find the recent interaction
5. Select it
6. Click "Add Test Case"
7. Save

**Time:** 1 minute

**Result:** Edge case permanently captured in test suite

### Workflow 5: Coverage Expansion

**Scenario:** You want comprehensive coverage across all topics.

**Steps:**
1. Chat with agent covering all topics
2. Click "Add Test Case"
3. Tab: "Select from History"
4. Select one interaction per topic
5. Click "Add X Test Cases"
6. Verify coverage in table
7. Save

**Time:** 10 minutes (including chatting)

**Result:** Full topic coverage in test suite

## Tips and Best Practices

### Creating from Scratch

**Do:**
- ✅ Use natural language
- ✅ Be specific with utterances
- ✅ Select topic before actions
- ✅ Focus on key response content

**Don't:**
- ❌ Use robotic or formal language
- ❌ Leave utterance blank
- ❌ Select actions without a topic
- ❌ Expect exact response matches

### Selecting from History

**Do:**
- ✅ Review interactions before selecting
- ✅ Select diverse scenarios
- ✅ Check timestamps (use recent data)
- ✅ Bulk select related interactions

**Don't:**
- ❌ Select failed interactions blindly
- ❌ Ignore the response preview
- ❌ Select too many at once (review first)
- ❌ Forget to save after adding

### After Adding

**Do:**
- ✅ Review new test cases in table
- ✅ Click "Save" to persist
- ✅ Run tests to validate
- ✅ Edit expectations if needed

**Don't:**
- ❌ Add too many without saving
- ❌ Skip validation
- ❌ Forget about auto-numbering
- ❌ Ignore session match results

## Error Handling

### No Sessions Found

**Error:** "No sessions found for agent: MyAgent"

**Cause:** No sessions exist for this agent yet.

**Solution:**
1. Chat with your agent first
2. Wait for sessions to sync (~1 minute)
3. Try again

### No Interactions Found

**Error:** "No interactions found for recent sessions"

**Cause:** Sessions exist but have no interactions.

**Solution:**
1. Ensure agent is properly configured
2. Check that interactions are being recorded
3. Verify Data Cloud setup
4. Contact admin if persistent

### Load Failed

**Error:** "Failed to load interactions: [error message]"

**Cause:** API error, permission issue, or network problem.

**Solution:**
1. Check Salesforce connection
2. Verify user has read access to Data Cloud
3. Retry loading
4. Check browser console for details

### Empty Utterance

**Alert:** "Please enter an utterance"

**Cause:** User didn't fill in required field.

**Solution:**
1. Enter a user question in the utterance field
2. Try adding again

### No Selection

**Alert:** "Please select at least one interaction"

**Cause:** User tried to add from history without selecting.

**Solution:**
1. Click to select one or more interactions
2. Checkbox should be checked
3. Try adding again

## Technical Details

### Test Case Numbering

**Automatic:**
- System finds highest existing number
- Increments by 1 for each new case
- Example: If you have tests 1-5, new tests are 6, 7, 8, etc.

### Expectation Formatting

**Topic:**
```json
{
  "name": "topic_sequence_match",
  "expectedValue": "ServiceTopic"
}
```

**Actions:**
```json
{
  "name": "action_sequence_match",
  "expectedValue": "['GetBalance', 'TransferFunds']"
}
```

**Response:**
```json
{
  "name": "bot_response_rating",
  "expectedValue": "Your balance is $1,234.56"
}
```

### Data Sources

**From Scratch:**
- Manual user input only

**From History:**
- `ssot__AiAgentSession__dlm` - Sessions
- `ssot__AiAgentInteraction__dlm` - Interactions
- `ssot__AiAgentInteractionMessage__dlm` - Messages
- `ssot__AiAgentInteractionStep__dlm` - Steps

### Query Limits

- **Sessions:** Last 50
- **Interactions:** Last 100
- **Messages:** All for selected interactions
- **Steps:** All for selected interactions

**Why limits?**
- Performance (faster loading)
- Relevance (recent data)
- UX (manageable list size)

## Keyboard Shortcuts

*Coming soon:*
- `Ctrl/Cmd + K` - Open add dialog
- `Ctrl/Cmd + Enter` - Add test case
- `Space` - Toggle selection (history mode)
- `Esc` - Close dialog

## FAQ

### Q: Can I add test cases in bulk from scratch?

**A:** Not directly in one action, but you can quickly add multiple by clicking "Add Test Case" after each entry. For bulk, use the history mode.

### Q: How many interactions can I select at once?

**A:** There's no hard limit, but we recommend reviewing them first. Selecting 10-20 at a time is typical.

### Q: Do I need to save after adding?

**A:** Yes! Click "Save" in the main view to persist your changes to Salesforce. The "isModified" indicator will show if you have unsaved changes.

### Q: Can I edit test cases after adding?

**A:** Yes, use the ✏️ Edit button on each test case row. See [Test Case Editing](/genai/test-case-editing).

### Q: What if the history is empty?

**A:** Chat with your agent first to create interactions, wait 1-2 minutes for data sync, then try loading history again.

### Q: Can I filter or search history?

**A:** Not yet, but it's on the roadmap. Currently shows most recent 100 interactions sorted by timestamp.

### Q: What happens if I close the dialog without adding?

**A:** All selections and inputs are discarded. Nothing is added to your test suite.

### Q: Can I see the full conversation for an interaction?

**A:** Currently shows a preview. Full conversation view is planned for a future release.

### Q: How do I know which interactions are good test cases?

**A:** Look for:
- ✅ Successful interactions (not errors)
- ✅ Clear user intent
- ✅ Representative of real use
- ✅ Diverse topics and actions

### Q: Can I import test cases from a file?

**A:** Not yet, but CSV/JSON import is on the roadmap.

## Next Steps

- [Test Case Editing](/genai/test-case-editing) - Refine your test cases
- [Einstein Model Testing](/genai/einstein-model-testing) - Run your tests
- [Conversation History](/genai/conversation-history) - Explore interactions

---

**Fast test case creation leads to comprehensive coverage and confident deployments!**





