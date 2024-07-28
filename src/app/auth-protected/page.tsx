import Image from 'next/image';
import { NextPage } from 'next';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Header from '@/components/Header';

const AuthProtected: NextPage = withPageAuthRequired(
  async () => {
    const session = await getSession();
    const user = session?.user;
    return (
      <>
        <Header />
        <main>
          {user ? (
            <>
              <Image src={user.picture ? user.picture : ''} alt="" width={200} height={200} />
              <h2>{user.name}</h2>
              <div>{user.email}</div>
            </>
          ) : null}
        </main>
      </>
    );
  },
  { returnTo: '/auth-protected' },
);

export default AuthProtected;
