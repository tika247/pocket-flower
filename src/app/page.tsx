// import Image from 'next/image';

export default async function Home() {
  try {
    const results = await fetch('./netlify/functions/get_users').then((res) => res.json());
    console.dir(results);
  } catch (err) {
    console.error(`Get users: ${err}`);
  }
  return <main>Pocket-Flower</main>;
}
