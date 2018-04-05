import resource from 'resource-router-middleware';
import ethers from 'ethers';
import { provider } from '../models/infura-config';
import facets from '../models/facets';
let responseapi;
export default ({ config, db }) => resource({
	/** Property name to store preloaded entity on `request`. */
	id : 'address',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let address=id,
			err;

		callback(err, address);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		responseapi={
					  "status": "success",
					  "data":null,
					  "message": "Missing parameter: 'address'"
					};
		res.json(responseapi);
	},
	/** GET /:id - Return a given entity */
	read({ address }, res) {
		// Check length of address 
		if(address.length==42){
			let etherString;
			provider.getBalance(address).then(function(balance) {

			    // balance is a BigNumber (in wei); format is as a sting (in ether)
			    etherString = ethers.utils.formatEther(balance);
				responseapi={
							  "status": "success",
							  "data": {
							  	"balance":etherString+" ETH"
							  },
							  "message": null
							};
				res.json(responseapi);

			});
		}else{
			responseapi={
						  "status": "success",
						  "data":null,
						  "message": "Bad format parameter: 'address'"
						};
			res.json(responseapi);

		}
	}
});
