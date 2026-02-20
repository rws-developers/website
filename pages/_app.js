import Head from 'next/head';
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import westernTheme from '../site/theme';

const displayFont = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700']
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FNH7F9RQ9H" />
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FNH7F9RQ9H');
        `}</script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/Art/Game-Logo/RTWS-logo_360x360.png" />
      </Head>
      <main className={`${displayFont.variable} ${bodyFont.variable}`}>
        <ThemeProvider theme={westernTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
