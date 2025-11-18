import { siteConfig } from '../config/siteConfig';
import Section from './Section';
import useSmoothScroll from '../hooks/useSmoothScroll';

export default function Pricing() {
  const scrollToContact = useSmoothScroll();

  return (
    <Section
      id="pricing"
      title="Pricing"
      description="Transparent pricing for engineering consulting and fixed-fee packages"
      background="bg-background-subtle"
    >
      {/* Hourly Rates */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-ink-primary mb-8 text-center">
          Hourly Rates
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.pricing.hourlyRates.map((rate, index) => (
            <div
              key={index}
              className="bg-surface-raised rounded-xl p-8 shadow-sm border border-border/70 text-center"
            >
              <h4 className="text-xl font-semibold text-ink-primary mb-2">
                {rate.title}
              </h4>
              <div className="text-4xl font-bold text-accent mb-2">
                {rate.rate}
              </div>
              <div className="text-ink-muted mb-4">{rate.period}</div>
              <p className="text-ink-secondary">{rate.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed-Fee Packages */}
      <div>
        <h3 className="text-2xl font-semibold text-ink-primary mb-8 text-center">
          Fixed-Fee Packages
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.pricing.packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-surface-raised rounded-xl p-8 shadow-sm border border-border/70 hover:border-accent transition-colors duration-300"
            >
              <h4 className="text-xl font-semibold text-ink-primary mb-4">
                {pkg.title}
              </h4>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-status-success mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-ink-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="btn-secondary w-full"
                onClick={() => scrollToContact('#contact')}
              >
                Contact for Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
