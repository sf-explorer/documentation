---
id: test-case-editing
slug: /test-case-editing
title: Test Case Editing
sidebar_label: Test Case Editing
sidebar_position: 5
description: Edit and manage AI agent test cases with side-by-side actual vs expected comparison, smart action filtering, and auto-recalculation.
keywords:
  - agentforce
  - test cases
  - evaluation
  - testing
  - quality assurance
  - ai testing
---

# Test Case Editing

Edit and refine your AI agent test cases with an intuitive interface that shows actual results alongside expected values, making it easy to update expectations and validate agent behavior.

<!-- ![Test Case Editing](../../images/test-case-editing.png) -->
![Testing Center](../../images/testing_center.png)

## The Problem

**Testing AI agents requires constant refinement of test cases based on actual agent behavior.**

When building and testing AI agents, teams face challenges:

- 🔄 **Iterative Refinement**: Test expectations need frequent updates as agents evolve
- 👀 **Comparison Difficulty**: Hard to compare expected vs actual results side-by-side
- ⚡ **Action Discovery**: Finding which actions are available for a specific topic
- 📝 **Input Variations**: Testing different phrasings of the same question
- 🎯 **Manual Verification**: Time-consuming to verify each test result manually
- 🔁 **Status Updates**: Need to re-run tests to see if changes fixed issues

**In short**: You need a streamlined way to edit test cases while comparing actual agent behavior with expected outcomes.

## How GenAI Explorer Solves This

GenAI Explorer provides **comprehensive test case editing** with:

✅ **Side-by-Side Comparison**: See actual vs expected values in one glance
   - Actual results on the LEFT (what the agent did)
   - Expected values on the RIGHT (what you want)
   - Natural left-to-right reading flow

✅ **Smart Action Filtering**: Topic-aware action selection
   - Multi-select checkboxes for actions
   - Automatically filtered by selected topic
   - Shows only relevant actions for the topic

✅ **Full Editability**: Edit both inputs and outputs
   - User utterance (question)
   - Expected topic
   - Expected actions (multi-select)
   - Expected bot response

✅ **Auto-Recalculation**: Instant feedback
   - Test status recalculates after saving
   - See pass/fail immediately
   - No need to manually re-run tests

✅ **Visual Feedback**: Color-coded comparison
   - 🟢 Green: Actual values (from agent)
   - 🔵 Blue/Orange: Expected values (editable)
   - Clear visual distinction between the two

**Impact:** Reduce test maintenance time by 70%, catch issues earlier with side-by-side comparison, and refine test cases 3x faster with smart action filtering.

## Overview

The Test Case Editing interface allows you to modify test expectations while viewing actual agent results side-by-side. This makes it easy to update test cases when agent behavior changes or when you need to refine your expectations.

## Accessing Test Case Editor

### From Test Cases Table

1. Navigate to your **AiEvaluationDefinition** record
2. View the test cases table
3. Click the **✏️ Edit** button in the "Actions" column for any test case

<!-- ![Edit Button Location](../../images/test-case-edit-button.png) -->

### Test Cases Table Features

The table shows all your test cases with:

- **Session Match**: Whether a matching agent session was found
- **Test Result**: Overall pass/fail status (Success, Partial, Error, No Match)
- **Input Utterance**: The user's question
- **Topics**: Expected vs actual topics comparison
- **Actions**: Expected vs actual actions comparison
- **Response**: Expected vs actual bot response comparison

**Color Indicators:**
- 🟢 Green checkmark: Match/Success
- 🔴 Red X: Mismatch/Failure
- ⚠️ Yellow warning: Partial match
- ⚪ Gray: No session match

## Edit Dialog Layout

When you click Edit, you'll see a comprehensive dialog with all test case details:

