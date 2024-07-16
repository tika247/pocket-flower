import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { user } from '../server/models/user';

dotenv.config();

// Connection URL
const mongoClient = new MongoClient(process.env.MONGODB_URI);

// Database Name
const dbName = process.env.MONGODB_DATABASE;

async function main() {
  try {
    // Use connect method to connect to the server
    await mongoClient.connect();
    console.log('Connected successfully to server');

    const db = mongoClient.db(dbName);
    console.log(`Database created: ${dbName}`);

    // Optionally, you can create a collection to ensure the database is created
    const collection = db.collection(process.env.MONGODB_COLLECTION_USERS);
    await collection.insertOne(user);

    console.log('Collection created and document inserted');

    // Close the connection
    await mongoClient.close();
  } catch (err) {
    console.error(`Server error: ${err}`);
  }
}

main().catch(console.error);
