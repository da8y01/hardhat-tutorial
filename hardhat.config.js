/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
const fs = require("fs");
const { ethers } = require('ethers');

function mnemonicToAccount() {
  // const mnemonic = fs.readFileSync('mnemonic.dat', 'utf-8').trim();
  const mnemonic = process.env.PRVKEY_MNEMONIC;
  const wallet = ethers.Wallet.fromPhrase(mnemonic);
  return wallet.privateKey;
}

module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.URL_RPC_MUMBAI,
      accounts: [mnemonicToAccount()],
      saveDeployments: false,
    }
  }
};