```
┌─────────────────────────────────────────────────┐
│ Edit Test Case #1                               │
│ "What is my account balance?"          [Chip]   │
├─────────────────────────────────────────────────┤
│                                                 │
│ 📝 Input Utterance (User Question) - EDITABLE  │
│ ┌─────────────────────────────────────────────┐ │
│ │ What is my account balance?                 │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ ─────────────────────────────────────────────── │
│                                                 │
│ 🎯 Topics                                       │
│ ┌──────────────────┬──────────────────────────┐ │
│ │ Actual ← LEFT    │ Expected → RIGHT         │ │
│ ├──────────────────┼──────────────────────────┤ │
│ │ [ServiceTopic]   │ [ServiceTopic      ▼]   │ │
│ │ (Green chip)     │ (Dropdown)              │ │
│ └──────────────────┴──────────────────────────┘ │
│                                                 │
│ ⚡ Actions                                       │
│ ┌──────────────────┬──────────────────────────┐ │
│ │ Actual ← LEFT    │ Expected → RIGHT         │ │
│ ├──────────────────┼──────────────────────────┤ │
│ │ [GetBalance]     │ ┌──────────────────────┐ │ │
│ │ [CheckLimit]     │ │ ☑ GetBalance         │ │ │
│ │ (Green chips)    │ │ ☑ TransferFunds      │ │ │
│ │                  │ │ ☐ CheckLimit         │ │ │
│ │                  │ └──────────────────────┘ │ │
│ │                  │ 5 actions from "Service" │ │
│ └──────────────────┴──────────────────────────┘ │
│                                                 │
│ 💬 Bot Response - EDITABLE                      │
│ ┌──────────────────┬──────────────────────────┐ │
│ │ Actual ← LEFT    │ Expected → RIGHT         │ │
│ ├──────────────────┼──────────────────────────┤ │
│ │ ┌──────────────┐ │ ┌──────────────────────┐ │ │
│ │ │ Your balance │ │ │ Your balance is      │ │ │
│ │ │ is $1,234.56 │ │ │ $1,234.56            │ │ │
│ │ └──────────────┘ │ │ (Editable textarea)  │ │ │
│ └──────────────────┴──────────────────────────┘ │
│                                                 │
│ ℹ️ Changes saved locally. Click Save to update │
│                                                 │
├─────────────────────────────────────────────────┤
│                     [Cancel]  [Save Changes]    │
└─────────────────────────────────────────────────┘
```

## Editing Features

### 1. Input Utterance (User Question) ✨

**What it is:** The question or statement the user sends to the agent.

**Why edit it:**
- Test different phrasings of the same question
- Fix typos in test cases
- Refine question clarity
- Add more context or details

**How to edit:**
1. Click in the "Input Utterance" text field
2. Type your new question
3. The change will be saved when you click "Save Changes"

**Example:**
```
Before: "What is my account balance?"
After:  "Show me my current account balance please"
```

**Use Case:** Testing if the agent handles polite variations differently.

### 2. Expected Topic

**What it is:** The topic (conversation intent) you expect the agent to identify.

**Why edit it:**
- Update when topic names change
- Fix mismatched expectations
- Align with agent's actual behavior

**How to edit:**
1. Click the topic dropdown (Expected side)
2. Select from available topics
3. Topics are loaded from your GenAiPlanner configuration
4. Supports both developer names and labels

**Visual:**
```
┌──────────────────┬──────────────────────┐
│ Actual           │ Expected             │
├──────────────────┼──────────────────────┤
│ [ServiceTopic]   │ [ServiceTopic   ▼]  │
│                  │  - ServiceTopic      │
│                  │  - BillingTopic      │
│                  │  - SupportTopic      │
└──────────────────┴──────────────────────┘
```

**Pro Tip:** The actual topic often includes a Salesforce suffix (e.g., `_16jgL000000oOlV`). The system automatically matches these with your expected values.

### 3. Expected Actions 🚀

**What it is:** The actions you expect the agent to execute.

**Why edit it:**
- Add or remove expected actions
- Update based on new agent capabilities
- Match actual agent behavior

**How to edit:**
1. First, select a topic (actions filter by topic)
2. The multi-select shows only actions from that topic
3. Check/uncheck actions as needed
4. Multiple actions can be selected

