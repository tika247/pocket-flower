'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import ButtonSignup from '@/components/ButtonSignup';
import ButtonLogin from '@/components/ButtonLogin';
import ButtonLogout from '@/components/ButtonLogout';

export default function Header() {
  const { user, error, isLoading } = useUser();

  if (error) throw new Error(`Header: ${error}`);

  const list = [
    {
      url: '/',
      text: 'Home',
    },
    {
      url: '/profile',
      text: 'Server Protected Profile',
    },
    {
      url: '/middleware',
      text: 'Middleware Protected',
    },
    {
      url: '/auth-protected',
      text: 'Auth Protected',
    },
    {
      url: '/api/data',
      text: 'Api Protected',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: '80px',
        marginTop: '40px',
        marginBottom: '80px',
        padding: '0 20px',
      }}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around', columnGap: '20px' }}>
          {list.map((item) => (
            <li key={item.text}>
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ display: 'flex', columnGap: '20px' }}>
        {!user && !isLoading ? (
          <>
            <ButtonSignup />
            <ButtonLogin />
          </>
        ) : null}
        {user && !isLoading ? (
          <>
            <ButtonLogout />
          </>
        ) : null}
      </div>
    </div>
  );
}
