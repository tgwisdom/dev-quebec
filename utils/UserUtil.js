const { ObjectId } = require("mongodb");
const client = require("../db/client");

module.exports = class UsersUtil {
  static async getUsers() {
    try {
      const collection = client.db("khoi").collection("user");

      const users = collection.find().toArray();
      if (!users) return false;

      return users;
    } catch (err) {
      console.error("Error getting users");
      return false;
    }
  }

  static async saveUser(userData) {
    try {
      userData.name = userData.name.trim();
      userData.link = userData.link.trim();

      const collection = client.db("khoi").collection("user");

      const response = await collection.insertOne(userData);

      if (!response) throw new Error("Error saving user");

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async deleteUser(userId) {
    try {
      // Connect to a collection using the client connection object created in ../db/client.js
      const collection = client.db("khoi").collection("user");

      // Use this collection to delete one user if the _id in Mongo matches the userId from request
      const response = await collection.deleteOne({
        _id: ObjectId(userId),
      });

      // Throw an error if there is no response
      if (!response) throw new Error("Error deleting user");

      // Return true if succeeded
      return true;
    } catch (error) {
      // Error thrown above will be shown here
      console.error(error);

      // Return false if failed
      return false;
    }
  }
};
