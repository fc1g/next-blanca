'use client';

import { ICON_COORDS, ICON_SIZE } from '@/client/utils';
import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import houseMarker from '@/public/icons/home.webp';
import placeMarker from '@/public/icons/place.webp';

type LeafMapProps = {
  coords: [number, number];
  houseText: string;
  title: string;
};

export default function LeafMap({ coords, houseText, title }: LeafMapProps) {
  return (
    <MapContainer zoom={14} center={ICON_COORDS}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

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
