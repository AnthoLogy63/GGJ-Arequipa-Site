import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import asme3 from "@/assets/sponsors/ASME-UNSA-OFICIAL-negro.webp";
import ieee from "@/assets/sponsors/ieee-unsa.webp";
import ingenia  from "@/assets/sponsors/Logo-principal-horizontal-color-Ingenia-UNSA.webp";
import acm_ucsp from "@/assets/sponsors/ucsp_acm_logo_nobg.webp";
import volcano2 from "@/assets/sponsors/Volcano-Game-Lab-2.webp";
import ceis from "@/assets/sponsors/CEIS LOGO.webp";
import mapachio from "@/assets/sponsors/mapachio.webp";
import seventh_beat from "@/assets/sponsors/7thbeatfdn-bg-color.webp";
import ieee_wie from "@/assets/sponsors/ieee_unsa_wie_rgb_stacked_k.webp";
import pgj from "@/assets/sponsors/PGJ - logo-13.webp";


const sponsors = [
  { name: "ASME UNSA", logo: asme3 },
  { name: "IEEE UNSA", logo: ieee },
  { name: "INGENIA", logo: ingenia },
  { name: "ACM UCSP", logo: acm_ucsp},
  { name: "VOLCANO GAME", logo: volcano2},
  { name: "CEIS", logo: ceis},
  { name: "MAPACHIO", logo: mapachio},
  { name: "7TH BEATH FOUNDATION", logo: seventh_beat},
  { name: "IEEE WIE UNSA", logo: ieee_wie},
  { name: "PERU GAME JAM", logo: pgj},
];

const SponsorsSection = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      containScroll: false,
      watchDrag: false,
    },
    [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: true })]
  );

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12091f] via-[#1b1030] to-[#12091f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-center   text-3xl
  sm:text-4xl
  md:text-5xl
  lg:text-7xl font-bold text-white">
          Nuestros <span className="text-[#54F4FC]">sponsors</span>
        </h2>

        <p className="mt-7 text-center lg:text-4xl md:text-3xl text-gray-300 mx-auto">
          Las corporaciones y colectivos que hacen posible esta rebelión creativa.
        </p>
      </div>

      <div className="relative mt-14">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "linear-gradient(90deg, #2E1156 0%, #C6F0FF 33%, #B4F3FFE5 66%, #301458 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-15">
          <div className="flex flex-wrap justify-center gap-12 lg:hidden">
            {sponsors.map((sponsor) => (
              <img
                key={sponsor.name}
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-14 w-auto"
              />
            ))}
          </div>

          <div
            ref={emblaRef}
            className="hidden lg:block relative overflow-hidden 
              [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
            "
          >
            <div className="flex">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div key={index} className="flex-shrink-0 mr-16">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    title={sponsor.name}
                    className="h-20 w-auto duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
