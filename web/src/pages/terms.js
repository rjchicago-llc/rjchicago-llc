import Head from 'next/head';
import Layout from '../components/Layout';
import { siteConfig } from '../config/siteConfig';

export default function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service | {siteConfig.companyName}</title>
      </Head>
      <section className="section-padding bg-background text-ink-secondary">
        <div className="container-max max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold text-ink-primary">Terms of Service</h1>
          <p>
            Consulting engagements are covered by a separate Statement of Work and Master
            Services Agreement. The content on this site is for general information only
            and does not constitute a guarantee or offer of services.
          </p>
          <p>
            By contacting us you agree that you have the authority to discuss work on
            behalf of your organization. Any deliverables remain the property of
            RJChicago, LLC until payment is received and contractual obligations are met.
          </p>
          <p>
            These terms are updated periodically. Continued use of the site indicates
            acceptance of the current version.
          </p>
          <p className="text-sm text-ink-muted">
            Last updated {new Date().getFullYear()}.
          </p>
        </div>
      </section>
    </Layout>
  );
}
