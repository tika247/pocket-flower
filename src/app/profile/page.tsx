import { getSession } from '@auth0/nextjs-auth0';
import UserClient from '@/app/profile/userClient';
import UserServer from '@/app/profile/userServer';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';

export default async function Profile() {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect('/');

  return (
    <>
      <Header />
      <main>
        <h2>User Client</h2>
        <UserClient />
        <h2>User Server</h2>
        <UserServer />
      </main>
    </>
  );
}
