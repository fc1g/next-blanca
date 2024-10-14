'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button variant="default" size="lg" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}
