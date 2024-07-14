// import Image from 'next/image';

export default function Home() {
  console.dir("aa")
  try {
    (async () => {
      console.dir("bb")
      const results = await fetch('./netlify/functions/get_users').then((res) => res.json());
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
