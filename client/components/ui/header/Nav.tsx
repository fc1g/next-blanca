import { Link, usePathname } from '@/server/libs/i18n/routing';
import { useTranslations } from 'next-intl';
import { Links } from '@/client/utils';

type NavProps = {
  className: string;
  setIsOpen: () => void;
  children?: React.ReactNode;
};

export default function Nav({ className, setIsOpen, children }: NavProps) {
  const t = useTranslations('header.nav');
  const pathname = usePathname();

  return (
    <ul className={`${className} rounded-lg`}>
      {Links.map(link => (
        <li className="group rounded px-3 py-3 md:p-0" key={link.label}>
          <Link
            onClick={setIsOpen}
            className={`block px-2 transition duration-300 group-hover:text-primary ${pathname === link.href ? 'text-primary' : ''}`}
            href={link.href}
          >
            {t(link.label)}
          </Link>
        </li>
      ))}

      {children && (
        <li className="flex items-center justify-center">{children}</li>
      )}
    </ul>
  );
}
