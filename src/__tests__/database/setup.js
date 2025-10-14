import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongo = undefined;

const setUp = async () => {
  mongo = await MongoMemoryServer.create();
  const url = mongo.getUri();

  await mongoose.connect(url);
};

const dropDatabase = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
  }
};

const dropCollections = async () => {
  if (mongo) {
    const collection = mongoose.connection.collection;

    for (const key in collection) {
      const collection = collection[key];
      await collection.deleteMany();
    }
  }
};

const db = {
  setUp,
  dropDatabase,
  dropCollections,
};

export default db;
