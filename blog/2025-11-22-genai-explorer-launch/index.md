---
slug: introducing-genai-explorer
title: Introducing GenAI Explorer - Your Gateway to Salesforce AI
authors: [sf-explorer-team]
tags: [release, genai, agentforce, einstein, chrome-extension]
image: ./genai-explorer-logo.png
---

![GenAI Explorer](./genai-explorer-logo.png)

**Humans and agents are meant to live together, yet we have to understand agents better to understand what they have done and, more importantly, why.**

This is why we built **GenAI Explorer** - focusing today on Salesforce technology but targeting a wider spectrum in the future.

<!-- truncate -->

## 🤖 The Vision: Humans + Agents

The future isn't humans *or* agents—it's humans *and* agents working together. But for this collaboration to succeed, we need transparency. We need to understand:

- **What did the agent do?** Which actions were taken, which topics were matched, which data was accessed?
- **Why did it do that?** What reasoning led to those decisions? What context influenced the response?
- **How can we improve it?** Where are the bottlenecks? What optimizations are possible?

GenAI Explorer bridges this gap. It's not just about chatting with AI agents—it's about *understanding* them.

## 🌍 Starting with Salesforce, Expanding Beyond

While our initial focus is on **Salesforce Agentforce and Einstein AI**, our vision extends beyond a single platform. The principles of AI transparency, debugging, and optimization apply universally:

- Today: Salesforce Agentforce, Einstein, Data Cloud
- Tomorrow: Multi-platform AI agent support
- Future: A unified lens for understanding any AI agent, anywhere

## 🚀 What is GenAI Explorer?

GenAI Explorer is a browser extension designed specifically for the Salesforce AI ecosystem. It provides a unified interface for interacting with your organization's AI agents, understanding their configuration, and analyzing their performance - all without leaving your browser.

**Single Purpose:** A developer and administrator tool for chatting with, testing, and monitoring Salesforce Agentforce and Einstein AI capabilities—with transparency at its core.

## ✨ Key Features

### 💬 [Chat with Agentforce Agents](/genai/chat-with-agents)

The headline feature - have real-time conversations with any Agentforce agent in your org:

- **Live Chat Interface**: Start conversations instantly
- **Session & Message Variables**: Configure context for personalized interactions
- **Cited References**: See exactly what sources the agent used
- **[Conversation History](/genai/conversation-history)**: Browse and replay past conversations
- **Real-Time Testing**: Test different scenarios and edge cases

### 🤖 [Agentforce Configuration Explorer](/genai/configuration-explorer)

Get a comprehensive view of your AI setup:

- **Agent Browser**: View all AI Agents with detailed configurations
- **Topics & Actions**: Browse GenAI Function Definitions and Topics
- **Entity Relationship Diagrams**: Visualize how your AI components connect
- **Live Monitoring**: Watch agent conversations in real-time
- **Comparison Tools**: Compare agents and actions side-by-side
- **[Topic Collision Analysis](/genai/topic-collision-analysis)**: Prevent routing issues and conflicts

### 🧠 [Atlas Reasoning Engine Visualization](/genai/atlas-reasoning-engine)

Understand the "brain" behind Salesforce Agentforce:

**Interactive Pipeline Visualization** showing the six-stage AI processing:
1. Chit-Chat Detection
2. Query Evaluation
3. Context Refinement
4. Query Planning & Execution (LAMs + APIGen)
5. Advanced Retrieval (RAG with re-ranking)
6. Quality & Safety Gates

**Query Lab** with pre-built Data Cloud queries:
- Complete reasoning traces
- Token usage analysis
- Feature usage statistics
- Session conversation threading
- Safety & compliance monitoring

**Real Results** from your org's Data Cloud - not just documentation, but live data showing exactly how your AI is performing.

### 🔬 [Einstein Model Testing](/genai/einstein-model-testing)

Test and compare AI models side-by-side:

- **Multi-Model Testing**: Compare GPT-4 Omni, GPT-4o Mini, and GPT-3.5 Turbo
- **Parameter Control**: Adjust temperature, max tokens, and other settings
- **Sample Prompts**: Pre-built prompts for common use cases
- **Performance Metrics**: Response time, token usage, and cost estimates

### 🎨 Interactive Boards

Create visual documentation without code:

- **Drag-and-Drop Interface**: Build flowcharts and diagrams
- **AI-Powered Editing**: Use natural language to modify boards
  - Example: "Add a markdown node with title 'Overview' at position (100, 100)"
