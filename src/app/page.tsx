import { getSession } from '@auth0/nextjs-auth0';
import Controller from '@/components/Controller';
import getUsersFromLocal from '@/modules/getUsersFromLocal';
import { User } from '@/components/Controller';
import { WithId } from 'mongodb';
import Header from '@/components/Header';

export default async function Home() {
  const isDev: boolean = process.env.NODE_ENV === 'development';
  const usersFromDB = isDev ? ((await getUsersFromLocal()) as User[] & WithId<Document>[]) : null;

  // ----- Auth -----
  const session = await getSession();
  const user = session?.user;
  console.dir(user);
  // ----- Auth -----

  return (
    <>
      <Header />
      <main>
        <Controller usersFromDB={usersFromDB} />
      </main>
    </>
  );
}
