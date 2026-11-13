export interface TranslationSchema {
  nav: {
    products: string;
    solutions: string;
    company: string;
    news: string;
    contactUs: string;
    gameAggregator: string;
    whiteLabelSolution: string;
    crmDataAnalysis: string;
    remoteDesktop: string;
    turnkeyCasino: string;
    cryptoCasino: string;
    sweepstakesCasino: string;
    telegramCasino: string;
    aboutUs: string;
    providers: string;
    blogs: string;
    mediaKit: string;
    events: string;
  };
  hero: {
    badgeText: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    ctaText: string;
  };
  milestones: {
    expertiseLabel: string;
    expertiseTitle: string;
    expertiseDesc: string;
    serviceLabel: string;
    serviceTitle: string;
    serviceDesc: string;
    securityLabel: string;
    securityTitle: string;
    securityDesc: string;
    innovationLabel: string;
    innovationTitle: string;
    innovationDesc: string;
  };
  providersMarquee: {
    title: string;
    subtitle: string;
    viewAll: string;
    stat1Line1?: string;
    stat1Line2?: string;
    stat2Line1?: string;
    stat2Line2?: string;
    stat3Line1?: string;
    stat3Line2?: string;
    stat4Line1?: string;
    stat4Line2?: string;
  };
  whyChooseUs: {
    title: string;
    description: string;
    knowMore: string;
    quickLaunch: string;
    scalableByDesign: string;
    bespokeDevelopment: string;
    flexibleLaunch: string;
    allInOnePlatform: string;
    gamesStat: string;
    providersStat: string;
    experienceStat: string;
  };
  productsSection: {
    title1: string;
    title2: string;
    description: string;
    knowMore: string;
    gameAggregatorTitle: string;
    gameAggregatorDesc: string;
    crmTitle: string;
    crmDesc: string;
  };
  solutionsSection: {
    title1: string;
    title2: string;
    description: string;
    knowMore: string;
    whiteLabelTitle: string;
    whiteLabelDesc: string;
    remoteDesktopTitle: string;
    remoteDesktopDesc: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    bullet4: string;
    getQuote: string;
  };
  newsSection: {
    title: string;
    exploreMore: string;
    minsRead: string;
    featuredPost: {
      title: string;
      date: string;
      readTime: string;
      authorName: string;
    };
    posts: {
      id: string;
      title: string;
      date: string;
      readTime: string;
      authorName: string;
    }[];
  };
  crmPage: {
    keyFeaturesTitle: string;
    tabs: {
      id: string;
      tabLabel: string;
      cardTitle: string;
      description: string;
      bullets: string[];
    }[];
    advantagesTitle: string;
    advantages: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  exploreOtherProducts: {
    title: string;
    crmTitle: string;
    crmDesc: string;
    whiteLabelTitle: string;
    whiteLabelDesc: string;
    aggregatorTitle: string;
    aggregatorDesc: string;
    remoteDesktopTitle: string;
    remoteDesktopDesc: string;
  };
  aggregatorPage: {
    featuresTitle: string;
    features: { id: string; title: string; desc: string }[];
    advantagesTitle: string;
    advantages: { id: string; title: string; description: string; bullets: string[] }[];
  };
  whiteLabelPage: {
    featuresTitle: string;
    features: { id: string; title: string; desc: string }[];
    keyFeaturesTitle: string;
    keyFeatures: { id: string; tabLabel: string; cardTitle: string; description: string; bullets: string[] }[];
  };
  remoteDesktopPage: {
    pricingTitle1: string;
    pricingTitle2: string;
    tableHeaders: {
      planName: string;
      cpu: string;
      coreCounts: string;
      memory: string;
      diskSpace: string;
      portSpeed: string;
      price: string;
      action: string;
    };
    buyButton: string;
    usecasesTitle: string;
    usecases: { id: string; title: string; description: string }[];
    benefitsTitle: string;
    benefitsSubtitle: string;
    benefits: { number: string; title: string; description: string }[];
    worldwideTitle1: string;
    worldwideTitle2: string;
    worldwideTitle3: string;
    worldwideDesc: string;
  };
  faqSection: {
    title1: string;
    title2: string;
    description: string;
    stillHaveQuestions: string;
    placeholder: string;
    sendNow: string;
    orText: string;
    sendMailTo: string;
    supportNote: string;
    faqs: { id: number; number: string; question: string; answer: string }[];
  };
  workWithUs: {
    title1: string;
    title2: string;
    subtitle: string;
    ctaText: string;
  };
  subpages: {
    aggregator: {
      title: string;
      desc1: string;
      desc2: string;
      ctaText: string;
    };
    whiteLabel: {
      title: string;
      desc: string;
      point1: string;
      point2: string;
      point3: string;
      ctaText: string;
    };
    crm: {
      title: string;
      desc1: string;
      desc2: string;
      ctaText: string;
    };
    remoteDesktop: {
      title1: string;
      title2: string;
      desc: string;
      point1: string;
      point2: string;
      point3: string;
      ctaText: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    inquiryType: string;
    inquiryPlaceholder: string;
    inquiryGeneral: string;
    inquiryAggregator: string;
    inquiryWhiteLabel: string;
    inquiryCrm: string;
    inquiryCustom: string;
    message: string;
    messagePlaceholder: string;
    consent: string;
    humanCheck: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    contactUsTitle: string;
    socialLinksTitle: string;
    liveSupport: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    terms: string;
    termsConditions: string;
    cookiePolicy: string;
    privacyPolicy: string;
    company: string;
    products: string;
    solutions: string;
  };
  providersPage: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    allCountries: string;
    showing: string;
    of: string;
    providersCount: string;
    resetFilters: string;
    noMatchingTitle: string;
    noMatchingDesc: string;
    clearFilters: string;
    loading: string;
    bottomCtaTitle: string;
    bottomCtaSubtitle: string;
    bottomCtaButton: string;
    countriesLabel: string;
    gamesLabel: string;
    rtpLabel: string;
    requestIntegration: string;
    integratedStudios?: string;
    certifiedTitles?: string;
    averageRtp?: string;
    integrationSpeed?: string;
    filterRegion?: string;
  };
  common: {
    language: string;
    exploreMore: string;
    learnMore: string;
    getStarted: string;
    talkWithUs: string;
    bookFreeDemo: string;
  };
}
