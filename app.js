const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const MONGODB_KEY = process.env.MONGODB_KEY || require("./keys/mongodb");

// Congigure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// Initialize this app
const app = express();

// Configure this app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Mongoose
mongoose.connect(MONGODB_KEY, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected..."))
    .catch(error => console.log("Failed " + error));
mongoose.set('debug', true);

// Routes
app.use("/", require("./routes"));

app.listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on http://127.0.0.1:${PORT}/`)
});