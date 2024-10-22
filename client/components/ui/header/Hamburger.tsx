import { useTranslations } from 'next-intl';

type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export default function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {
  const t = useTranslations('header');

  return (
    <button
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
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
