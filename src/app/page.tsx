// import Image from 'next/image';
import Controller from '@/components/Controller';
import getUsersFromLocal from '@/modules/getUsersFromLocal';
import { User } from '@/components/Controller';
import { WithId } from 'mongodb';

export default async function Home() {
  const isDev: boolean = process.env.NODE_ENV === 'development';
  const usersFromDB = isDev ? ((await getUsersFromLocal()) as User[] & WithId<Document>[]) : null;

  return (
    <main>
      <h2>Pocket-Flower</h2>
      <Controller usersFromDB={usersFromDB} />
    </main>
  );
}
