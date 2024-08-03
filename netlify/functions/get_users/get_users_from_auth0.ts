import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { withAuth0 } from '@netlify/auth0';
import connection from '@netlify/planetscale';
import dotenv from 'dotenv';

dotenv.config();

export const handler: Handler = withAuth0(
  async (event: HandlerEvent, context: HandlerContext) => {
    console.dir('AUTH0_SECRET')
    console.dir(process.env.AUTH0_SECRET)
    console.dir(process.env.NEXT_PUBLIC_AUTH0_SECRET)
    const { rows: users } = await connection.execute('SELECT * FROM  users');
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  },
  {
    auth0: {
      required: true,
    },
  },
);
