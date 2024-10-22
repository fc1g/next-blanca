import { useTranslations } from 'next-intl';
import Logo from './Logo';
import WrappedHeaderNav from './WrappedHeaderNav';

type HeaderProps = {
  logoStyles: string;
  className: string;
};

export default function Header({ className, logoStyles }: HeaderProps) {
  const t = useTranslations('header.langList');

  return (
    <header className={className}>
      <nav className="flex items-center justify-between p-4 lg:px-6">
        <Logo logoStyles={logoStyles} />

        <WrappedHeaderNav en={t('en')} pl={t('pl')} es={t('es')} />
      </nav>
    </header>
  );
}
