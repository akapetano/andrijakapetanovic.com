import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './NavBar';

export const name = 'Andrija Kapetanović';
export const siteTitle = 'Andrija Kapetanović | Front-End Developer';

export default function Layout({ children, home }) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Andrija Kapetanović - Front-end Developer"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="header">
        <NavBar />
        {home ? (
          <>
            <Image
              priority
              src="/images/andrija-kapetanovic.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/andrija-kapetanovic.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <style jsx>
        {`
          .container {
            max-width: 36rem;
            padding: 0 1rem;
            margin: 8rem auto 6rem;
          }

          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .backToHome {
            margin: 3rem 0 0;
          }
        `}
      </style>
    </div>
  );
}
