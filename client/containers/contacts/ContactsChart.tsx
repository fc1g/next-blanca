'use client';

import { Bar, BarChart, CartesianGrid, LabelList } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/client/components/ui/chart';
import { getPrice } from '@/client/services/getPrice';
import { format } from 'date-fns';
import { enUS, es, pl } from 'date-fns/locale';
import { useLocale } from 'next-intl';
import { useMemo } from 'react';

const chartConfig: ChartConfig = {
  price: {
    label: 'Price',
    color: '#2563eb',
  },
};

type ChartData = {
  month: string;
  price: number;
};

export default function ContactsChart() {
  const localeActive = useLocale();
  const lang = localeActive === 'en' ? enUS : localeActive === 'pl' ? pl : es;

  const chartData: ChartData[] = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      month: format(new Date(2024, i), 'MMM', { locale: lang }),
      price: getPrice(i),
    }));
  }, [lang]);

  return (
    <ChartContainer config={chartConfig} className="min-h-11 w-full">
      <BarChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend className="mt-4" content={<ChartLegendContent />} />
        <Bar dataKey="price" fill="var(--color-price)" radius={4}>
          <LabelList dataKey="month" position="bottom" />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
