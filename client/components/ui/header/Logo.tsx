import { Link } from '@/server/libs/i18n/routing';

type LogoProps = {
  logoStyles: string;
};

export default function Logo({ logoStyles }: LogoProps) {
  return (
    <Link className={logoStyles} href="/">
      <span className="text-xl focus:outline-none xs:text-3xl lg:text-4xl">
        CasaBlanca
      </span>
    </Link>
  );
}
