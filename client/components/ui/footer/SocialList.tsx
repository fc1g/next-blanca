import { Children } from '@/client/types/Children';

export default function SocialList({ children }: Children) {
  return <ul className="mt-5 flex justify-center space-x-6">{children}</ul>;
}

type SocialItemProps = {
  href: string;
} & Children;

function SocialItem({ href, children }: SocialItemProps) {
  return (
    <li>
      <a href={href} target="blank" rel="noopener noreferrer">
        {children}
      </a>
    </li>
  );
}

SocialList.SocialItem = SocialItem;
