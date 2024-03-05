const mongoose = require("mongoose");
require("dotenv").config();



exports.connect = async () => {
	

		await mongoose.connect("mongodb+srv://soulopscout:sfaman23@cluster0.druj2gv.mongodb.net/Koinx_Backend_Assignment", {

			dbName: 'Koinx_Backend_Assignment',
  retryWrites: true,
  w: "majority"
})
		.then(console.log(`DB ka Connection Success`))
		.catch((err) => {
			console.log(`DB ka Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
