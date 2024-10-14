import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/client/components/ui/tabs';
import { useTranslations } from 'next-intl';

export default function HouseInformation() {
  const t = useTranslations('about.information');

  return (
    <section className="flex items-center justify-center py-8 lg:py-16">
      <Tabs defaultValue="house" className="text-center">
        <TabsList className="mb-4">
          <TabsTrigger className="text-xs md:text-sm" value="house">
            {t('house.title')}
          </TabsTrigger>
          <TabsTrigger className="text-xs md:text-sm" value="surrounding">
            {t('surrounding.title')}
          </TabsTrigger>
          <TabsTrigger className="text-xs md:text-sm" value="rentailInfo">
            {t('rentInfo.title')}
          </TabsTrigger>
          <TabsTrigger className="text-xs md:text-sm" value="transfer">
            {t('transfer.title')}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="rounded bg-primary-foreground p-2 text-xs md:p-4 md:text-base"
          value="house"
        >
          <p className="block max-w-4xl">{t('house.text.firstPart')}</p>

          <p className="mt-4 block max-w-4xl">{t('house.text.secondPart')}</p>
        </TabsContent>
        <TabsContent
          className="rounded bg-primary-foreground p-2 text-xs md:p-4 md:text-base"
          value="surrounding"
        >
          <p className="block max-w-4xl">{t('surrounding.text.firstPart')}</p>

          <p className="mt-4 block max-w-4xl">
            {t('surrounding.text.secondPart')}
          </p>
        </TabsContent>
        <TabsContent
          className="rounded bg-primary-foreground p-2 text-xs md:p-4 md:text-base"
          value="rentailInfo"
        >
          <p className="block max-w-4xl">{t('rentInfo.text.firstPart')}</p>

          <p className="mt-4 block max-w-4xl">
            {t('rentInfo.text.secondPart')}
          </p>
        </TabsContent>
        <TabsContent
          className="rounded bg-primary-foreground p-2 text-xs md:p-4 md:text-base"
          value="transfer"
        >
          <p className="block max-w-4xl">{t('transfer.text.firstPart')}</p>

          <p className="mt-4 block max-w-4xl">
            {t('transfer.text.secondPart')}
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
}
