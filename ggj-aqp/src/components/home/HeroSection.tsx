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
                backgroundImage: `url('')`,
            }}
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Imagen izquierda */}
                    <div className="w-full lg:w-2/5 flex justify-center">
                        <img
                            src=""
                            alt="Hero Image"
                            className="
                                w-full
                                max-w-md
                                h-auto
                                animate-float
                            "
                        />
                    </div>

                    {/* Botones centro */}
                    <div className="w-full lg:w-3/5 flex flex-col items-center justify-center gap-6">
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
                                max-w-sm
                            "
                        >
                            Ver el cronograma
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