**Smart Filtering:**
```
Topic: "ServiceTopic"

Available Actions (Filtered):
☑ GetBalance          ← From ServiceTopic
☑ TransferFunds       ← From ServiceTopic
☐ CheckAccountLimit   ← From ServiceTopic
☐ UpdateProfile       ← From ServiceTopic
☐ ResetPassword       ← From ServiceTopic

5 action(s) available from "ServiceTopic"
```

**Features:**
- ✅ Checkboxes for easy selection
- 🔍 Filtered by selected topic
- 📊 Shows count of available actions
- 🔄 Updates when topic changes
- 💡 Disabled until topic is selected

**Example:**
```
Before: ['GetBalance']
After:  ['GetBalance', 'TransferFunds', 'CheckAccountLimit']
```

**Use Case:** When you realize the agent needs to execute multiple actions to fulfill the request.

### 4. Expected Bot Response

**What it is:** The text response you expect the bot to return to the user.

**Why edit it:**
- Update for new response templates
- Allow for variations in wording
- Match improved agent responses
- Fix typos in expectations

**How to edit:**
1. Click in the "Expected" textarea
2. Type or paste the expected response
3. Supports multi-line text
4. Can be detailed or general

**Visual:**
```
┌──────────────────┬──────────────────────┐
│ Actual           │ Expected             │
├──────────────────┼──────────────────────┤
│ Your balance is  │ [Editable textarea]  │
│ $1,234.56. You   │ Your balance is      │
│ have available   │ $1,234.56            │
│ credit of $500.  │                      │
│ (Green box)      │ (Blue border)        │
└──────────────────┴──────────────────────┘
```

**Pro Tip:** You can see the actual response on the left to help you decide what the expected response should be.

## Side-by-Side Comparison

### Left Side: Actual (What Agent Did) 🟢

**Characteristics:**
- **Color**: Green styling
- **Editable**: No (read-only)
- **Purpose**: Shows what the agent actually did
- **Visual**: Chips for topics/actions, text for responses

**Display:**
- Topics: Green chips with topic names
- Actions: Green chips for each action
- Response: Green bordered box with full text
- Empty states: "No topic/actions/response from agent yet"

### Right Side: Expected (What You Want) 🔵

**Characteristics:**
- **Color**: Blue/Orange/Standard styling
- **Editable**: Yes (all fields)
- **Purpose**: Define what you expect
- **Visual**: Form inputs, dropdowns, checkboxes

**Display:**
- Topics: Autocomplete dropdown
- Actions: Multi-select with checkboxes
- Response: Multi-line textarea
- Empty states: Placeholder text

### Reading Flow

**Natural left-to-right workflow:**

1. 👀 **Look at Actual** (left) - See what the agent did
2. 🤔 **Decide if it's correct** - Is this what you expected?
3. ✏️ **Adjust Expected** (right) - Update if needed
4. 💾 **Save** - Persist changes

**Example Workflow:**
```
User utterance: "What is my account balance?"

Step 1: Run test
Actual Topic: [ServiceTopic_v2]   ← Left side
Actual Actions: [GetBalance]       ← Left side
Actual Response: "Your balance is $1,234.56" ← Left side

Step 2: Agent looks good! Copy to expected
Expected Topic: ServiceTopic_v2    ← Right side
Expected Actions: ☑ GetBalance     ← Right side
Expected Response: "$1,234.56"     ← Right side (simplified)

Step 3: Save changes
→ Status recalculates
→ Test shows "Success" ✅
```

## Auto-Recalculation Feature

### What Happens After Saving

When you click "Save Changes", the system automatically:

1. ✅ **Saves your edits** to the test case metadata
2. 🔄 **Recalculates matches** against actual sessions
3. 📊 **Updates test status** (Success/Partial/Error/No Match)
4. 🎯 **Refreshes the table** with new results

**You don't need to:**
- Manually refresh the page
- Re-run the test
- Wait for async processes
- Click any additional buttons

### Status Indicators

After recalculation, you'll see updated status:

**🟢 Success**
- All expectations match actual results
- Topic matches
- All actions executed
- Response matches (if specified)

**🟡 Partial**
- Some expectations match
- Example: Topic matches but actions don't
- Example: Actions match but response differs

**🔴 Error**
- Major mismatches
- Example: Wrong topic identified
- Example: No actions executed when expected

