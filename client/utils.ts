import { NavLink } from './types/Link';

export const ICON_SIZE = [38, 38] as [number, number];
export const ICON_COORDS = [37.8282608, -0.7899585] as [number, number];

export const FORM_TOAST_DURATION = 10000;

export const Links: NavLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/surrounding',
    label: 'surrounding',
  },
  {
    href: '/contacts',
    label: 'contacts',
  },
];
