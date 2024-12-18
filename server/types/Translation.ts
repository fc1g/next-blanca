export type Nav = {
  home: string;
  about: string;
  surrounding: string;
  contacts: string;
};

export type Header = {
  nav: Nav;
  hamburger: string;
};

export type Hero = {
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

export type Testimonials = {
  title: string;
  subtitle: string;
  leaveReview: string;
  kuba: Testimonial;
  monika: Testimonial;
  nik: Testimonial;
  adam: Testimonial;
};

export type Homepage = {
  hero: Hero;
  testimonials: Testimonials;
};

export type Gallery = {
  loungeFromOutside: string;
  lounge: string;
  diningRoom: string;
  kitchen: string;
  doubleRoom: string;
  twinRoomDark: string;
  twinRoomLight: string;
  bathFirst: string;
  bathSecond: string;
  terasaEnter: string;
  terasa: string;
  pool: string;
};

export type InformationText = {
  firstPart: string;
  secondPart?: string;
};

export type House = {
  title: string;
  text: InformationText;
};

export type About = {
  gallery: Gallery;
  information: {
    house: House;
    surrounding: House;
    rentInfo: House;
    transfer: House;
  };
};

export type ContactsInformation = {
  title: string;
  subtitle: string;
  firstCol: string;
  secondCol: string;
  thirdCol: string;
  fourthCol: string;
  fifthCol: string;
  sixthCol: string;
};

export type Accordion = {
  phone: string;
  email: string;
  important: {
    firstPart: string;
    secondPart: string;
  };
  firstContact: {
    customeField: string;
    title: string;
    langPreference: string;
  };
  secondContact: {
    title: string;
    customeField: string;
    langPreference: string;
  };
};

export type Contacts = {
  monthPriceTitle: string;
  months: {
    october: string;
    november: string;
    christmasNewYear: string;
    march: string;
    april: string;
  };
  fullPrice: string;
  deposit: string;
  information: ContactsInformation;
  accordion: Accordion;
};

export type SurroundingFiltersMenu = {
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

export type Pagination = {
  previous: string;
  next: string;
};

export type Surrounding = {
  filtersMenu: SurroundingFiltersMenu;
  pagination: Pagination;
  placeMoreInfo: string;
  placeGenerateRoute: string;
  placeHouse: string;
  enable: string;
  disable: string;
};

export type AdminCalendar = {
  welcome: string;
  adminGreet: string;
  from: string;
  to: string;
  initialDate: string;
  deadlineDate: string;
};

export type AdminSurrounding = {
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

export type AdminForm = {
  submit: string;
  submitting: string;
};

export type Admin = {
  calendar: AdminCalendar;
  surrounding: AdminSurrounding;
  form: AdminForm;
};

export type Footer = {
  copyrights: string;
};

export type ErrorMessages = {
  message: string;
  reset: string;
  empty: string;
  validation: string;
  notFound: string;
};

export type Translation = {
  header: Header;
  homepage: Homepage;
  about: About;
  contacts: Contacts;
  surrounding: Surrounding;
  admin: Admin;
  footer: Footer;
  error: ErrorMessages;
};
