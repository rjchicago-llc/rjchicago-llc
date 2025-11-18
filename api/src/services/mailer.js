const nodemailer = require('nodemailer');

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    console.warn('SMTP credentials not fully configured. Emails will be logged to the console.');
    transporter = {
      sendMail: async (options) => {
        console.info('[Email preview]', options);
        return { accepted: [options.to], messageId: 'console-preview' };
      },
    };
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  return transporter;
}

async function sendContactEmail({ name, company, email, summary, budget }) {
  const to = process.env.CONTACT_TO;
  if (!to) {
    throw new Error('CONTACT_TO environment variable is not set');
  }

  const from = process.env.CONTACT_FROM || process.env.SMTP_USER || to;
  console.info('[contact] sending mail', { from, to });

  const text = [
    `Name: ${name}`,
    `Company: ${company || 'Not provided'}`,
    `Email: ${email}`,
    `Budget/Timeline: ${budget || 'Not provided'}`,
    '',
    'Project Summary:',
    summary,
  ].join('\n');

  const subject = `New inquiry from ${name}`;

  const transporterInstance = getTransporter();
  const response = await transporterInstance.sendMail({
    from,
    to,
    replyTo: email,
    subject,
    text,
  });
  console.info('[contact] transporter response', response);
}

module.exports = { sendContactEmail };
