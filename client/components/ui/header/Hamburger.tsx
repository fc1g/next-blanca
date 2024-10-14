import { useTranslations } from 'next-intl';

import '@/client/styles/hamburger.css';

type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export default function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {
  const t = useTranslations('header');

  return (
    <button
      type="button"
      onClick={setIsOpen}
      className={`hamburger z-[9999999999] block md:hidden ${isOpen ? 'open' : ''}`}
    >
      <span className="hamburger-top" />
      <span className="hamburger-middle" />
      <span className="hamburger-bottom" />
      <span className="sr-only">{t('hamburger')}</span>
    </button>
  );
}