- **Live Data Integration**: Embed query results that auto-refresh
- **Pre-Built Templates**: Start with ready-made templates for common scenarios
- **Export Capabilities**: Save as images or JSON for sharing

### ☁️ [Data Cloud Integration](/genai/data-cloud-integration)

Query and analyze AI data directly:

- **SOQL Query Builder**: Interactive interface with auto-complete
- **Pre-Built Queries**: 8+ ready-to-use analytics queries
- **Live Data**: Real-time results from your org
- **Export Options**: CSV, Excel, JSON
- **Visualization**: Create charts from query results

### 🛠️ Developer Tools

Advanced features for developers:

- **GenAI Function Definitions**: Browse and test actions
- **Prompt Templates**: View and analyze prompt configurations
- **RAG Indexes**: Explore DataSemanticSearch indexes
- **Metadata Browser**: Deep dive into AI object schemas
- **API Testing**: Test REST and GraphQL endpoints
- **Code Generation**: Export working code samples

## 🎯 Who Is It For?

### For Administrators
- Monitor Agentforce agent performance
- Track conversation flows and user interactions
- Analyze agent usage patterns
- Troubleshoot configuration issues
- View real-time agent activity

### For Developers
- Test Einstein AI models during development
- Debug prompt templates and responses
- Explore GenAI Function Definitions
- Analyze token usage and optimize costs
- Build visual documentation with boards

### For AI/ML Engineers
- Understand the Atlas reasoning pipeline
- Analyze AI model performance
- Monitor safety and compliance metrics
- Optimize retrieval and ranking strategies
- Compare model responses and quality

### For Data Scientists
- Query Data Cloud for AI analytics
- Analyze conversation patterns
- Track feature usage statistics
- Monitor token consumption trends
- Export data for further analysis

## 🔒 Privacy & Security

We take your data security seriously:

- **Secure Authentication**: Uses official Salesforce OAuth 2.0 flows
- **No External Storage**: All data remains in your Salesforce org
- **Browser-Only Storage**: Preferences and boards saved locally
- **No Third-Party Services**: No data sent to external services

## 🚦 Getting Started

### Installation

1. Create a connected app in your org following the official salesforce doc: https://developer.salesforce.com/docs/einstein/genai/guide/agent-api-get-started.html
2. Give some right to your API only user (Datacloud user, prompt user)
3. Visit https://app.sf-explorer.com/gen-ai.html
4. Fill in the required info
5. Click on **Connect to salesforce**


### Requirements

- Chrome browser (version 88 or higher)
- Salesforce org with Agentforce or Einstein AI features enabled
- Appropriate Salesforce permissions:
  - Einstein AI User
  - Data Cloud access (for analytics features)
  - API Enabled

### Quick Start Guide

**5-Minute Walkthrough:**

1. **Connect** - Authenticate to your Salesforce org
2. **Explore** - Browse your agents in [Configuration Explorer](/genai/configuration-explorer)
3. **Chat** - Start a conversation with an agent ([Chat with Agents](/genai/chat-with-agents))
4. **Visualize** - View the [Atlas Reasoning Engine](/genai/atlas-reasoning-engine) pipeline
5. **Query** - Run a pre-built [Data Cloud](/genai/data-cloud-integration) query
6. **Create** - Build your first interactive board

## 📚 Comprehensive Documentation

We've created extensive documentation to help you get the most out of GenAI Explorer:

- **[Overview](/genai/)** - Introduction and key features
- **[Chat with Agents](/genai/chat-with-agents)** - Master agent conversations
- **[Configuration Explorer](/genai/configuration-explorer)** - Understand your AI setup
- **[Atlas Reasoning Engine](/genai/atlas-reasoning-engine)** - Visualize AI processing
- **[Einstein Model Testing](/genai/einstein-model-testing)** - Test and compare models
- **[Data Cloud Integration](/genai/data-cloud-integration)** - Query and analyze
- **[Topic Collision Analysis](/genai/topic-collision-analysis)** - Prevent routing issues
- **[Request Replay & Debugging](/genai/request-replay-debugging)** - Debug and optimize AI requests
- **[Conversation History](/genai/conversation-history)** - View, filter, and analyze all conversations
- **[FAQ](/genai/faq)** - Frequently asked questions

## 💡 Use Cases in Action

### Use Case 1: Testing Agent Behavior

As a Salesforce administrator, you need to verify that your customer service agent handles refund requests correctly:

