import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import Modal from './Modal';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const legalContent = activeModal ? siteConfig.legal[activeModal] : null;

  return (
    <footer className="bg-background text-ink-secondary section-padding border-t border-border/60">
      <div className="container-max">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-ink-primary mb-2">{siteConfig.companyName}</h3>
            <p>{siteConfig.tagline}</p>
          </div>
          
          {siteConfig.footer.links && siteConfig.footer.links.length > 0 && (
            <div className="mb-6">
              <div className="flex justify-center space-x-6">
                {siteConfig.footer.links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveModal(link.modalKey || null)}
                    className="text-accent hover:text-accent-strong transition-colors duration-200 focus-visible:outline-none focus-visible:text-accent-strong"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-6 border-t border-border/70">
            <p>{siteConfig.footer.copyright}</p>
          </div>
        </div>
      </div>
      {legalContent && (
        <Modal
          isOpen={Boolean(activeModal)}
          onClose={() => setActiveModal(null)}
          title={legalContent.title}
        >
          {legalContent.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </Modal>
      )}
    </footer>
  );
}
