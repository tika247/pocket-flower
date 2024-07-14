'use client';

import dotenv from 'dotenv';
dotenv.config();
import { useEffect } from 'react';

export default function Test() {
  (async () => {
    const results = await fetch('/.netlify/functions/get_users').then((res) => res.json());
    console.dir("results")
    console.dir(results)
  })();

  console.dir("okok")

  return (
    <div>
      <p>Test</p>
    </div>
  );
}
