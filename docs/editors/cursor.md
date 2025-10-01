---
sidebar_position: 1
sidebar_label: Cursor
---

# Cursor Setup

Cursor Rules are essential for maximizing the effectiveness of AI-assisted development with Spark A1. These rules help your AI coding assistant understand the context and requirements of blockchain and Web3 development.

## What are Cursor Rules?

Cursor Rules are configuration files that instruct AI assistants (like Claude, GPT-5, etc.) on how to interact with specific technologies and APIs. For Web3 development, they ensure the AI always uses the most up-to-date documentation and best practices.

## Setting Up Cursor Rules

### Step 1: Create the Rules Directory

In your project root, create a `.cursor/rules/` directory:

```bash
mkdir -p .cursor/rules
```

### Step 2: Add the Blockchain MCP Rule

Create a file named `blockchain-mcp.mdc` in the `.cursor/rules/` directory with the following content:

```markdown
---
description: Use chroma-spark MCP for blockchain and web3 documentation
globs:
alwaysApply: true
---

# Blockchain & Web3 Development with chroma-spark MCP

## CRITICAL: Always Use MCP for Blockchain Queries

When the user asks about blockchain or Web3 topics, you MUST use the `chromar-spark` MCP server to fetch up-to-date documentation.

### Core Topics
- Smart contracts, DeFi, NFTs, token standards
- Web3 libraries (ethers.js, web3.js, viem)
- Development tools (Hardhat, Foundry, Truffle, Remix)
- EVM chains, Layer 2s, Solana
- Transaction simulation and testing
- Gas optimization and security

### Transaction Simulation
Use the MCP transaction simulator tools to test transactions before sending them:
- `simulate`: Test a single transaction and get gas estimates, event logs, and state changes
- `simulate-bundle`: Test multiple consecutive transactions in sequence

### MCP Usage Protocol

1. **Query First**: Before answering blockchain questions, query chromar-spark MCP for current docs
2. **Use Latest Info**: MCP contains the most recent API changes and best practices
3. **Cite Sources**: Reference specific docs sections in responses
4. **Simulate When Needed**: Use simulation tools to validate transactions and debug issues

### Response Flow

For blockchain/web3 queries:
1. Query chromar-spark MCP with relevant keywords
2. Base response on MCP documentation
3. Include code examples from latest docs
4. Use simulation tools for transaction validation
5. If MCP unavailable, explicitly state using general knowledge

### Trigger Keywords

These keywords ALWAYS trigger MCP usage:
web3, blockchain, smart contract, solidity, ethereum, onchain, dapp, defi, nft, token, erc20, erc721, wallet, transaction, gas, abi, deploy, mint, simulate, hardhat, foundry, viem, ethers, optimism, arbitrum, polygon, layer2

### Examples

User: "How do I deploy an ERC20 token?"
Assistant: [Queries chromar-spark] → Provides answer with latest OpenZeppelin patterns

User: "Will this transaction succeed?"
Assistant: [Uses simulate tool] → Returns gas estimate, events, and success/failure prediction
```

### Step 3: Configure Your IDE

#### For Cursor IDE

1. Open Cursor Settings
2. Navigate to **Features** → **Cursor Rules**
3. Enable "Use Cursor Rules"
4. The rules will automatically be loaded from `.cursor/rules/`


## How Cursor Rules Work

When you work on Web3 projects with these rules configured:

1. **Automatic Context**: The AI assistant automatically understands you're working on blockchain code
2. **Documentation Lookup**: When you ask questions, the AI queries the Spark A1 MCP for the latest docs
3. **Best Practices**: The AI follows current Web3 development best practices
4. **Security Focus**: Automatic security considerations in all suggestions

## Example Interactions

### Without Cursor Rules
```
User: How do I create an ERC20 token?
AI: Here's a basic ERC20 implementation... [potentially outdated code]
```

### With Cursor Rules
```
User: How do I create an ERC20 token?
AI: [Queries chromar-spark MCP for latest ERC20 documentation]
Here's the current best practice using OpenZeppelin 5.0... [up-to-date, secure code]
```

## Best Practices

1. **Keep Rules Updated**: Regularly update your cursor rules as new patterns emerge
2. **Team Consistency**: Share cursor rules with your team via version control
3. **Project Templates**: Include cursor rules in your project starter templates
4. **Documentation**: Document any custom rules for team members
5. **Security First**: Always include security considerations in your rules

## Troubleshooting

### Rules Not Loading

1. Ensure the `.cursor/rules/` directory exists
2. Check that files have `.mdc` extension
3. Verify YAML frontmatter is valid
4. Restart your IDE after adding rules

### MCP Not Responding

1. Verify your Spark A1 API key is configured
2. Check network connectivity
3. Ensure MCP server URL is correct
4. Try clearing IDE cache and restarting

### Conflicting Rules

If you have multiple rules that might conflict:
1. Use specific `globs` patterns to target files
2. Order rules by specificity (most specific first)
3. Use `alwaysApply: false` for conditional rules

## Next Steps

- [Back to Editor Setup](/docs/editors) - Explore other editor options
- [Development Workflow](/docs/workflow) - Learn efficient development practices

## Additional Resources

- [Spark A1 Website](https://chrom.ar) - Main product page
- [GitHub Repository](https://github.com/chrom-ar/docs) - Documentation source