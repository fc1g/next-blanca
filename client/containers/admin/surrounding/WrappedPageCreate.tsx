'use client';

import SubmitBtn from '@/client/components/SubmitBtn';
import { Input } from '@/client/components/ui/input';
import { Label } from '@/client/components/ui/label';
import { Textarea } from '@/client/components/ui/textarea';
import { ToastAction } from '@/client/components/ui/toast';
import { useToast } from '@/client/hooks/use-toast';
import { FORM_TOAST_DURATION } from '@/client/utils';
import { create } from '@/server/actions/surrounding/create';
import { useRouter } from '@/server/libs/i18n/routing';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

type WrappedPageCreateProps = {
  t: {
    title: string;
    subtitle: string;
    description: string;
    imageAltText: string;
    image: string;
    routeLink: string;
    distance: string;
    coords: {
      lat: string;
      lng: string;
    };
  };
};

export default function WrappedPageCreate({ t }: WrappedPageCreateProps) {
  const [error, formAction] = useFormState(create, {
    message: '',
    details: '',
  });
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!error.details || !error.message) return;

    toast({
      title: error.message,
      description: error.details,
      variant: error.message === 'Success' ? 'default' : 'destructive',
      duration: FORM_TOAST_DURATION,
      action:
        error.message === 'Success' ? (
          <ToastAction
            onClick={() => router.back()}
            altText="Return to contacts page"
          >
            Return
          </ToastAction>
        ) : undefined,
    });
  }, [toast, error, router]);

  return (
    <form
      action={formAction}
      className="mx-auto my-12 grid max-w-screen-xl items-end gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:px-6"
    >
      <fieldset>
        <Label htmlFor="titleEn">{t.title}En</Label>
        <Input
          id="titleEn"
          name="titleEn"
          type="text"
          minLength={5}
          maxLength={30}
          placeholder={t.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="titlePl">{t.title}Pl</Label>
        <Input
          id="titlePl"
          name="titlePl"
          type="text"
          minLength={5}
          maxLength={30}
          placeholder={t.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="titleEs">{t.title}Es</Label>
        <Input
          id="titleEs"
          name="titleEs"
          type="text"
          minLength={5}
          maxLength={30}
          placeholder={t.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitleEn">{t.subtitle}En</Label>
        <Textarea
          id="subtitleEn"
          name="subtitleEn"
          minLength={20}
          maxLength={80}
          placeholder={t.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitlePl">{t.subtitle}Pl</Label>
        <Textarea
          id="subtitlePl"
          name="subtitlePl"
          minLength={20}
          maxLength={80}
          placeholder={t.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitleEs">{t.subtitle}Es</Label>
        <Textarea
          id="subtitleEs"
          name="subtitleEs"
          minLength={20}
          maxLength={80}
          placeholder={t.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionEn">{t.description}En</Label>
        <Textarea
          id="descriptionEn"
          name="descriptionEn"
          placeholder={t.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionPl">{t.description}Pl</Label>
        <Textarea
          id="descriptionPl"
          name="descriptionPl"
          placeholder={t.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionEs">{t.description}Es</Label>
        <Textarea
          id="descriptionEs"
          name="descriptionEs"
          placeholder={t.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextEn">{t.imageAltText}En</Label>
        <Textarea
          id="imageAltTextEn"
          name="imageAltTextEn"
          minLength={20}
          maxLength={100}
          placeholder={t.imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextPl">{t.imageAltText}Pl</Label>
        <Textarea
          id="imageAltTextPl"
          name="imageAltTextPl"
          minLength={20}
          maxLength={100}
          placeholder={t.imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextEs">{t.imageAltText}Es</Label>
        <Textarea
          id="imageAltTextEs"
          name="imageAltTextEs"
          minLength={20}
          maxLength={100}
          placeholder={t.imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="image">{t.image}</Label>
        <Input
          id="image"
          name="image"
          type="file"
          accept=".webp"
          placeholder={t.image}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="distance">{t.distance}</Label>
        <Input
          id="distance"
          name="distance"
          type="text"
          placeholder={t.distance}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="routeLink">{t.routeLink}</Label>
        <Input
          id="routeLink"
          name="routeLink"
          type="url"
          placeholder={t.routeLink}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="lat">{t.coords.lat}</Label>
        <Input
          id="lat"
          name="lat"
          type="text"
          placeholder={t.coords.lat}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="lng">{t.coords.lng}</Label>
        <Input
          id="lng"
          name="lng"
          type="text"
          placeholder={t.coords.lng}
          required
        />
      </fieldset>

      <SubmitBtn />
    </form>
  );
}
