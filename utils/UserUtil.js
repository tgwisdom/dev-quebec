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
};
