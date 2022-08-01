import 'styles/global.styles.css';
import type { AppProps } from 'next/app';
import { Layout } from '~/components';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  router.events?.on(`routeChangeComplete`, () => {
    if (document) {
      document.body.scrollTop = 0;
    }
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
