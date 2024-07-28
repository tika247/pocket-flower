'use client';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function UserClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div>
      <Image src={user.picture ? user.picture : ''} alt="" width={200} height={200} />
      <h2>{user.name}</h2>
      <div>{user.email}</div>
    </div>
  ) : (
    <div>No user logged in</div>
  );
}
