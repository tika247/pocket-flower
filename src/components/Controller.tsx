'use client';

import { useEffect, useState, useCallback } from 'react';

export type User = {
  _id: string;
  name: string;
  password: string;
  email: string;
  role: string;
};

async function fetchUsersFromAuth0() {
  try {
    return await fetch('/.netlify/functions/auth_users').then((res) => res.json());
  } catch (err) {
    console.error(`Get users from Auth0: ${err}`);
  }
}

async function fetchUsersFromAtlas() {
  try {
    return await fetch('/.netlify/functions/get_users').then((res) => res.json());
  } catch (err) {
    console.error(`Get users: ${err}`);
  }
}

export default function Controller({ isDev, usersFromLocalDB }: { isDev: boolean; usersFromLocalDB: User[] | null }) {
  console.dir('AUTH0_SECRET');
  console.dir(process.env.AUTH0_SECRET);
  console.dir(process.env.NEXT_PUBLIC_AUTH0_SECRET);

  // ----- Auth0 -----
  const [usersFromAuth0, setUsersFromAuth0] = useState<User[] | null>(null);
  const getUsersFromAuth0 = useCallback(async () => {
    return await fetchUsersFromAuth0();
  }, []);
  // ----- Auth0 -----

  // ----- Mongo -----
  const [usersFromAtlas, setUsersFromAtlas] = useState<User[] | null>(null);
  const getUsersFromAtlas = useCallback(async () => {
    return isDev ? usersFromLocalDB : await fetchUsersFromAtlas();
  }, [isDev, usersFromLocalDB]);
  // ----- Mongo -----

  useEffect(() => {
    if (isDev || usersFromAuth0) return;
    (async function () {
      setUsersFromAuth0(await getUsersFromAuth0());
    })();
  }, [isDev, usersFromAuth0, getUsersFromAuth0]);

  useEffect(() => {
    if (usersFromAtlas) return;
    (async function () {
      setUsersFromAtlas(await getUsersFromAtlas());
    })();
  }, [usersFromAtlas, getUsersFromAtlas]);

  return (
    <div>
      <p>Controller</p>

      <p>
        <b>Users From Auth0</b>
      </p>
      {usersFromAuth0?.map((user) => <p key={user.name}>{user.name}</p>)}
      <br />
      <br />
      <br />
      <br />
      <p>
        <b>Users From Atlas</b>
      </p>
      {usersFromAtlas?.map((user) => <p key={user.name}>{user.name}</p>)}
    </div>
  );
}
