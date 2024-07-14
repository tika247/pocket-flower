const { MongoClient } = require("mongodb");
require("dotenv").config();

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

console.dir("process.env.MONGODB_URI")
console.dir(process.env.MONGODB_URI)

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    console.dir("database")
    console.dir(database)
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    console.dir("collection")
    console.dir(collection)
    const results = await collection.find({}).limit(10).toArray();
    console.dir("results")
    console.dir(results)
    return {
      statusCode: 200,
      body: JSON.stringify(results),
  }
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}

module.exports = { handler }
