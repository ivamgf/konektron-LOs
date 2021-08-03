/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';

const IndexPage = () => (
  <>
    <Head>
      <meta name="description" content="Package LOs Version 2.0.0" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  </>
);

export default IndexPage;