**⚪ No Match**
- No agent session found for this utterance
- Agent hasn't been tested with this input yet
- Need to run the agent first

### Real-Time Feedback

The recalculation typically takes **< 1 second**, giving you immediate feedback:

```
[Edit Dialog]
┌──────────────────────────────────┐
│ Save Changes                     │
└──────────────────────────────────┘
         ↓
[Saving...]
         ↓
[Table Updates]
┌──────────────────────────────────┐
│ Test #1: Success ✅              │
│ - Topic: Match ✅                │
│ - Actions: Match ✅              │
│ - Response: Match ✅             │
└──────────────────────────────────┘
```

## Common Workflows

### Workflow 1: Copy Actual to Expected

**Use Case:** Agent behavior is correct, update expectations to match.

**Steps:**
1. Click ✏️ Edit on test case
2. Review left side (actual values)
3. Copy/select same values on right side (expected)
   - Select matching topic from dropdown
   - Check same actions in multi-select
   - Copy response text (or adjust as needed)
4. Click "Save Changes"
5. ✅ Status updates to "Success"

**Time Saved:** 30 seconds per test case vs. manually editing metadata.

### Workflow 2: Fix Mismatched Expectations

**Use Case:** Agent behavior changed, expectations are outdated.

**Steps:**
1. See "Error" or "Partial" status in table
2. Click ✏️ Edit to see what's mismatched
3. Compare actual (left) vs expected (right)
4. Update expected to match new agent behavior
5. Save and verify status changes to "Success"

**Example:**
```
Before:
Expected Actions: ['GetBalance']
Actual Actions: ['GetBalance', 'CheckLimit']
Status: Partial ⚠️

After Edit:
Expected Actions: ['GetBalance', 'CheckLimit']
Status: Success ✅
```

### Workflow 3: Test Input Variations

**Use Case:** Test if agent handles different phrasings.

**Steps:**
1. Click ✏️ Edit on existing test case
2. Modify the input utterance
   - "What is my balance?" → "Show my balance"
   - "What is my balance?" → "How much money do I have?"
3. Keep or adjust expectations
4. Save and see if agent still works correctly

**Use Case:** Ensuring your agent is robust to variations in user input.

### Workflow 4: Add New Expected Actions

**Use Case:** Agent now calls additional actions, update expectations.

**Steps:**
1. Click ✏️ Edit on test case showing "Partial"
2. See actual actions on left (e.g., 3 actions)
3. See expected actions on right (e.g., only 1 selected)
4. Check additional actions in multi-select
5. Save and verify status updates

**Smart Feature:** Actions are filtered by topic, so you only see relevant options.

### Workflow 5: Refine Response Expectations

**Use Case:** Allow for slight variations in response wording.

