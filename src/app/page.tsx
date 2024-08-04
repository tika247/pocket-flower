import { getSession } from '@auth0/nextjs-auth0';
import Controller from '@/components/Controller';
import getUsersFromLocal from '@/modules/getUsersFromLocal';
import { User } from '@/components/Controller';
import { WithId } from 'mongodb';
import Header from '@/components/Header';

export default async function Home() {
  const isDev: boolean = process.env.NODE_ENV === 'development';
  const usersFromLocalDB = isDev ? ((await getUsersFromLocal()) as User[] & WithId<Document>[]) : null;

  // ----- Auth -----
  const session = await getSession();
  const user = session?.user;
  console.dir('profile');
  console.dir(user);
  // ----- Auth -----

  return (
    <>
      <Header />
      <main>
        <Controller isDev={isDev} usersFromLocalDB={usersFromLocalDB} />
      </main>
    </>
  );
}