1. Open GenAI Explorer and navigate to [Chat](/genai/chat-with-agents)
2. Select "Customer Service Agent"
3. Set session variables: `{ "customerId": "001...", "accountType": "Premium" }`
4. Send message: "I need to process a refund"
5. Review the response and cited references
6. Check that the correct actions were invoked
7. Export the conversation for documentation (see [Conversation History](/genai/conversation-history))

### Use Case 2: Cost Optimization

As a developer, you want to reduce Einstein AI costs:

1. Navigate to [Atlas Reasoning Engine](/genai/atlas-reasoning-engine) → Query Lab
2. Run "Token Usage by Model" query
3. Identify expensive models or queries
4. Use [Einstein Model Testing](/genai/einstein-model-testing) to compare alternatives
5. Test cheaper models (GPT-4o Mini vs GPT-4 Omni)
6. Optimize prompts to reduce token usage
7. Create a board to document recommendations

### Use Case 3: Debugging Issues

As an AI engineer, users report inaccurate agent responses:

1. Go to [Configuration Explorer](/genai/configuration-explorer)
2. Review the agent's topics and actions
3. Check prompt templates for issues (see [Topic Collision Analysis](/genai/topic-collision-analysis))
4. Use [Chat](/genai/chat-with-agents) to reproduce the problem
5. Enable Debug Mode to see detailed traces (see [Request Replay & Debugging](/genai/request-replay-debugging))
6. Run "Complete Reasoning Trace" query in [Data Cloud](/genai/data-cloud-integration)
7. Identify the stage where accuracy degrades
8. View cited references to understand source quality
9. Adjust RAG index or prompt template

### Use Case 4: Performance Monitoring

As a data scientist, you need to track AI performance:

1. Create a new interactive board
2. Add query nodes for key metrics:
   - Requests per day
   - Average response time
   - Token usage trends
   - Safety scores
3. Set queries to auto-refresh
4. Add visualization charts
5. Save board as "AI Performance Dashboard"
6. Check daily for trends and anomalies

## 🎉 What Makes GenAI Explorer Special?

### 1. Purpose-Built for Human-Agent Collaboration
Not a generic AI tool - designed to help humans understand and work effectively with AI agents.

### 2. Transparency First
See exactly what your agents are doing and why. No black boxes, no mysteries - complete visibility into the AI decision-making process.

### 3. Real Data, Not Just Docs
Query your actual Data Cloud data. See real token usage, real conversations, real performance metrics from your org.

### 4. Visual Understanding
The Atlas pipeline visualization helps you actually understand how Salesforce AI works, not just use it blindly. See the six-stage reasoning process in action.

### 5. Built for Today, Designed for Tomorrow
Starting with Salesforce, but our architecture is designed to support multiple AI platforms in the future. One tool to understand all your AI agents.

### 6. All-in-One Tool
Everything you need in one extension - chat, test, monitor, document, analyze. No need to juggle multiple tools.

### 7. Free and Open
Available at no cost. Built for the Salesforce community, by developers who understand the challenges.

## 🔮 What's Next?

We're continuously improving GenAI Explorer with a clear vision:

**Near-Term (Salesforce Focus):**
- Enhanced conversation analytics and pattern detection
- Automated testing and regression detection
- Team collaboration features for sharing insights
- Advanced prompt optimization tools
- Real-time agent performance alerts

**Long-Term (Multi-Platform Vision):**
- Support for additional AI platforms beyond Salesforce
- Universal agent debugging interface
- Cross-platform agent comparison tools
- Unified observability for all your AI agents
- Community-driven integrations and extensions

Our goal: **Make AI agent behavior transparent and understandable, regardless of platform.**

## 🤝 Join the Community

GenAI Explorer is built for the Salesforce community:

- **Share Your Feedback**: Tell us what features you'd like
- **Report Issues**: Help us improve with bug reports
- **Contribute**: Share your boards and query templates
- **Spread the Word**: Help other Salesforce professionals discover this tool


## 🙏 Thank You

GenAI Explorer is the result of countless hours of development, testing, and refinement. We're excited to share it with the Salesforce community and can't wait to see how you use it to build amazing AI experiences.

Have questions? Check out our [comprehensive documentation](/genai/) or reach out via GitHub.

**Happy exploring! 🚀**

---

*GenAI Explorer v6.3.3 - Built for the Salesforce community to unlock the full potential of Generative AI.*