**Steps:**
1. Click ✏️ Edit
2. See actual response on left
3. Decide if exact match is needed
4. Update expected response to be more flexible:
   - "Your balance is $1,234.56" (exact)
   - "$1,234.56" (key info only)
   - Leave blank (don't check response)
5. Save and verify

**Pro Tip:** More specific expectations catch regressions, but too strict expectations cause false failures.

## Smart Action Filtering

### How It Works

The action multi-select is **dynamically filtered** based on the selected topic:

```
Step 1: Select a topic
Selected Topic: "ServiceTopic"
         ↓
Step 2: Actions filter automatically
Available Actions:
- GetBalance         ← Only actions from ServiceTopic
- TransferFunds      ← Only actions from ServiceTopic
- CheckAccountLimit  ← Only actions from ServiceTopic
         ↓
Step 3: Select actions
☑ GetBalance
☑ TransferFunds
☐ CheckAccountLimit
```

### Why This Matters

**Without filtering:**
- See 50+ actions from all topics
- Hard to find relevant actions
- Easy to select wrong actions
- Confusion about which actions work together

**With smart filtering:**
- See only 3-8 actions per topic
- Quickly find the right actions
- Confidence that actions are compatible
- Faster test case creation

### Visual Indicators

**When no topic selected:**
```
Expected Actions:
┌────────────────────────────────┐
│ Select a topic first to see   │
│ available actions              │
│ (Dropdown disabled)            │
└────────────────────────────────┘
```

**When topic selected:**
```
Expected Actions:
┌────────────────────────────────┐
│ ☑ GetBalance                   │
│ ☐ TransferFunds                │
│ ☐ CheckLimit                   │
│ ☐ UpdateProfile                │
│ ☐ ResetPassword                │
└────────────────────────────────┘
5 action(s) available from "ServiceTopic"
```

**When topic has no actions:**
```
Expected Actions:
┌────────────────────────────────┐
│ No actions found for this topic│
│ (Dropdown disabled)            │
└────────────────────────────────┘
```

### Benefits

✅ **Speed**: Find actions 5x faster
✅ **Accuracy**: Select correct actions every time
✅ **Discoverability**: See what actions are available per topic
✅ **Confidence**: Know actions are compatible with topic

## Best Practices

### 1. Always Compare Before Editing

👀 Look at actual values on the left before making changes.

**Why:** You might find the agent's behavior is actually correct, just different from original expectations.

### 2. Use Specific Expectations

🎯 Be as specific as possible with expectations.

**Example:**
- ❌ Bad: Expected response: "balance"
- ✅ Good: Expected response: "Your balance is $1,234.56"

**Why:** Specific expectations catch regressions better.

### 3. Test Input Variations

📝 Create multiple test cases for different phrasings.

**Example:**
- Test #1: "What is my balance?"
- Test #2: "Show my balance"
- Test #3: "How much money do I have?"

**Why:** Ensures your agent is robust to natural language variations.

### 4. Review After Agent Changes

🔄 When you update your agent, review all test cases.

**Steps:**
1. Check for "Error" or "Partial" statuses
2. Edit each failed test case
3. Decide if agent or expectation needs fixing
4. Update expectations or fix agent

**Why:** Keeps your test suite accurate as your agent evolves.

### 5. Group Related Actions

⚡ When selecting multiple actions, ensure they're logically related.

**Example:**
- ✅ Good: ['GetBalance', 'CheckAccountLimit'] - Related to account info
- ❌ Bad: ['GetBalance', 'ResetPassword'] - Unrelated actions

**Why:** Ensures test cases represent realistic user flows.

### 6. Save Incrementally

💾 Save your changes frequently, don't edit multiple fields at once initially.

**Workflow:**
1. Edit input utterance → Save → Verify
2. Edit expected topic → Save → Verify
3. Edit expected actions → Save → Verify

**Why:** Easier to identify what caused a test to pass or fail.

### 7. Use Comments in Responses

💬 Add context to complex expected responses.

**Example:**
```
Expected Response:
Your balance is $1,234.56. 
Available credit: $500.

Note: Should include both balance and available credit
```

**Why:** Helps other team members understand the expectations.

## Advanced Features

### Suffix Matching

**What it is:** Salesforce appends random suffixes to developer names in some orgs.

**Example:**
- You expect: `ServiceTopic`
- Agent returns: `ServiceTopic_16jgL000000oOlV`

**How it's handled:**
The system automatically matches names with and without suffixes, so:
- `ServiceTopic` matches `ServiceTopic_16jgL000000oOlV`
- You don't need to include the suffix in your expectations
- Works for both topics and actions

**Why it matters:** You can write portable test cases that work across orgs.

### Partial Response Matching

**What it is:** Match on key parts of the response, not exact text.

**Example:**
```
Expected: "$1,234.56"
Actual: "Your current balance is $1,234.56. You have available credit of $500."
Result: ✅ Match (contains expected text)
```

**How to use:**
- Keep expected responses short and focused on key info
- Don't include filler words if they might vary
- Focus on facts that must be present

**Why it matters:** Allows for more flexible response templates while still validating key information.

### Bulk Editing

**What it is:** Edit multiple test cases at once (coming soon).

**Planned features:**
- Select multiple test cases
- Bulk update expected topic
- Bulk update expected actions
- Apply changes to all selected

**Use case:** When you rename a topic or action, update all affected test cases at once.

## Troubleshooting

### "No session match" Status

**Problem:** Test shows "No session match" after editing.

**Possible causes:**
1. Agent hasn't been tested with this utterance yet
2. Session data hasn't synced from Salesforce
3. Utterance was changed significantly

**Solutions:**
1. Run the agent with this utterance first
2. Wait a few minutes for data sync
3. Check that utterance matches an actual session

### Actions Dropdown Disabled

**Problem:** Can't select actions in the multi-select.

**Possible causes:**
1. No topic selected yet
2. Selected topic has no associated actions
3. Planner data hasn't loaded

**Solutions:**
1. Select a topic first (required)
2. Check that the topic has actions in your GenAiPlanner
3. Refresh the page to reload planner data

### Changes Not Saving

**Problem:** Edits don't persist after clicking "Save Changes".

**Possible causes:**
1. Salesforce API error
2. Insufficient permissions
3. Metadata API limits

**Solutions:**
1. Check browser console for errors
2. Verify you have "Modify All Data" permission
3. Try again after a few minutes
4. Contact Salesforce admin

### Status Not Updating

**Problem:** Test status doesn't change after saving edits.

**Possible causes:**
1. Expectations still don't match actual values
2. Auto-recalculation failed
3. Need to manually refresh

**Solutions:**
1. Review the comparison again - might still have mismatches
2. Manually refresh the page
3. Click the "Refresh" button in the table toolbar
4. Check browser console for errors

### Topics Not Loading

**Problem:** Topic dropdown is empty.

**Possible causes:**
1. GenAiPlanner not configured
2. Planner data hasn't loaded
3. API connection issue

**Solutions:**
1. Verify your AiEvaluationDefinition has a valid GenAiPlanner reference
2. Refresh the page
3. Check Salesforce connection status
4. Contact admin to verify GenAiPlanner setup

## Related Features

### Test Case Creation

**Learn how to:**
- Create new test cases from scratch
- Import test cases from CSV
- Generate test cases from agent logs

**See:** [Einstein Model Testing](/genai/einstein-model-testing)

### Session Matching

**Learn how to:**
- How test cases match against agent sessions
- Matching logic for topics and actions
- Troubleshooting match failures

**See:** [Conversation History](/genai/conversation-history)

### Bulk Testing

**Learn how to:**
- Run multiple test cases at once
- Batch update test cases
- Export test results

**See:** [Request Replay & Debugging](/genai/request-replay-debugging)

## FAQ

### Q: Can I edit multiple test cases at once?

**A:** Not yet. Currently, you must edit test cases one at a time. Bulk editing is planned for a future release.

### Q: What happens to my edits if I click Cancel?

**A:** All changes are discarded. Only clicking "Save Changes" persists your edits to Salesforce.

### Q: Can I undo changes after saving?

**A:** Not directly. You would need to manually edit the test case again to revert changes. Consider keeping a backup of your test cases before major edits.

### Q: Do I need to re-run the agent after editing?

**A:** No. The system matches your updated expectations against existing agent sessions. However, if you change the input utterance significantly, you may need to run the agent with the new utterance to get a session match.

### Q: Can I delete expectations?

**A:** Yes, you can clear expected values:
- Topic: Select the empty option in dropdown
- Actions: Uncheck all actions
- Response: Clear the textarea

This effectively makes that expectation "don't check".

### Q: Are changes versioned?

**A:** Not currently. Changes overwrite the existing test case metadata. Consider using version control for your AiEvaluationDefinition metadata files.

### Q: Can I see who edited a test case?

**A:** Check the Salesforce metadata history:
1. Go to Setup → Deployment Status
2. Find your AiEvaluationDefinition deployment
3. View component history

### Q: How long does recalculation take?

**A:** Typically < 1 second. The system queries for matching sessions and compares expectations against actual results immediately after saving.

## Next Steps

- [Chat with Agents](/genai/chat-with-agents) - Test your updated expectations
- [Request Replay & Debugging](/genai/request-replay-debugging) - Debug failed tests
- [Conversation History](/genai/conversation-history) - View agent session details

---

**Efficient test case editing leads to faster iteration and more reliable AI agents.**





