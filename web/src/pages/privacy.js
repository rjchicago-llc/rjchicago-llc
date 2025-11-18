import Head from 'next/head';
import Layout from '../components/Layout';
import { siteConfig } from '../config/siteConfig';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | {siteConfig.companyName}</title>
      </Head>
      <section className="section-padding bg-background text-ink-secondary">
        <div className="container-max max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold text-ink-primary">Privacy Policy</h1>
          <p>
            We collect only the information necessary to respond to your inquiry—typically
            the details you provide in the contact form. Submitted data is stored securely
            and used exclusively for follow-up conversations related to your request.
          </p>
          <p>
            We do not sell or share your information with third parties. If you would like
            your data removed, contact us using the form and we will fulfill the request.
          </p>
          <p>
            This site uses standard analytics to understand aggregate traffic patterns. No
            advertising or tracking pixels are embedded.
          </p>
          <p className="text-sm text-ink-muted">
            Last updated {new Date().getFullYear()}.
          </p>
        </div>
      </section>
    </Layout>
  );
}
