import { Children } from '@/client/types/Children';
import { LinkHTMLAttributes } from 'react';

type AnchorProps = {
  href: string;
} & Children &
  LinkHTMLAttributes<HTMLLinkElement>;

export default function Anchor({ children, href }: AnchorProps) {
  return (
    <div className="group inline-block">
      <a
        className="text-primary"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>

      <div className="mx-2 border-b border-transparent transition duration-300 group-hover:border-primary" />
    </div>
  );
}
