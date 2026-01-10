import fondo from "../../assets/images/backgrounds/Fondo1.webp";
import logo from "../../assets/logos/AQP-GGJ_logo.svg";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="
                w-full
                py-10 sm:py-10 md:py-60
                px-6
                bg-cover
                bg-center
                bg-no-repeat
                relative
            "
            style={{
                backgroundImage: `url(${fondo})`,

            }}
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/63 backdrop-blur-md"></div>


            {/* Contenido */}
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 ml-6">
                    
                    {/* Izquierda */}
                    <div className="w-full lg:w-3/5 text-white">
                        <h2 className="text-3xl md:text-6xl font-bold pr-20">
                            ¿Qué es la Global Game Jam?
                        </h2>

                        <p
                            className="
                                text-lg md:text-2xl font-semibold
                                text-[#1DF2F2]
                                mt-3 mb-16
                                drop-shadow-[2px_0_6px_#1DF2F2]
                                drop-shadow-[-px_0_6px_#1DF2F2]
                                drop-shadow-[0_0_10px_#1DF2F2]
                            "
                            >
                                48 horas de creatividad pura en el corazón de Arequipa
                        </p>

                        {/* Descripción */}
                        <p className="text-base md:text-xl leading-relaxed text-white/90 mr-10">
                            La <a className="font-bold"> Global Game Jam </a> es el evento de desarrollo de videojuegos más grande del mundo.
                            Durante un fin de semana, equipos multidisciplinarios crean videojuegos desde cero
                            basándose en un tema sorpresa.
                            <br /><br />
                            Es tu oportunidad de aprender, conectar con la comunidad local y llevar tus ideas
                            al siguiente nivel.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <button
                                className="
                                    px-8 py-2
                                    text-base md:text-lg font-semibold
                                    text-[#A3FFFE]
                                    border-2
                                    border-[#29F7F5]
                                    rounded-xl
                                    transition-all
                                    duration-300
                                    cursor-pointer
                                    select-none
                                    hover:text-black
                                    hover:bg-[#29F7F5]
                                    hover:shadow-[0_0_18px_#29F7F5]
                                    hover:scale-105
                                "
                                >
                            Tema sorpresa
                            </button>

                            <button
                                className="
                                    px-8 py-2
                                    text-base md:text-lg font-semibold
                                    text-[#FFA1FE]
                                    border-2
                                    border-[#F130EE]
                                    rounded-xl
                                    transition-all
                                    duration-300
                                    cursor-pointer
                                    select-none
                                    hover:text-black
                                    hover:bg-[#F130EE]
                                    hover:shadow-[0_0_18px_#F130EE]
                                    hover:scale-105
                                "
                                >
                                Ediciones pasadas
                                </button>

                        </div>
                    </div>

                    {/* Derecha*/}
                    <div className="w-full lg:w-2/5 flex justify-center relative pt-8 lg:pt-0">
                        <div className="-translate-y-6 relative">
                            <span className="tri small t1" style={{backgroundColor:"#1DF2F2"}}></span>
                            <span className="tri tall t2" style={{backgroundColor:"#D11CE4"}}></span>
                            <span className="tri wide t3" style={{backgroundColor:"#6E2880"}}></span>
                            <span className="tri medium t4" style={{backgroundColor:"#1DF2F2"}}></span>
                            <span className="tri tall t5" style={{backgroundColor:"#D11CE4"}}></span>
                            <span className="tri small t6" style={{backgroundColor:"#6E2880"}}></span>
                            <span className="tri medium t7" style={{backgroundColor:"#1DF2F2"}}></span>
                            <span className="tri wide t8" style={{backgroundColor:"#D11CE4"}}></span>

                            <img
                            src={logo}
                            alt="Global Game Jam Arequipa Logo"
                            className="
                                w-[420px]
                                sm:w-[480px]
                                md:w-[540px]
                                lg:w-[600px]
                                xl:w-[680px]
                                2xl:w-[740px]
                                max-w-full
                                h-auto
                                animate-float
                                relative
                                z-10
                            "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
