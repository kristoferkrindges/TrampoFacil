import mongoose from "../config/db.mjs";

const { Schema } = mongoose;
// Modelagem de User
const User = mongoose.model(
	"User",
	new Schema(
		{
			name: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
			},
			password: {
				type: String,
				required: true,
			},
			type: {
				type: Boolean,
				required: true,
			},
			image: {
				type: String,
			},
			phone: {
				type: String,
				required: true,
			},
		},
		{ timestamps: true }
	)
);
export default User;
