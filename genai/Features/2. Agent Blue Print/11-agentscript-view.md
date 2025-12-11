---
id: agentscript-view
slug: /agentscript-view
title: AgentScript Migration Tool
sidebar_label: AgentScript Migration
sidebar_position: 11
description: Community tool to help migrate to Salesforce's new AgentScript approach with automated YAML generation.
keywords:
  - agentscript
  - migration
  - community tools
  - agentforce
  - yaml
  - learning
---
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

# AgentScript Migration Tool

A community tool to help you migrate from UI-based Agentforce configuration to Salesforce's new AgentScript approach. Automatically generate 85% of your agent script YAML and learn the new format by example.

<LiteYouTubeEmbed
              id="r8TqMmiC2UA"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Agentscript Migration tool"
              poster="maxresdefault"
              webp
            />

:::info Community-Driven Migration Support
AgentScript is Salesforce's powerful new approach for agent development, but migrating existing configurations can be challenging. This tool helps the community adopt AgentScript by providing:

✅ **Automated Code Generation** - Generate agent scripts from existing UI configurations  
✅ **Learning by Example** - See how your configs translate to AgentScript  
✅ **Migration Acceleration** - Get 85% of the work done automatically  
✅ **Best Practices** - Generated code follows Salesforce Agent Script Recipes
:::

## Why AgentScript?

Salesforce's AgentScript is the modern approach to agent development:

| UI-Based (Legacy) | AgentScript (Modern) |
|-------------------|----------------------|
| ❌ Manual clicks in Setup | ✅ Code in your IDE |
| ❌ No version control | ✅ Git integration |
| ❌ Hard to review changes | ✅ Standard code reviews |
| ❌ Manual deployment | ✅ CLI deployment |
| ❌ Environment drift | ✅ Consistent across orgs |
| ❌ Limited collaboration | ✅ Team development workflows |

**The Challenge:** AgentScript is powerful but requires learning YAML syntax, understanding new patterns, and manually migrating existing agents.

**This Tool Helps:** Generate production-ready AgentScript from your existing Agentforce UI configurations, helping you learn and migrate faster.

## How This Tool Helps You Migrate

### 🎓 Learn AgentScript Format

See exactly how your UI configurations translate to AgentScript code:
- Topics → `topic` blocks
- Actions → Action definitions with inputs/outputs
- Variables → YAML variable declarations
- Routing → `start_agent` and transitions

### ⚡ Accelerate Migration

Generate 85% of your agent script automatically:
- Complete YAML structure
- All topics and actions converted
- Proper Salesforce formatting
- Spec-compliant syntax

### 📚 Understand Best Practices

