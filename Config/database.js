const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => {console.log("Database connected Successfully")} )
    .catch( (error) => {
        console.log("Issue in DB connection");
        console.log(error);
        console.log(error.message);
        process.exit();
    });
}

module.exports = dbConnect;
