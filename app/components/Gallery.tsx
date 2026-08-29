import Image from "next/image";
import { SectionIntro } from "./Section";
import { galleryBaseUrl } from "../site-config";

const tiles = [
  { label: "Omakase Table", file: "omakase-table.jpg" },
  { label: "Nigiri Station", file: "nigiri-station.jpg" },
  { label: "Celebration Platter", file: "celebration-platter.jpg" },
  { label: "Corporate Catering", file: "corporate-catering.jpg" },
  { label: "Private Dinner", file: "private-dinner.jpg" },
  { label: "Wedding Reception", file: "wedding-reception.jpg" },
];

export default function Gallery() {
  return (
    <div id="gallery" style={{ scrollMarginTop: 84, maxWidth: 1220, margin: "0 auto", padding: "clamp(56px,8vw,104px) clamp(24px,5vw,64px)" }}>
      <SectionIntro eyebrow="From Our Tables" heading="A glimpse of the table" />
      <div className="gallery-grid">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="gallery-tile"
            style={{ aspectRatio: "4/5", position: "relative", overflow: "hidden" }}
          >
            <Image
              src={`${galleryBaseUrl}/${tile.file}`}
              alt={tile.label}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 720px) 50vw, (max-width: 1220px) 33vw, 400px"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 55%)",
              }}
            />
            <div style={{ position: "absolute", left: 18, bottom: 16, fontSize: "0.8rem", letterSpacing: "0.04em", color: "var(--paper)" }}>
              {tile.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
