---
sidebar_position: 1
---

# Introduction

Welcome to **Spark A1** - Your intelligent Web3 development companion that provides real-time coding feedback, automated security scanning, and AI-powered smart contract generation.

## What is Spark A1?

Spark A1 is a cutting-edge development tool designed to streamline and enhance your Web3 development workflow. It acts as your intelligent coding assistant, offering:

- **Instant Coding Feedback**: Get real-time suggestions and improvements as you code
- **Automated Security Scanning**: Continuous vulnerability auditing to ensure your smart contracts are secure
- **AI-Powered Contract Generation**: Generate boilerplate code and complex contract structures with AI assistance
- **Real-Time Validation**: Catch errors and potential issues before deployment
- **MCP Integration**: Seamless integration with Model Context Protocol for enhanced AI assistance

## Quick Start

Get started with Spark A1 in just a few minutes:

1. **Request an API Key** at [chrom.ar/get-started](https://chrom.ar/get-started)
2. **Configure your MCP server** with the following settings:

```json
{
  "mcpServers": {
    "chromar-spark": {
      "url": "https://mcp-router.chrom.ar/mcp",
      "headers": {
        "Authorization": "Bearer <API_KEY>"
      }
    }
  }
}
```

:::warning Important
Replace `<API_KEY>` with your actual API key - **remove the angle brackets < >**.
For example: `"Authorization": "Bearer sk-1234567890abcdef"`
:::

3. **Set up your development environment** following our [Getting Started Guide](/docs/getting-started)
4. **Start building** with intelligent assistance

## Next Steps

- [Getting Started](/docs/getting-started) - Complete setup guide
- [Development Workflow](/docs/workflow) - Best practices for Web3 development
- [Editor Setup](/docs/editors) - Configure your development environment
