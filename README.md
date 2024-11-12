# Ethereum Wallet Generator

This project demonstrates how to generate an Ethereum wallet using the `@ethereumjs/wallet` library in Node.js. The code generates a random Ethereum wallet and logs the wallet's address and private key to the console.

## Requirements

- Node.js (version 12.x or higher)
- `@ethereumjs/wallet` library

## Installation

1. Clone the repository or create a new directory for your project.

2. Initialize your project with npm:

   ```bash
   npm init -y
3. Install the @ethereumjs/wallet package:
   npm install @ethereumjs/wallet

**Usage**
1. Create a file (e.g., generateWallet.js) and paste the following code into it:

const { Wallet } = require('@ethereumjs/wallet');

// Generate a random wallet
const wallet = Wallet.generate();  // Use the correct method

console.log('Address:', wallet.getAddressString());
console.log('Private Key:', wallet.getPrivateKeyString());

2. Run the file using Node.js:
   node generateWallet.js
   
3. The wallet address and private key will be printed in the console:
  Address: 0x<YourWalletAddress>
  Private Key: 0x<YourPrivateKey>


