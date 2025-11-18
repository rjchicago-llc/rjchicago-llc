# RJChicago API

Express service that handles contact form submissions from the web app.

## Getting Started

```bash
cd api
npm install
npm run dev
```

Copy `.env.example` to `.env` and provide SMTP + destination email values. Without SMTP credentials the service logs email contents to the console.

## Environment Variables

See `.env.example` for all options. Key settings:

- `PORT`: Port to listen on (defaults to 4000)
- `CORS_ORIGIN`: Comma-separated list of allowed origins
- `CONTACT_TO`: Inbox that should receive the inquiries
- `CONTACT_FROM`: Address used in the `from` header
- `SMTP_*`: Credentials for Nodemailer; omit to use console logging

## Endpoints

- `GET /healthz` - health check
- `POST /contact` - accepts `{ name, company?, email, summary, budget? }`
