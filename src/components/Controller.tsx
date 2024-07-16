'use client';

import { useEffect, useState, useCallback } from 'react';
import { WithId } from 'mongodb';

export type Users = {
  _id: string;
  name: string;
  password: string;
  email: string;
  role: string;
} & WithId<Document>[];

async function getUsersFromAtlas() {
  try {
    return await fetch('/.netlify/functions/get_users').then((res) => res.json());
  } catch (err) {
    console.error(`Get users: ${err}`);
  }
}

export default function Controller({ usersFromDB }: { usersFromDB: Users | null }) {
  const [users, setUsers] = useState<Users | null>(null);
  console.dir('usersFromDB')
  console.dir(usersFromDB)
  const getUsers = useCallback(async () => {
    return usersFromDB ? usersFromDB : await getUsersFromAtlas();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setUsers(await getUsers());
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.dir('users');
    console.dir(users);
  }, [users]);

  return (
    <div>
      <p>Controller</p>
    </div>
  );
}
