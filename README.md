# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Getting started

1. Clone this repository
1. Switch into project direcoty `cd real-estate-nft`
1. Use npm to install dependencies `npm i`
1. Start local blockchain using ganache `ganache-cli` (pass desired mnemonic via CLI or write down one provided by ganache after starting)
1. Compile contracts with `truffle compile`
1. Migrate contracts with `truffle migrate --reset`
1. Change into eth-contracts/tests directory `cd eth-contracts/test`
1. Depending which test you want to trigger, run one of the following commands
```
truffle test test/TestSolnSquareVerifier.js
truffle test test/TestERC721Mintable.js
truffle test test/TestSquareVerifier.js
```

# zkSNARKS

This project uses ZoKrates in order to implement zkSNARKS.

To run ZoKrates in use the following docker command (be aware that this is meant to use from zocrates directory in this project)

`docker run -v $pwd/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash` 

When docker runs it will leave you with running terminal which will be used to compile proof code, setup and export verifier. They enable the further creation of witness and proof. Proof needs to be used when minting new NFT's.

* `zokrates compile -i square.code`
* `zokrates setup`
* `zokrates export-verifier`
* `zokrates compute-witness -a 1 1`
* `zokrates generate-proof`

# Contract deployment
Contract migration is to Rinkeby network can be achieved using the following command: 
`truffle migrate --network rinkeby`

NOTE: keep in mind that you will have to provide .secret file containing mnemonic or change code inside truffle-config.js

Deployed contracts:
* Verifier
```
Deploying 'Verifier'
   --------------------
   > transaction hash:    0x9dfa5846d0c9b977cd748673160026b1dda52f6338a9a9692f2d11da04f95b93
   > Blocks: 0            Seconds: 12
   > contract address:    0xA6fBC426171DbFF8c16f0447901DDB50ff62F144
   > block number:        9429396
   > block timestamp:     1633699113
   > account:             0x65D76f0EB8854336BB06627CB9e1142C06e54F75
   > balance:             11.573881118996286657
   > gas used:            1051602 (0x100bd2)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01051602 ETH
```
* SolnSquareVerifier:
```
   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xb26560dfcc53f07f71292e91299669b9969238f257014ff4e5ed23c4521d4982
   > Blocks: 0            Seconds: 12
   > contract address:    0x99cC8Ea12Deb902dC0F0a2A20ee384f22b6a4Cb9
   > block number:        9429397
   > block timestamp:     1633699128
   > account:             0x65D76f0EB8854336BB06627CB9e1142C06e54F75
   > balance:             11.542105388996286657
   > gas used:            3177573 (0x307c65)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03177573 ETH
```

# NFT's on OpenSea
https://testnets.opensea.io/collection/unidentified-contract-ej9ff2k1jv

## Purchage transactions
```
   0x7b41ba5c42a3e965e935585f7ae9b35e799425958e55cc128dbeaa363ca6d81f
   0x978fd8690482b5b354058e2cecc4fd02aad940aab61973d2a90a38b7d4a47aa1
   0x90cb5144a42cc013e75112c16b784d2bd64d30ab16ec98de9b74bd0e4a601be0 
   0xfea97e2f3a5e4a33b1918dbf6a52d3fee41309d1f93e9e70e7745cebc2cdc4cc 
   0x329c0e5670651428f8f300b97355bbfbec34a2fd1a8737e497200639df8813a3 
```



## Versions used
* Truffle v5.3.10 (core: 5.3.10)
* Solidity v0.5.16 (solc-js)
* Node v14.16.0
* Web3.js v1.3.6


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

# ABI

