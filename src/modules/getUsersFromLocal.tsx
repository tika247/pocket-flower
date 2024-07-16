import { MongoClient } from 'mongodb';

export default async function getUsersFromLocal() {
  try {
    const mongoClient = new MongoClient(process.env.MONGODB_URI!);
    const clientPromise = mongoClient.connect();
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION_USERS!);
    return await collection.find({}).limit(10).toArray();
  } catch (err) {
    console.error(`Getting users from local: ${err}`);
  }
}
