import axios from 'axios';

export async function GET(req: Request) {
  try {
    // Example of making an Axios request
    // const response = await axios.get('https://api.example.com/data');
    const response = {
      data: 'my-data',
    };

    // Assuming you want to return the data received from the Axios request
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
