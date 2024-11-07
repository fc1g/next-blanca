import Anchor from '@/client/components/Anchor';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/client/components/ui/accordion';
import { useTranslations } from 'next-intl';
import { MdEmail, MdOutlineMap, MdPhone, MdWeb } from 'react-icons/md';

export default function ContactsAccordion() {
  const t = useTranslations('contacts.accordion');

  return (
    <section className="mx-auto mb-8 max-w-screen-xl px-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{t('firstContact.title')}</AccordionTrigger>
          <AccordionContent>
            <div className="mb-2 text-center text-muted-foreground lg:text-left">
              <ul className="flex flex-col items-center justify-center space-y-6 p-3 sm:flex-row sm:space-x-8 sm:space-y-0">
                <li className="flex w-44 space-x-2 sm:flex-1">
                  <div className="rounded-xl bg-muted p-4">
                    <MdPhone className="size-6 text-secondary-foreground" />
                  </div>

                  <div className="border-border">
                    <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                      {t('phone')}:
                    </h3>
                    <Anchor
                      className="text-primary-600 dark:text-primary-300 text-left text-xs md:text-sm"
                      href="tel:+48661128981"
                    >
                      +48661128981
                    </Anchor>
                  </div>
                </li>

                <li className="flex w-44 space-x-2 sm:flex-1">
                  <div className="rounded-xl bg-muted p-4">
                    <MdEmail className="size-6 text-secondary-foreground" />
                  </div>
                  <div className="border-border">
                    <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                      {t('email')}:
                    </h3>
                    <Anchor
                      className="text-left text-xs text-primary md:text-sm"
                      href="mailto:casablancaespaniol@gmail.com"
                    >
                      Casablanca@gmail.com
                    </Anchor>
                  </div>
                </li>

                <li className="flex w-44 space-x-2 sm:flex-1">
                  <div className="rounded-xl bg-muted p-4">
                    <MdOutlineMap className="size-6 text-secondary-foreground" />
                  </div>

                  <div className="border-border">
                    <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                      {t('firstContact.customeField')}:
                    </h3>
                    <Anchor
                      className="text-left text-xs text-primary md:text-sm"
                      href="https://www.google.com/maps/place/C.+R%C3%ADo+Mi%C3%B1o,+66,+30740+San+Pedro+del+Pinatar,+Murcia,+Spain/@37.828265,-0.7925334,17z/data=!3m1!4b1!4m6!3m5!1s0xd630fb5690c36d1:0x1b3f1d8d7030922f!8m2!3d37.8282608!4d-0.7899585!16s%2Fg%2F11l5l2j47s?hl=en&entry=ttu"
                    >
                      San Pedro
                    </Anchor>
                  </div>
                </li>
              </ul>

              <p className="mb-2 mt-4 text-center text-xs text-muted-foreground sm:text-sm">
                <strong>{t('firstContact.langPreference')}</strong>
              </p>
            </div>

            <p className="text-center text-xs text-muted-foreground sm:text-sm">
              <strong>
                <span className="text-red-800 dark:text-red-300">
                  {t('important.firstPart')}
                </span>{' '}
                {t('important.secondPart')}
              </strong>
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>{t('secondContact.title')}</AccordionTrigger>
          <AccordionContent>
            <div className="mb-2 text-center text-muted-foreground lg:text-left">
              <ul className="flex flex-col items-center justify-center space-y-6 p-3 sm:flex-row sm:space-x-8 sm:space-y-0">
                <li className="flex w-44 space-x-2 sm:flex-1">
                  <div className="rounded-xl bg-muted p-4">
                    <MdPhone className="size-6 text-secondary-foreground" />
                  </div>

                  <div className="border-border">
                    <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                      {t('phone')}:
                    </h3>
                    <Anchor
                      className="text-primary-600 dark:text-primary-300 text-left text-xs md:text-sm"
                      href="tel:+34659901386"
                    >
                      +34659901386
                    </Anchor>
                  </div>
                </li>

                <li className="flex w-44 space-x-2 sm:flex-1">
                  <div className="rounded-xl bg-muted p-4">
                    <MdEmail className="size-6 text-secondary-foreground" />
                  </div>
                  <div className="border-border">
                    <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                      {t('email')}:
                    </h3>
                    <Anchor
                      className="text-left text-xs text-primary md:text-sm"
                      href="mailto:Info@avsinmo.com"
                    >
                      Info@avsinmo.com
                    </Anchor>
                  </div>
                </li>

                <li className="flex w-44 space-x-2 sm:flex-1">
                  <div className="rounded-xl bg-muted p-4">
                    <MdWeb className="size-6 text-secondary-foreground" />
                  </div>

                  <div className="border-border">
                    <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                      {t('secondContact.customeField')}:
                    </h3>
                    <Anchor
                      className="text-left text-xs text-primary md:text-sm"
                      href="https://www.avsinmo.com/"
                    >
                      Avsinmo.com
                    </Anchor>
                  </div>
                </li>
              </ul>

              <p className="mb-2 mt-4 text-center text-xs text-muted-foreground sm:text-sm">
                <strong>{t('secondContact.langPreference')}</strong>
              </p>
            </div>

            <p className="text-center text-xs text-muted-foreground sm:text-sm">
              <strong>
                <span className="text-red-800 dark:text-red-300">
                  {t('important.firstPart')}
                </span>{' '}
                {t('important.secondPart')}
              </strong>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
