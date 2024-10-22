import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import SocialList from './SocialList';
import Anchor from '../../Anchor';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="mb-2 mt-4 flex-col items-center justify-center py-4 text-xs sm:px-0 sm:text-sm lg:text-base">
      <div className="border-primary text-center">
        &copy; {new Date().getFullYear()} CasaBlanca. {t('footer.copyrights')}{' '}
        <Anchor href="https://nextjs.org/">NextJS</Anchor> &{' '}
        <Anchor href="https://tailwindcss.com/">Tailwind CSS</Anchor>
        <SocialList>
          <>
            <SocialList.SocialItem
              href="https://www.facebook.com/people/CasaBlanca-Private-Heated-Pool/100091592920461/"
              label="Facebook"
            >
              <FaFacebook className="text-lg text-muted-foreground transition duration-300 hover:-translate-y-1 hover:text-secondary-foreground sm:text-xl" />
              <span className="sr-only" lang="en">
                Facebook
              </span>
            </SocialList.SocialItem>
            <SocialList.SocialItem
              href="https://www.instagram.com/casablanca_privateheatedpool?igsh=d2F5ZjJhOTJwdXBn"
              label="Instagram"
            >
              <FaInstagram className="text-lg text-muted-foreground transition duration-300 hover:-translate-y-1 hover:text-secondary-foreground sm:text-xl" />
              <span className="sr-only" lang="en">
                Instagram
              </span>
            </SocialList.SocialItem>
          </>
        </SocialList>
      </div>
    </footer>
  );
}
