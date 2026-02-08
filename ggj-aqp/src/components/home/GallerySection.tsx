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

const GallerySection = () => {
    // Solo 6 imágenes optimizadas para el carrusel infinito
    const galleryImages = [
        img2360, img2356, img2355, img2343, img2337, img2335
    ];

    const row1Images = [galleryImages[0], galleryImages[1], galleryImages[2]];
    const row2Images = [galleryImages[3], galleryImages[4], galleryImages[5]];

    return (
        <>
            <style>
                {`
                    @keyframes scrollLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.333%); }
                    }
                    
                    @keyframes scrollRight {
                        0% { transform: translateX(-33.333%); }
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
                                    animation: 'scrollLeft 30s linear infinite',
                                    width: 'max-content',
                                    willChange: 'transform'
                                }}
                            >
                                {/* Triplicamos para bucle suave sin saltos */}
                                {[...row1Images, ...row1Images, ...row1Images].map((img, index) => (
                                    <div
                                        key={`row1-${index}`}
                                        className="flex-shrink-0 rounded-lg overflow-hidden"
                                        style={{
                                            width: '350px',
                                            height: '250px',
                                            transform: index % 2 === 0 ? 'translateY(-20px)' : 'translateY(20px)'
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

                        {/* Carrusel Fila 2 - Movimiento a la derecha */}
                        <div className="relative overflow-hidden">
                            <div
                                className="flex gap-6 items-center"
                                style={{
                                    animation: 'scrollRight 30s linear infinite',
                                    width: 'max-content',
                                    willChange: 'transform'
                                }}
                            >
                                {/* Triplicamos para bucle suave sin saltos */}
                                {[...row2Images, ...row2Images, ...row2Images].map((img, index) => (
                                    <div
                                        key={`row2-${index}`}
                                        className="flex-shrink-0 rounded-lg overflow-hidden"
                                        style={{
                                            width: '350px',
                                            height: '250px',
                                            transform: index % 2 === 0 ? 'translateY(20px)' : 'translateY(-20px)'
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
