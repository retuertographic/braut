"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { ASSET, CONTACT } from "./data";

type Props = { className?: string; zoom?: number };

export function OsmMap({ className = "bx-map", zoom = 16 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let map: import("leaflet").Map | undefined;

    import("leaflet").then((L) => {
      if (disposed || !ref.current) return;
      map = L.map(ref.current, {
        center: [CONTACT.lat, CONTACT.lng],
        zoom,
        scrollWheelZoom: true,
        dragging: true,
        zoomControl: true,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      const icon = L.icon({
        iconUrl: `${ASSET}/sin-titulo-11-1-1.png`,
        iconSize: [50, 50],
        iconAnchor: [30, 65],
        popupAnchor: [-5, -60],
      });
      L.marker([CONTACT.lat, CONTACT.lng], { icon })
        .addTo(map)
        .bindPopup(
          `Braut Asesores <br>Dirección: ${CONTACT.address} <br>Teléfonos: +34 626 744 820 (Whatsapp) <br>Lunes a Viernes 9:30–15:00`,
        );
    });

    return () => {
      disposed = true;
      map?.remove();
    };
  }, [zoom]);

  return <div ref={ref} className={className} />;
}
