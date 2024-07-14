// import Image from 'next/image';

export default function Home() {
  console.dir("aa")
  try {
    (async () => {
      console.dir("bb")
      const results = await fetch(process.env.URL + '/netlify/functions/get_users.js').then((res) => res.json());
      console.dir(results);
    })();
  } catch (err) {
    console.dir("cc")
    console.error(`Get users: ${err}`);
  }
  return (
    <main>
      <h2>Pocket-Flower</h2>
    </main>
  );
}
