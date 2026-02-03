import fondoHero from '../../assets/images/backgrounds/FondoHero.webp';
import img2360 from '../../assets/fotos/IMG_2360.webp';
import img2356 from '../../assets/fotos/IMG_2356.webp';
import img2355 from '../../assets/fotos/IMG_2355.webp';
import img2343 from '../../assets/fotos/IMG_2343.webp';
import img2337 from '../../assets/fotos/IMG_2337.webp';
import img2335 from '../../assets/fotos/IMG_2335.webp';
import img2329 from '../../assets/fotos/IMG_2329.webp';
import img2323 from '../../assets/fotos/IMG_2323.webp';
import img2318 from '../../assets/fotos/IMG_2318.webp';
import img2313 from '../../assets/fotos/IMG_2313.webp';
import img2309 from '../../assets/fotos/IMG_2309.webp';
import img2305 from '../../assets/fotos/IMG_2305.webp';
import img2300 from '../../assets/fotos/IMG_2300.webp';
import img2289 from '../../assets/fotos/IMG_2289.webp';
import img2277 from '../../assets/fotos/IMG_2277.webp';
import img2273 from '../../assets/fotos/IMG_2273.webp';
import img2262 from '../../assets/fotos/IMG_2262.webp';
import img2261 from '../../assets/fotos/IMG_2261.webp';
import img2249 from '../../assets/fotos/IMG_2249.webp';
import img2248 from '../../assets/fotos/IMG_2248.webp';
import img2242 from '../../assets/fotos/IMG_2242.webp';
import img2235 from '../../assets/fotos/IMG_2235.webp';
import img2232 from '../../assets/fotos/IMG_2232.webp';
import img2231 from '../../assets/fotos/IMG_2231.webp';
import img2225 from '../../assets/fotos/IMG_2225.webp';
import img2220 from '../../assets/fotos/IMG_2220.webp';
import img2219 from '../../assets/fotos/IMG_2219.webp';
import img2217 from '../../assets/fotos/IMG_2217.webp';
import img2215 from '../../assets/fotos/IMG_2215.webp';
import img2211 from '../../assets/fotos/IMG_2211.webp';
import img2205 from '../../assets/fotos/IMG_2205.webp';
import img2199 from '../../assets/fotos/IMG_2199.webp';
import img2197 from '../../assets/fotos/IMG_2197.webp';
import img2194 from '../../assets/fotos/IMG_2194.webp';
import img2193 from '../../assets/fotos/IMG_2193.webp';
import img2189 from '../../assets/fotos/IMG_2189.webp';
import img2187 from '../../assets/fotos/IMG_2187.webp';
import img2184 from '../../assets/fotos/IMG_2184.webp';
import img2163 from '../../assets/fotos/IMG_2163.webp';
import img2154 from '../../assets/fotos/IMG_2154.webp';
import img2150 from '../../assets/fotos/IMG_2150.webp';
import img2149 from '../../assets/fotos/IMG_2149.webp';
import img2145 from '../../assets/fotos/IMG_2145.webp';
import img2135 from '../../assets/fotos/IMG_2135.webp';
import img2134 from '../../assets/fotos/IMG_2134.webp';
import img2131 from '../../assets/fotos/IMG_2131.webp';
import img2129 from '../../assets/fotos/IMG_2129.webp';
import img2123 from '../../assets/fotos/IMG_2123.webp';
import img2121 from '../../assets/fotos/IMG_2121.webp';
import img2115 from '../../assets/fotos/IMG_2115.webp';
import img2067 from '../../assets/fotos/IMG_2067.webp';
import img2059 from '../../assets/fotos/IMG_2059.webp';
import img2054 from '../../assets/fotos/IMG_2054.webp';
import img2048 from '../../assets/fotos/IMG_2048.webp';
import img2047 from '../../assets/fotos/IMG_2047.webp';
import img2038 from '../../assets/fotos/IMG_2038.webp';

