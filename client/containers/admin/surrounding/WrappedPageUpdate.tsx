'use client';

import SubmitBtn from '@/client/components/SubmitBtn';
import { Input } from '@/client/components/ui/input';
import { Label } from '@/client/components/ui/label';
import { Textarea } from '@/client/components/ui/textarea';
import { SurroundingPlace } from '@/client/types/SurroundingPlace';
import { update } from '@/server/actions/surrounding/update';
import { useState } from 'react';

type WrappedPageUpdateProps = {
  data: SurroundingPlace;
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

export default function WrappedPageUpdate({ data, t }: WrappedPageUpdateProps) {
  const [titleEn, setTitleEn] = useState(data.title.en);
  const [titlePl, setTitlePl] = useState(data.title.pl);
  const [titleEs, setTitleEs] = useState(data.title.es);

  const [subtitleEn, setSubtitleEn] = useState(data.subtitle.en);
  const [subtitlePl, setSubtitlePl] = useState(data.subtitle.pl);
  const [subtitleEs, setSubtitleEs] = useState(data.subtitle.es);

  const [descriptionEn, setDescriptionEn] = useState(data.description.en);
  const [descriptionPl, setDescriptionPl] = useState(data.description.pl);
  const [descriptionEs, setDescriptionEs] = useState(data.description.es);

  const [imageAltTextEn, setImageAltTextEn] = useState(data.imageAltText.en);
  const [imageAltTextPl, setImageAltTextPl] = useState(data.imageAltText.pl);
  const [imageAltTextEs, setImageAltTextEs] = useState(data.imageAltText.es);

  const [distance, setDistance] = useState(data.distance);
  const [routeLink, setRouteLink] = useState(data.routeLink);
  const [lat, setLat] = useState(data.coords.lat);
  const [lng, setLng] = useState(data.coords.lng);

  const formAction = async (formData: FormData) => {
    const id = data.id;

    await update(id, formData);
  };

  return (
    <form
      action={formAction}
      className="mx-auto my-12 grid max-w-screen-xl items-end gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:px-6"
    >
      <fieldset>
        <Label htmlFor="titleEn">{t.title}</Label>
        <Input
          id="titleEn"
          name="titleEn"
          type="text"
          value={titleEn}
          onChange={e => setTitleEn(e.target.value)}
          minLength={5}
          maxLength={30}
          placeholder={t.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="titlePl">{t.title}</Label>
        <Input
          id="titlePl"
          name="titlePl"
          type="text"
          value={titlePl}
          onChange={e => setTitlePl(e.target.value)}
          minLength={5}
          maxLength={30}
          placeholder={t.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="titleEs">{t.title}</Label>
        <Input
          id="titleEs"
          name="titleEs"
          type="text"
          value={titleEs}
          onChange={e => setTitleEs(e.target.value)}
          minLength={5}
          maxLength={30}
          placeholder={t.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitleEn">{t.subtitle}</Label>
        <Textarea
          id="subtitleEn"
          name="subtitleEn"
          value={subtitleEn}
          onChange={e => setSubtitleEn(e.target.value)}
          minLength={20}
          maxLength={80}
          placeholder={t.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitlePl">{t.subtitle}</Label>
        <Textarea
          id="subtitlePl"
          name="subtitlePl"
          minLength={20}
          maxLength={80}
          value={subtitlePl}
          onChange={e => setSubtitlePl(e.target.value)}
          placeholder={t.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitleEs">{t.subtitle}</Label>
        <Textarea
          id="subtitleEs"
          name="subtitleEs"
          value={subtitleEs}
          onChange={e => setSubtitleEs(e.target.value)}
          minLength={20}
          maxLength={80}
          placeholder={t.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionEn">{t.description}</Label>
        <Textarea
          id="descriptionEn"
          name="descriptionEn"
          value={descriptionEn}
          onChange={e => setDescriptionEn(e.target.value)}
          placeholder={t.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionPl">{t.description}</Label>
        <Textarea
          id="descriptionPl"
          name="descriptionPl"
          value={descriptionPl}
          onChange={e => setDescriptionPl(e.target.value)}
          placeholder={t.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionEs">{t.description}</Label>
        <Textarea
          id="descriptionEs"
          name="descriptionEs"
          value={descriptionEs}
          onChange={e => setDescriptionEs(e.target.value)}
          placeholder={t.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextEn">{t.imageAltText}</Label>
        <Textarea
          id="imageAltTextEn"
          name="imageAltTextEn"
          maxLength={100}
          value={imageAltTextEn}
          onChange={e => setImageAltTextEn(e.target.value)}
          placeholder={t.imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextPl">{t.imageAltText}</Label>
        <Textarea
          id="imageAltTextPl"
          name="imageAltTextPl"
          maxLength={100}
          value={imageAltTextPl}
          onChange={e => setImageAltTextPl(e.target.value)}
          placeholder={t.imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextEs">{t.imageAltText}</Label>
        <Textarea
          id="imageAltTextEs"
          name="imageAltTextEs"
          maxLength={100}
          value={imageAltTextEs}
          onChange={e => setImageAltTextEs(e.target.value)}
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
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="distance">{t.distance}</Label>
        <Input
          id="distance"
          name="distance"
          type="text"
          value={`${distance}`}
          onChange={e => setDistance(+e.target.value)}
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
          value={routeLink}
          onChange={e => setRouteLink(e.target.value)}
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
          value={`${lat}`}
          onChange={e => setLat(+e.target.value)}
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
          value={`${lng}`}
          onChange={e => setLng(+e.target.value)}
          placeholder={t.coords.lng}
          required
        />
      </fieldset>

      <SubmitBtn />
    </form>
  );
}
