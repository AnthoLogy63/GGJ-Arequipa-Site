import { useMemo } from 'react';
import fondoHero from '../../assets/images/backgrounds/FondoHero.webp';
import img2047 from '../../assets/fotos/IMG_2047_1_11zon.webp';
import img2054 from '../../assets/fotos/IMG_2054_2_11zon.webp';
import img2121 from '../../assets/fotos/IMG_2121_3_11zon.webp';
import img2123 from '../../assets/fotos/IMG_2123_4_11zon.webp';
import img2135 from '../../assets/fotos/IMG_2135_18_11zon_5_11zon.webp';
import img2184 from '../../assets/fotos/IMG_2184_6_11zon.webp';
import img2187 from '../../assets/fotos/IMG_2187_7_11zon.webp';
import img2193 from '../../assets/fotos/IMG_2193_8_11zon.webp';
import img2197 from '../../assets/fotos/IMG_2197_9_11zon.webp';
import img2211 from '../../assets/fotos/IMG_2211_10_11zon.webp';
import img2219 from '../../assets/fotos/IMG_2219_11_11zon.webp';
import img2235 from '../../assets/fotos/IMG_2235_12_11zon.webp';
import img2249 from '../../assets/fotos/IMG_2249_13_11zon.webp';
import img2262 from '../../assets/fotos/IMG_2262_14_11zon.webp';
import img2300 from '../../assets/fotos/IMG_2300_15_11zon.webp';
import img2305 from '../../assets/fotos/IMG_2305_16_11zon.webp';
import img2318 from '../../assets/fotos/IMG_2318_17_11zon.webp';
import img2323 from '../../assets/fotos/IMG_2323_3_11zon_18_11zon.webp';
import img2329 from '../../assets/fotos/IMG_2329_24_11zon.webp';
import img2335 from '../../assets/fotos/IMG_2335_19_11zon.webp';
import img2337 from '../../assets/fotos/IMG_2337_20_11zon.webp';
import img2343 from '../../assets/fotos/IMG_2343_21_11zon.webp';
import img2355 from '../../assets/fotos/IMG_2355_8_11zon_22_11zon.webp';
import img2356 from '../../assets/fotos/IMG_2356_23_11zon.webp';

const GallerySection = () => {
    const galleryImages = useMemo(() => [
        img2047, img2054, img2121, img2123, img2135, img2184, img2187, img2193,
        img2197, img2211, img2219, img2235, img2249, img2262, img2300, img2305,
        img2318, img2323, img2329, img2335, img2337, img2343, img2355, img2356
    ], []);

    const { row1Images, row2Images } = useMemo(() => ({
        row1Images: galleryImages.slice(0, Math.ceil(galleryImages.length / 2)),
        row2Images: galleryImages.slice(Math.ceil(galleryImages.length / 2))
    }), [galleryImages]);

    return (
        <>
            <style>
                {`
                    @keyframes scrollLeft {
                        0% { transform: translate3d(0, 0, 0); }
                        100% { transform: translate3d(-50%, 0, 0); }
                    }
                    
                    @keyframes scrollRight {
                        0% { transform: translate3d(-50%, 0, 0); }
                        100% { transform: translate3d(0, 0, 0); }
                    }

                    .gallery-carousel {
                        will-change: transform;
                        contain: layout style paint;
                    }

                    .gallery-image-wrapper {
                        contain: layout style paint;
                    }
                `}
            </style>
            <section className="w-full relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `linear-gradient(to bottom, rgba(10, 5, 16, 0) 0%, rgba(10, 5, 16, 0.7) 50%, #0a0510 100%), url(${fondoHero})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                <div className="w-full py-20 relative" style={{ background: '#0F091C' }}>
                    <div className="w-full">
                        <div className="text-left mb-16 max-w-7xl mx-auto px-6">
                            <h3
                                style={{
                                    fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                    fontSize: '96px',
                                    color: '#1DF2F2',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    lineHeight: '1',
                                    marginBottom: '8px'
                                }}
                            >
                                Revive
                            </h3>
                            <h3
                                style={{
                                    fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                    fontSize: '40px',
                                    color: '#985DCA',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    lineHeight: '1'
                                }}
                            >
                                la experiencia
                            </h3>
                        </div>

                        {/* Carrusel Fila 1 */}
                        <div className="relative overflow-hidden mb-8">
                            <div
                                className="flex gap-6 items-center gallery-carousel"
                                style={{
                                    animation: 'scrollLeft 200s linear infinite',
                                    width: 'max-content'
                                }}
                            >
                                {/* Triplicamos para bucle suave sin saltos */}
                                {[...row1Images, ...row1Images, ...row1Images].map((img, index) => (
                                    <div
                                        key={`row1-${index}`}
                                        className="flex-shrink-0 rounded-lg overflow-hidden gallery-image-wrapper"
                                        style={{
                                            width: '400px',
                                            height: '300px',
                                            transform: index % 2 === 0 ? 'translate3d(0, -30px, 0)' : 'translate3d(0, 30px, 0)'
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Galería ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carrusel Fila 2 */}
                        <div className="relative overflow-hidden">
                            <div
                                className="flex gap-6 items-center gallery-carousel"
                                style={{
                                    animation: 'scrollRight 200s linear infinite',
                                    width: 'max-content'
                                }}
                            >
                                {/* Triplicamos para bucle suave sin saltos */}
                                {[...row2Images, ...row2Images, ...row2Images].map((img, index) => (
                                    <div
                                        key={`row2-${index}`}
                                        className="flex-shrink-0 rounded-lg overflow-hidden gallery-image-wrapper"
                                        style={{
                                            width: '400px',
                                            height: '300px',
                                            transform: index % 2 === 0 ? 'translate3d(0, 30px, 0)' : 'translate3d(0, -30px, 0)'
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Galería ${index + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GallerySection;
