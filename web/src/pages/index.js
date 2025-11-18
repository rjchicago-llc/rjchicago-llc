import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import { siteConfig } from '../config/siteConfig';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.seo.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <ContactForm />
      </Layout>
    </>
  );
}
