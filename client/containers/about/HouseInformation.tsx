import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/client/components/ui/tabs';
import { useTranslations } from 'next-intl';

export default function HouseInformation() {
  const t = useTranslations('about.information');

  const tabsContent = [
    {
      value: 'house',
      text: [t('house.text.firstPart'), t('house.text.secondPart')],
    },
    {
      value: 'surrounding',
      text: [t('surrounding.text.firstPart'), t('surrounding.text.secondPart')],
    },
    {
      value: 'rentInfo',
      text: [t('rentInfo.text.firstPart'), t('rentInfo.text.secondPart')],
    },
    {
      value: 'transfer',
      text: [t('transfer.text.firstPart'), t('transfer.text.secondPart')],
    },
  ];

  return (
    <section className="flex items-center justify-center py-8 lg:py-16">
      <Tabs defaultValue="house" className="text-center">
        <TabsList className="mb-4">
          {tabsContent.map(({ value }) => (
            <TabsTrigger
              key={value}
              className="text-xs md:text-sm"
              value={value}
            >
              {t(`${value}.title`)}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsContent.map(({ value, text }) => (
          <TabsContent
            key={value}
            className="rounded bg-primary-foreground p-2 text-xs md:p-4 md:text-base"
            value={value}
          >
            {text.map((part, i) => (
              <p key={i} className="mt-4 max-w-4xl">
                {part}
              </p>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
