const { Wallet } = require('@ethereumjs/wallet');

// Generate a random wallet
const wallet = Wallet.generate();  // Use the correct method

console.log('Address:', wallet.getAddressString());
console.log('Private Key:', wallet.getPrivateKeyString());
