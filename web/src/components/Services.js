import { siteConfig } from '../config/siteConfig';
import Section from './Section';

export default function Services() {
  return (
    <Section
      id="services"
      title="Services"
      description="Expert consulting services to modernize your infrastructure and scale your engineering teams"
      background="bg-background"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.services.map((service, index) => (
          <div
            key={index}
            className="bg-surface-raised rounded-xl p-8 border border-border/70 hover:border-accent transition-colors duration-300 shadow-sm"
          >
            <div className="text-4xl mb-4" role="img" aria-label={service.title}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-ink-primary mb-4">
              {service.title}
            </h3>
            <p className="text-ink-secondary leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
