import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import Section from './Section';
import Modal from './Modal';
import portraitImage from '../../public/RJ.png';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section
      id="about"
      title="About"
      background="bg-background"
      headingClassName="max-w-4xl mx-auto"
    >
      <div className="max-w-3xl mx-auto text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src={portraitImage}
            alt="Ryan Jones"
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </button>
        <p className="text-xl text-ink-secondary leading-relaxed">
          {siteConfig.about.description}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="RJChicago, LLC"
        className="max-w-lg"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
            <Image
              src={portraitImage}
              alt="Ryan Jones"
              fill
              sizes="240px"
              className="object-cover"
              priority
            />
          </div>
          <p className="text-center text-ink-secondary">
            {siteConfig.about.description}
          </p>
        </div>
      </Modal>
    </Section>
  );
}
