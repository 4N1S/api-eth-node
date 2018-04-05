import resource from 'resource-router-middleware';
import facets from '../models/facets';
import ethers from 'ethers';
import { provider } from '../models/infura-config';
let responseapi;

export default ({ config, db }) => resource({

	/** GET / - List all entities */
	index({ body }, res) {
		const wallet = ethers.Wallet.createRandom();
		responseapi={
					  "status": "success",
					  "data": {
					  	"address":wallet.address,
					  	"privateKey":wallet.privateKey
					  },
					  "message": null
					};

		res.json(responseapi);
	}
});
