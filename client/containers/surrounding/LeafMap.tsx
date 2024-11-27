'use client';

import { ICON_COORDS, ICON_SIZE } from '@/client/utils';
import '@/node_modules/leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import { Button } from '@/client/components/ui/button';
import houseMarker from '@/public/icons/home.webp';
import placeMarker from '@/public/icons/place.webp';
import { useState } from 'react';

type LeafMapProps = {
  coords: [number, number];
  houseText: string;
  title: string;
  enable: string;
  disable: string;
};

function ToggleDragging({ isActive }: { isActive: boolean }) {
  const map = useMap();
  map.dragging[isActive ? 'enable' : 'disable']();
  map.scrollWheelZoom[isActive ? 'enable' : 'disable']();
  return null;
}

export default function LeafMap({
  coords,
  houseText,
  title,
  enable,
  disable,
}: LeafMapProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <MapContainer
      className="relative h-[85vh] w-full"
      dragging={isActive}
      scrollWheelZoom={isActive}
      zoom={14}
      center={ICON_COORDS}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      <Button
        className="absolute right-5 top-5 z-[999]"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? disable : enable}
      </Button>

      <ToggleDragging isActive={isActive} />

      <Marker
        position={ICON_COORDS}
        icon={
          new Icon({
            iconUrl: houseMarker.src,
            iconSize: ICON_SIZE,
          })
        }
      >
        <Popup closeOnClick={false} closeOnEscapeKey={false}>
          {houseText}
        </Popup>
      </Marker>

      <Marker
        position={coords}
        icon={
          new Icon({
            iconUrl: placeMarker.src,
            iconSize: ICON_SIZE,
          })
        }
      >
        <Popup closeOnClick={false} closeOnEscapeKey={false}>
          {title}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
