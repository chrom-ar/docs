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

## MANDATORY TOOL USAGE

### Query MCP Tool (REQUIRED)
You MUST query chromar-spark MCP when user asks about:
- Smart contracts, DeFi, NFTs, tokens (ERC-20/721/1155)
- Web3 libraries (ethers.js, web3.js, viem)
- Dev tools (Hardhat, Foundry, Truffle, Remix)
- Chains (Ethereum, Solana, Arbitrum, Optimism, Polygon)
- Protocols (Uniswap, Aave, OpenZeppelin, Chainlink)
- Gas optimization, security, wallets, deployment

### Simulation Tools (REQUIRED)
You MUST use simulate/simulate-bundle when user:
- Shows transaction code or asks "will this work?"
- Asks about gas estimates, costs, or reverts
- Mentions deploying, minting, transferring, swapping
- Tests multiple sequential transactions (use simulate-bundle)

**MANDATORY: Always simulate when user shows transaction code or asks about transaction outcomes.**

## Usage Protocol

1. **Query First**: Before answering blockchain questions, query chromar-spark MCP
2. **Simulate Transactions**: Use simulate tool for any transaction code or gas questions
3. **Use Results**: Base responses on MCP docs and simulation outputs
4. **State Clearly**: If MCP unavailable, explicitly mention using general knowledge

## Trigger Keywords

ALWAYS use MCP tools for:
web3, blockchain, smart contract, solidity, ethereum, solana, onchain, dapp, defi, nft, token, erc20, erc721, erc1155, wallet, transaction, gas, gwei, abi, deploy, mint, transfer, swap, stake, approve, simulate, revert, hardhat, foundry, truffle, remix, viem, ethers, web3js, uniswap, aave, compound, polymarket, opensea, chainlink, polygon, arbitrum, optimism, avalanche, layer2, metamask, infura, alchemy, ipfs

## Examples

User: "How do I deploy an ERC20?"
→ [Query chromar-spark MCP] → Answer with latest OpenZeppelin patterns

User: "Will this transaction work?" [shows code]
→ [Use simulate tool] → Return gas, events, success/failure

User: "What's the gas cost for 100 NFT mints?"
→ [Use simulate tool] → Show gas estimates and total cost
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