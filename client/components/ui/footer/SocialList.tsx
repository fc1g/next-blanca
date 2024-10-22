import { Children } from '@/client/types/Children';

export default function SocialList({ children }: Children) {
  return <ul className="mt-5 flex justify-center space-x-6">{children}</ul>;
}

type SocialItemProps = {
  href: string;
  label: string;
} & Children;

function SocialItem({ href, label, children }: SocialItemProps) {
  return (
    <li>
      <a
        href={href}
        target="blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {children}
      </a>
    </li>
  );
}

SocialList.SocialItem = SocialItem;
