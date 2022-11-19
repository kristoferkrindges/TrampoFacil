import mongoose from "../config/db.mjs";

const { Schema } = mongoose;
// Modelagem de Post
const Post = mongoose.model(
	"Post",
	new Schema(
		{
			name: {
				type: String,
				required: true,
			},
			wage: {
				type: Number,
				required: true,
			},
			details: {
				type: String,
				required: true,
			},
			image: {
				type: String,
			},
			avaible: {
				type: Boolean,
			},
			author: Object,
			employees: {
				type: Array,
			},
		},
		{ timestamps: true }
	)
);
export default Post;
