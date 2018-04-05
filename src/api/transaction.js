import resource from 'resource-router-middleware';
import facets from '../models/facets';
import ethers from 'ethers';
import { provider } from '../models/infura-config';
let responseapi;
export default ({ config, db }) => resource({

	/** POST / - Create a new entity */
	create({ body }, res) {
		const privateKey = body.privateKey;
		//New instance Wallet with Privatkey
		let wallet = new ethers.Wallet(privateKey);
		//Connect wallet on provider network
		wallet.provider = ethers.providers.getDefaultProvider(config.network);
		if(body.destination && body.amount && body.privateKey){
			let transaction = {
			    to: body.destination,
			    value: ethers.utils.parseEther(body.amount)
			};

			const estimateGasPromise = wallet.estimateGas(transaction);

			estimateGasPromise.then(function(gasEstimate) {
			    transaction.gasLimit = gasEstimate;

			    // Send the transaction
			    let sendTransactionPromise = wallet.sendTransaction(transaction);

			    sendTransactionPromise.then(function(transactionHash) {
			       responseapi={
			       			  "status": "success",
			       			  "data": {
			       			  	"Transaction":"pending",
			       			  	"from": transactionHash.from,
			       			  	"to":transactionHash.to,
			       			  	"hash": transactionHash.hash,
			       			  	"urltx":"https://"+config.network+".etherscan.io/tx/"+transactionHash.hash+""
			       			  },
			       			  "message": null
			       			};
			       res.json(responseapi);

			      });

			});
		}else{
			responseapi={
						"status": "error",
					 	"data": null,
					 	"message": "Missing parameter: required 'privatkey,from address, amount'"
						};
			res.json(responseapi);
		}

	}
});
