---
slug: standard-objects-documentation
title: How to Get Standard Object and Field Descriptions in Salesforce
authors: [ndespres]
tags: [documentation, metadata, open-source, tools]
---

**Want to access Salesforce standard object and field descriptions without digging through Setup?**

There's a better way! After every Salesforce release, the SF Explorer team runs a script that parses the official documentation and publishes an npm package: **@sf-explorer/salesforce-object-reference**.

<!-- truncate -->

## 📊 Visual Overview

Here's how the SF Explorer ecosystem provides Salesforce metadata to different users:

```mermaid
graph TB
    subgraph "Data Pipeline"
        A[Salesforce Release] -->|Official Documentation| B[Script]
        B -->|Parses & Extracts| C[sf-explorer/salesforce-object-reference<br/>NPM Package]
    end
    
    subgraph "Solutions by User Type"
        C --> D{Choose Your Path}
        
        D -->|👤 User<br/>Browse Docs| E[Web Interface<br/>sf-explorer.github.io/sf-doc-to-json]
        E -->|Features| E1[⚡ Lightning-fast search<br/>🎨 Clean UI<br/>📱 Responsive design]
        
        D -->|💻 Developer<br/>Build Apps| F[NPM Package<br/>npm install @sf-explorer/...-reference]
        F -->|Features| F1[📦 Easy integration<br/>🔄 Auto-updated<br/>🚀 No API calls]
        
        D -->|🔧 Admin<br/>Enhance Setup| G[Chrome Extension<br/>Advanced Setup]
        G -->|Features| G1[✨ Inline descriptions<br/>📝 Enhanced Setup<br/>🎯 Better productivity]
        
        D -->|📊 Architect<br/>Create ERDs| H[Diagrams<br/>Cloud-specific ERDs]
        H -->|Features| H1[🗺️ Visual relationships<br/>📐 DrawIO format<br/>📥 Export ready]
        
        D -->|🌐 Any Role<br/>Org-Specific| I[SF Explorer App<br/>app.sf-explorer.com]
        I -->|Features| I1[📚 Complete metadata<br/>🎨 Custom objects<br/>📊 Visualizations]
    end
    
    style C fill:#4CAF50,stroke:#2E7D32,color:#fff
    style E fill:#2196F3,stroke:#1565C0,color:#fff
    style F fill:#FF9800,stroke:#E65100,color:#fff
    style G fill:#9C27B0,stroke:#6A1B9A,color:#fff
    style H fill:#00BCD4,stroke:#006064,color:#fff
    style I fill:#F44336,stroke:#B71C1C,color:#fff
```

## 🎯 The Challenge

As Salesforce developers and administrators, we often need quick access to standard object and field descriptions. But navigating through Setup or hunting through the official documentation can be time-consuming and inefficient.

That's why we built a comprehensive ecosystem of tools to make this information readily accessible—whether you're a user, developer, or administrator.

## 🚀 Solutions for Every Use Case

### 1. 📖 For Users: Lightning-Fast Documentation Browser

If you just want to **browse the documentation** with a really fast interface, check out:

