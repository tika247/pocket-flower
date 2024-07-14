'use client';

import dotenv from 'dotenv';
dotenv.config();
import { useEffect } from 'react';

export default function Sample() {
  useEffect(() => {
    try {
      (async () => {
        const results = await fetch('/.netlify/functions/get_users').then((res) => res.json());
        console.dir("results")
        console.dir(results)
      })();
    } catch (err) {
      console.error(`Get users: ${err}`);
    }
  }, []);

  return (
    <p>Sample</p>
  );
}
