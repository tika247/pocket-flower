import { withAuth0 } from '@netlify/auth0';
import connection from '@netlify/planetscale';

export const handler = withAuth0(
  async (event, context) => {

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
