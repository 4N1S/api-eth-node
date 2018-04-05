## api-eth-node

This api use Ethers.js & boilerplate for building REST APIs with ES6 and Express.


## Getting Started

```sh
# clone it
git clone git@github.com:4N1S/api-eth-node.git
cd api-eth-node

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

## Methods

* [createWallet](#createWallet)
* [getBalance](#getBalance)
* [transaction](#transaction)

### createWallet

**Examples**
Request:GET
    /api/createWallet

**Response**

```javasctipt
{
	"status":"success",
	"data":{
		"address":"0x03703d1e61835D0CCFbEEEF5e77fe1e7C25d6211",
		"privateKey":"0x15a1d94da6978137a9554031e7b15431dead3cd75bf0adc0a231d496e3924084"
	},
	"message":null
}
```

### getBalance

**Examples**
Request:GET
    /api/getBalance/:address

**Response**

```javasctipt
{
	"status":"success",
	"data":{
		"balance":"1.7 ETH"
	},
	"message":null
}
```

### transaction

**Examples**
Request:
    /api/transaction/
    param:(required object JSON)
    privatkey:privateKey of the source ETH address
    from:destination is the ETH destination address
    amount:amount the number of ETH to be send


**Response**

```javasctipt
{
	"status":"success",
	"data":{
		"Transaction":"pending",
		"from":"0x1636b4285dC9486AE1F1E7684f714F772DdC32eF",
		"to":"0xD648a6753256583288348156dCCe590dfC66301a",
		"hash":"0x77b60435f7a48487f63cec909f5ea96af804179483f2281d5c47740d27c6c051",
		"urltx":"https://rinkeby.etherscan.io/tx/0x77b60435f7a48487f63cec909f5ea96af804179483f2281d5c47740d27c6c051"
	},
	"message":null
}
```


## License

See [LICENSE](LICENSE) for more info.

MIT
