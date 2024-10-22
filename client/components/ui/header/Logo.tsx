import { Link } from '@/server/libs/i18n/routing';
import { useTranslations } from 'next-intl';

type LogoProps = {
  logoStyles: string;
};

export default function Logo({ logoStyles }: LogoProps) {
  const t = useTranslations('header.nav');

  return (
    <Link
      aria-label={`${t('home')} - CasaBlanca`}
      className={logoStyles}
      href="/"
    >
      <span className="text-xl focus:outline-none xs:text-3xl lg:text-4xl">
        CasaBlanca
      </span>
    </Link>
  );
}
