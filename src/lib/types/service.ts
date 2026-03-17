export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
  content: {
    intro: string;
    features: ServiceFeature[];
    process: ProcessStep[];
    whyVisionTactical: string;
  };
  cta: { text: string; href: string };
  relatedServices: string[];
  seo: { title: string; description: string };
}
