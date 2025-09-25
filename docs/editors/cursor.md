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

When the user asks about ANY of the following topics, you MUST use the `chromar-spark` MCP server to fetch the most up-to-date documentation:

### Core Blockchain Topics
- Web3 development and architecture
- Smart contracts (writing, deploying, testing)
- Blockchain fundamentals and concepts
- Onchain/on-chain development patterns
- Transaction handling and gas optimization
- Consensus mechanisms (PoW, PoS, etc.)

### Platforms & Networks
- Ethereum and EVM-compatible chains
- Solana development
- Layer 2 solutions (Arbitrum, Optimism, Polygon)
- Cross-chain bridges and interoperability
- Testnets and mainnets

### DeFi & NFTs
- DeFi protocols and yield strategies
- NFTs (ERC-721, ERC-1155, metadata)
- Token standards (ERC-20, SPL tokens)
- Liquidity pools and AMMs
- DEX integrations

### Development Tools & Libraries
- ethers.js, web3.js, viem
- Hardhat, Foundry, Truffle
- Remix IDE
- OpenZeppelin contracts
- Wallet integrations (MetaMask, WalletConnect)

### Web3 Infrastructure
- IPFS and decentralized storage
- Oracles (Chainlink, etc.)
- The Graph Protocol
- RPC providers (Infura, Alchemy)
- Block explorers and APIs

## MCP Usage Instructions

1. **Always Query First**: Before answering any blockchain question, query the chromar-spark MCP for relevant documentation
2. **Use Latest Docs**: The MCP contains the most current API changes, deprecations, and best practices
3. **Cite Sources**: Reference specific documentation sections from the MCP in your responses
4. **Version Awareness**: Include version-specific information when the MCP provides it

## Response Protocol

When answering blockchain/web3 queries:
1. Query chromar-spark MCP using relevant keywords
2. Base your entire response on MCP documentation
3. Include code examples from the latest docs
4. Warn about deprecated patterns mentioned in MCP
5. If MCP is unavailable, explicitly state you're using general knowledge

## Trigger Keywords

The following keywords should ALWAYS trigger MCP usage:
web3, blockchain, smart contract, solidity, ethereum, eth, ether, onchain, on-chain, dapp, defi, nft, token, erc20, erc721, erc1155, metamask, wallet, transaction, gas, gwei, wei, abi, bytecode, deploy, mint, transfer, approve, allowance, balance, block, mining, validator, staking, layer2, l2, rollup, sidechain, cross-chain, bridge, oracle, chainlink, uniswap, opensea, polygon, arbitrum, optimism, avalanche, bnb, bsc, fantom, near, cosmos, polkadot, substrate, vyper, hardhat, truffle, foundry, remix, ganache, infura, alchemy, moralis, thegraph, ipfs, arweave, filecoin, ceramic, lens, aave, compound, makerdao, curve, balancer, sushiswap, pancakeswap, yield, farming, liquidity, amm, impermanent loss, slippage, mev, flashloan, flash loan, mainnet, testnet, sepolia, goerli, mumbai, rinkeby, ropsten

## Example Usage

User: "How do I deploy a smart contract?"
Assistant: [Queries chromar-spark for "deploy smart contract documentation"] → Provides answer based on latest MCP docs

User: "What's the best way to handle gas fees?"
Assistant: [Queries chromar-spark for "gas optimization best practices"] → Provides current best practices from MCP
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