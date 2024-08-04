// import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
// import { withAuth0 } from '@netlify/auth0';
// import connection from '@netlify/planetscale';

// export const handler: Handler = withAuth0(
//   async (event: HandlerEvent, context: HandlerContext) => {
//     // TODO: reference to users in MongoDB
//     const { rows: users } = await connection.execute('SELECT * FROM  users');
//     console.dir('auth_users');
//     console.dir(users);
//     return {
//       statusCode: 200,
//       body: JSON.stringify(users),
//     };
//   },
//   {
//     auth0: {
//       required: true,
//     },
//   },
// );





// TODO: reference to users in MongoDB
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { withAuth0 } from '@netlify/auth0';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGODB_URI as string);

export const handler: Handler = withAuth0(
  async (event: HandlerEvent, context: HandlerContext) => {
    try {
      await mongoClient.connect();
      const database = mongoClient.db(process.env.MONGODB_DATABASE);
      const usersCollection = database.collection(process.env.MONGODB_COLLECTION_USERS as string);

      const users = await usersCollection.find({}).toArray();
      console.dir('auth_users');
      console.dir(users);

      return {
        statusCode: 200,
        body: JSON.stringify(users),
      };
    } catch (error) {
      console.error('Error connecting to MongoDB Atlas:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      };
    } finally {
      await mongoClient.close();
    }
  },
  {
    auth0: {
      required: true,
    },
  }
);