require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// Microservices Routes
const Books = require("./API/Book");
const Authors = require("./API/Author");
const Publications = require("./API/Publication");
// Initializing express
const Aakash = express();
// Configurations
Aakash.use(express.json());
// Establish Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("connection established!!!!!!!"));
//Microservices
Aakash.use("/book", Books);
Aakash.use("/author", Authors);
Aakash.use("/publication", Publications);

Aakash.listen(3000, () => console.log("Server running!!😎"));