# Frequently Asked Questions

## General Questions

### What is GenAI Explorer?

GenAI Explorer is a Chrome extension for Salesforce developers and administrators to explore, test, and monitor Agentforce and Einstein AI capabilities. It provides tools for chatting with agents, testing models, analyzing performance, and understanding AI configuration.

### Is GenAI Explorer free?

Yes, GenAI Explorer is free to install and use. However, it requires a Salesforce org with Agentforce or Einstein AI features enabled, which may have associated licensing costs from Salesforce.

### Which Salesforce editions are supported?

GenAI Explorer works with any Salesforce edition that has Agentforce or Einstein AI enabled, including:
- Enterprise Edition
- Unlimited Edition
- Developer Edition (with Einstein features)

### Do I need special permissions?

Yes, you need:
- Einstein AI User permission
- Data Cloud access (for analytics features)
- Read access to AI metadata objects
- API Enabled permission

Contact your Salesforce administrator if you don't have these permissions.

## Installation & Setup

### How do I install GenAI Explorer?

**Chrome Extension (Recommended):**
1. Visit the [GenAI Explorer Chrome Web Store page](https://chromewebstore.google.com/detail/genai-explorer/dopnhbkmnclgkeenfadmbcfllplbgcag)
2. Click "Add to Chrome"
3. Click the extension icon and connect to your Salesforce org

**Web Application:**
Visit https://app.sf-explorer.com/gen-ai.html to use GenAI Explorer without installing an extension

### Can I use GenAI Explorer in multiple orgs?

Yes! You can connect to multiple Salesforce orgs and switch between them:
1. Click the org dropdown
2. Select "Add Org"
3. Authenticate to the new org

### Does GenAI Explorer work in incognito mode?

Yes, but you need to enable it:
1. Go to `chrome://extensions`
2. Find GenAI Explorer
3. Click "Details"
4. Enable "Allow in incognito"

### Can I use it on mobile?

Not currently. GenAI Explorer is designed for desktop Chrome. Mobile browser extensions have limited functionality.

## Features & Capabilities

### What can I do with GenAI Explorer?

**Core Features:**
- Chat with Agentforce agents in real-time
- Test Einstein AI models
- Visualize the Atlas reasoning pipeline
- Execute Data Cloud queries
- Browse agent configurations
- Create visual documentation boards
- Monitor AI performance metrics

### Can I create or modify agents?

No, GenAI Explorer is a read-only exploration tool. To create or modify agents, use Salesforce Setup. However, you can:
- View all agent configurations
- Test agent behavior
- Document agent design
- Export configurations

### Does it support custom AI models?

GenAI Explorer works with Einstein-supported models:
- GPT-4 Omni
- GPT-4o Mini
- GPT-3.5 Turbo

Custom or external models aren't currently supported.

### Can I share boards with my team?

Yes, you can:
- Export boards as JSON files
- Export as images (PNG, JPEG, SVG)
- Share files via email or collaboration tools
- Others can import JSON files

## Data & Privacy

### Where is my data stored?

**Local Storage:**
- Boards and preferences stored in browser
- No data sent to external servers

**Salesforce Storage:**
- All query results from your Salesforce org
- AI conversations stored in Data Cloud
- No data stored outside your control

### Does GenAI Explorer collect my data?

No. GenAI Explorer:
- Does NOT collect personal information
- Does NOT send data to external servers (outside our heroku server to overcome cors)
- Only connects directly to your Salesforce org

### Is my Salesforce data secure?

Yes:
- Uses official Salesforce OAuth authentication
- All connections are encrypted (HTTPS)
- No data stored externally
- Follows Salesforce security best practices


## Chat & Agents

### Why aren't my agents responding?

Common reasons:
- Agent is inactive in Salesforce
- Missing required session variables
- No topics configured for the query
- API limits exceeded
- Network connectivity issues

See [FAQ](./9-faq.md) for more solutions.

### Can I test agents in sandbox?

Yes! GenAI Explorer works with:
- Production orgs
- Sandbox orgs
- Scratch orgs
- Developer orgs

### How do session variables work?

Session variables provide context for the entire conversation:

**Example:**
```json
{
  "customerId": "001xx000003D8E5",
  "accountType": "Premium"
}
```

The agent uses these throughout the session without you repeating them.

### What are cited references?

Cited references show the sources the agent used to generate its response:
- Knowledge articles
- Salesforce records
- External data sources
- API responses

This helps verify accuracy and understand reasoning.


## Data Cloud & Queries

### Do I need Data Cloud to use GenAI Explorer?

Not for all features:

**Requires Data Cloud:**
- Query Lab
- Performance analytics
- Token usage reports
- Conversation threading analysis

**Works Without Data Cloud:**
- Chat with agents
- Model testing
- Configuration browser
- Interactive boards (most features)

### How do I access Data Cloud?

Contact your Salesforce administrator to:
1. Enable Data Cloud in your org
2. Grant you Data Cloud User permission
3. Set up required permissions on AI objects

### Why are my queries slow?

**Common Causes:**
- Missing date filters
- Too many JOINs
- Large result sets
- Unindexed fields

**Solutions:**
- Always filter by `CreatedDate`
- Use `LIMIT` clause
- Query indexed fields
- See [Data Cloud Integration](./data-cloud-integration) for optimization tips

### Can I query custom objects?

Yes, if they're available in Data Cloud. Use standard SOQL syntax with the correct API names.

## Model Testing

### Why do I get different results each time?

This is normal AI behavior controlled by the temperature parameter:

**Temperature = 0.0:**
- Most deterministic
- Consistent results

**Temperature = 0.7:**
- Balanced creativity
- Some variation

**Temperature = 1.5:**
- Very creative
- Highly variable

### How much do model tests cost?

Each test consumes Einstein AI credits based on:
- Model used (GPT-4 costs more than GPT-3.5)
- Token count (input + output)
- Your org's Einstein pricing

Check token usage in the results panel.

### Can I test with production data?

Yes, but be careful:
- Don't expose PII in prompts
- Test in sandbox first for sensitive scenarios
- Monitor token usage to control costs
- Follow your organization's data policies

### What's the difference between the models?

| Model | Speed | Cost | Quality | Best For |
|-------|-------|------|---------|----------|
| GPT-4 Omni | Slower | Higher | Best | Complex reasoning |
| GPT-4o Mini | Fast | Medium | High | General purpose |
| GPT-3.5 Turbo | Fastest | Lower | Good | Simple tasks |

## Boards & Visualization

### How many boards can I create?

Limited only by browser storage (typically ~10MB). Most users can create 50-100 boards depending on complexity.

### Can I embed live data in boards?

Yes! Use Query Nodes to:
- Execute SOQL queries
- Display live results
- Auto-refresh data
- Export updated data

### What is the Board Prompt Engine?

An AI-powered feature that lets you modify boards using natural language:

**Example Commands:**
- "Add a markdown node at (100, 100)"
- "Arrange all nodes in a grid"
- "Connect the agent node to the topics"

### How do I backup my boards?

**Best Practice:**
1. Click "Export" on each board
2. Save as JSON file
3. Store in version control or backup location
4. Re-import if needed

## Performance & Limits

### Are there API limits?

Yes, GenAI Explorer uses Salesforce APIs, which have limits:

**Typical Limits:**
- 15,000-100,000 API calls per day (depends on edition)
- Data Cloud query limits
- Einstein AI credit limits

The extension monitors usage and warns at 80% capacity.

### Why is the extension slow?

**Common Causes:**
- Too many open tabs
- Large boards with many nodes
- Auto-refreshing queries
- Limited browser resources

**Solutions:**
- Close unused tabs
- Simplify boards
- Disable auto-refresh
- Clear browser cache

### How much memory does it use?

Typically 50-200MB depending on:
- Number of open tabs
- Board complexity
- Query result sizes
- Chat history length

## Troubleshooting

### How do I report a bug?

1. Enable Debug Mode
2. Reproduce the issue
3. Export debug logs
4. Open an issue with:
   - Steps to reproduce
   - Error messages
   - Debug logs
   - Chrome version
   - Salesforce org edition

### Where can I get help?

**Resources:**
- [Documentation](/)
- GitHub Issues (for bug reports)
- Salesforce Trailblazer Community

### Can I request new features?

Yes! Feature requests are welcome:
- Open a GitHub issue
- Describe the use case
- Explain the benefit
- Include examples if possible

## Advanced Usage

### Can I automate tasks?

GenAI Explorer is primarily a UI tool. For automation:
- Use Salesforce APIs directly
- Export configurations for scripting
- Use SFDX for deployments
- Consider custom integrations

### Does it support CI/CD?

Yes, indirectly:
- Export agent configurations as metadata
- Use with Salesforce DX
- Version control exported JSON
- Deploy using standard SFDX tools

### Can I customize the interface?

Not currently. The UI is fixed, but you can:
- Create custom boards for your workflow
- Export data for external tools
- Use saved queries for repeated tasks

### Is there an API?

GenAI Explorer doesn't provide its own API, but it helps you work with:
- Salesforce REST API
- Salesforce GraphQL API
- Tooling API
- Data Cloud API

## Getting Started

### What should I try first?

**Recommended Path:**
1. Connect to your Salesforce org
2. Browse your agents in Configuration Explorer
3. Chat with an agent to test behavior
4. View the Atlas Reasoning Engine visualization
5. Run a pre-built Data Cloud query
6. Create your first board

### Where can I learn more?

**Documentation:**
- [Chat with Agents](./chat-with-agents)
- [Configuration Explorer](./configuration-explorer)
- [Atlas Reasoning Engine](./atlas-reasoning-engine)
- [Einstein Model Testing](./einstein-model-testing)
- [Data Cloud Integration](./data-cloud-integration)
- [Topic Collision Analysis](./topic-collision-analysis)

### Is there a tutorial?

Yes! The extension includes:
- Interactive walkthrough on first launch
- Sample boards with examples
- Pre-built query templates
- Tooltips throughout the UI

## Still Have Questions?

Browse the full documentation starting at the [GenAI Explorer Overview](/).

---

**Can't find your answer? Feel free to open an issue on GitHub with your question.**

