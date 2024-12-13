const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then((data) => {
      console.log("Connected to MongoDB with server: ", data.connection.host);
    });
};

module.exports = connectDatabase;
