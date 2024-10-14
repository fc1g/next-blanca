export type SurroundingPlaces = SurroundingID &
  SurroundingTitle &
  SurroundingSubtitle &
  SurroundingImageAltText &
  SurroundingImage;

export type SurroundingPlace = SurroundingID &
  SurroundingTitle &
  SurroundingDescription &
  SurroundingImageAltText &
  SurroundingImage &
  SurroundingRouteLink &
  SurroundingDistance &
  SurroundingCoords &
  SurroundingSubtitle;

export type SurroundingID = {
  id: string;
};

export type SurroundingTitle = {
  title: {
    en: string;
    pl: string;
    es: string;
    id: string;
  };
};

export type SurroundingSubtitle = {
  subtitle: {
    en: string;
    pl: string;
    es: string;
    id: string;
  };
};

export type SurroundingDescription = {
  description: {
    en: string;
    pl: string;
    es: string;
    id: string;
  };
};

export type SurroundingImageAltText = {
  imageAltText: {
    en: string;
    pl: string;
    es: string;
    id: string;
  };
};

export type SurroundingImage = {
  image: string;
};

export type SurroundingRouteLink = {
  routeLink: string;
};

export type SurroundingDistance = {
  distance: number;
};

export type SurroundingCoords = {
  coords: {
    id: string;
    lat: number;
    lng: number;
  };
};
