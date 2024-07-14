// import Image from 'next/image';

import { useCallback } from "react";

export default function Home() {
  try {
    const results = useCallback(async () => {
      await fetch("./netlify/edge-functions/get_users").then(res=>res.json());
    }, []);
    console.dir(results);
  } catch (err) {
    console.error(`Get users: ${err}`);
  }
  return <main>Pocket-Flower</main>;
}
