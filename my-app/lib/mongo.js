import { MongoClient } from "mongodb";

class ConnectwithMongo {

  constructor(db) {
    this.client = null;
    this.url = process.env.MONGODB_URI
    this.db = db

  }

  async connectDatabase() {
    if (this.client) return this.client;
    this.client = await MongoClient.connect(this.url);
    return this.client
  }

  async disconnectDatabase() {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  }

  async getCollection(collectionName) {
    const client = await this.connectDatabase();
    const database = client.db(this.db);
    const collection = database.collection(collectionName);
    return collection;
  }


}



export default ConnectwithMongo;
