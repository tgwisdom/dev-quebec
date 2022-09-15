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
};