```
{
  "contractName": "SolnSquareVerifier",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "verifier",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "SolutionSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "bool",
          "name": "paused",
          "type": "bool"
        }
      ],
      "name": "changeStatus",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBaseTokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSymbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "key",
          "type": "bytes32"
        }
      ],
      "name": "appendSolution",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "mintToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"verifier\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"SolutionSubmitted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_myid\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_result\",\"type\":\"string\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_myid\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_result\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"_proof\",\"type\":\"bytes\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"key\",\"type\":\"bytes32\"}],\"name\":\"appendSolution\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bool\",\"name\":\"paused\",\"type\":\"bool\"}],\"name\":\"changeStatus\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBaseTokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getSymbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256[2]\",\"name\":\"a\",\"type\":\"uint256[2]\"},{\"internalType\":\"uint256[2][2]\",\"name\":\"b\",\"type\":\"uint256[2][2]\"},{\"internalType\":\"uint256[2]\",\"name\":\"c\",\"type\":\"uint256[2]\"},{\"internalType\":\"uint256[2]\",\"name\":\"input\",\"type\":\"uint256[2]\"}],\"name\":\"mintToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"implement supportsInterface(bytes4) using a lookup table\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract\",\"return\":\"uint256 representing the total amount of tokens\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/SolnSquareVerifier.sol\":\"SolnSquareVerifier\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/ERC721Mintable.sol\":{\"keccak256\":\"0x9fe3d2f59ad4f51214efdac7c2e8b797a19b5868049f9ec51ce3cd86883f1fd9\",\"urls\":[\"bzz-raw://b7d4e810bfb3d4e1e0b64c1ba0880e3c682e0f8a2d519dd53f3e874ebf91e2d1\",\"dweb:/ipfs/QmP3cAPygMxdneRH33jZ5af9ZRTtzhmnxJ6o4cHWTazMvm\"]},\"/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/Oraclize.sol\":{\"keccak256\":\"0xe5ebe286b4624095629f76c6ac8dbad3cb305fbdb43fff09e4eebed35a05b49c\",\"urls\":[\"bzz-raw://681373c60944fa44771ccea64da3a0e1b428255757df53cfee06eae96f4ac91d\",\"dweb:/ipfs/QmWS7E26x3aXyYEZSzhTTpr8Pu11y5NK9p9iMwwvm7tMsz\"]},\"/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/SolnSquareVerifier.sol\":{\"keccak256\":\"0x56104978ec4c22f8b917c419f09101d7f6503c4d5194479167226b5985c3209a\",\"urls\":[\"bzz-raw://391757ddd51a5bc5a1334cc61f63b662803b6d250c20ada81dd73cfd25b642d6\",\"dweb:/ipfs/QmeXhdpw1ekeZUCjkN81AKJearYKzoEZDRJd48RkPaAUCw\"]},\"openzeppelin-solidity/contracts/drafts/Counters.sol\":{\"keccak256\":\"0x5be8533c5950173dc2b77b75108fae6e6c5449aedadde3385ba457394aad2384\",\"urls\":[\"bzz-raw://d429fb04f5b31d909dc759d0f88e28055b80b4dd43e5def4dffc947fa0609229\",\"dweb:/ipfs/QmaY9idX5CwLLtjjTQAdiiaDSrncgafkatUZXTbbajpz8b\"]},\"openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzz-raw://31113152e1ddb78fe7a4197f247591ca894e93f916867beb708d8e747b6cc74f\",\"dweb:/ipfs/QmbZaJyXdpsYGykVhHH9qpVGQg9DGCxE2QufbCUy3daTgq\"]},\"openzeppelin-solidity/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x042048c375daca04b31e31c91bbae912b84b5eb818c4e31b2deb530fd2305342\",\"urls\":[\"bzz-raw://d877a87c5e29b9ffca3e334378058c051a4e012fd3635039681003a9376baf1f\",\"dweb:/ipfs/QmR45snf93cFXtB71TZcmoGy9DbcMha8CqgkDKaLvhjXZK\"]},\"openzeppelin-solidity/contracts/utils/Address.sol\":{\"keccak256\":\"0x1a8e5072509c5ea7365eb1d48030b9be865140c8fb779968da0a459a0e174a11\",\"urls\":[\"bzz-raw://03335b7b07c7c8c8d613cfdd8ec39a0b5ec133ee510bf2fe6cc5a496767bef4b\",\"dweb:/ipfs/Qmebp4nzPja645c9yXSdJkGq96oU3am3LUnG2K3R7XxyKf\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040516200380138038062003801833981810160405260208110156200003757600080fd5b81019080805190602001909291905050506040518060400160405280601281526020017f496c6c6567616c5265616c4573746174657300000000000000000000000000008152506040518060400160405280600381526020017f49524500000000000000000000000000000000000000000000000000000000008152506040518060600160405280603f8152602001620037c2603f9139336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdfc39691aec87dc6aa51ff70c0e592f260c54d2ed6c64e8c4c2306da0eec872b33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a160008060146101000a81548160ff021916908315150217905550620001a36301ffc9a760e01b6200028160201b60201c565b620001bb6380ac58cd60e01b6200028160201b60201c565b620001d363780e9d6360e01b6200028160201b60201c565b82600f9080519060200190620001eb92919062000321565b5081601090805190602001906200020492919062000321565b5080601190805190602001906200021d92919062000321565b5062000236635b5e139f60e01b6200028160201b60201c565b50505080601360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620003d0565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620002b557600080fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200036457805160ff191683800117855562000395565b8280016001018555821562000395579182015b828111156200039457825182559160200191906001019062000377565b5b509050620003a49190620003a8565b5090565b620003cd91905b80821115620003c9576000816000905550600101620003af565b5090565b90565b6133e280620003e06000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806342842e0e116100de578063a22cb46511610097578063c87b56dd11610071578063c87b56dd14610b14578063ccd5835a14610bbb578063e985e9c514610d5e578063f2fde38b14610dda57610173565b8063a22cb4651461093c578063b88d4fde1461098c578063bdc32be014610a9157610173565b806342842e0e1461074c5780634f6ccce7146107ba5780636352211e146107fc57806370a082311461086a5780638da5cb5b146108c25780639b3de49b1461090c57610173565b806318160ddd1161013057806318160ddd146103d757806323b872dd146103f557806327dc297e146104635780632f745c591461052857806338bbfa501461058a57806340c10f19146106e657610173565b806301ffc9a714610178578063081812fc146101dd578063095ea7b31461024b5780631507040114610299578063158c3ade1461031c57806317d7de7c14610354575b600080fd5b6101c36004803603602081101561018e57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610e1e565b604051808215151515815260200191505060405180910390f35b610209600480360360208110156101f357600080fd5b8101908080359060200190929190505050610e86565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102976004803603604081101561026157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ec3565b005b6102a16110b9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102e15780820151818401526020810190506102c6565b50505050905090810190601f16801561030e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103526004803603604081101561033257600080fd5b81019080803590602001909291908035906020019092919050505061115b565b005b61035c611333565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039c578082015181840152602081019050610381565b50505050905090810190601f1680156103c95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103df6113d5565b6040518082815260200191505060405180910390f35b6104616004803603606081101561040b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113e2565b005b6105266004803603604081101561047957600080fd5b8101908080359060200190929190803590602001906401000000008111156104a057600080fd5b8201836020820111156104b257600080fd5b803590602001918460018302840111640100000000831117156104d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611405565b005b6105746004803603604081101561053e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611448565b6040518082815260200191505060405180910390f35b6106e4600480360360608110156105a057600080fd5b8101908080359060200190929190803590602001906401000000008111156105c757600080fd5b8201836020820111156105d957600080fd5b803590602001918460018302840111640100000000831117156105fb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561065e57600080fd5b82018360208201111561067057600080fd5b8035906020019184600183028401116401000000008311171561069257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506114bb565b005b610732600480360360408110156106fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114c0565b604051808215151515815260200191505060405180910390f35b6107b86004803603606081101561076257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611584565b005b6107e6600480360360208110156107d057600080fd5b81019080803590602001909291905050506115a4565b6040518082815260200191505060405180910390f35b6108286004803603602081101561081257600080fd5b81019080803590602001909291905050506115d8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108ac6004803603602081101561088057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611615565b6040518082815260200191505060405180910390f35b6108ca611665565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61093a6004803603602081101561092257600080fd5b8101908080351515906020019092919050505061168e565b005b61098a6004803603604081101561095257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506118ba565b005b610a8f600480360360808110156109a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610a0957600080fd5b820183602082011115610a1b57600080fd5b80359060200191846001830284011164010000000083111715610a3d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506119f4565b005b610a99611a1a565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610ad9578082015181840152602081019050610abe565b50505050905090810190601f168015610b065780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610b4060048036036020811015610b2a57600080fd5b8101908080359060200190929190505050611abc565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b80578082015181840152602081019050610b65565b50505050905090810190601f168015610bad5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610d446004803603610180811015610bd257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b82821015610cb1578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190610c5d565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050611b83565b604051808215151515815260200191505060405180910390f35b610dc060048036036040811015610d7457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c52565b604051808215151515815260200191505060405180910390f35b610e1c60048036036020811015610df057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ce6565b005b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610ece826115d8565b90508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f55576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806133856029913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610f955750610f948133611c52565b5b611007576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e61626c6520746f20617070726f766500000000000000000000000000000081525060200191505060405180910390fd5b826003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550813373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b606060108054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111515780601f1061112657610100808354040283529160200191611151565b820191906000526020600020905b81548152906001019060200180831161113457829003601f168201915b5050505050905090565b611163613253565b60405180606001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600115158152509050601481908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff02191690831515021790555050505080601560008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff0219169083151502179055509050507f329e271c3661a59f0033b686a9a95b6691445bf3b5707e10995a485a6fafd68e8333604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b6060600f8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113cb5780601f106113a0576101008083540402835291602001916113cb565b820191906000526020600020905b8154815290600101906020018083116113ae57829003601f168201915b5050505050905090565b6000600880549050905090565b6113ec3382611ed2565b6113f557600080fd5b611400838383611f67565b505050565b611444828260006040519080825280601f01601f19166020018201604052801561143e5781602001600182028038833980820191505090505b506114bb565b5050565b600061145383611615565b821061145e57600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106114a857fe5b9060005260206000200154905092915050565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611567576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061335e6027913960400191505060405180910390fd5b6115718383611f8b565b61157a82611fac565b6001905092915050565b61159f838383604051806020016040528060008152506119f4565b505050565b60006115ae6113d5565b82106115b957600080fd5b600882815481106115c657fe5b90600052602060002001549050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061165e600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206120fd565b9050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611733576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061335e6027913960400191505060405180910390fd5b600060149054906101000a900460ff16151581151514156117bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f436f6e747261637420616c726561647920696e2074686174207374617465000081525060200191505060405180910390fd5b80600060146101000a81548160ff021916908315150217905550600060149054906101000a900460ff1615611853577f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16118b7565b7f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b50565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118f357600080fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6119ff8484846113e2565b611a0b8484848461210b565b611a1457600080fd5b50505050565b606060118054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab25780601f10611a8757610100808354040283529160200191611ab2565b820191906000526020600020905b815481529060010190602001808311611a9557829003601f168201915b5050505050905090565b6060611ac7826122f4565b611ad057600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b775780601f10611b4c57610100808354040283529160200191611b77565b820191906000526020600020905b815481529060010190602001808311611b5a57829003601f168201915b50505050509050919050565b600080611b9286868686612366565b90506015600082815260200190815260200160002060010160149054906101000a900460ff1615611c2b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f536f6c7574696f6e20616c72656164792065786973747300000000000000000081525060200191505060405180910390fd5b611c35878261115b565b6000611c4189896114c0565b905080925050509695505050505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611d8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061335e6027913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f496e76616c69642061646472657373000000000000000000000000000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdfc39691aec87dc6aa51ff70c0e592f260c54d2ed6c64e8c4c2306da0eec872b81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600080611ede836115d8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611f4d57508373ffffffffffffffffffffffffffffffffffffffff16611f3584610e86565b73ffffffffffffffffffffffffffffffffffffffff16145b80611f5e5750611f5d8185611c52565b5b91505092915050565b611f72838383612474565b611f7c8382612707565b611f8682826128a5565b505050565b611f95828261296c565b611f9f82826128a5565b611fa881612b88565b5050565b611fb5816122f4565b612027576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f546f6b656e20646f65736e27742065786973740000000000000000000000000081525060200191505060405180910390fd5b6120d360118054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120c05780601f10612095576101008083540402835291602001916120c0565b820191906000526020600020905b8154815290600101906020018083116120a357829003601f168201915b50505050506120ce83612bd4565b612d01565b6012600083815260200190815260200160002090805190602001906120f992919061328c565b5050565b600081600001549050919050565b600061212c8473ffffffffffffffffffffffffffffffffffffffff16612d45565b61213957600190506122ec565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156122145780820151818401526020810190506121f9565b50505050905090810190601f1680156122415780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561226357600080fd5b505af1158015612277573d6000803e3d6000fd5b505050506040513d602081101561228d57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000848484846040516020018085600260200280838360005b8381101561239a57808201518184015260208101905061237f565b505050509050018460026000925b818410156123ee5782846020020151600260200280838360005b838110156123dd5780820151818401526020810190506123c2565b5050505090500192600101926123a8565b9250505083600260200280838360005b838110156124195780820151818401526020810190506123fe565b5050505090500182600260200280838360005b8381101561244757808201518184015260208101905061242c565b50505050905001945050505050604051602081830303815290604052805190602001209050949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16612494826115d8565b73ffffffffffffffffffffffffffffffffffffffff161461251d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43616e206e6f74207472616e7366657220756e6f776e656420746f6b656e730081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146125be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f496e76616c6964207472616e736665722061646472657373000000000000000081525060200191505060405180910390fd5b6125c781612d90565b61260e600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e4e565b612655600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e71565b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061275f6001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612e8790919063ffffffff16565b905060006007600084815260200190815260200160002054905081811461284c576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481106127cc57fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061282457fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548091906001900361289e919061330c565b5050505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b612975816122f4565b156129e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f546f6b656e20616c72656164792065786973747300000000000000000000000081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614612a89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f496e76616c69642061646472657373000000000000000000000000000000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612b22600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e71565b808273ffffffffffffffffffffffffffffffffffffffff16612b42611665565b73ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b60606000821415612c1c576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612cfc565b600082905060005b60008214612c46578080600101915050600a8281612c3e57fe5b049150612c24565b6060816040519080825280601f01601f191660200182016040528015612c7b5781602001600182028038833980820191505090505b50905060006001830390505b60008614612cf457600a8681612c9957fe5b0660300160f81b82828060019003935081518110612cb357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8681612cec57fe5b049550612c87565b819450505050505b919050565b6060612d3d8383604051806020016040528060008152506040518060200160405280600081525060405180602001604052806000815250612ed1565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015612d8757506000801b8214155b92505050919050565b600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612e4b5760006003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b612e6660018260000154612e8790919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b6000612ec983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250613193565b905092915050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f191660200182016040528015612f2d5781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b8851811015612fb257888181518110612f5957fe5b602001015160f81c60f81b838380600101945081518110612f7657fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050612f44565b600090505b875181101561302557878181518110612fcc57fe5b602001015160f81c60f81b838380600101945081518110612fe957fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050612fb7565b600090505b86518110156130985786818151811061303f57fe5b602001015160f81c60f81b83838060010194508151811061305c57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061302a565b600090505b855181101561310b578581815181106130b257fe5b602001015160f81c60f81b8383806001019450815181106130cf57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061309d565b600090505b845181101561317e5784818151811061312557fe5b602001015160f81c60f81b83838060010194508151811061314257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613110565b82995050505050505050505095945050505050565b6000838311158290613240576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156132055780820151818401526020810190506131ea565b50505050905090810190601f1680156132325780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b604051806060016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106132cd57805160ff19168380011785556132fb565b828001600101855582156132fb579182015b828111156132fa5782518255916020019190600101906132df565b5b5090506133089190613338565b5090565b815481835581811115613333578183600052602060002091820191016133329190613338565b5b505050565b61335a91905b8082111561335657600081600090555060010161333e565b5090565b9056fe4f6e6c79206f776e657220697320616c6c776f656420746f20646f207468697320616374696f6e476976656e206164647265737320616c7265616479206f776e732073656c656374656420746f6b656ea265627a7a723158206ce16dc856a6b1d53b87bf3c9a55df4eba9ee1e54196fbc6fa4a4e0ee237982b64736f6c6343000510003268747470733a2f2f73332d75732d776573742d322e616d617a6f6e6177732e636f6d2f756461636974792d626c6f636b636861696e2f63617073746f6e652f",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101735760003560e01c806342842e0e116100de578063a22cb46511610097578063c87b56dd11610071578063c87b56dd14610b14578063ccd5835a14610bbb578063e985e9c514610d5e578063f2fde38b14610dda57610173565b8063a22cb4651461093c578063b88d4fde1461098c578063bdc32be014610a9157610173565b806342842e0e1461074c5780634f6ccce7146107ba5780636352211e146107fc57806370a082311461086a5780638da5cb5b146108c25780639b3de49b1461090c57610173565b806318160ddd1161013057806318160ddd146103d757806323b872dd146103f557806327dc297e146104635780632f745c591461052857806338bbfa501461058a57806340c10f19146106e657610173565b806301ffc9a714610178578063081812fc146101dd578063095ea7b31461024b5780631507040114610299578063158c3ade1461031c57806317d7de7c14610354575b600080fd5b6101c36004803603602081101561018e57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610e1e565b604051808215151515815260200191505060405180910390f35b610209600480360360208110156101f357600080fd5b8101908080359060200190929190505050610e86565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102976004803603604081101561026157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ec3565b005b6102a16110b9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102e15780820151818401526020810190506102c6565b50505050905090810190601f16801561030e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103526004803603604081101561033257600080fd5b81019080803590602001909291908035906020019092919050505061115b565b005b61035c611333565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039c578082015181840152602081019050610381565b50505050905090810190601f1680156103c95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103df6113d5565b6040518082815260200191505060405180910390f35b6104616004803603606081101561040b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113e2565b005b6105266004803603604081101561047957600080fd5b8101908080359060200190929190803590602001906401000000008111156104a057600080fd5b8201836020820111156104b257600080fd5b803590602001918460018302840111640100000000831117156104d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611405565b005b6105746004803603604081101561053e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611448565b6040518082815260200191505060405180910390f35b6106e4600480360360608110156105a057600080fd5b8101908080359060200190929190803590602001906401000000008111156105c757600080fd5b8201836020820111156105d957600080fd5b803590602001918460018302840111640100000000831117156105fb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561065e57600080fd5b82018360208201111561067057600080fd5b8035906020019184600183028401116401000000008311171561069257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506114bb565b005b610732600480360360408110156106fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114c0565b604051808215151515815260200191505060405180910390f35b6107b86004803603606081101561076257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611584565b005b6107e6600480360360208110156107d057600080fd5b81019080803590602001909291905050506115a4565b6040518082815260200191505060405180910390f35b6108286004803603602081101561081257600080fd5b81019080803590602001909291905050506115d8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108ac6004803603602081101561088057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611615565b6040518082815260200191505060405180910390f35b6108ca611665565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61093a6004803603602081101561092257600080fd5b8101908080351515906020019092919050505061168e565b005b61098a6004803603604081101561095257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506118ba565b005b610a8f600480360360808110156109a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610a0957600080fd5b820183602082011115610a1b57600080fd5b80359060200191846001830284011164010000000083111715610a3d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506119f4565b005b610a99611a1a565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610ad9578082015181840152602081019050610abe565b50505050905090810190601f168015610b065780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610b4060048036036020811015610b2a57600080fd5b8101908080359060200190929190505050611abc565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b80578082015181840152602081019050610b65565b50505050905090810190601f168015610bad5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610d446004803603610180811015610bd257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b82821015610cb1578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505081526020019060010190610c5d565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f8201169050808301925050505050509192919290505050611b83565b604051808215151515815260200191505060405180910390f35b610dc060048036036040811015610d7457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c52565b604051808215151515815260200191505060405180910390f35b610e1c60048036036020811015610df057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611ce6565b005b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610ece826115d8565b90508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f55576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806133856029913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610f955750610f948133611c52565b5b611007576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e61626c6520746f20617070726f766500000000000000000000000000000081525060200191505060405180910390fd5b826003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550813373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b606060108054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111515780601f1061112657610100808354040283529160200191611151565b820191906000526020600020905b81548152906001019060200180831161113457829003601f168201915b5050505050905090565b611163613253565b60405180606001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600115158152509050601481908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff02191690831515021790555050505080601560008481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff0219169083151502179055509050507f329e271c3661a59f0033b686a9a95b6691445bf3b5707e10995a485a6fafd68e8333604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b6060600f8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113cb5780601f106113a0576101008083540402835291602001916113cb565b820191906000526020600020905b8154815290600101906020018083116113ae57829003601f168201915b5050505050905090565b6000600880549050905090565b6113ec3382611ed2565b6113f557600080fd5b611400838383611f67565b505050565b611444828260006040519080825280601f01601f19166020018201604052801561143e5781602001600182028038833980820191505090505b506114bb565b5050565b600061145383611615565b821061145e57600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106114a857fe5b9060005260206000200154905092915050565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611567576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061335e6027913960400191505060405180910390fd5b6115718383611f8b565b61157a82611fac565b6001905092915050565b61159f838383604051806020016040528060008152506119f4565b505050565b60006115ae6113d5565b82106115b957600080fd5b600882815481106115c657fe5b90600052602060002001549050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061165e600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206120fd565b9050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611733576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061335e6027913960400191505060405180910390fd5b600060149054906101000a900460ff16151581151514156117bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f436f6e747261637420616c726561647920696e2074686174207374617465000081525060200191505060405180910390fd5b80600060146101000a81548160ff021916908315150217905550600060149054906101000a900460ff1615611853577f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a16118b7565b7f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b50565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118f357600080fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6119ff8484846113e2565b611a0b8484848461210b565b611a1457600080fd5b50505050565b606060118054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611ab25780601f10611a8757610100808354040283529160200191611ab2565b820191906000526020600020905b815481529060010190602001808311611a9557829003601f168201915b5050505050905090565b6060611ac7826122f4565b611ad057600080fd5b601260008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b775780601f10611b4c57610100808354040283529160200191611b77565b820191906000526020600020905b815481529060010190602001808311611b5a57829003601f168201915b50505050509050919050565b600080611b9286868686612366565b90506015600082815260200190815260200160002060010160149054906101000a900460ff1615611c2b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f536f6c7574696f6e20616c72656164792065786973747300000000000000000081525060200191505060405180910390fd5b611c35878261115b565b6000611c4189896114c0565b905080925050509695505050505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611d8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061335e6027913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e2c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f496e76616c69642061646472657373000000000000000000000000000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fdfc39691aec87dc6aa51ff70c0e592f260c54d2ed6c64e8c4c2306da0eec872b81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600080611ede836115d8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611f4d57508373ffffffffffffffffffffffffffffffffffffffff16611f3584610e86565b73ffffffffffffffffffffffffffffffffffffffff16145b80611f5e5750611f5d8185611c52565b5b91505092915050565b611f72838383612474565b611f7c8382612707565b611f8682826128a5565b505050565b611f95828261296c565b611f9f82826128a5565b611fa881612b88565b5050565b611fb5816122f4565b612027576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f546f6b656e20646f65736e27742065786973740000000000000000000000000081525060200191505060405180910390fd5b6120d360118054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120c05780601f10612095576101008083540402835291602001916120c0565b820191906000526020600020905b8154815290600101906020018083116120a357829003601f168201915b50505050506120ce83612bd4565b612d01565b6012600083815260200190815260200160002090805190602001906120f992919061328c565b5050565b600081600001549050919050565b600061212c8473ffffffffffffffffffffffffffffffffffffffff16612d45565b61213957600190506122ec565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156122145780820151818401526020810190506121f9565b50505050905090810190601f1680156122415780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561226357600080fd5b505af1158015612277573d6000803e3d6000fd5b505050506040513d602081101561228d57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000848484846040516020018085600260200280838360005b8381101561239a57808201518184015260208101905061237f565b505050509050018460026000925b818410156123ee5782846020020151600260200280838360005b838110156123dd5780820151818401526020810190506123c2565b5050505090500192600101926123a8565b9250505083600260200280838360005b838110156124195780820151818401526020810190506123fe565b5050505090500182600260200280838360005b8381101561244757808201518184015260208101905061242c565b50505050905001945050505050604051602081830303815290604052805190602001209050949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16612494826115d8565b73ffffffffffffffffffffffffffffffffffffffff161461251d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43616e206e6f74207472616e7366657220756e6f776e656420746f6b656e730081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146125be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f496e76616c6964207472616e736665722061646472657373000000000000000081525060200191505060405180910390fd5b6125c781612d90565b61260e600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e4e565b612655600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e71565b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061275f6001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612e8790919063ffffffff16565b905060006007600084815260200190815260200160002054905081811461284c576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481106127cc57fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061282457fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548091906001900361289e919061330c565b5050505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b612975816122f4565b156129e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f546f6b656e20616c72656164792065786973747300000000000000000000000081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614612a89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f496e76616c69642061646472657373000000000000000000000000000000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612b22600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e71565b808273ffffffffffffffffffffffffffffffffffffffff16612b42611665565b73ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b60606000821415612c1c576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050612cfc565b600082905060005b60008214612c46578080600101915050600a8281612c3e57fe5b049150612c24565b6060816040519080825280601f01601f191660200182016040528015612c7b5781602001600182028038833980820191505090505b50905060006001830390505b60008614612cf457600a8681612c9957fe5b0660300160f81b82828060019003935081518110612cb357fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8681612cec57fe5b049550612c87565b819450505050505b919050565b6060612d3d8383604051806020016040528060008152506040518060200160405280600081525060405180602001604052806000815250612ed1565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015612d8757506000801b8214155b92505050919050565b600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612e4b5760006003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b612e6660018260000154612e8790919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b6000612ec983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250613193565b905092915050565b6060808690506060869050606086905060608690506060869050606081518351855187518951010101016040519080825280601f01601f191660200182016040528015612f2d5781602001600182028038833980820191505090505b509050606081905060008090506000809050600090505b8851811015612fb257888181518110612f5957fe5b602001015160f81c60f81b838380600101945081518110612f7657fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050612f44565b600090505b875181101561302557878181518110612fcc57fe5b602001015160f81c60f81b838380600101945081518110612fe957fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050612fb7565b600090505b86518110156130985786818151811061303f57fe5b602001015160f81c60f81b83838060010194508151811061305c57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061302a565b600090505b855181101561310b578581815181106130b257fe5b602001015160f81c60f81b8383806001019450815181106130cf57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350808060010191505061309d565b600090505b845181101561317e5784818151811061312557fe5b602001015160f81c60f81b83838060010194508151811061314257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050613110565b82995050505050505050505095945050505050565b6000838311158290613240576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156132055780820151818401526020810190506131ea565b50505050905090810190601f1680156132325780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b604051806060016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106132cd57805160ff19168380011785556132fb565b828001600101855582156132fb579182015b828111156132fa5782518255916020019190600101906132df565b5b5090506133089190613338565b5090565b815481835581811115613333578183600052602060002091820191016133329190613338565b5b505050565b61335a91905b8082111561335657600081600090555060010161333e565b5090565b9056fe4f6e6c79206f776e657220697320616c6c776f656420746f20646f207468697320616374696f6e476976656e206164647265737320616c7265616479206f776e732073656c656374656420746f6b656ea265627a7a723158206ce16dc856a6b1d53b87bf3c9a55df4eba9ee1e54196fbc6fa4a4e0ee237982b64736f6c63430005100032",
  "sourceMap": "420:2073:2:-;;;522:99;8:9:-1;5:2;;;30:1;27;20:12;5:2;522:99:2;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;522:99:2;;;;;;;;;;;;;;;;20119:284:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;688:10;679:6;;:19;;;;;;;;;;;;;;;;;;713:29;731:10;713:29;;;;;;;;;;;;;;;;;;;;;;2215:5;2205:7;;:15;;;;;;;;;;;;;;;;;;3167:40;2764:10;3186:20;;3167:18;;;:40;;:::i;:::-;5313;5187:10;5332:20;;5313:18;;;:40;;:::i;:::-;12823:51;12429:10;12842:31;;12823:18;;;:51;;:::i;:::-;20268:4;20260:5;:12;;;;;;;;;;;;:::i;:::-;;20292:6;20282:7;:16;;;;;;;;;;;;:::i;:::-;;20324:12;20308:13;:28;;;;;;;;;;;;:::i;:::-;;20347:49;19930:10;20366:29;;20347:18;;;:49;;:::i;:::-;20119:284;;;605:8:2;569:16;;:45;;;;;;;;;;;;;;;;;;522:99;420:2073;;3517:158:0;3607:10;3592:25;;:11;:25;;;;;3584:34;;;;;;3664:4;3628:20;:33;3649:11;3628:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;3517:158;:::o;420:2073:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "420:2073:2:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;420:2073:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3305:133:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3305:133:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6559:167;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6559:167:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5892:661;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5892:661:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;20583:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;20583:90:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1225:280:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1225:280:2;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;20491:86:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;20491:86:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13588:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7703:180;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7703:180:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14801:122:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14801:122:1;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14801:122:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14801:122:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14801:122:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14801:122:1;;;;;;;;;;;;;;;:::i;:::-;;13254:182:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;13254:182:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;14929:166:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14929:166:1;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14929:166:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14929:166:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14929:166:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14929:166:1;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;14929:166:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;14929:166:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;14929:166:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;14929:166:1;;;;;;;;;;;;;;;:::i;:::-;;22484:160:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;22484:160:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7889:132;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7889:132:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;14019:148;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14019:148:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5657:162;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5657:162:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5366:285;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5366:285:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;466:76;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1804:280;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1804:280:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;7018:213;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7018:213:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8027:211;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8027:211:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8027:211:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8027:211:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8027:211:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8027:211:0;;;;;;;;;;;;;;;:::i;:::-;;20679:102;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;20679:102:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20787:151;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;20787:151:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;20787:151:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1733:521:2;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;1733:521:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1733:521:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1733:521:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1733:521:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1733:521:2;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7552:145:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7552:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1033:343;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1033:343:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;3305:133;3375:4;3398:20;:33;3419:11;3398:33;;;;;;;;;;;;;;;;;;;;;;;;;;;3391:40;;3305:133;;;:::o;6559:167::-;6618:7;6695:15;:24;6711:7;6695:24;;;;;;;;;;;;;;;;;;;;;6688:31;;6559:167;;;:::o;5892:661::-;5955:20;5978:16;5986:7;5978;:16::i;:::-;5955:39;;6106:2;6090:18;;:12;:18;;;;6082:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6290:12;6276:26;;:10;:26;;;:72;;;;6306:42;6323:12;6337:10;6306:16;:42::i;:::-;6276:72;6268:102;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6459:2;6432:15;:24;6448:7;6432:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;6537:7;6525:10;6512:33;;6521:2;6512:33;;;;;;;;;;;;5892:661;;;:::o;20583:90::-;20627:13;20659:7;20652:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20583:90;:::o;1225:280:2:-;1296:27;;:::i;:::-;1326:35;;;;;;;;1335:7;1326:35;;;;1344:10;1326:35;;;;;;1356:4;1326:35;;;;;1296:65;;1371:9;1386:11;1371:27;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1371:27:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1434:11;1408:18;:23;1427:3;1408:23;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1460:38;1478:7;1487:10;1460:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;1225:280;;;:::o;20491:86:0:-;20533:13;20565:5;20558:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20491:86;:::o;13588:94::-;13632:7;13658:10;:17;;;;13651:24;;13588:94;:::o;7703:180::-;7793:39;7812:10;7824:7;7793:18;:39::i;:::-;7785:48;;;;;;7844:32;7858:4;7864:2;7868:7;7844:13;:32::i;:::-;7703:180;;;:::o;14801:122:1:-;14876:40;14887:5;14894:7;14913:1;14903:12;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;14903:12:1;;;;14876:10;:40::i;:::-;14801:122;;:::o;13254:182:0:-;13334:7;13369:16;13379:5;13369:9;:16::i;:::-;13361:5;:24;13353:33;;;;;;13403:12;:19;13416:5;13403:19;;;;;;;;;;;;;;;13423:5;13403:26;;;;;;;;;;;;;;;;13396:33;;13254:182;;;;:::o;14929:166:1:-;;;;:::o;22484:160:0:-;22552:4;909:6;;;;;;;;;;;895:20;;:10;:20;;;887:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22568:18;22574:2;22578:7;22568:5;:18::i;:::-;22596:20;22608:7;22596:11;:20::i;:::-;22633:4;22626:11;;22484:160;;;;:::o;7889:132::-;7975:39;7992:4;7998:2;8002:7;7975:39;;;;;;;;;;;;:16;:39::i;:::-;7889:132;;;:::o;14019:148::-;14077:7;14112:13;:11;:13::i;:::-;14104:5;:21;14096:30;;;;;;14143:10;14154:5;14143:17;;;;;;;;;;;;;;;;14136:24;;14019:148;;;:::o;5657:162::-;5712:7;5792:11;:20;5804:7;5792:20;;;;;;;;;;;;;;;;;;;;;5785:27;;5657:162;;;:::o;5366:285::-;5421:7;5505:34;:17;:24;5523:5;5505:24;;;;;;;;;;;;;;;:32;:34::i;:::-;5498:41;;5366:285;;;:::o;466:76::-;503:7;529:6;;;;;;;;;;;522:13;;466:76;:::o;1804:280::-;909:6;;;;;;;;;;;895:20;;:10;:20;;;887:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1884:7;;;;;;;;;;;1874:17;;:6;:17;;;;1866:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1946:6;1936:7;;:16;;;;;;;;;;;;;;;;;;1965:7;;;;;;;;;;;1962:116;;;1993:18;2000:10;1993:18;;;;;;;;;;;;;;;;;;;;;;1962:116;;;2047:20;2056:10;2047:20;;;;;;;;;;;;;;;;;;;;;;1962:116;1804:280;:::o;7018:213::-;7103:10;7097:16;;:2;:16;;;;7089:25;;;;;;7161:8;7124:18;:30;7143:10;7124:30;;;;;;;;;;;;;;;:34;7155:2;7124:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;7211:2;7184:40;;7199:10;7184:40;;;7215:8;7184:40;;;;;;;;;;;;;;;;;;;;;;7018:213;;:::o;8027:211::-;8133:31;8146:4;8152:2;8156:7;8133:12;:31::i;:::-;8182:48;8205:4;8211:2;8215:7;8224:5;8182:22;:48::i;:::-;8174:57;;;;;;8027:211;;;;:::o;20679:102::-;20729:13;20761;20754:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20679:102;:::o;20787:151::-;20845:13;20878:16;20886:7;20878;:16::i;:::-;20870:25;;;;;;20912:10;:19;20923:7;20912:19;;;;;;;;;;;20905:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20787:151;;;:::o;1733:521:2:-;1929:4;1945:11;1959:22;1966:1;1969;1972;1975:5;1959:6;:22::i;:::-;1945:36;;2081:18;:23;2100:3;2081:23;;;;;;;;;;;:35;;;;;;;;;;;;2080:36;2072:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2155:28;2170:7;2179:3;2155:14;:28::i;:::-;2193:11;2207:17;2212:2;2216:7;2207:4;:17::i;:::-;2193:31;;2241:6;2234:13;;;;1733:521;;;;;;;;:::o;7552:145:0:-;7632:4;7655:18;:25;7674:5;7655:25;;;;;;;;;;;;;;;:35;7681:8;7655:35;;;;;;;;;;;;;;;;;;;;;;;;;7648:42;;7552:145;;;;:::o;1033:343::-;909:6;;;;;;;;;;;895:20;;:10;:20;;;887:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1218:8;1198:29;;:8;:29;;;1190:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1319:8;1310:6;;:17;;;;;;;;;;;;;;;;;;1342:27;1360:8;1342:27;;;;;;;;;;;;;;;;;;;;;;1033:343;:::o;8944:246::-;9029:4;9045:13;9061:16;9069:7;9061;:16::i;:::-;9045:32;;9106:5;9095:16;;:7;:16;;;:51;;;;9139:7;9115:31;;:20;9127:7;9115:11;:20::i;:::-;:31;;;9095:51;:87;;;;9150:32;9167:5;9174:7;9150:16;:32::i;:::-;9095:87;9087:96;;;8944:246;;;;:::o;14542:239::-;14627:38;14647:4;14653:2;14657:7;14627:19;:38::i;:::-;14676:47;14709:4;14715:7;14676:32;:47::i;:::-;14734:40;14762:2;14766:7;14734:27;:40::i;:::-;14542:239;;;:::o;15036:196::-;15099:24;15111:2;15115:7;15099:11;:24::i;:::-;15134:40;15162:2;15166:7;15134:27;:40::i;:::-;15185;15217:7;15185:31;:40::i;:::-;15036:196;;:::o;21029:283::-;21094:16;21102:7;21094;:16::i;:::-;21086:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21262:43;21272:13;21262:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21287:17;21296:7;21287:8;:17::i;:::-;21262:9;:43::i;:::-;21240:10;:19;21251:7;21240:19;;;;;;;;;;;:65;;;;;;;;;;;;:::i;:::-;;21029:283;:::o;1065:112:3:-;1130:7;1156;:14;;;1149:21;;1065:112;;;:::o;11274:347:0:-;11395:4;11420:15;:2;:13;;;:15::i;:::-;11415:58;;11458:4;11451:11;;;;11415:58;11483:13;11515:2;11499:36;;;11536:10;11548:4;11554:7;11563:5;11499:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;11499:70:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11499:70:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11499:70:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11499:70:0;;;;;;;;;;;;;;;;11483:86;;4320:10;11597:16;;11587:26;;;:6;:26;;;;11579:35;;;11274:347;;;;;;;:::o;8432:152::-;8489:4;8505:13;8521:11;:20;8533:7;8521:20;;;;;;;;;;;;;;;;;;;;;8505:36;;8575:1;8558:19;;:5;:19;;;;8551:26;;;8432:152;;;:::o;2260:231:2:-;2415:7;2468:1;2471;2474;2477:5;2451:32;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2451:32:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2451:32:2;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2451:32:2;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2451:32:2;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2451:32:2;;;2441:43;;;;;;2434:50;;2260:231;;;;;;:::o;10042:704:0:-;10226:4;10206:24;;:16;10214:7;10206;:16::i;:::-;:24;;;10198:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10366:2;10352:17;;:2;:17;;;10344:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10440:23;10455:7;10440:14;:23::i;:::-;10548:35;:17;:23;10566:4;10548:23;;;;;;;;;;;;;;;:33;:35::i;:::-;10593:33;:17;:21;10611:2;10593:21;;;;;;;;;;;;;;;:31;:33::i;:::-;10659:2;10636:11;:20;10648:7;10636:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;10731:7;10727:2;10712:27;;10721:4;10712:27;;;;;;;;;;;;10042:704;;;:::o;17008:1128::-;17270:22;17295:32;17325:1;17295:12;:18;17308:4;17295:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;17270:57;;17337:18;17358:17;:26;17376:7;17358:26;;;;;;;;;;;;17337:47;;17502:14;17488:10;:28;17484:323;;17532:19;17554:12;:18;17567:4;17554:18;;;;;;;;;;;;;;;17573:14;17554:34;;;;;;;;;;;;;;;;17532:56;;17636:11;17603:12;:18;17616:4;17603:18;;;;;;;;;;;;;;;17622:10;17603:30;;;;;;;;;;;;;;;:44;;;;17752:10;17719:17;:30;17737:11;17719:30;;;;;;;;;;;:43;;;;17484:323;;17893:12;:18;17906:4;17893:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;17008:1128;;;;:::o;15854:183::-;15967:12;:16;15980:2;15967:16;;;;;;;;;;;;;;;:23;;;;15938:17;:26;15956:7;15938:26;;;;;;;;;;;:52;;;;16000:12;:16;16013:2;16000:16;;;;;;;;;;;;;;;16022:7;16000:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;16000:30:0;;;;;;;;;;;;;;;;;;;;;;15854:183;;:::o;9347:496::-;9503:16;9511:7;9503;:16::i;:::-;9502:17;9494:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9576:2;9562:17;;:2;:17;;;9554:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9710:2;9687:11;:20;9699:7;9687:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;9722:33;:17;:21;9740:2;9722:21;;;;;;;;;;;;;;;:31;:33::i;:::-;9828:7;9824:2;9806:30;;9815:7;:5;:7::i;:::-;9806:30;;;;;;;;;;;;9347:496;;:::o;16232:161::-;16335:10;:17;;;;16308:15;:24;16324:7;16308:24;;;;;;;;;;;:44;;;;16362:10;16378:7;16362:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;16362:24:0;;;;;;;;;;;;;;;;;;;;;;16232:161;:::o;43271:465:1:-;43321:27;43370:1;43364:2;:7;43360:48;;;43387:10;;;;;;;;;;;;;;;;;;;;;43360:48;43417:6;43426:2;43417:11;;43438:8;43456:66;43468:1;43463;:6;43456:66;;43485:5;;;;;;;43509:2;43504:7;;;;;;;;;43456:66;;;43531:17;43561:3;43551:14;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;43551:14:1;;;;43531:34;;43575:6;43590:1;43584:3;:7;43575:16;;43601:100;43614:1;43608:2;:7;43601:100;;43664:2;43659;:7;;;;;;43654:2;:12;43643:25;;43631:4;43636:3;;;;;;;43631:9;;;;;;;;;;;:37;;;;;;;;;;;43688:2;43682:8;;;;;;;;;43601:100;;;43724:4;43710:19;;;;;;43271:465;;;;:::o;39712:166::-;39790:33;39842:29;39852:2;39856;39842:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:9;:29::i;:::-;39835:36;;39712:166;;;;:::o;686:610:6:-;746:4;1004:16;1030:19;1052:66;1030:88;;;;1219:7;1207:20;1195:32;;1258:11;1246:8;:23;;:42;;;;;1285:3;1273:15;;:8;:15;;1246:42;1238:51;;;;686:610;;;:::o;11702:171:0:-;11801:1;11765:38;;:15;:24;11781:7;11765:24;;;;;;;;;;;;;;;;;;;;;:38;;;11761:106;;11854:1;11819:15;:24;11835:7;11819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;11761:106;11702:171;:::o;1367:108:3:-;1447:21;1466:1;1447:7;:14;;;:18;;:21;;;;:::i;:::-;1430:7;:14;;:38;;;;1367:108;:::o;1183:178::-;1353:1;1335:7;:14;;;:19;;;;;;;;;;;1183:178;:::o;1274:134:4:-;1332:7;1358:43;1362:1;1365;1358:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1351:50;;1274:134;;;;:::o;40282:1020:1:-;40414:33;40459:16;40484:2;40459:28;;40497:16;40522:2;40497:28;;40535:16;40560:2;40535:28;;40573:16;40598:2;40573:28;;40611:16;40636:2;40611:28;;40649:19;40734:3;:10;40721:3;:10;40708:3;:10;40695:3;:10;40682:3;:10;:23;:36;:49;:62;40671:74;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;40671:74:1;;;;40649:96;;40755:19;40783:5;40755:34;;40799:6;40808:1;40799:10;;40819:6;40828:1;40819:10;;40848:1;40844:5;;40839:78;40855:3;:10;40851:1;:14;40839:78;;;40900:3;40904:1;40900:6;;;;;;;;;;;;;;;;40886;40893:3;;;;;;40886:11;;;;;;;;;;;:20;;;;;;;;;;;40867:3;;;;;;;40839:78;;;40935:1;40931:5;;40926:78;40942:3;:10;40938:1;:14;40926:78;;;40987:3;40991:1;40987:6;;;;;;;;;;;;;;;;40973;40980:3;;;;;;40973:11;;;;;;;;;;;:20;;;;;;;;;;;40954:3;;;;;;;40926:78;;;41022:1;41018:5;;41013:78;41029:3;:10;41025:1;:14;41013:78;;;41074:3;41078:1;41074:6;;;;;;;;;;;;;;;;41060;41067:3;;;;;;41060:11;;;;;;;;;;;:20;;;;;;;;;;;41041:3;;;;;;;41013:78;;;41109:1;41105:5;;41100:78;41116:3;:10;41112:1;:14;41100:78;;;41161:3;41165:1;41161:6;;;;;;;;;;;;;;;;41147;41154:3;;;;;;41147:11;;;;;;;;;;;:20;;;;;;;;;;;41128:3;;;;;;;41100:78;;;41196:1;41192:5;;41187:78;41203:3;:10;41199:1;:14;41187:78;;;41248:3;41252:1;41248:6;;;;;;;;;;;;;;;;41234;41241:3;;;;;;41234:11;;;;;;;;;;;:20;;;;;;;;;;;41215:3;;;;;;;41187:78;;;41288:6;41274:21;;;;;;;;;;;40282:1020;;;;;;;:::o;1732:187:4:-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;420:2073:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\nimport \"./ERC721Mintable.sol\";\n// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>\ncontract ContractVerifier {\n    function verifyTx(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public returns(bool);\n}\n\n\n// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class\ncontract SolnSquareVerifier is RealEstateContractERC721 {\n    ContractVerifier contractVerifier;\n\n    constructor(address verifier) public {\n        contractVerifier = ContractVerifier(verifier);\n    }\n\n\n    // TODO define a solutions struct that can hold an index & an address\n    struct Solution {\n        uint256 index;\n        address account;\n        bool isSubmitted;\n    }\n\n    // TODO define an array of the above struct\n    Solution[] private solutions;\n\n    // TODO define a mapping to store unique solutions submitted\n    mapping(bytes32 => Solution) private submittedSolutions;\n\n\n    // TODO Create an event to emit when a solution is added\n    event SolutionSubmitted(uint256 tokenId, address account);\n\n\n    // TODO Create a function to add the solutions to the array and emit the event\n    function appendSolution(uint256 tokenId, bytes32 key) public {\n        Solution memory newSolution = Solution(tokenId, msg.sender, true);\n        solutions.push(newSolution);\n        submittedSolutions[key] = newSolution;\n        emit SolutionSubmitted(tokenId, msg.sender);\n    }\n\n\n    // TODO Create a function to mint new NFT only after the solution has been verified\n    //  - make sure the solution is unique (has not been used before)\n    //  - make sure you handle metadata as well as tokenSuplly\n    function mintToken(\n        address to,\n        uint256 tokenId,\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory input\n    ) public returns(bool) {\n        bytes32 key = getKey(a, b, c, input);\n\n        // require(contractVerifier.verifyTx(a, b, c, input), \"Invalid proof\");\n        require(!submittedSolutions[key].isSubmitted, \"Solution already exists\");\n\n        appendSolution(tokenId, key);\n        bool status = mint(to, tokenId);\n        return status;\n    }\n\n    function getKey(\n        uint[2] memory a,\n        uint[2][2] memory b,\n        uint[2] memory c,\n        uint[2] memory input\n    ) internal view returns(bytes32) {\n        return keccak256(abi.encodePacked(a, b, c, input));\n    }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
  "sourcePath": "/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/SolnSquareVerifier.sol",
  "ast": {
    "absolutePath": "/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/SolnSquareVerifier.sol",
    "exportedSymbols": {
      "ContractVerifier": [
        7412
      ],
      "SolnSquareVerifier": [
        7578
      ]
    },
    "id": 7579,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 7387,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/ERC721Mintable.sol",
        "file": "./ERC721Mintable.sol",
        "id": 7388,
        "nodeType": "ImportDirective",
        "scope": 7579,
        "sourceUnit": 1118,
        "src": "25:30:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 7412,
        "linearizedBaseContracts": [
          7412
        ],
        "name": "ContractVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 7411,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "verifyTx",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7407,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7392,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7411,
                  "src": "213:16:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7389,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "213:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7391,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7390,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "218:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "213:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7398,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7411,
                  "src": "231:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7393,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "231:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7395,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7394,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "236:1:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "231:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7397,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7396,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "239:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "231:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7402,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7411,
                  "src": "252:16:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7399,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "252:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7401,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7400,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "257:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "252:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7406,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7411,
                  "src": "270:20:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7403,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "270:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7405,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7404,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "275:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "270:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "212:79:2"
            },
            "returnParameters": {
              "id": 7410,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7409,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7411,
                  "src": "307:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7408,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "306:6:2"
            },
            "scope": 7412,
            "src": "195:118:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 7579,
        "src": "163:152:2"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7413,
              "name": "RealEstateContractERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1117,
              "src": "451:24:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_RealEstateContractERC721_$1117",
                "typeString": "contract RealEstateContractERC721"
              }
            },
            "id": 7414,
            "nodeType": "InheritanceSpecifier",
            "src": "451:24:2"
          }
        ],
        "contractDependencies": [
          72,
          148,
          194,
          680,
          978,
          1088,
          1117,
          7385
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 7578,
        "linearizedBaseContracts": [
          7578,
          1117,
          1088,
          7385,
          978,
          680,
          194,
          148,
          72
        ],
        "name": "SolnSquareVerifier",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 7416,
            "name": "contractVerifier",
            "nodeType": "VariableDeclaration",
            "scope": 7578,
            "src": "482:33:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ContractVerifier_$7412",
              "typeString": "contract ContractVerifier"
            },
            "typeName": {
              "contractScope": null,
              "id": 7415,
              "name": "ContractVerifier",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 7412,
              "src": "482:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ContractVerifier_$7412",
                "typeString": "contract ContractVerifier"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 7427,
              "nodeType": "Block",
              "src": "559:62:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7425,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 7421,
                      "name": "contractVerifier",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7416,
                      "src": "569:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ContractVerifier_$7412",
                        "typeString": "contract ContractVerifier"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 7423,
                          "name": "verifier",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7418,
                          "src": "605:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 7422,
                        "name": "ContractVerifier",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7412,
                        "src": "588:16:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ContractVerifier_$7412_$",
                          "typeString": "type(contract ContractVerifier)"
                        }
                      },
                      "id": 7424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "588:26:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ContractVerifier_$7412",
                        "typeString": "contract ContractVerifier"
                      }
                    },
                    "src": "569:45:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ContractVerifier_$7412",
                      "typeString": "contract ContractVerifier"
                    }
                  },
                  "id": 7426,
                  "nodeType": "ExpressionStatement",
                  "src": "569:45:2"
                }
              ]
            },
            "documentation": null,
            "id": 7428,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7418,
                  "name": "verifier",
                  "nodeType": "VariableDeclaration",
                  "scope": 7428,
                  "src": "534:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "534:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "533:18:2"
            },
            "returnParameters": {
              "id": 7420,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "559:0:2"
            },
            "scope": 7578,
            "src": "522:99:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "canonicalName": "SolnSquareVerifier.Solution",
            "id": 7435,
            "members": [
              {
                "constant": false,
                "id": 7430,
                "name": "index",
                "nodeType": "VariableDeclaration",
                "scope": 7435,
                "src": "728:13:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 7429,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "728:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7432,
                "name": "account",
                "nodeType": "VariableDeclaration",
                "scope": 7435,
                "src": "751:15:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 7431,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "751:7:2",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7434,
                "name": "isSubmitted",
                "nodeType": "VariableDeclaration",
                "scope": 7435,
                "src": "776:16:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 7433,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "776:4:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Solution",
            "nodeType": "StructDefinition",
            "scope": 7578,
            "src": "702:97:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7438,
            "name": "solutions",
            "nodeType": "VariableDeclaration",
            "scope": 7578,
            "src": "853:28:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Solution_$7435_storage_$dyn_storage",
              "typeString": "struct SolnSquareVerifier.Solution[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 7436,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7435,
                "src": "853:8:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7435_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              },
              "id": 7437,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "853:10:2",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Solution_$7435_storage_$dyn_storage_ptr",
                "typeString": "struct SolnSquareVerifier.Solution[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 7442,
            "name": "submittedSolutions",
            "nodeType": "VariableDeclaration",
            "scope": 7578,
            "src": "953:55:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7435_storage_$",
              "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
            },
            "typeName": {
              "id": 7441,
              "keyType": {
                "id": 7439,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "961:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "953:28:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7435_storage_$",
                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
              },
              "valueType": {
                "contractScope": null,
                "id": 7440,
                "name": "Solution",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 7435,
                "src": "972:8:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Solution_$7435_storage_ptr",
                  "typeString": "struct SolnSquareVerifier.Solution"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 7448,
            "name": "SolutionSubmitted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 7447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7444,
                  "indexed": false,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7448,
                  "src": "1101:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7443,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1101:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7446,
                  "indexed": false,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 7448,
                  "src": "1118:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7445,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1118:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1100:34:2"
            },
            "src": "1077:58:2"
          },
          {
            "body": {
              "id": 7482,
              "nodeType": "Block",
              "src": "1286:219:2",
              "statements": [
                {
                  "assignments": [
                    7456
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7456,
                      "name": "newSolution",
                      "nodeType": "VariableDeclaration",
                      "scope": 7482,
                      "src": "1296:27:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7435_memory_ptr",
                        "typeString": "struct SolnSquareVerifier.Solution"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 7455,
                        "name": "Solution",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 7435,
                        "src": "1296:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7435_storage_ptr",
                          "typeString": "struct SolnSquareVerifier.Solution"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7463,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7458,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7450,
                        "src": "1335:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 7459,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7920,
                          "src": "1344:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7460,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1344:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "74727565",
                        "id": 7461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1356:4:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 7457,
                      "name": "Solution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7435,
                      "src": "1326:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Solution_$7435_storage_ptr_$",
                        "typeString": "type(struct SolnSquareVerifier.Solution storage pointer)"
                      }
                    },
                    "id": 7462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1326:35:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Solution_$7435_memory",
                      "typeString": "struct SolnSquareVerifier.Solution memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1296:65:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7467,
                        "name": "newSolution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7456,
                        "src": "1386:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Solution_$7435_memory_ptr",
                          "typeString": "struct SolnSquareVerifier.Solution memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Solution_$7435_memory_ptr",
                          "typeString": "struct SolnSquareVerifier.Solution memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 7464,
                        "name": "solutions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7438,
                        "src": "1371:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Solution_$7435_storage_$dyn_storage",
                          "typeString": "struct SolnSquareVerifier.Solution storage ref[] storage ref"
                        }
                      },
                      "id": 7466,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1371:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Solution_$7435_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct SolnSquareVerifier.Solution storage ref) returns (uint256)"
                      }
                    },
                    "id": 7468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1371:27:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 7469,
                  "nodeType": "ExpressionStatement",
                  "src": "1371:27:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7474,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 7470,
                        "name": "submittedSolutions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7442,
                        "src": "1408:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7435_storage_$",
                          "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                        }
                      },
                      "id": 7472,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 7471,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7452,
                        "src": "1427:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1408:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7435_storage",
                        "typeString": "struct SolnSquareVerifier.Solution storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 7473,
                      "name": "newSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7456,
                      "src": "1434:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Solution_$7435_memory_ptr",
                        "typeString": "struct SolnSquareVerifier.Solution memory"
                      }
                    },
                    "src": "1408:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Solution_$7435_storage",
                      "typeString": "struct SolnSquareVerifier.Solution storage ref"
                    }
                  },
                  "id": 7475,
                  "nodeType": "ExpressionStatement",
                  "src": "1408:37:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7477,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7450,
                        "src": "1478:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 7478,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7920,
                          "src": "1487:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 7479,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1487:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 7476,
                      "name": "SolutionSubmitted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7448,
                      "src": "1460:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 7480,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1460:38:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7481,
                  "nodeType": "EmitStatement",
                  "src": "1455:43:2"
                }
              ]
            },
            "documentation": null,
            "id": 7483,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "appendSolution",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7453,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7450,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7483,
                  "src": "1249:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7449,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1249:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7452,
                  "name": "key",
                  "nodeType": "VariableDeclaration",
                  "scope": 7483,
                  "src": "1266:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7451,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1266:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1248:30:2"
            },
            "returnParameters": {
              "id": 7454,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1286:0:2"
            },
            "scope": 7578,
            "src": "1225:280:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7542,
              "nodeType": "Block",
              "src": "1935:319:2",
              "statements": [
                {
                  "assignments": [
                    7511
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7511,
                      "name": "key",
                      "nodeType": "VariableDeclaration",
                      "scope": 7542,
                      "src": "1945:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 7510,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "1945:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7518,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7513,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7491,
                        "src": "1966:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7514,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7497,
                        "src": "1969:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7515,
                        "name": "c",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7501,
                        "src": "1972:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7516,
                        "name": "input",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7505,
                        "src": "1975:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                          "typeString": "uint256[2] memory[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        },
                        {
                          "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                          "typeString": "uint256[2] memory"
                        }
                      ],
                      "id": 7512,
                      "name": "getKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7577,
                      "src": "1959:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$_t_array$_t_uint256_$2_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) view returns (bytes32)"
                      }
                    },
                    "id": 7517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1959:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1945:36:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7524,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "2080:36:2",
                        "subExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 7520,
                              "name": "submittedSolutions",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7442,
                              "src": "2081:18:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Solution_$7435_storage_$",
                                "typeString": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)"
                              }
                            },
                            "id": 7522,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 7521,
                              "name": "key",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7511,
                              "src": "2100:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2081:23:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Solution_$7435_storage",
                              "typeString": "struct SolnSquareVerifier.Solution storage ref"
                            }
                          },
                          "id": 7523,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isSubmitted",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7434,
                          "src": "2081:35:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "536f6c7574696f6e20616c726561647920657869737473",
                        "id": 7525,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2118:25:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ac996440a72e14fb9c5151df88591abddb2bc86e6f1a6831bea3662cc32c2de4",
                          "typeString": "literal_string \"Solution already exists\""
                        },
                        "value": "Solution already exists"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ac996440a72e14fb9c5151df88591abddb2bc86e6f1a6831bea3662cc32c2de4",
                          "typeString": "literal_string \"Solution already exists\""
                        }
                      ],
                      "id": 7519,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7923,
                        7924
                      ],
                      "referencedDeclaration": 7924,
                      "src": "2072:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 7526,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2072:72:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7527,
                  "nodeType": "ExpressionStatement",
                  "src": "2072:72:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7529,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7487,
                        "src": "2170:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7530,
                        "name": "key",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7511,
                        "src": "2179:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 7528,
                      "name": "appendSolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7483,
                      "src": "2155:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (uint256,bytes32)"
                      }
                    },
                    "id": 7531,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2155:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 7532,
                  "nodeType": "ExpressionStatement",
                  "src": "2155:28:2"
                },
                {
                  "assignments": [
                    7534
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7534,
                      "name": "status",
                      "nodeType": "VariableDeclaration",
                      "scope": 7542,
                      "src": "2193:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 7533,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2193:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 7539,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 7536,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7485,
                        "src": "2212:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 7537,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7487,
                        "src": "2216:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7535,
                      "name": "mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1116,
                      "src": "2207:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 7538,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2207:17:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2193:31:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 7540,
                    "name": "status",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 7534,
                    "src": "2241:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 7509,
                  "id": 7541,
                  "nodeType": "Return",
                  "src": "2234:13:2"
                }
              ]
            },
            "documentation": null,
            "id": 7543,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7485,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 7543,
                  "src": "1761:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7484,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1761:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7487,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 7543,
                  "src": "1781:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7486,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1781:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7491,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7543,
                  "src": "1806:16:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7488,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1806:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7490,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7489,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1811:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1806:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7497,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7543,
                  "src": "1832:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7492,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1832:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7494,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1837:1:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "1832:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7496,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1840:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1832:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7501,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7543,
                  "src": "1861:16:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7498,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1861:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7500,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1866:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1861:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7505,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7543,
                  "src": "1887:20:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7502,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "1887:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7504,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7503,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1892:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "1887:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1751:162:2"
            },
            "returnParameters": {
              "id": 7509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7508,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7543,
                  "src": "1929:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7507,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1929:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1928:6:2"
            },
            "scope": 7578,
            "src": "1733:521:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 7576,
              "nodeType": "Block",
              "src": "2424:67:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 7569,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7547,
                            "src": "2468:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7570,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7553,
                            "src": "2471:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7571,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7557,
                            "src": "2474:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 7572,
                            "name": "input",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7561,
                            "src": "2477:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                              "typeString": "uint256[2] memory[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                              "typeString": "uint256[2] memory"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 7567,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7907,
                            "src": "2451:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 7568,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2451:16:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 7573,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2451:32:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 7566,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7914,
                      "src": "2441:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 7574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2441:43:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 7565,
                  "id": 7575,
                  "nodeType": "Return",
                  "src": "2434:50:2"
                }
              ]
            },
            "documentation": null,
            "id": 7577,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getKey",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 7562,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7547,
                  "name": "a",
                  "nodeType": "VariableDeclaration",
                  "scope": 7577,
                  "src": "2285:16:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7544,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2285:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7546,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7545,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2290:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2285:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7553,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "scope": 7577,
                  "src": "2311:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                    "typeString": "uint256[2][2]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 7548,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2311:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 7550,
                      "length": {
                        "argumentTypes": null,
                        "hexValue": "32",
                        "id": 7549,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2316:1:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "2311:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                        "typeString": "uint256[2]"
                      }
                    },
                    "id": 7552,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7551,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2319:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2311:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_storage_$2_storage_ptr",
                      "typeString": "uint256[2][2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7557,
                  "name": "c",
                  "nodeType": "VariableDeclaration",
                  "scope": 7577,
                  "src": "2340:16:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7554,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2340:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7556,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7555,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2345:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2340:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7561,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 7577,
                  "src": "2366:20:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                    "typeString": "uint256[2]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 7558,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "2366:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 7560,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "32",
                      "id": 7559,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2371:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2_by_1",
                        "typeString": "int_const 2"
                      },
                      "value": "2"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2366:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$2_storage_ptr",
                      "typeString": "uint256[2]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2275:117:2"
            },
            "returnParameters": {
              "id": 7565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7564,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 7577,
                  "src": "2415:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 7563,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2415:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2414:9:2"
            },
            "scope": 7578,
            "src": "2260:231:2",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 7579,
        "src": "420:2073:2"
      }
    ],
    "src": "0:2511:2"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/SolnSquareVerifier.sol",
      "exportedSymbols": {
        "ContractVerifier": [
          7412
        ],
        "SolnSquareVerifier": [
          7578
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ]
        },
        "id": 7387,
        "name": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "attributes": {
          "SourceUnit": 1118,
          "absolutePath": "/Users/ikovacic/work/playground/blockchain/real-estate-capstone/eth-contracts/contracts/ERC721Mintable.sol",
          "file": "./ERC721Mintable.sol",
          "scope": 7579,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7388,
        "name": "ImportDirective",
        "src": "25:30:2"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            7412
          ],
          "name": "ContractVerifier",
          "scope": 7579
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "documentation": null,
              "implemented": false,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "verifyTx",
              "scope": 7412,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7411,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7389,
                            "name": "ElementaryTypeName",
                            "src": "213:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7390,
                            "name": "Literal",
                            "src": "218:1:2"
                          }
                        ],
                        "id": 7391,
                        "name": "ArrayTypeName",
                        "src": "213:7:2"
                      }
                    ],
                    "id": 7392,
                    "name": "VariableDeclaration",
                    "src": "213:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7411,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2][2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2][2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "type": "uint256[2]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 7393,
                                "name": "ElementaryTypeName",
                                "src": "231:4:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 7394,
                                "name": "Literal",
                                "src": "236:1:2"
                              }
                            ],
                            "id": 7395,
                            "name": "ArrayTypeName",
                            "src": "231:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7396,
                            "name": "Literal",
                            "src": "239:1:2"
                          }
                        ],
                        "id": 7397,
                        "name": "ArrayTypeName",
                        "src": "231:10:2"
                      }
                    ],
                    "id": 7398,
                    "name": "VariableDeclaration",
                    "src": "231:19:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 7411,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7399,
                            "name": "ElementaryTypeName",
                            "src": "252:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7400,
                            "name": "Literal",
                            "src": "257:1:2"
                          }
                        ],
                        "id": 7401,
                        "name": "ArrayTypeName",
                        "src": "252:7:2"
                      }
                    ],
                    "id": 7402,
                    "name": "VariableDeclaration",
                    "src": "252:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "input",
                      "scope": 7411,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7403,
                            "name": "ElementaryTypeName",
                            "src": "270:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7404,
                            "name": "Literal",
                            "src": "275:1:2"
                          }
                        ],
                        "id": 7405,
                        "name": "ArrayTypeName",
                        "src": "270:7:2"
                      }
                    ],
                    "id": 7406,
                    "name": "VariableDeclaration",
                    "src": "270:20:2"
                  }
                ],
                "id": 7407,
                "name": "ParameterList",
                "src": "212:79:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7411,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 7408,
                        "name": "ElementaryTypeName",
                        "src": "307:4:2"
                      }
                    ],
                    "id": 7409,
                    "name": "VariableDeclaration",
                    "src": "307:4:2"
                  }
                ],
                "id": 7410,
                "name": "ParameterList",
                "src": "306:6:2"
              }
            ],
            "id": 7411,
            "name": "FunctionDefinition",
            "src": "195:118:2"
          }
        ],
        "id": 7412,
        "name": "ContractDefinition",
        "src": "163:152:2"
      },
      {
        "attributes": {
          "contractDependencies": [
            72,
            148,
            194,
            680,
            978,
            1088,
            1117,
            7385
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            7578,
            1117,
            1088,
            7385,
            978,
            680,
            194,
            148,
            72
          ],
          "name": "SolnSquareVerifier",
          "scope": 7579
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "RealEstateContractERC721",
                  "referencedDeclaration": 1117,
                  "type": "contract RealEstateContractERC721"
                },
                "id": 7413,
                "name": "UserDefinedTypeName",
                "src": "451:24:2"
              }
            ],
            "id": 7414,
            "name": "InheritanceSpecifier",
            "src": "451:24:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "contractVerifier",
              "scope": 7578,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract ContractVerifier",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ContractVerifier",
                  "referencedDeclaration": 7412,
                  "type": "contract ContractVerifier"
                },
                "id": 7415,
                "name": "UserDefinedTypeName",
                "src": "482:16:2"
              }
            ],
            "id": 7416,
            "name": "VariableDeclaration",
            "src": "482:33:2"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "modifiers": [
                null
              ],
              "name": "",
              "scope": 7578,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "verifier",
                      "scope": 7428,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7417,
                        "name": "ElementaryTypeName",
                        "src": "534:7:2"
                      }
                    ],
                    "id": 7418,
                    "name": "VariableDeclaration",
                    "src": "534:16:2"
                  }
                ],
                "id": 7419,
                "name": "ParameterList",
                "src": "533:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7420,
                "name": "ParameterList",
                "src": "559:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract ContractVerifier"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7416,
                              "type": "contract ContractVerifier",
                              "value": "contractVerifier"
                            },
                            "id": 7421,
                            "name": "Identifier",
                            "src": "569:16:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract ContractVerifier",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7412,
                                  "type": "type(contract ContractVerifier)",
                                  "value": "ContractVerifier"
                                },
                                "id": 7422,
                                "name": "Identifier",
                                "src": "588:16:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7418,
                                  "type": "address",
                                  "value": "verifier"
                                },
                                "id": 7423,
                                "name": "Identifier",
                                "src": "605:8:2"
                              }
                            ],
                            "id": 7424,
                            "name": "FunctionCall",
                            "src": "588:26:2"
                          }
                        ],
                        "id": 7425,
                        "name": "Assignment",
                        "src": "569:45:2"
                      }
                    ],
                    "id": 7426,
                    "name": "ExpressionStatement",
                    "src": "569:45:2"
                  }
                ],
                "id": 7427,
                "name": "Block",
                "src": "559:62:2"
              }
            ],
            "id": 7428,
            "name": "FunctionDefinition",
            "src": "522:99:2"
          },
          {
            "attributes": {
              "canonicalName": "SolnSquareVerifier.Solution",
              "name": "Solution",
              "scope": 7578,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "index",
                  "scope": 7435,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 7429,
                    "name": "ElementaryTypeName",
                    "src": "728:7:2"
                  }
                ],
                "id": 7430,
                "name": "VariableDeclaration",
                "src": "728:13:2"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "account",
                  "scope": 7435,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "stateMutability": "nonpayable",
                      "type": "address"
                    },
                    "id": 7431,
                    "name": "ElementaryTypeName",
                    "src": "751:7:2"
                  }
                ],
                "id": 7432,
                "name": "VariableDeclaration",
                "src": "751:15:2"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "isSubmitted",
                  "scope": 7435,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "bool",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 7433,
                    "name": "ElementaryTypeName",
                    "src": "776:4:2"
                  }
                ],
                "id": 7434,
                "name": "VariableDeclaration",
                "src": "776:16:2"
              }
            ],
            "id": 7435,
            "name": "StructDefinition",
            "src": "702:97:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "solutions",
              "scope": 7578,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct SolnSquareVerifier.Solution[]",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "length": null,
                  "type": "struct SolnSquareVerifier.Solution[]"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Solution",
                      "referencedDeclaration": 7435,
                      "type": "struct SolnSquareVerifier.Solution"
                    },
                    "id": 7436,
                    "name": "UserDefinedTypeName",
                    "src": "853:8:2"
                  }
                ],
                "id": 7437,
                "name": "ArrayTypeName",
                "src": "853:10:2"
              }
            ],
            "id": 7438,
            "name": "VariableDeclaration",
            "src": "853:28:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "submittedSolutions",
              "scope": 7578,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution)",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 7439,
                    "name": "ElementaryTypeName",
                    "src": "961:7:2"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Solution",
                      "referencedDeclaration": 7435,
                      "type": "struct SolnSquareVerifier.Solution"
                    },
                    "id": 7440,
                    "name": "UserDefinedTypeName",
                    "src": "972:8:2"
                  }
                ],
                "id": 7441,
                "name": "Mapping",
                "src": "953:28:2"
              }
            ],
            "id": 7442,
            "name": "VariableDeclaration",
            "src": "953:55:2"
          },
          {
            "attributes": {
              "anonymous": false,
              "documentation": null,
              "name": "SolutionSubmitted"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "tokenId",
                      "scope": 7448,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7443,
                        "name": "ElementaryTypeName",
                        "src": "1101:7:2"
                      }
                    ],
                    "id": 7444,
                    "name": "VariableDeclaration",
                    "src": "1101:15:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "account",
                      "scope": 7448,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7445,
                        "name": "ElementaryTypeName",
                        "src": "1118:7:2"
                      }
                    ],
                    "id": 7446,
                    "name": "VariableDeclaration",
                    "src": "1118:15:2"
                  }
                ],
                "id": 7447,
                "name": "ParameterList",
                "src": "1100:34:2"
              }
            ],
            "id": 7448,
            "name": "EventDefinition",
            "src": "1077:58:2"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "appendSolution",
              "scope": 7578,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenId",
                      "scope": 7483,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7449,
                        "name": "ElementaryTypeName",
                        "src": "1249:7:2"
                      }
                    ],
                    "id": 7450,
                    "name": "VariableDeclaration",
                    "src": "1249:15:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "key",
                      "scope": 7483,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 7451,
                        "name": "ElementaryTypeName",
                        "src": "1266:7:2"
                      }
                    ],
                    "id": 7452,
                    "name": "VariableDeclaration",
                    "src": "1266:11:2"
                  }
                ],
                "id": 7453,
                "name": "ParameterList",
                "src": "1248:30:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7454,
                "name": "ParameterList",
                "src": "1286:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7456
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "newSolution",
                          "scope": 7482,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct SolnSquareVerifier.Solution",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Solution",
                              "referencedDeclaration": 7435,
                              "type": "struct SolnSquareVerifier.Solution"
                            },
                            "id": 7455,
                            "name": "UserDefinedTypeName",
                            "src": "1296:8:2"
                          }
                        ],
                        "id": 7456,
                        "name": "VariableDeclaration",
                        "src": "1296:27:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct SolnSquareVerifier.Solution memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7435,
                              "type": "type(struct SolnSquareVerifier.Solution storage pointer)",
                              "value": "Solution"
                            },
                            "id": 7457,
                            "name": "Identifier",
                            "src": "1326:8:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7450,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 7458,
                            "name": "Identifier",
                            "src": "1335:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7920,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 7459,
                                "name": "Identifier",
                                "src": "1344:3:2"
                              }
                            ],
                            "id": 7460,
                            "name": "MemberAccess",
                            "src": "1344:10:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 7461,
                            "name": "Literal",
                            "src": "1356:4:2"
                          }
                        ],
                        "id": 7462,
                        "name": "FunctionCall",
                        "src": "1326:35:2"
                      }
                    ],
                    "id": 7463,
                    "name": "VariableDeclarationStatement",
                    "src": "1296:65:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_Solution_$7435_memory_ptr",
                                  "typeString": "struct SolnSquareVerifier.Solution memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (struct SolnSquareVerifier.Solution storage ref) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7438,
                                  "type": "struct SolnSquareVerifier.Solution storage ref[] storage ref",
                                  "value": "solutions"
                                },
                                "id": 7464,
                                "name": "Identifier",
                                "src": "1371:9:2"
                              }
                            ],
                            "id": 7466,
                            "name": "MemberAccess",
                            "src": "1371:14:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7456,
                              "type": "struct SolnSquareVerifier.Solution memory",
                              "value": "newSolution"
                            },
                            "id": 7467,
                            "name": "Identifier",
                            "src": "1386:11:2"
                          }
                        ],
                        "id": 7468,
                        "name": "FunctionCall",
                        "src": "1371:27:2"
                      }
                    ],
                    "id": 7469,
                    "name": "ExpressionStatement",
                    "src": "1371:27:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "struct SolnSquareVerifier.Solution storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct SolnSquareVerifier.Solution storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7442,
                                  "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                                  "value": "submittedSolutions"
                                },
                                "id": 7470,
                                "name": "Identifier",
                                "src": "1408:18:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7452,
                                  "type": "bytes32",
                                  "value": "key"
                                },
                                "id": 7471,
                                "name": "Identifier",
                                "src": "1427:3:2"
                              }
                            ],
                            "id": 7472,
                            "name": "IndexAccess",
                            "src": "1408:23:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7456,
                              "type": "struct SolnSquareVerifier.Solution memory",
                              "value": "newSolution"
                            },
                            "id": 7473,
                            "name": "Identifier",
                            "src": "1434:11:2"
                          }
                        ],
                        "id": 7474,
                        "name": "Assignment",
                        "src": "1408:37:2"
                      }
                    ],
                    "id": 7475,
                    "name": "ExpressionStatement",
                    "src": "1408:37:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7448,
                              "type": "function (uint256,address)",
                              "value": "SolutionSubmitted"
                            },
                            "id": 7476,
                            "name": "Identifier",
                            "src": "1460:17:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7450,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 7477,
                            "name": "Identifier",
                            "src": "1478:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7920,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 7478,
                                "name": "Identifier",
                                "src": "1487:3:2"
                              }
                            ],
                            "id": 7479,
                            "name": "MemberAccess",
                            "src": "1487:10:2"
                          }
                        ],
                        "id": 7480,
                        "name": "FunctionCall",
                        "src": "1460:38:2"
                      }
                    ],
                    "id": 7481,
                    "name": "EmitStatement",
                    "src": "1455:43:2"
                  }
                ],
                "id": 7482,
                "name": "Block",
                "src": "1286:219:2"
              }
            ],
            "id": 7483,
            "name": "FunctionDefinition",
            "src": "1225:280:2"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "mintToken",
              "scope": 7578,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 7543,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 7484,
                        "name": "ElementaryTypeName",
                        "src": "1761:7:2"
                      }
                    ],
                    "id": 7485,
                    "name": "VariableDeclaration",
                    "src": "1761:10:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenId",
                      "scope": 7543,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7486,
                        "name": "ElementaryTypeName",
                        "src": "1781:7:2"
                      }
                    ],
                    "id": 7487,
                    "name": "VariableDeclaration",
                    "src": "1781:15:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7543,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7488,
                            "name": "ElementaryTypeName",
                            "src": "1806:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7489,
                            "name": "Literal",
                            "src": "1811:1:2"
                          }
                        ],
                        "id": 7490,
                        "name": "ArrayTypeName",
                        "src": "1806:7:2"
                      }
                    ],
                    "id": 7491,
                    "name": "VariableDeclaration",
                    "src": "1806:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7543,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2][2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2][2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "type": "uint256[2]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 7492,
                                "name": "ElementaryTypeName",
                                "src": "1832:4:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 7493,
                                "name": "Literal",
                                "src": "1837:1:2"
                              }
                            ],
                            "id": 7494,
                            "name": "ArrayTypeName",
                            "src": "1832:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7495,
                            "name": "Literal",
                            "src": "1840:1:2"
                          }
                        ],
                        "id": 7496,
                        "name": "ArrayTypeName",
                        "src": "1832:10:2"
                      }
                    ],
                    "id": 7497,
                    "name": "VariableDeclaration",
                    "src": "1832:19:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 7543,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7498,
                            "name": "ElementaryTypeName",
                            "src": "1861:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7499,
                            "name": "Literal",
                            "src": "1866:1:2"
                          }
                        ],
                        "id": 7500,
                        "name": "ArrayTypeName",
                        "src": "1861:7:2"
                      }
                    ],
                    "id": 7501,
                    "name": "VariableDeclaration",
                    "src": "1861:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "input",
                      "scope": 7543,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7502,
                            "name": "ElementaryTypeName",
                            "src": "1887:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7503,
                            "name": "Literal",
                            "src": "1892:1:2"
                          }
                        ],
                        "id": 7504,
                        "name": "ArrayTypeName",
                        "src": "1887:7:2"
                      }
                    ],
                    "id": 7505,
                    "name": "VariableDeclaration",
                    "src": "1887:20:2"
                  }
                ],
                "id": 7506,
                "name": "ParameterList",
                "src": "1751:162:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7543,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 7507,
                        "name": "ElementaryTypeName",
                        "src": "1929:4:2"
                      }
                    ],
                    "id": 7508,
                    "name": "VariableDeclaration",
                    "src": "1929:4:2"
                  }
                ],
                "id": 7509,
                "name": "ParameterList",
                "src": "1928:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7511
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "key",
                          "scope": 7542,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 7510,
                            "name": "ElementaryTypeName",
                            "src": "1945:7:2"
                          }
                        ],
                        "id": 7511,
                        "name": "VariableDeclaration",
                        "src": "1945:11:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                  "typeString": "uint256[2] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                                  "typeString": "uint256[2] memory[2] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                  "typeString": "uint256[2] memory"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                  "typeString": "uint256[2] memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7577,
                              "type": "function (uint256[2] memory,uint256[2] memory[2] memory,uint256[2] memory,uint256[2] memory) view returns (bytes32)",
                              "value": "getKey"
                            },
                            "id": 7512,
                            "name": "Identifier",
                            "src": "1959:6:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7491,
                              "type": "uint256[2] memory",
                              "value": "a"
                            },
                            "id": 7513,
                            "name": "Identifier",
                            "src": "1966:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7497,
                              "type": "uint256[2] memory[2] memory",
                              "value": "b"
                            },
                            "id": 7514,
                            "name": "Identifier",
                            "src": "1969:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7501,
                              "type": "uint256[2] memory",
                              "value": "c"
                            },
                            "id": 7515,
                            "name": "Identifier",
                            "src": "1972:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7505,
                              "type": "uint256[2] memory",
                              "value": "input"
                            },
                            "id": 7516,
                            "name": "Identifier",
                            "src": "1975:5:2"
                          }
                        ],
                        "id": 7517,
                        "name": "FunctionCall",
                        "src": "1959:22:2"
                      }
                    ],
                    "id": 7518,
                    "name": "VariableDeclarationStatement",
                    "src": "1945:36:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_ac996440a72e14fb9c5151df88591abddb2bc86e6f1a6831bea3662cc32c2de4",
                                  "typeString": "literal_string \"Solution already exists\""
                                }
                              ],
                              "overloadedDeclarations": [
                                7923,
                                7924
                              ],
                              "referencedDeclaration": 7924,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 7519,
                            "name": "Identifier",
                            "src": "2072:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isSubmitted",
                                  "referencedDeclaration": 7434,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct SolnSquareVerifier.Solution storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7442,
                                          "type": "mapping(bytes32 => struct SolnSquareVerifier.Solution storage ref)",
                                          "value": "submittedSolutions"
                                        },
                                        "id": 7520,
                                        "name": "Identifier",
                                        "src": "2081:18:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7511,
                                          "type": "bytes32",
                                          "value": "key"
                                        },
                                        "id": 7521,
                                        "name": "Identifier",
                                        "src": "2100:3:2"
                                      }
                                    ],
                                    "id": 7522,
                                    "name": "IndexAccess",
                                    "src": "2081:23:2"
                                  }
                                ],
                                "id": 7523,
                                "name": "MemberAccess",
                                "src": "2081:35:2"
                              }
                            ],
                            "id": 7524,
                            "name": "UnaryOperation",
                            "src": "2080:36:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "536f6c7574696f6e20616c726561647920657869737473",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Solution already exists\"",
                              "value": "Solution already exists"
                            },
                            "id": 7525,
                            "name": "Literal",
                            "src": "2118:25:2"
                          }
                        ],
                        "id": 7526,
                        "name": "FunctionCall",
                        "src": "2072:72:2"
                      }
                    ],
                    "id": 7527,
                    "name": "ExpressionStatement",
                    "src": "2072:72:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7483,
                              "type": "function (uint256,bytes32)",
                              "value": "appendSolution"
                            },
                            "id": 7528,
                            "name": "Identifier",
                            "src": "2155:14:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7487,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 7529,
                            "name": "Identifier",
                            "src": "2170:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7511,
                              "type": "bytes32",
                              "value": "key"
                            },
                            "id": 7530,
                            "name": "Identifier",
                            "src": "2179:3:2"
                          }
                        ],
                        "id": 7531,
                        "name": "FunctionCall",
                        "src": "2155:28:2"
                      }
                    ],
                    "id": 7532,
                    "name": "ExpressionStatement",
                    "src": "2155:28:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        7534
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "status",
                          "scope": 7542,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bool",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bool",
                              "type": "bool"
                            },
                            "id": 7533,
                            "name": "ElementaryTypeName",
                            "src": "2193:4:2"
                          }
                        ],
                        "id": 7534,
                        "name": "VariableDeclaration",
                        "src": "2193:11:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1116,
                              "type": "function (address,uint256) returns (bool)",
                              "value": "mint"
                            },
                            "id": 7535,
                            "name": "Identifier",
                            "src": "2207:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7485,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 7536,
                            "name": "Identifier",
                            "src": "2212:2:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7487,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 7537,
                            "name": "Identifier",
                            "src": "2216:7:2"
                          }
                        ],
                        "id": 7538,
                        "name": "FunctionCall",
                        "src": "2207:17:2"
                      }
                    ],
                    "id": 7539,
                    "name": "VariableDeclarationStatement",
                    "src": "2193:31:2"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7509
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 7534,
                          "type": "bool",
                          "value": "status"
                        },
                        "id": 7540,
                        "name": "Identifier",
                        "src": "2241:6:2"
                      }
                    ],
                    "id": 7541,
                    "name": "Return",
                    "src": "2234:13:2"
                  }
                ],
                "id": 7542,
                "name": "Block",
                "src": "1935:319:2"
              }
            ],
            "id": 7543,
            "name": "FunctionDefinition",
            "src": "1733:521:2"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "getKey",
              "scope": 7578,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7577,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7544,
                            "name": "ElementaryTypeName",
                            "src": "2285:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7545,
                            "name": "Literal",
                            "src": "2290:1:2"
                          }
                        ],
                        "id": 7546,
                        "name": "ArrayTypeName",
                        "src": "2285:7:2"
                      }
                    ],
                    "id": 7547,
                    "name": "VariableDeclaration",
                    "src": "2285:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7577,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2][2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2][2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "type": "uint256[2]"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 7548,
                                "name": "ElementaryTypeName",
                                "src": "2311:4:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 7549,
                                "name": "Literal",
                                "src": "2316:1:2"
                              }
                            ],
                            "id": 7550,
                            "name": "ArrayTypeName",
                            "src": "2311:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7551,
                            "name": "Literal",
                            "src": "2319:1:2"
                          }
                        ],
                        "id": 7552,
                        "name": "ArrayTypeName",
                        "src": "2311:10:2"
                      }
                    ],
                    "id": 7553,
                    "name": "VariableDeclaration",
                    "src": "2311:19:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "c",
                      "scope": 7577,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7554,
                            "name": "ElementaryTypeName",
                            "src": "2340:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7555,
                            "name": "Literal",
                            "src": "2345:1:2"
                          }
                        ],
                        "id": 7556,
                        "name": "ArrayTypeName",
                        "src": "2340:7:2"
                      }
                    ],
                    "id": 7557,
                    "name": "VariableDeclaration",
                    "src": "2340:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "input",
                      "scope": 7577,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "uint256[2]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "uint256[2]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7558,
                            "name": "ElementaryTypeName",
                            "src": "2366:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "32",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2",
                              "value": "2"
                            },
                            "id": 7559,
                            "name": "Literal",
                            "src": "2371:1:2"
                          }
                        ],
                        "id": 7560,
                        "name": "ArrayTypeName",
                        "src": "2366:7:2"
                      }
                    ],
                    "id": 7561,
                    "name": "VariableDeclaration",
                    "src": "2366:20:2"
                  }
                ],
                "id": 7562,
                "name": "ParameterList",
                "src": "2275:117:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7577,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 7563,
                        "name": "ElementaryTypeName",
                        "src": "2415:7:2"
                      }
                    ],
                    "id": 7564,
                    "name": "VariableDeclaration",
                    "src": "2415:7:2"
                  }
                ],
                "id": 7565,
                "name": "ParameterList",
                "src": "2414:9:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7565
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7914,
                              "type": "function (bytes memory) pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 7566,
                            "name": "Identifier",
                            "src": "2441:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes memory",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_array$_t_uint256_$2_memory_$2_memory_ptr",
                                      "typeString": "uint256[2] memory[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    },
                                    {
                                      "typeIdentifier": "t_array$_t_uint256_$2_memory_ptr",
                                      "typeString": "uint256[2] memory"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "encodePacked",
                                  "referencedDeclaration": null,
                                  "type": "function () pure returns (bytes memory)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7907,
                                      "type": "abi",
                                      "value": "abi"
                                    },
                                    "id": 7567,
                                    "name": "Identifier",
                                    "src": "2451:3:2"
                                  }
                                ],
                                "id": 7568,
                                "name": "MemberAccess",
                                "src": "2451:16:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7547,
                                  "type": "uint256[2] memory",
                                  "value": "a"
                                },
                                "id": 7569,
                                "name": "Identifier",
                                "src": "2468:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7553,
                                  "type": "uint256[2] memory[2] memory",
                                  "value": "b"
                                },
                                "id": 7570,
                                "name": "Identifier",
                                "src": "2471:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7557,
                                  "type": "uint256[2] memory",
                                  "value": "c"
                                },
                                "id": 7571,
                                "name": "Identifier",
                                "src": "2474:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7561,
                                  "type": "uint256[2] memory",
                                  "value": "input"
                                },
                                "id": 7572,
                                "name": "Identifier",
                                "src": "2477:5:2"
                              }
                            ],
                            "id": 7573,
                            "name": "FunctionCall",
                            "src": "2451:32:2"
                          }
                        ],
                        "id": 7574,
                        "name": "FunctionCall",
                        "src": "2441:43:2"
                      }
                    ],
                    "id": 7575,
                    "name": "Return",
                    "src": "2434:50:2"
                  }
                ],
                "id": 7576,
                "name": "Block",
                "src": "2424:67:2"
              }
            ],
            "id": 7577,
            "name": "FunctionDefinition",
            "src": "2260:231:2"
          }
        ],
        "id": 7578,
        "name": "ContractDefinition",
        "src": "420:2073:2"
      }
    ],
    "id": 7579,
    "name": "SourceUnit",
    "src": "0:2511:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {},
      "links": {},
      "address": "0x99cC8Ea12Deb902dC0F0a2A20ee384f22b6a4Cb9",
      "transactionHash": "0xb26560dfcc53f07f71292e91299669b9969238f257014ff4e5ed23c4521d4982"
    }
  },
  "schemaVersion": "3.4.1",
  "updatedAt": "2021-10-08T13:19:04.761Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "implement supportsInterface(bytes4) using a lookup table"
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract",
        "return": "uint256 representing the total amount of tokens"
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}
```