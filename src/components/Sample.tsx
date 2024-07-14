'use client';

import dotenv from 'dotenv';
dotenv.config();
import { useEffect } from 'react';

export default function Sample() {
  console.dir("aa")
  try {
    (async () => {
      console.dir("bb")
      const results = await fetch('/netlify/functions/get_users.js').then((res) => res.json());
      console.dir(results);
    })();
  } catch (err) {
    console.dir("cc")
    console.error(`Get users: ${err}`);
  }
  useEffect(() => {}, []);

  return (
    <p>Sample</p>
  );
}
