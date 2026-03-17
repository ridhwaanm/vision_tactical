import type { FAQItem } from '$lib/types/faq';

export const faqItems: FAQItem[] = [
  // General
  {
    question: 'What areas do you cover?',
    answer:
      'Vision Tactical primarily covers the greater Johannesburg area, including Houghton, Norwood, Killarney, Melrose, Rosebank, Sandton, Parktown, Illovo, Hyde Park, and Bryanston. Our Anti-Kidnapping Unit operates nationally in partnership with SAPS.',
    category: 'General'
  },
  {
    question: 'How do I become a client?',
    answer:
      'Contact us via phone, email, or our website quote form. We will conduct a free security assessment of your property and provide a tailored quote. Once you approve, we can typically deploy within 48-72 hours.',
    category: 'General'
  },
  {
    question: 'Are you PSIRA registered?',
    answer:
      'Yes, Vision Tactical and all our security officers are fully registered with the Private Security Industry Regulatory Authority (PSIRA). You can verify our registration on the PSIRA website.',
    category: 'General'
  },
  {
    question: 'Do you offer 24/7 services?',
    answer:
      'Yes, our armed response unit, control room, and emergency contact lines operate 24 hours a day, 7 days a week, 365 days a year. Office administrative functions operate Monday to Friday, 8am to 5pm.',
    category: 'General'
  },
  // Armed Response
  {
    question: 'What is your average response time?',
    answer:
      'In our core coverage areas, our average response time is under 5 minutes. Response times may vary based on traffic conditions, weather, and simultaneous incidents.',
    category: 'Armed Response'
  },
  {
    question: 'What happens when my alarm triggers?',
    answer:
      'When your alarm triggers, a signal is sent to our 24/7 control room. Our controllers will attempt to verify the alarm via CCTV or phone contact, then immediately dispatch the nearest available reaction vehicle. You will receive an SMS notification.',
    category: 'Armed Response'
  },
  {
    question: 'Do I need CCTV to subscribe to armed response?',
    answer:
      'No, CCTV is not required. However, we highly recommend it as it significantly improves our ability to verify alarms and respond appropriately. We offer integrated CCTV packages at competitive prices.',
    category: 'Armed Response'
  },
  {
    question: 'Can I use your armed response with my existing alarm system?',
    answer:
      'In most cases, yes. We work with all major alarm system manufacturers. We may need to install a communicator compatible with our control room systems. Our technicians will assess your existing equipment during the installation survey.',
    category: 'Armed Response'
  },
  // Billing
  {
    question: 'How much does security cost?',
    answer:
      'Pricing varies based on the services required, property size, risk profile, and location. We provide free, no-obligation quotes after conducting a thorough security assessment. Contact us for a personalised quote.',
    category: 'Billing'
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept EFT, credit card, debit order, and cash payments. Monthly subscriptions are typically paid via debit order or EFT. Corporate clients can arrange for monthly invoicing.',
    category: 'Billing'
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes, subscriptions can be cancelled with one calendar month written notice. Please note that installation fees and equipment may be subject to separate terms if cancelled within the first 12 months.',
    category: 'Billing'
  },
  {
    question: 'Do you offer discounts for estates or complexes?',
    answer:
      'Yes, we offer preferential rates for body corporates, home owners associations, and estate management. Group subscriptions allow us to deploy resources more efficiently, and we pass these savings on to clients.',
    category: 'Billing'
  },
  // Technology
  {
    question: 'Do you use drones for surveillance?',
    answer:
      'Yes, Vision Tactical pioneered drone surveillance in South African private security. Our SACAA-licensed drone unit provides aerial reconnaissance, thermal imaging, and real-time intelligence for operations.',
    category: 'Technology'
  },
  {
    question: 'Can I view my CCTV cameras remotely?',
    answer:
      'Yes, all our CCTV systems include smartphone and computer access. You can view live feeds and recorded footage from anywhere in the world with an internet connection.',
    category: 'Technology'
  },
  {
    question: 'Do you have a mobile app?',
    answer:
      'We offer remote access apps for CCTV systems and alarm control. Our control room also provides SMS and email notifications for alarm events. Ask our team about the latest app options during your consultation.',
    category: 'Technology'
  }
];

export function getFAQItemsByCategory(category: string): FAQItem[] {
  return faqItems.filter((item) => item.category === category);
}

export function getAllFAQCategories(): string[] {
  const categories = faqItems.map((item) => item.category);
  return [...new Set(categories)];
}
