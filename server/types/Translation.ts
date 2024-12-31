export type NavTranslations = {
  home: string;
  about: string;
  surrounding: string;
  contacts: string;
};

export type LanguageList = {
  en: string;
  pl: string;
  es: string;
};

export type HeaderTranslations = {
  nav: NavTranslations;
  hamburger: string;
  langList: LanguageList;
};

export type HeroTranslations = {
  title: {
    firstPart: string;
    vacation: string;
    lastPart: string;
  };
  subtitle: string;
  moreInfo: string;
};

export type Testimonial = {
  title: string;
  text: string;
  userName: string;
  imgAltText: string;
};

export type TestimonialsTranslations = {
  title: string;
  subtitle: string;
  leaveReview: string;
  [key: string]: Testimonial | string;
};

export type HomepageTranslations = {
  hero: HeroTranslations;
  testimonials: TestimonialsTranslations;
};

export type GalleryTranslations = {
  [key: string]: string;
};

export type InformationSection = {
  title: string;
  text: {
    firstPart: string;
    secondPart: string;
  };
};

export type AboutInformationTranslations = {
  house: InformationSection;
  surrounding: InformationSection;
  rentInfo: InformationSection;
  transfer: InformationSection;
};

export type AboutTranslations = {
  gallery: GalleryTranslations;
  information: AboutInformationTranslations;
};

export type ContactsAccordionSection = {
  customeField: string;
  title: string;
  langPreference: string;
};

export type ContactsAccordionTranslations = {
  phone: string;
  email: string;
  important: {
    firstPart: string;
    secondPart: string;
  };
  firstContact: ContactsAccordionSection;
  secondContact: ContactsAccordionSection;
};

export type ContactsTranslations = {
  monthPriceTitle: string;
  charts: {
    title: string;
  };
  months: {
    [key: string]: string;
  };
  fullPrice: string;
  deposit: string;
  information: {
    title: string;
    subtitle: string;
    firstCol: string;
    secondCol: string;
    thirdCol: string;
    fourthCol: string;
    fifthCol: string;
    sixthCol: string;
  };
  accordion: ContactsAccordionTranslations;
};

export type FiltersMenuTranslations = {
  filters: string;
  sort: string;
  limit: string;
  sortTypes: {
    low: string;
    high: string;
  };
  limitTypes: {
    three: string;
    nine: string;
  };
};

export type PaginationTranslations = {
  previous: string;
  next: string;
};

export type SurroundingTranslations = {
  filtersMenu: FiltersMenuTranslations;
  pagination: PaginationTranslations;
  placeMoreInfo: string;
  placeGenerateRoute: string;
  placeHouse: string;
  disable: string;
  enable: string;
};

export type AdminCalendarTranslations = {
  welcome: string;
  adminGreet: string;
  from: string;
  to: string;
  initialDate: string;
  deadlineDate: string;
};

export type AdminSurroundingTranslations = {
  title: string;
  subtitle: string;
  description: string;
  imageAltText: string;
  image: string;
  distance: string;
  routeLink: string;
  coords: {
    lat: string;
    lng: string;
  };
};

export type AdminFormTranslations = {
  submit: string;
  submitting: string;
};

export type AdminTranslations = {
  calendar: AdminCalendarTranslations;
  surrounding: AdminSurroundingTranslations;
  form: AdminFormTranslations;
};

export type FooterTranslations = {
  copyrights: string;
};

export type ErrorTranslations = {
  message: string;
  reset: string;
  empty: string;
  pity: string;
};

export type AuthSectionTranslations = {
  title: string;
  description: string;
};

export type AuthSignupTranslations = {
  title: string;
  passwordConfirm: AuthSectionTranslations;
  login: {
    question: string;
    linkText: string;
  };
};

export type AuthLoginTranslations = {
  title: string;
  signup: {
    question: string;
    linkText: string;
  };
};

export type AuthTranslations = {
  email: AuthSectionTranslations;
  password: AuthSectionTranslations;
  loginBtnText: string;
  signupBtnText: string;
  submitting: string;
  signup: AuthSignupTranslations;
  login: AuthLoginTranslations;
};

export type Translations = {
  header: HeaderTranslations;
  homepage: HomepageTranslations;
  about: AboutTranslations;
  contacts: ContactsTranslations;
  surrounding: SurroundingTranslations;
  admin: AdminTranslations;
  footer: FooterTranslations;
  error: ErrorTranslations;
  auth: AuthTranslations;
};
