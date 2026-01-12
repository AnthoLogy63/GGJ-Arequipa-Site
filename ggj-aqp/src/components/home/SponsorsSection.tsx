import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import reddit from "@/assets/sponsors/reddit.svg";
import facebook from "@/assets/sponsors/facebook.svg";
import skype from "@/assets/sponsors/skype.svg";
import linkedin from "@/assets/sponsors/linkedin.svg";
import android from "@/assets/sponsors/android.svg";
import youtube from "@/assets/sponsors/youtube.svg";

const sponsors = [
  { name: "Reddit", logo: reddit },
  { name: "Facebook", logo: facebook },
  { name: "Skype", logo: skype },
  { name: "LinkedIn", logo: linkedin },
  { name: "Android", logo: android },
  { name: "YouTube", logo: youtube },
];

const SponsorsSection = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: false
    },
    [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })]
  );

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12091f] via-[#1b1030] to-[#12091f]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-center lg:text-7xl md:text-5xl font-bold text-white">
          Nuestros <span className="text-[#54F4FC]">sponsors</span>
        </h2>

        <p className="mt-7 text-center lg:text-4xl md:text-2xl text-gray-300 mx-auto">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="relative overflow-hidden
  [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
  [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
" ref={emblaRef}>
            <div className="flex">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-15 w-auto brightness-0 duration-200 hover:brightness-100 mr-16"
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
