import { siteConfig } from '../config/siteConfig';
import Section from './Section';
import useSmoothScroll from '../hooks/useSmoothScroll';

export default function Hero() {
  const scrollToSection = useSmoothScroll();

  return (
    <Section
      id="home"
      background="bg-background-subtle"
      className="pt-24 border-b border-border/60"
      containerClassName="section-padding"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-ink-primary mb-6 leading-tight">
          {siteConfig.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-ink-secondary mb-8 leading-relaxed">
          {siteConfig.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {siteConfig.hero.ctas.map((cta) => (
            <button
              key={cta.label}
              onClick={() => scrollToSection(cta.href)}
              className={`${cta.variant === 'primary' ? 'btn-primary' : 'btn-secondary'} text-lg px-8 py-4`}
            >
              {cta.label}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
