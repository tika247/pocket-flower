import Header from '@/components/Header';

export default async function Middleware() {
  return (
    <>
      <Header />
      <main>
        <div>Middleware</div>
      </main>
    </>
  );
}
