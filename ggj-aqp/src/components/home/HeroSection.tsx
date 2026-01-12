import fondoHero from "../../assets/images/backgrounds/FondoHero.png";
import imagenLateral from "../../assets/logos/AQP-GGJ_logo-h.svg";

const HeroSection = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            className="
                w-full
                min-h-screen
                px-6
                bg-cover
                bg-center
                bg-no-repeat
                relative
                flex
                items-center
                justify-center
            "
            style={{
                backgroundImage: `url(${fondoHero})`,
            }}
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto w-full h-full flex flex-col justify-between py-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
                    
                    {/* Imagen izquierda */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img
                            src={imagenLateral}
                            alt="Hero Image"
                            className="
                                w-full
                                max-w-4xl
                                lg:max-w-3xl
                                h-auto
                                animate-float
                            "
                        />
                    </div>

                    {/* Espacio vacío a la derecha */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        {/* Efecto de lava morada/blanca - núcleo */}
                        <div 
                            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-50"
                            style={{
                                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(241, 48, 238, 0.6) 20%, rgba(209, 28, 228, 0.4) 50%, transparent 70%)',
                                boxShadow: '0 0 80px rgba(241, 48, 238, 0.5), 0 0 150px rgba(209, 28, 228, 0.3)',
                                animation: 'pulse 2s ease-in-out infinite',
                            }}
                        ></div>
                        <div 
                            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl opacity-60"
                            style={{
                                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(241, 48, 238, 0.7) 40%, transparent 70%)',
                                animation: 'pulse 2.5s ease-in-out infinite reverse',
                            }}
                        ></div>
                        
                        {/* Flujos de lava cayendo */}
                        <div 
                            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-96 blur-xl opacity-40"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 0%, rgba(241, 48, 238, 0.5) 20%, rgba(209, 28, 228, 0.4) 40%, rgba(209, 28, 228, 0.2) 60%, transparent 100%)',
                                animation: 'lavaDrip 3s ease-in-out infinite',
                            }}
                        ></div>
                        <div 
                            className="absolute top-1/3 left-1/3 w-20 h-80 blur-lg opacity-30"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(241, 48, 238, 0.5) 0%, rgba(209, 28, 228, 0.3) 30%, transparent 70%)',
                                animation: 'lavaDrip 3.5s ease-in-out infinite 0.5s',
                            }}
                        ></div>
                        <div 
                            className="absolute top-1/3 left-2/3 w-24 h-72 blur-lg opacity-35"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(241, 48, 238, 0.4) 25%, rgba(209, 28, 228, 0.3) 50%, transparent 80%)',
                                animation: 'lavaDrip 4s ease-in-out infinite 1s',
                            }}
                        ></div>
                    </div>
                </div>

                {/* Botones abajo - uno al lado del otro */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-8">
                    <button
                        onClick={() => window.location.href = '/inscripcion'}
                        className="
                            px-10 py-4
                            text-xl font-bold
                            text-black
                            bg-[#1DF2F2]
                            rounded-xl
                            transition-all
                            duration-300
                            cursor-pointer
                            select-none
                            hover:shadow-[0_0_25px_#1DF2F2]
                            hover:scale-105
                            w-full
                            sm:w-auto
                            max-w-sm
                        "
                    >
                        Regístrate
                    </button>

                    <button
                        onClick={() => scrollToSection('schedule')}
                        className="
                            px-10 py-4
                            text-xl font-bold
                            text-[#FFA1FE]
                            bg-transparent
                            border-2
                            border-[#F130EE]
                            rounded-xl
                            transition-all
                            duration-300
                            cursor-pointer
                            select-none
                            hover:bg-[#F130EE]
                            hover:text-black
                            hover:shadow-[0_0_25px_#F130EE]
                            hover:scale-105
                            w-full
                            sm:w-auto
                            max-w-sm
                        "
                    >
                        Ver el cronograma
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

