// @ts-ignore
// import type { Context } from 'https://edge.netlify.com'
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGODB_URI!);

const clientPromise = mongoClient.connect();

const handler = async (e: Event) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION_USERS!);
    const results = await collection.find({}).limit(10).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (err: any) {
    return { statusCode: 500, body: err.toString() };
  }
};

export default handler;

// export default async (request: Request, context: Context) =>
//   Response.json({ hello: 'world', location: context.geo.city })
