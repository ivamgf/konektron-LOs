/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Link from 'next/link';
import Layout from '../components/Layout';
import SimpleCard from '../../lib/ui/cards/simpleCard';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <div>
      <SimpleCard />
    </div>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
