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
import { format } from 'date-fns';
import { useLocale } from 'next-intl';
import { enUS, es, pl } from 'date-fns/locale';

const chartConfig: ChartConfig = {
  price: {
    label: 'Price',
    color: '#2563eb',
  },
};

export default function ContactsChart() {
  const localeActive = useLocale();
  const lang = localeActive === 'en' ? enUS : localeActive === 'pl' ? pl : es;

  const chartData = [
    { month: format(new Date(2024, 0), 'MMM', { locale: lang }), price: 150 },
    { month: format(new Date(2024, 1), 'MMM', { locale: lang }), price: 150 },
    { month: format(new Date(2024, 2), 'MMM', { locale: lang }), price: 150 },
    { month: format(new Date(2024, 3), 'MMM', { locale: lang }), price: 170 },
    { month: format(new Date(2024, 4), 'MMM', { locale: lang }), price: 170 },
    { month: format(new Date(2024, 5), 'MMM', { locale: lang }), price: 200 },
    { month: format(new Date(2024, 6), 'MMM', { locale: lang }), price: 250 },
    { month: format(new Date(2024, 7), 'MMM', { locale: lang }), price: 280 },
    { month: format(new Date(2024, 8), 'MMM', { locale: lang }), price: 200 },
    { month: format(new Date(2024, 9), 'MMM', { locale: lang }), price: 170 },
    { month: format(new Date(2024, 10), 'MMM', { locale: lang }), price: 150 },
    { month: format(new Date(2024, 11), 'MMM', { locale: lang }), price: 150 },
  ];

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
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
