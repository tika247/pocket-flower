import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import { withAuth0 } from '@netlify/auth0';
import connection from '@netlify/planetscale';

export const handler: Handler = withAuth0(
  async (event: HandlerEvent, context: HandlerContext) => {
    console.dir('check');
    console.dir(process.env.AUTH0_CLIENT_SECRET);
    console.dir(process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET);
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
