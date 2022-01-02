const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// Mongoose connect
mongoose.connect(
	process.env.MONGODB_URL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => console.log("Connected to MongoDB")
);

// middlewares
// line 22 is a bodyparser
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(4000, () => {
	console.log("Backend server on port 4000!!");
});
