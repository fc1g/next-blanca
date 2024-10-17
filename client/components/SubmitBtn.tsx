'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const t = useTranslations('admin.form');

  return (
    <Button variant="default" size="lg" disabled={pending}>
      {pending ? t('submitting') : t('submit')}
    </Button>
  );
}
