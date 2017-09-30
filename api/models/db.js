const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
const URI = process.env.DATABASE;
mongoose.connect(URI, options);
mongoose.connection.on("connected", () => {
  console.log("Connected to", URI);
});

mongoose.connection.on("error", error => {
  console.error(`Error connecting to ${URI}`, error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from", URI);
});

