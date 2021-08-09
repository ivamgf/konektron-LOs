/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-unescaped-entities */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Details</a>
        </Link>{' '}
        | <a href="/api/metadataApi">API metadata</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Konektron Learning Objects Version 2.0.0</span>
    </footer>
  </div>
);

export default Layout;