const GallerySection = () => {
    const galleryImages = [
        img2360, img2356, img2355, img2343, img2337, img2335, img2329, img2323,
        img2318, img2313, img2309, img2305, img2300, img2289, img2277, img2273,
        img2262, img2261, img2249, img2248, img2242, img2235, img2232, img2231,
        img2225, img2220, img2219, img2217, img2215, img2211, img2205, img2199,
        img2197, img2194, img2193, img2189, img2187, img2184, img2163, img2154,
        img2150, img2149, img2145, img2135, img2134, img2131, img2129, img2123,
        img2121, img2115, img2067, img2059, img2054, img2048, img2047, img2038
    ];

    const row1Images = galleryImages.slice(0, Math.ceil(galleryImages.length / 2));
    const row2Images = galleryImages.slice(Math.ceil(galleryImages.length / 2));

    return (
        <>
            <style>
                {`
                    @keyframes scrollLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    
                    @keyframes scrollRight {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                `}
            </style>
            <section className="w-full relative overflow-hidden">
                {/* Fondo con imagen y degradado oscuro */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        background: `linear-gradient(to bottom, rgba(10, 5, 16, 0) 0%, rgba(10, 5, 16, 0.7) 50%, #0a0510 100%), url(${fondoHero})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
                    {/* Textos en la parte superior izquierda/centro */}
                    <div className="mb-12">
                        <h2
                            className="font-bold text-white mb-4"
                            style={{
                                fontSize: '56px',
                                fontFamily: 'Raleway, sans-serif',
                                lineHeight: '1.2'
                            }}
                        >
                            Así fue nuestro evento
                        </h2>
                        <p
                            className="font-bold mb-6"
                            style={{
                                fontSize: '24px',
                                fontFamily: 'Raleway, sans-serif',
                                color: '#42D1D1'
                            }}
                        >
                            ¡Búscate y revive los mejores momentos!
                        </p>
                        <button
                            className="px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
                            style={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '18px',
                                border: '3px solid #F130EE',
                                color: '#F130EE',
                                backgroundColor: 'transparent',
                                boxShadow: '0 0 20px rgba(241, 48, 238, 0.3)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 30px rgba(241, 48, 238, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(241, 48, 238, 0.3)';
                            }}
                        >
                            Ver galería completa
                        </button>
                    </div>
                </div>

                {/* Sección de Galería con Fondo Oscuro */}
                <div className="w-full py-20 relative" style={{ background: '#0F091C' }}>
                    <div className="w-full">
                        {/* Título Galería */}
                        <div className="text-left mb-16 px-6">
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

                        {/* Carrusel Fila 1 - Movimiento a la izquierda */}
                        <div className="relative overflow-hidden mb-8">
                            <div
                                className="flex gap-6 items-center"
                                style={{
                                    animation: 'scrollLeft 120s linear infinite',
                                    width: 'max-content'
                                }}
                            >
                                {[...row1Images, ...row1Images].map((img, index) => (
                                    <div
                                        key={`row1-${index}`}
                                        className="flex-shrink-0 rounded-lg overflow-hidden"
                                        style={{
                                            width: '400px',
                                            height: '300px',
                                            transform: index % 2 === 0 ? 'translateY(-30px)' : 'translateY(30px)'
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Galería ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carrusel Fila 2 - Movimiento a la derecha */}
                        <div className="relative overflow-hidden">
                            <div
                                className="flex gap-6 items-center"
                                style={{
                                    animation: 'scrollRight 120s linear infinite',
                                    width: 'max-content'
                                }}
                            >
                                {[...row2Images, ...row2Images].map((img, index) => (
                                    <div
                                        key={`row2-${index}`}
                                        className="flex-shrink-0 rounded-lg overflow-hidden"
                                        style={{
                                            width: '400px',
                                            height: '300px',
                                            transform: index % 2 === 0 ? 'translateY(30px)' : 'translateY(-30px)'
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`Galería ${index + 1}`}
                                            className="w-full h-full object-cover"
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
