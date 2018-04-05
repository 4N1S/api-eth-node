api-eth-node
==================================

This api use Ethers.js & boilerplate for building REST APIs with ES6 and Express.

- GET /createWallet Generates a new Ethereum wallet and return and object with the private key and the public ETH address

- GET /getBalance/:param Get the balance of an ethereum address

- POST /transaction {privateKey, destination, amount} Creates a transaction to send ETH from one address to another. It can receive 3 raw JSON params: privateKey of the source ETH address, destination is the ETH destination address and amount the number of ETH to be send.



Getting Started
---------------

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


## License

See [LICENSE](LICENSE) for more info.

MIT