Generated code follows [Salesforce Agent Script Recipes](https://developer.salesforce.com/sample-apps/agent-script-recipes/):
- Python-style booleans (True/False)
- Compact action notation
- Multi-line instruction format
- Proper protocol handling (flow://, apex://, etc.)

### 🚀 Start Coding Faster

Instead of starting from scratch:
1. Generate agent script from your existing config
2. Study the generated YAML structure
3. Add your business logic (15%)
4. Deploy and test

## The Migration Problem

**Moving to AgentScript isn't straightforward:**

- 📖 **Learning Curve**: New YAML syntax and patterns to learn
- ⏰ **Time-Consuming**: Writing agent scripts from scratch takes 4-6 hours per agent
- 📝 **Error-Prone**: Easy to make syntax mistakes (wrong booleans, missing colons, indentation errors)
- 🔄 **Repetitive**: Copying topics, actions, and variables manually
- 🎯 **Spec Compliance**: Ensuring YAML matches Salesforce Agent Script Recipes exactly
- 🤝 **Team Adoption**: Getting the whole team comfortable with the new approach

**Result:** Teams delay adopting AgentScript because migration feels overwhelming.

## How This Migration Tool Solves It

This community tool provides **automated migration support**:

✅ **85% Auto-Generated**: Complete agent script structure created from your UI config

✅ **Learning By Doing**: Study generated code to understand AgentScript patterns

✅ **Spec-Compliant**: Guaranteed to follow [Salesforce Agent Script Recipes](https://developer.salesforce.com/sample-apps/agent-script-recipes/) format

✅ **Team Enablement**: Help your entire team adopt AgentScript with working examples

✅ **Proper Formatting**: Python-style booleans, compact notation, multi-line instructions

✅ **Protocol Detection**: Automatic target protocol selection (flow://, apex://, generatePromptResponse://, etc.)

**Impact:** Reduce migration time from weeks to days. Learn AgentScript by seeing your own configs converted to the new format.

## How to Migrate Your Agent

### Step 1: Open Your Agent

Navigate to any GenAI Planner Definition (Agent) in GenAI Explorer:
- From Agent Blueprint view
- From Search/Query results  
- From Agents list

### Step 2: Generate AgentScript

Click the **"Generate Agent Script"** button in the agent details view.

### Step 3: Study the Generated Code

A popup shows your complete agent migrated to AgentScript format:
- ✅ Config and system blocks
- ✅ All variables converted to YAML
- ✅ Start agent with topic selector
- ✅ All topics with descriptions
- ✅ All actions with input/output parameters
- ✅ Proper target protocols
- ✅ Spec-compliant formatting

**Take time to understand the structure** - this is how AgentScript works!

### Step 4: Copy and Save

Click **"Copy to Clipboard"** to save the generated YAML to your project.

### Step 5: Add Business Logic (15%)

The generated script is **85% complete**. You add the intelligence:
- ✏️ Detailed reasoning instructions for each topic
- ✏️ Specific business rules and conditions  
- ✏️ Custom error handling flows
- ✏️ Advanced routing logic

### Step 6: Test and Deploy

Deploy to sandbox, test thoroughly, then move to production.

## What Gets Generated Automatically (85%)

### ✅ Configuration
- Agent developer name and description
- Default agent user
- System instructions and error messages
- Language settings

### ✅ Data Structure
- All variables with types and defaults (from GenAiPlannerAttrDefinition)
- All topics with descriptions (from GenAiPluginDefinition)
- All actions with parameters (from GenAiFunctionDefinition)
- Input/output definitions

### ✅ Routing Logic
- Topic selector in start_agent
- Transitions between topics
- Action references

### ✅ Proper Formatting
- Salesforce-compliant YAML syntax
- Python-style booleans (True/False)
- Compact action notation
- Multi-line instruction format
- Clean developer names (IDs removed)
- Correct protocols for targets

## Generated YAML Example

Here's what the generator creates automatically:

```yaml
# Agent Script - Generated from Agentforce Metadata
# Customer Support Assistant

system:
    instructions: "You are a helpful, professional assistant that provides customers with information about their orders."
    messages:
        welcome: "Hi there, I'm your Customer Support Assistant."
        error: "Sorry, something went wrong on my end..."

config:
    developer_name: "customer_support_assistant"
    default_agent_user: "agentforce@salesforce.com"
    description: "Assists customers with their orders and account information."

variables:
    user_email: mutable string
        description: "Customer email address"
    order_id: mutable string = ""
        description: "Current order being discussed"
    verified: mutable boolean = False
        description: "Customer identity verification status"

start_agent topic_selector:
    description: "Welcome and route to appropriate topic"
    reasoning:
        instructions: ->
             | Welcome the guest and determine the right topic based on their request.
        actions:
            go_to_identity: @utils.transition to @topic.Identity
                description: "User verification flow"
            go_to_orders: @utils.transition to @topic.Orders
                description: "Order management"

topic Identity:
    description: "Verify user identity"
    reasoning:
        actions:
            send_code: @actions.send_verification_code
            validate_code: @actions.validate_verification_code
    actions:
        send_verification_code:
            description: "Send verification code via email"
            inputs:
                email: string
            outputs:
                code_sent: boolean
            target: "flow://SendVerificationCode"
        
        validate_verification_code:
            description: "Validate the code entered by user"
            inputs:
                code: string
                member_name: string
            outputs:
                verified: boolean
            target: "flow://ValidateCode"

topic Orders:
    description: "Manage customer orders"
    reasoning:
        actions:
            lookup_order: @actions.lookup_order
    actions:
        lookup_order:
            description: "Look up order by ID"
            inputs:
                order_id: string
            outputs:
                order_summary: string
                order_details: string
            target: "flow://GetOrderDetails"
```

:::tip 85% Complete!
This YAML is ready to deploy! You just need to add detailed reasoning instructions for each topic's business logic.
:::

## What You Add (15%)

The generator creates the structure - you add the intelligence:

### Reasoning Instructions

Add detailed instructions for how the agent should think and act:

```yaml
topic Orders:
    description: "Manage customer orders"
    reasoning:
        instructions: ->
             | When helping with orders:
             | 1. Verify the customer is authenticated
             | 2. Ask for the order number if not provided
             | 3. Look up the order using @actions.lookup_order
             | 4. Present order details in a friendly format
             | 5. Offer to help with order modifications or returns
        actions:
            lookup_order: @actions.lookup_order
```

### Conditional Logic

Add conditions for when actions should be available:

```yaml
reasoning:
    actions:
        lookup_order: @actions.lookup_order
            available when @variables.verified == True
```

### Error Handling

Add custom error messages and fallback flows:

```yaml
reasoning:
    actions:
        lookup_order: @actions.lookup_order
            with order_id = @variables.order_id
            set @variables.order_found = @outputs.found
        
        escalate_to_human: @utils.transition to @topic.HumanHandoff
            available when @variables.order_found == False
```

## Migration Time Savings

| Task | Manual Migration | With This Tool | Savings |
|------|------------------|----------------|---------|
| Learn YAML syntax | 2-3 hours | Study examples | Learn faster |
| Config & System | 30 min | Auto-generated | 30 min |
| Variables Setup | 45 min | Auto-generated | 45 min |
| Topics Structure | 60 min | Auto-generated | 60 min |
| Actions & Parameters | 90 min | Auto-generated | 90 min |
| Format & Syntax | 45 min | Auto-generated | 45 min |
| **Per Agent Total** | **4-6 hours** | **30-45 min** | **85%** |
| **10 Agents** | **40-60 hours** | **5-7 hours** | **~1 week** |

*This tool accelerates your team's migration to AgentScript significantly.*

## Why Community Tools Matter

Salesforce's AgentScript is powerful, but the community needs help adopting it:

### 🤝 Bridge the Gap
Help teams transition from UI-based to code-based agent development without overwhelming complexity.

### 📚 Practical Learning
Learn AgentScript by seeing your own configurations converted, not just reading documentation.

### ⚡ Reduce Friction
Make migration feel achievable instead of daunting.

### 🌟 Enable Innovation
The faster teams adopt AgentScript, the faster they can leverage its full power for innovation.

## Understanding the New AgentScript Approach

### What Is AgentScript?

AgentScript is Salesforce's modern YAML-based format for defining agent behavior:

**Before (UI-Based):**
- Click through Salesforce Setup
- Configure topics, actions, prompts in separate screens
- Hard to version, review, or track changes

**After (AgentScript):**
- Write agent definition in YAML
- All configuration in code
- Version control, code review, CI/CD integration

### Key AgentScript Concepts

This tool helps you understand these patterns:

1. **Config Block**: Agent metadata (name, description, user)
2. **System Block**: Global instructions and messages
3. **Variables**: Stateful data the agent tracks
4. **Topics**: Conversation contexts (like "Orders" or "Billing")
5. **Actions**: Tools the agent can use (flows, apex, prompts)
6. **Reasoning**: How the agent decides what to do
7. **Transitions**: Moving between topics

*Generated code shows you exactly how these work!*

## Migration Best Practices

### 1. Start with Learning
Use this tool to learn AgentScript:
- Generate code for simple agents first
- Study the YAML structure  
- Understand how UI configs map to code
- Read the generated comments

### 2. Migrate Progressively
Don't try to migrate everything at once:
- Start with 1-2 non-critical agents
- Test thoroughly in sandbox
- Build team confidence
- Scale to more complex agents

### 3. Review and Understand
Always review generated code before deployment:
- Check action parameters mapping
- Verify routing logic
- Understand variable usage
- Add missing business logic

### 4. Test Thoroughly
Test migrated agents in sandbox:
- Compare behavior with UI-based version
- Test all topics and actions
- Verify error scenarios
- Validate with real users

### 5. Use Version Control
Treat AgentScript like code:
- Commit to Git immediately
- Track all changes
- Use feature branches
- Code review with team

### 6. Document Your Migration
Help future team members:
- Note customizations made
- Document business logic added
- Explain routing decisions
- Keep migration notes

## Helping the Community Adopt AgentScript

### Share Your Experience
- Blog about your migration journey
- Present at user groups
- Share tips and gotchas
- Contribute to forums

### Contribute Improvements
- Report issues or suggestions
- Share migration patterns
- Help others on Trailblazer Community

### Build on This Foundation
This tool provides a starting point - build on it:
- Add custom validation
- Create team-specific templates
- Develop migration workflows
- Share your enhancements

## Deployment

### Using Salesforce CLI

```bash
# 1. Save the generated YAML to your project
# Save to: force-app/main/default/aiagentscripts/

# 2. Deploy to sandbox
sf project deploy start --target-org sandbox

# 3. Test migrated agent thoroughly

# 4. Deploy to production  
sf project deploy start --target-org production
```

## Community Resources

### Learn More About AgentScript

- **Official Docs**: [Salesforce Agent Script Recipes](https://developer.salesforce.com/sample-apps/agent-script-recipes/)
- **AgentScript Guide**: [Salesforce AgentScript Documentation](https://developer.salesforce.com/docs/einstein/genai/guide/agentscript.html)
- **Community**: [AgentScript Community Guide](https://agentforce.guide/)
- **Trailhead**: [Agentforce Modules](https://trailhead.salesforce.com/search?keywords=agentforce)

### Get Help with Migration

- **Trailblazer Community**: Ask migration questions and share learnings
- **Salesforce Support**: For technical issues
- **User Groups**: Connect with others migrating to AgentScript

### When to Seek Professional Services

Consider professional help if:
- Migrating 50+ complex agents
- Tight deadlines
- Custom Apex integrations
- Mission-critical production agents
- Need migration strategy consulting

---

**Ready to migrate?** Open any agent in GenAI Explorer and click "Generate Agent Script" to see your UI configuration transformed into AgentScript code. Study it, learn from it, and use it as your migration foundation! 🚀

:::tip Community Tool
This is a community-driven tool to help teams adopt Salesforce's modern AgentScript approach. While it automates 85% of the migration work, always review and test thoroughly before production deployment.
:::
