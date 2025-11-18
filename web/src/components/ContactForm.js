import { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import Section from './Section';
import Modal from './Modal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    summary: '',
    budget: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [challenge, setChallenge] = useState({ a: 0, b: 0, answer: '' });
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    regenerateChallenge();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (e.target.name === 'email') {
      setEmailError('');
    }
    setIsVerified(false);
  };

  const regenerateChallenge = () => {
    const a = Math.floor(Math.random() * 5) + 2;
    const b = Math.floor(Math.random() * 5) + 2;
    setChallenge({ a, b, answer: '' });
  };

  const handleChallengeChange = (e) => {
    setChallenge({ ...challenge, answer: e.target.value });
  };

  const closeVerificationModal = () => {
    setShowVerificationModal(false);
    setChallenge((prev) => ({ ...prev, answer: '' }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setMessage('');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.summary.trim()) {
      setStatus('error');
      setMessage('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!isVerified) {
      regenerateChallenge();
      setVerificationError('');
      setShowVerificationModal(true);
      return;
    }

    await submitForm();
  };

  const submitForm = async () => {
    setStatus('loading');
    try {
      if (siteConfig.contact.useMailto) {
        const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Company: ${formData.company || 'Not provided'}\n` +
          `Email: ${formData.email}\n` +
          `Budget/Timeline: ${formData.budget || 'Not provided'}\n\n` +
          `Project Summary:\n${formData.summary}`
        );
        window.location.href = `${siteConfig.contact.formEndpoint}?subject=${subject}&body=${body}`;
        setStatus('success');
        setMessage('Email client opened. Please send the email to complete your inquiry.');
      } else {
        const response = await fetch(siteConfig.contact.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok) {
          setStatus('success');
          setMessage(data.message || 'Thank you! Your message has been sent successfully.');
          setFormData({ name: '', company: '', email: '', summary: '', budget: '' });
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      }
      setIsVerified(false);
      regenerateChallenge();
    } catch (error) {
      setStatus('error');
      setMessage('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const handleVerification = async () => {
    if (Number(challenge.answer) !== challenge.a + challenge.b) {
      setVerificationError('Incorrect answer. Please try again.');
      regenerateChallenge();
      return;
    }
    setIsVerified(true);
    setVerificationError('');
    closeVerificationModal();
    await submitForm();
  };

  return (
    <Section
      id="contact"
      title="Contact"
      description="Ready to modernize your infrastructure? Let's discuss your project."
      background="bg-background-subtle"
    >
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-surface-raised rounded-xl p-8 shadow-sm border border-border/70">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink-secondary mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background-subtle text-ink-primary placeholder:text-ink-muted focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-ink-secondary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background-subtle text-ink-primary placeholder:text-ink-muted focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-ink-secondary mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg bg-background-subtle text-ink-primary placeholder:text-ink-muted focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 ${
                  emailError ? 'border-status-danger' : 'border-border'
                }`}
                aria-invalid={Boolean(emailError)}
                aria-describedby={emailError ? 'email-error' : undefined}
                placeholder="your@email.com"
              />
              {emailError && (
                <p id="email-error" className="mt-2 text-sm text-status-danger">
                  {emailError}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="summary" className="block text-sm font-medium text-ink-secondary mb-2">
                Project Summary *
              </label>
              <textarea
                id="summary"
                name="summary"
                required
                rows={4}
                value={formData.summary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background-subtle text-ink-primary placeholder:text-ink-muted focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                placeholder="Describe your project, challenges, or goals..."
              />
            </div>

            <div className="mb-6">
              <label htmlFor="budget" className="block text-sm font-medium text-ink-secondary mb-2">
                Budget/Timeline
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background-subtle text-ink-primary placeholder:text-ink-muted focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
                placeholder="e.g., $10k budget, 3-month timeline"
              />
            </div>

            {status !== 'idle' && (
              <div
                className={`mb-6 p-4 rounded-lg border ${
                  status === 'success'
                    ? 'border-status-success bg-status-success/10 text-status-success'
                    : status === 'error'
                    ? 'border-status-danger bg-status-danger/10 text-status-danger'
                    : 'border-accent-soft bg-accent-soft/10 text-accent-soft'
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full btn-primary text-lg py-4 ${
                status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
        </form>
      </div>

      <Modal
        isOpen={showVerificationModal}
        onClose={closeVerificationModal}
        title="Quick human verification"
        className="max-w-md"
      >
        <p className="text-ink-secondary">
          Before we send this, please solve the short math check below.
        </p>
        <label htmlFor="human-check" className="block text-sm font-medium text-ink-secondary mt-4 mb-2">
          {challenge.a} + {challenge.b} = ?
        </label>
        <input
          type="number"
          id="human-check"
          name="human-check"
          value={challenge.answer}
          onChange={handleChallengeChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background-subtle text-ink-primary placeholder:text-ink-muted focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200"
          placeholder="Enter the answer"
          required
        />
        {verificationError && (
          <p className="mt-3 text-sm text-status-danger">{verificationError}</p>
        )}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={closeVerificationModal}
            className="btn-secondary px-4 py-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleVerification}
            className="btn-primary px-4 py-2"
          >
            Verify & Send
          </button>
        </div>
      </Modal>
    </Section>
  );
}
