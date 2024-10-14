import Logo from './Logo';
import WrappedHeaderNav from './WrappedHeaderNav';

type HeaderProps = {
  logoStyles: string;
  className: string;
};

export default async function Header({ className, logoStyles }: HeaderProps) {
  return (
    <header className={className}>
      <nav className="flex items-center justify-between p-4 lg:px-6">
        <Logo logoStyles={logoStyles} />

        <WrappedHeaderNav />
      </nav>
    </header>
  );
}
