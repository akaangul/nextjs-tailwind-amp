import { useEffect } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Tarayıcı URL'sini doğrulayarak sadece Google'dan gelen ziyaretçilere izin verin
    if (document.referrer !== 'https://www.google.com/') {
      // Google'dan gelmeyen ziyaretçilere hata sayfasına yönlendirin
      router.push('/error');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;