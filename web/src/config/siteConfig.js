export const siteConfig = {
  // Company Info
  companyName: "RJChicago, LLC",
  tagline: "Software Engineering • SRE • DevOps • Kubernetes • AI Consulting",
  
  // SEO
  seo: {
    title: "RJChicago, LLC - SRE, Kubernetes & DevOps Consulting",
    description: "Expert SRE, Kubernetes, and DevOps consulting for high-scale systems. Platform engineering, cloud infrastructure, and AI automation services.",
    ogImage: "/og-image.jpg", // Add your OG image
  },

  // Contact
  contact: {
    // email: "ryan@rjchicago.com", // Update with your email
    // phone: "+1 (312) 555-0123", // Update with your phone
    formEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/api/contact",
    useMailto: false, // Set to true to fall back to mailto
  },

  // Hero Section
  hero: {
    headline: "SRE & Platform Engineering for High-Scale Systems",
    subheadline: "RJChicago, LLC helps engineering teams stabilize, scale, and modernize platforms—Kubernetes, Kafka, CI/CD, cloud infrastructure, and AI automation.",
    ctas: [
      { label: "View Services", href: "#services", variant: "secondary" },
      { label: "View Pricing", href: "#pricing", variant: "secondary" },
      { label: "Get Started", href: "#contact", variant: "primary" },
    ],
  },

  // Services
  services: [
    {
      title: "Site Reliability Engineering (SRE)",
      description: "Build resilient systems with proper monitoring, alerting, and incident response processes.",
      icon: "🔧"
    },
    {
      title: "Kubernetes & Platform Engineering",
      description: "Design and implement scalable Kubernetes platforms with GitOps and modern deployment strategies.",
      icon: "⚙️"
    },
    {
      title: "Docker & Docker Swarm",
      description: "Container strategy, Swarm orchestration guidance, and optimized CI/CD packaging.",
      icon: "🐳"
    },
    {
      title: "DevOps & CI/CD Modernization",
      description: "Streamline development workflows with automated testing, deployment, and infrastructure as code.",
      icon: "🚀"
    },
    {
      title: "Cloud & Infrastructure Advisory",
      description: "Optimize cloud costs and architecture for AWS, multi-cloud, and hybrid environments.",
      icon: "☁️"
    },
    {
      title: "AI & Automation Workflows",
      description: "Integrate AI-driven automation for incident response, monitoring, and operational efficiency.",
      icon: "🤖"
    }
  ],

  // Pricing
  pricing: {
    hourlyRates: [
      {
        title: "Standard (Relaxed)",
        rate: "$150",
        period: "per hour",
        description: "Best for steady-state engineering work without critical deadlines.",
        footer: "(weekly touchpoints)"
      },
      {
        title: "Standard (Fast)",
        rate: "$225",
        period: "per hour",
        description: "Adds prioritization for faster turnaround and tighter feedback cycles.",
        footer: "(daily touchpoints)"
      },
      {
        title: "Premium",
        rate: "$300",
        period: "per hour",
        description: "Mission-critical, high-scale engagements with urgent deliverables.",
        footer: "(hourly touchpoints)"
      }
    ],
    packages: [
      {
        title: "Platform Architecture Assessment",
        features: [
          "Cluster review & audit",
          "Ingress, networking, observability analysis",
          "Cost optimization roadmap",
          "Executive readout session"
        ]
      },
      {
        title: "CI/CD & GitOps Modernization",
        features: [
          "Pipeline & ArgoCD review",
          "Security & scanning enhancements",
          "Deployment strategy improvements",
          "Team training & documentation"
        ]
      },
      {
        title: "Kubernetes Cost Optimization",
        features: [
          "Resource rightsizing analysis",
          "Scheduling & node optimization",
          "Spot instance adoption plan",
          "Monitoring & alerting setup"
        ]
      }
    ]
  },

  // About
  about: {
    description: "RJChicago, LLC is led by Ryan Jones, an SRE/Platform leader with experience running Kubernetes at scale, managing millions of requests per second, and modernizing infrastructure for large engineering organizations."
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ],

  // Footer
  footer: {
    copyright: "© RJChicago, LLC 2025. All rights reserved.",
    links: [
      { name: "Privacy Policy", href: "/privacy", modalKey: 'privacy' },
      { name: "Terms of Service", href: "/terms", modalKey: 'terms' }
    ]
  },

  legal: {
    privacy: {
      title: 'Privacy Policy',
      content: [
        'We collect only the information provided in the contact form to respond to inquiries. Data is stored securely and used solely for follow-up discussions related to your request.',
        'We do not sell or share personal information. Requests for data deletion can be made through the contact form and will be honored promptly.',
        'This site uses basic analytics to understand aggregate traffic. No advertising pixels or cross-site tracking scripts are used.'
      ],
    },
    terms: {
      title: 'Terms of Service',
      content: [
        'All consulting work is governed by a mutually signed Statement of Work and Master Services Agreement. Website content does not constitute an offer of services.',
        'By contacting us, you confirm you have authority to discuss work for your organization. Deliverables remain property of RJChicago, LLC until contractual obligations are met.',
        'These terms are subject to change. Continued use of the site indicates acceptance of the latest version.'
      ],
    },
  }
};
