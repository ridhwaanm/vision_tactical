export interface Partnership {
  name: string;
  category: 'medical' | 'intelligence' | 'technology' | 'regulatory';
  tagline: string;
  description: string;
  website?: string;
  logo?: string;
  invertLogo?: boolean;
  certificate?: string;
}

export const partnerships: Partnership[] = [
  {
    name: 'ER24',
    category: 'medical',
    tagline: 'Emergency Medical Services',
    description:
      'In an emergency, every second counts. Our partnership with ER24 ensures that a single call or panic signal immediately dispatches both armed response officers and expert paramedics, providing faster response times and complete protection when it matters most.',
    website: 'https://www.er24.co.za',
    logo: '/images/logos/er24.svg'
  },
  {
    name: 'Medi Response',
    category: 'medical',
    tagline: 'Emergency Medical Services',
    description:
      'Medi Response extends our emergency medical network, ensuring professional paramedic care is always within reach. Whether facing a security threat or medical crisis, our integrated response delivers life-saving care on scene.',
    website: 'https://www.mediresponse.co.za',
    logo: '/images/logos/medi_response.svg'
  },
  {
    name: 'Help 24 Medical',
    category: 'medical',
    tagline: 'Emergency Medical Services',
    description:
      'Help 24 Medical broadens our medical response coverage across Johannesburg, ensuring rapid on-scene emergency care for our clients no matter where they are.',
    logo: '/images/logos/help24-logo.webp',
    website: 'https://help24ems.co.za/'
  },
  {
    name: 'E2 Partnership',
    category: 'intelligence',
    tagline: 'Crime Intelligence Sharing',
    description:
      'The E2 Partnership serves as a critical conduit for sharing intelligence on robberies, hijackings, and extortion between private security companies and SAPS, enabling faster, more coordinated responses to threats.',
    logo: '/images/logos/E2-Logo.svg',
    invertLogo: true,
    website: 'https://e2.bac.org.za/'
  },
  {
    name: 'CCIN',
    category: 'intelligence',
    tagline: 'Civilian Crime Intelligence Network',
    description:
      'CCIN brings together private security companies, SAPS, Community Policing Forums, and community organisations to fight crime through shared intelligence and coordinated action.',
    website: 'https://ccinwebsite.weebly.com/'
  },
  {
    name: 'Tracker',
    category: 'technology',
    tagline: 'Stolen Vehicle Recovery',
    description:
      'Vision Tactical has partnered with Tracker, equipping our response vehicles with sophisticated tracking devices to pinpoint vehicle locations and assist with the swift recovery of stolen and hijacked vehicles.',
    website: 'https://www.tracker.co.za',
    logo: '/images/logos/tracker.svg',
    invertLogo: true
  },
  {
    name: 'SNIPR',
    category: 'technology',
    tagline: 'Number Plate Recognition',
    description:
      'SNIPR\'s Automatic Number Plate Recognition (ANPR) technology enables our teams to identify flagged vehicles in real-time, enhancing surveillance capabilities and supporting rapid response to vehicle-related crime.',
    website: 'https://www.snipr.co.za',
    logo: '/images/logos/Snipr.svg'
  },
  {
    name: 'PSIRA',
    category: 'regulatory',
    tagline: 'Private Security Industry Regulatory Authority',
    description:
      'Vision Tactical is a fully registered and compliant security service provider with PSIRA, South Africa\'s statutory regulatory body for the private security industry.',
    website: 'https://www.psira.co.za',
    logo: '/images/logos/PSIRAVerticallogo.png',
    certificate: '/images/awards/psira-2026.jpg'
  }
];

export const partnerCategories = {
  medical: {
    label: 'Medical Response Partners',
    icon: 'heart',
    intro: 'We partner with leading private medical services to provide a comprehensive safety net. A single call dispatches both armed response and expert paramedics.'
  },
  intelligence: {
    label: 'Intelligence Networks',
    icon: 'shield',
    intro: 'Real-time crime intelligence sharing with SAPS and fellow security providers enables faster, coordinated responses across Johannesburg.'
  },
  technology: {
    label: 'Technology Partners',
    icon: 'cpu',
    intro: 'Advanced tracking and recognition technology powers our surveillance and vehicle recovery operations.'
  },
  regulatory: {
    label: 'Accreditations',
    icon: 'badge',
    intro: 'Fully registered and compliant with South Africa\'s private security regulatory framework.'
  }
} as const;
