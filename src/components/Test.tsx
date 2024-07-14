'use client';

import dotenv from 'dotenv';
dotenv.config();
import { useEffect } from 'react';

export default function Test() {
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
      <p>Test</p>
    </div>
  );
}
