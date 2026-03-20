export type Lang = "fr" | "en";

export interface LinkItem {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: LinkItem[];
}

export interface FooterColumn {
  groups: FooterGroup[];
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
}

export interface FeatureBlock {
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
}

export interface InsightItem {
  title: string;
  excerpt: string;
  href: string;
}

export interface HighlightItem {
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
  capabilities: string[];
  highlights: HighlightItem[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  body: string[];
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  image: string;
  services: ServiceItem[];
  faq?: FaqItem[];
}

export interface Dictionary {
  lang: Lang;
  siteName: string;
  logoLabel: string;
  nav: {
    services: string;
    company: string;
    team: string;
    news: string;
    contact: string;
    search: string;
    login: string;
    mission: string;
    companyMenu: string;
    companyLinks: {
      about: string;
      megatrends: string;
      sustainable: string;
      ambitions: string;
      contact: string;
    };
  };
  common: {
    partnerCta: string;
    contactUs: string;
    learnMore: string;
    readMore: string;
    takeNextStep: string;
    breadcrumbs: {
      home: string;
      services: string;
    };
  };
  home: {
    hero: HeroSlide[];
    features: FeatureBlock[];
    servicesSitemapTitle: string;
    servicesSitemapSubtitle: string;
    serviceGridTitle: string;
    serviceGridIntro: string;
    insights: {
      title: string;
      featuredTitle: string;
      featuredExcerpt: string;
      featuredHref: string;
      items: InsightItem[];
    };
    ctaBand: {
      title: string;
      missionCta: string;
      contactCta: string;
    };
  };
  company: {
    pageTitle: string;
    introTitle: string;
    introBlocks: { title: string; text: string }[];
    corridorTitle: string;
    corridorCountries: string[];
    hqTitle: string;
    hqAddress: string;
    megatrendsTitle: string;
    megatrendsText: string;
    miningDevTitle: string;
    miningDevText: string;
    sustainableTitle: string;
    sustainableBullets: string[];
    ambitionsTitle: string;
    ambitionsBullets: string[];
  };
  services: {
    landingTitle: string;
    landingIntro: string;
    categoriesTitle: string;
    sitemapTitle: string;
    featuredTitle: string;
    featuredText: string;
    categories: ServiceCategory[];
    ctaBand: {
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
    };
    capabilitiesTitle: string;
    exploreLabel: string;
    allServicesLabel: string;
    relatedTitle: string;
    faqTitle: string;
  };
  team: {
    pageTitle: string;
    intro: string;
    note: string;
    cvLabel: string;
    members: {
      name: string;
      role: string;
      bio: string;
      image: string;
    }[];
  };
  contact: {
    pageTitle: string;
    intro: string;
    hqTitle: string;
    hqAddress: string;
    corridorTitle: string;
    corridorCountries: string[];
    phoneLabel: string;
    phoneValue: string;
    emailLabel: string;
    emailValue: string;
    formTitle: string;
    formSuccess: string;
    formFields: {
      firstName: string;
      lastName: string;
      email: string;
      phoneOptional: string;
      serviceLocation: string;
      stateProvince: string;
      serviceIndustry: string;
      enquiryType: string;
      message: string;
      consentText: string;
      privacyPolicyLabel: string;
      submit: string;
    };
    formOptions: {
      selectPlaceholder: string;
      serviceLocations: string[];
      statesProvinces: string[];
      serviceIndustries: string[];
      enquiryTypes: string[];
    };
    formErrors: {
      required: string;
      email: string;
      consent: string;
    };
  };
  mission: {
    pageTitle: string;
    intro: string;
    formSuccess: string;
    missionTypes: string[];
    formFields: {
      name: string;
      email: string;
      organization: string;
      country: string;
      missionType: string;
      timeline: string;
      budget: string;
      details: string;
      submit: string;
    };
    formErrors: {
      required: string;
      email: string;
    };
  };
  footer: {
    columns: FooterColumn[];
    quickLinksTitle: string;
    quickLinks: LinkItem[];
    legal: string;
    socials: LinkItem[];
  };
  news: {
    pageTitle: string;
    intro: string;
    allNewsLabel: string;
    latestLabel: string;
    readArticle: string;
    articles: NewsArticle[];
  };
  search: {
    title: string;
    placeholder: string;
    suggestedLabel: string;
    noResult: string;
  };
}
