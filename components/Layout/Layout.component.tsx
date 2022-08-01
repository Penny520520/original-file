import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { useRouter } from 'next/router';
export function Layout({
  children,
}: PropsWithChildren<Record<string, unknown>>): JSX.Element {
  const router = useRouter();
  if (router.pathname === '/high_point_park') {
    return <main>{children}</main>;
  } else {
    return (
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    );
  }
}
