const { MongoClient } = require("mongodb");

const DB_URI =
  "mongodb+srv://Inferno:BackRowHeros@cluster0.2vn7fph.mongodb.net/test";

const connectDb = async (client) => {
  try {
    await client.connect();
  } catch (err) {
    console.error("Error connecting to db");
  }
};

const client = new MongoClient(DB_URI);
connectDb(client).catch(console);

module.exports = client;
