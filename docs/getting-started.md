---
sidebar_position: 2
---

# Getting Started

This guide will help you set up your Web3 development environment with Spark A1 from scratch.

## Prerequisites

Before you begin, make sure you have:

- Node.js v18+ installed
- A code editor (VS Code, Cursor, etc.)
- Git installed
- Basic understanding of blockchain and smart contracts

## Step 1: Create and Fund a Test Wallet

Before deploying smart contracts, you'll need a wallet with test tokens.

### Creating a Wallet

1. Install a wallet extension like [MetaMask](https://metamask.io/)
2. Create a new wallet and **save your seed phrase securely**
3. Switch to a test network (Sepolia, Base Sepolia, or Optimism Sepolia)

### Getting Test Tokens

Test tokens (faucets) are free tokens for development purposes. Here are reliable faucets for popular test networks:

#### Ethereum Sepolia
- **Faucet**: [Google Cloud Web3 Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
- **Alternative**: [Alchemy Sepolia Faucet](https://sepoliafaucet.com/)
- **Network Details**:
  - Network Name: Sepolia
  - RPC URL: `https://gateway.tenderly.co/public/sepolia`
  - Chain ID: 11155111
  - Currency Symbol: ETH
  - Block Explorer: `https://sepolia.etherscan.io`

#### Base Sepolia
- **Faucet**: [Base Network Faucets](https://docs.base.org/base-chain/tools/network-faucets)
- **Network Details**:
  - Network Name: Base Sepolia
  - RPC URL: `https://sepolia.base.org`
  - Chain ID: 84532
  - Currency Symbol: ETH
  - Block Explorer: `https://sepolia.basescan.org`

#### Optimism Sepolia
- **Faucet**: [Optimism Sepolia Faucet](https://app.optimism.io/faucet)
- **Network Details**:
  - Network Name: Optimism Sepolia
  - RPC URL: `https://sepolia.optimism.io`
  - Chain ID: 11155420
  - Currency Symbol: ETH
  - Block Explorer: `https://sepolia-optimism.etherscan.io`

## Step 2: Configure RPC Providers

RPC (Remote Procedure Call) providers allow your application to interact with the blockchain. You'll need an RPC URL to read blockchain data and send transactions.

### Recommended Providers

#### Free Tier Options

1. **Public RPC Endpoints** (Limited rate)
   - Ethereum Sepolia: `https://gateway.tenderly.co/public/sepolia`
   - Base Sepolia: `https://sepolia.base.org`
   - Optimism Sepolia: `https://sepolia.optimism.io`

2. **Alchemy** (Free tier with higher limits)
   - Sign up at [alchemy.com](https://www.alchemy.com/)
   - Create a new app for your target network
   - Get your API key from the dashboard
   - RPC URL format: `https://[network].g.alchemy.com/v2/YOUR-API-KEY`

3. **Infura** (Free tier available)
   - Sign up at [infura.io](https://infura.io/)
   - Create a new project
   - Get your Project ID
   - RPC URL format: `https://[network].infura.io/v3/YOUR-PROJECT-ID`

### Setting Up Your RPC in Code

Here's an example of how you might configure your environment. Create a `.env` file in your project root with your specific configuration:

```bash
# Example .env file
ALCHEMY_API_KEY=your_alchemy_api_key_here
INFURA_PROJECT_ID=your_infura_project_id_here

# RPC URLs
BASE_SEPOLIA_RPC=https://base-sepolia.g.alchemy.com/v2/your_alchemy_api_key_here
ETH_SEPOLIA_RPC=https://sepolia.infura.io/v3/your_infura_project_id_here
OP_SEPOLIA_RPC=https://optimism-sepolia.infura.io/v3/your_infura_project_id_here

# Your wallet private key (NEVER commit this!)
PRIVATE_KEY=your_wallet_private_key_here
```

### Example Configuration with viem

```javascript
import { createWalletClient, createPublicClient, http, formatEther } from 'viem';
import { baseSepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import dotenv from 'dotenv';

dotenv.config();

// Create a public client for reading blockchain data
const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(process.env.BASE_SEPOLIA_RPC),
});

// Create a wallet client for sending transactions
const account = privateKeyToAccount(process.env.PRIVATE_KEY);
const walletClient = createWalletClient({
  account,
  chain: baseSepolia,
  transport: http(process.env.BASE_SEPOLIA_RPC),
});

// Example: Get wallet balance
const balance = await publicClient.getBalance({
  address: account.address
});
console.log('Wallet balance:', formatEther(balance), 'ETH');
```

## Step 3: Set Up Block Explorer API Keys

Block explorers allow you to verify and publish your smart contract source code, making it transparent and trustworthy.

### Getting API Keys for Contract Verification

#### Etherscan (Ethereum Sepolia)
1. Go to [Etherscan](https://etherscan.io/)
2. Create an account and sign in
3. Navigate to [API Keys](https://etherscan.io/myapikey)
4. Create a new API key
5. Add to your `.env` file:
   ```bash
   ETHERSCAN_API_KEY=your_etherscan_api_key_here
   ```

#### Basescan (Base Sepolia)
1. Go to [Basescan](https://basescan.org/)
2. Create an account (same as Etherscan account)
3. Navigate to [API Keys](https://basescan.org/myapikey)
4. Create a new API key
5. Add to your `.env` file:
   ```bash
   BASESCAN_API_KEY=your_basescan_api_key_here
   ```

#### Optimism Explorer
1. Go to [Optimistic Etherscan](https://optimistic.etherscan.io/)
2. Use the same Etherscan account
3. Navigate to API Keys section
4. Create a new API key
5. Add to your `.env` file:
   ```bash
   OPTIMISM_API_KEY=your_optimism_api_key_here
   ```

### Using API Keys in Hardhat

```javascript
// hardhat.config.js
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  networks: {
    baseSepolia: {
      url: process.env.BASE_SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.ETH_SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
    optimismSepolia: {
      url: process.env.OP_SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      baseSepolia: process.env.BASESCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      optimismSepolia: process.env.OPTIMISM_API_KEY
    }
  }
};
```

### Verifying a Contract

After deploying your contract, verify it with:

```bash
npx hardhat verify --network baseSepolia DEPLOYED_CONTRACT_ADDRESS "Constructor Argument 1" "Argument 2"
```

## Step 4: Install Spark A1 MCP

Configure the Spark A1 MCP server in your IDE:

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
For example: `"Authorization": "Bearer ck_1234567890abcdef"`
:::

## Complete Environment Template

Here's a complete `.env.example` file for your project:

```bash
# RPC Provider API Keys
ALCHEMY_API_KEY=
INFURA_PROJECT_ID=

# RPC URLs
BASE_SEPOLIA_RPC=https://sepolia.base.org
ETH_SEPOLIA_RPC=https://rpc.sepolia.org
OP_SEPOLIA_RPC=https://sepolia.optimism.io

# Block Explorer API Keys
ETHERSCAN_API_KEY=
BASESCAN_API_KEY=
OPTIMISM_API_KEY=

# Wallet Configuration (NEVER commit the actual private key!)
PRIVATE_KEY=

# Spark A1 Configuration
SPARK_A1_API_KEY=
```

## Security Best Practices

1. **Never commit private keys or API keys** to version control
2. Always use `.env` files and add `.env` to `.gitignore`
3. Use separate wallets for development and production
4. Store production keys in secure key management systems
5. Regularly rotate API keys
6. Use hardware wallets for mainnet deployments

## Next Steps

Now that your environment is set up, you can:

- [Learn the Development Workflow](/docs/workflow) for efficient smart contract development
- [Configure Your Editor](/docs/editors) for AI-assisted development

## Troubleshooting

### Common Issues

**Issue**: "Insufficient funds" error
- **Solution**: Make sure you've claimed test tokens from the faucet and are on the correct network

**Issue**: "RPC rate limit exceeded"
- **Solution**: Switch to a paid tier or use a different RPC provider

**Issue**: "Contract verification failed"
- **Solution**: Ensure your API key is correct and matches the network you're verifying on

**Issue**: "Cannot connect to network"
- **Solution**: Check your RPC URL and ensure the network is not experiencing issues

