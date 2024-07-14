'use client';

import dotenv from 'dotenv';
dotenv.config();
import { useEffect } from 'react';

export default async function Sample() {
  const results = await fetch('/.netlify/functions/get_users').then((res) => res.json());
  console.dir("results1")
  console.dir(results)

  useEffect(() => {
    try {
      (async () => {
        const results = await fetch('/.netlify/functions/get_users').then((res) => res.json());
        console.dir("results2")
        console.dir(results)
      })();
    } catch (err) {
      console.error(`Get users: ${err}`);
    }
  }, []);

  return (
    <div>
      {results ? results.name : null}
      <p>Sample</p>
    </div>
  );
}
