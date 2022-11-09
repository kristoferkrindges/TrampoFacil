import mongoose from "mongoose";
import "dotenv/config";

const user = process.env.USERDB;
const password = encodeURIComponent(process.env.PASSWORDDB);

async function main() {
	await mongoose.connect(
		`mongodb+srv://${user}:${password}@apicluster.rg6af0o.mongodb.net/TFDB?retryWrites=true&w=majority`
	);
}
main()
	.then(() => {
		console.log("Connect to MongoDB");
	})
	.catch((err) => console.log(err));

export default mongoose;