**🔗 [https://sf-explorer.github.io/sf-doc-to-json/](https://sf-explorer.github.io/sf-doc-to-json/)**

This web interface provides instant access to all standard object and field descriptions with:
- ⚡ Lightning-fast search
- 🎨 Clean, intuitive UI
- 📱 Responsive design
- 🔍 Comprehensive metadata coverage

### 2. 💻 For Developers: NPM Package

If you're **building an application** that needs programmatic access to Salesforce metadata, you can consume the npm package directly:

```bash
npm install @sf-explorer/salesforce-object-reference
```

**Benefits:**
- 📦 Easy integration into your applications
- 🔄 Updated with each Salesforce release
- 🎯 Type-safe access to metadata
- 🚀 No API calls required

### 3. 🔧 For Admins: Chrome Extension

If you're an **administrator** who wants to add descriptions directly within Setup, install our Chrome extension that enhances your Setup experience:

**🔗 [SF Explorer Advanced Setup](https://github.com/sf-explorer/sf-explorer-advanced-setup/blob/main/readme.md)**

This extension:
- ✨ Enriches Setup with field descriptions
- 📝 Shows documentation inline
- 🎯 Improves productivity
- 💡 Makes configuration easier

### 4. 📊 For Architects: ERD Diagrams

If you need **Entity Relationship Diagrams (ERDs) by cloud** with DrawIO charts:

**🔗 [SF Explorer Diagrams](https://github.com/sf-explorer/app?tab=readme-ov-file#diagrams)**

Features:
- 🗺️ Cloud-specific ERDs
- 📐 DrawIO format for easy editing
- 🔗 Visual relationship mapping
- 📥 Export capabilities

### 5. 🌐 For Your Org: Custom Data Dictionary

And finally, if you want a **complete data dictionary with objects and fields specific to your org**, just connect to SF Explorer:

**🔗 [app.sf-explorer.com](https://app.sf-explorer.com)**

Get:
- 📚 Complete org metadata
- 🎨 Custom object documentation
- 🔍 Search across all metadata
- 📊 Relationship visualization
- 📝 Data dictionary exports

## 💰 All Free, Most Open Source!

The best part? **All of these tools are completely free**, and most are **open source**!

We believe in giving back to the Salesforce community by:
- 🆓 Providing free access to all tools
- 🌐 Open-sourcing the code
- 🔄 Keeping documentation up-to-date
- 🤝 Building for the community

## 🛠️ How It Works

Behind the scenes, here's what happens:

1. **After each Salesforce release**, our automated scripts parse the official Salesforce documentation
2. We **extract all standard object and field metadata** including descriptions, data types, and relationships
3. The data is **published as an npm package** (`@sf-explorer/salesforce-object-reference`)
4. All our tools and interfaces consume this package to provide **consistent, up-to-date information**

## 🎯 Choose Your Path

```mermaid
flowchart TD
    Start([Need Salesforce Metadata?]) --> Q1{What's your goal?}
    
    Q1 -->|Quick lookup & browse| User[👤 User Path]
    Q1 -->|Build an application| Dev[💻 Developer Path]
    Q1 -->|Improve Setup UI| Admin[🔧 Admin Path]
    Q1 -->|Visualize relationships| Arch[📊 Architect Path]
    Q1 -->|Full org analysis| Org[🌐 Org-Specific Path]
    
    User --> UserSol[Web Interface<br/>sf-explorer.github.io/sf-doc-to-json]
    UserSol --> UserBen[✓ Instant access<br/>✓ No installation<br/>✓ Fast search]
    
    Dev --> DevSol[NPM Package<br/>npm install]
    DevSol --> DevBen[✓ Programmatic access<br/>✓ Type-safe<br/>✓ Offline-ready]
    
    Admin --> AdminSol[Chrome Extension<br/>Advanced Setup]
    AdminSol --> AdminBen[✓ Enhanced Setup<br/>✓ Inline docs<br/>✓ Time-saver]
    
    Arch --> ArchSol[ERD Diagrams<br/>DrawIO Charts]
    ArchSol --> ArchBen[✓ Visual models<br/>✓ Cloud-specific<br/>✓ Editable]
    
    Org --> OrgSol[SF Explorer App<br/>app.sf-explorer.com]
    OrgSol --> OrgBen[✓ Your metadata<br/>✓ Custom objects<br/>✓ Full analysis]
    
    UserBen --> End([Pick your solution!])
    DevBen --> End
    AdminBen --> End
    ArchBen --> End
    OrgBen --> End
    
    style Start fill:#E8EAF6,stroke:#3F51B5,stroke-width:3px
    style End fill:#E8F5E9,stroke:#4CAF50,stroke-width:3px
    style UserSol fill:#2196F3,stroke:#1565C0,color:#fff
    style DevSol fill:#FF9800,stroke:#E65100,color:#fff
    style AdminSol fill:#9C27B0,stroke:#6A1B9A,color:#fff
    style ArchSol fill:#00BCD4,stroke:#006064,color:#fff
    style OrgSol fill:#F44336,stroke:#B71C1C,color:#fff
```

Depending on your role and needs, pick the solution that works best for you:

| Role | Use Case | Solution |
|------|----------|----------|
| 👤 User | Browse documentation | [Web Interface](https://sf-explorer.github.io/sf-doc-to-json/) |
| 💻 Developer | Build applications | [NPM Package](https://www.npmjs.com/package/@sf-explorer/salesforce-object-reference) |
| 🔧 Admin | Enhance Setup | [Chrome Extension](https://github.com/sf-explorer/sf-explorer-advanced-setup) |
| 📊 Architect | Create ERDs | [Diagrams](https://github.com/sf-explorer/app?tab=readme-ov-file#diagrams) |
| 🌐 Any | Org-specific docs | [SF Explorer](https://app.sf-explorer.com) |

## 🚀 Get Started Today

No matter which solution you choose, you'll have access to comprehensive Salesforce metadata documentation without the hassle of navigating through Setup or parsing official docs.

Try out the tools that fit your workflow and let us know what you think!

## 🤝 Join the Community

Have feedback or suggestions? We'd love to hear from you:

- ⭐ Star our repositories on [GitHub](https://github.com/sf-explorer)
- 🐛 Report issues or request features
- 💡 Contribute to the open-source projects
- 📢 Share with your Salesforce colleagues

---

*Making Salesforce metadata accessible to everyone, one tool at a time.* 🚀

