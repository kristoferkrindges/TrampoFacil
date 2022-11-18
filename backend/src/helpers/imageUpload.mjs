import multer from "multer";
import path from "path";

// Destination to store the images
const imageStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		let folder = "";
		if (req.baseUrl.includes("users")) {
			folder = "users";
		} else if (req.baseUrl.includes("posts")) {
			folder = "posts";
		}
		//callback
		cb(null, `public/images/${folder}`);
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const imageUp = multer({
	storage: imageStorage,
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/.(png|jpg)$/)) {
			return cb(new Error("Please, .jpg or .png!"));
		}
		cb(undefined, true);
	},
});

export default imageUp;
