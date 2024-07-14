'use client';

import dotenv from 'dotenv';
dotenv.config();
import { useEffect, useState } from 'react';

async function getResults() {
  try {
    return await fetch('/.netlify/functions/get_users').then((res) => res.json());
  } catch (err) {
    console.error(`Get users: ${err}`);
  }
}

export default function Test() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const results = await getResults();
      setUsers(results);
    };

    fetchData();
  }, [])
  useEffect(() => {
    console.dir('users')
    console.dir(users)
    // @ts-ignore
    users ? alert(users[0].name) : alert("no users")
  }, [users])

  return (
    <div>
      <p>Test</p>
    </div>
  );
}
