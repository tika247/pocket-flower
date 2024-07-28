'use client';

import { useEffect, useState, useCallback } from 'react';

export type User = {
  _id: string;
  name: string;
  password: string;
  email: string;
  role: string;
};

async function getUsersFromAtlas() {
  try {
    return await fetch('/.netlify/functions/get_users').then((res) => res.json());
  } catch (err) {
    console.error(`Get users: ${err}`);
  }
}

export default function Controller({ usersFromDB }: { usersFromDB: User[] | null }) {
  // ----- Mongo -----
  const [users, setUsers] = useState<User[] | null>(null);
  console.dir('usersFromDB');
  console.dir(usersFromDB);
  const getUsers = useCallback(async () => {
    return usersFromDB ? usersFromDB : await getUsersFromAtlas();
  }, [usersFromDB]);
  // ----- Mongo -----

  useEffect(() => {
    const fetchData = async () => {
      setUsers(await getUsers());
    };

    fetchData();
  }, [getUsers]);

  return (
    <div>
      <p>Controller</p>
      {users?.map((user) => <p key={user.name}>{user.name}</p>)}
    </div>
  );
}
