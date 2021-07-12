import Link from 'next/link'
import Head from 'next/head'

import Layout from '../components/Layout'

const IndexPage = () => (
  <>
  <Head>
    <meta name="description" content="Package LOs Version 2.0.0" />
    <link rel="icon" type="image/x-icon" href="../public/favicon.ico"></link>
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
)

export default IndexPage
