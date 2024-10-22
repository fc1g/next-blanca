'use client';

import { useState, Suspense } from 'react';
import { Skeleton } from '../skeleton';
import DarkMode from './DarkMode';
import Hamburger from './Hamburger';
import LangList from './LangList';
import Nav from './Nav';

type WrappedHeaderNavProps = {
  en: string;
  pl: string;
  es: string;
};

export default function WrappedHeaderNav({
  en,
  pl,
  es,
}: WrappedHeaderNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav
        setIsOpen={() => setIsOpen(false)}
        className="hidden items-center justify-center space-x-4 rounded border bg-background px-2 py-2 md:flex lg:space-x-8 lg:px-5"
      />

      <div className="flex items-center justify-center space-x-4">
        <div className="hidden md:block">
          <DarkMode />
        </div>

        <Suspense fallback={<Skeleton className="h-9 w-24 rounded-sm" />}>
          <LangList en={en} pl={pl} es={es} />
        </Suspense>

        <div className="md:hidden">
          <Hamburger isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <div
        className={`${isOpen ? 'absolute inset-x-0 top-0 z-[99999] mt-12' : 'hidden'}`}
      >
        <Nav
          setIsOpen={() => setIsOpen(false)}
          className="mt-4 flex w-full flex-col border border-gray-100 bg-primary-foreground p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse [&>lin]:w-full"
        >
          <DarkMode />
        </Nav>
      </div>
    </>
  );
}
