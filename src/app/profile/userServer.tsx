import Image from 'next/image';
import { getSession } from '@auth0/nextjs-auth0';

export default async function UserServer() {
  const session = await getSession();
  const user = session?.user;
  console.dir(user);

  if (!user) return null;

  return user ? (
    <div>
      <Image src={user.picture ? user.picture : ''} alt="" width={200} height={200} />
      <h3>{user.name}</h3>
      <div>{user.email}</div>
    </div>
  ) : (
    <div>No user logged in</div>
  );
}
