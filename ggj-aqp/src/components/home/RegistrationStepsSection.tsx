import React from "react";

const RegistrationStepsSection = () => {
    return (
        <section id="registration" className="relative w-full py-40 px-6 overflow-hidden bg-[#110A1C] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold mb-2">
                        Tu ruta hacia la
                    </h2>
                    <h2 className="text-3xl md:text-6xl font-bold text-[#1DF2F2]">
                        Arequipa Game Jam.
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-8 relative z-10">

                   <div className="absolute -top-24 -right-30 md:-top-80 md:-right-60 pointer-events-none select-none opacity-50 z-0">
                        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[250px] h-[150px] md:w-[550px] md:h-[300px]">
                            <path d="M95 20 L65 50 L95 80" stroke="#251C35" strokeWidth="12" strokeLinecap="square" />
                            <path d="M60 20 L30 50 L60 80" stroke="#251C35" strokeWidth="12" strokeLinecap="square" transform="translate(0)" />
                            <path d="M25 20 L-5 50 L25 80" stroke="#251C35" strokeWidth="12" strokeLinecap="square" transform="translate(0)" />
                        </svg>
                    </div>

                    <div className="absolute -bottom-0 -left-30 md:-bottom-50 md:-left-70 pointer-events-none select-none opacity-50 z-0">
                        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[150px] h-[150px] md:w-[300px] md:h-[550px]">
                            <path d="M15 60 L50 90 L85 60" stroke="#251C35" strokeWidth="12" strokeLinecap="square" />
                            <path d="M15 30 L50 60 L85 30" stroke="#251C35" strokeWidth="12" strokeLinecap="square" transform="translate(0)" />
                            <path d="M15 0 L50 30 L85 0" stroke="#251C35" strokeWidth="12" strokeLinecap="square" transform="translate(0)" />
                        </svg>
                    </div>





                    <div className="hidden lg:block absolute top-[40px] left-[23%]">
                        <svg
                            width="260"
                            height="24"
                            viewBox="0 0 260 24"
                            fill="none"
                            stroke="#9CA3AF"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="0" y1="12" x2="240" y2="12" />
                            <polyline points="224 3 240 12 224 21" />
                        </svg>
                    </div>

                    <div className="hidden lg:block absolute top-[40px] right-[22%]">
                        <svg
                            width="260"
                            height="24"
                            viewBox="0 0 260 24"
                            fill="none"
                            stroke="#9CA3AF"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="0" y1="12" x2="240" y2="12" />
                            <polyline points="224 3 240 12 224 21" />
                        </svg>
                    </div>


                    <div className="flex-1 flex flex-col items-center text-center w-full z-10">
                        <div className="mb-4 relative">
                            <div
                                className="absolute inset-0 rounded-full blur-md glow-pulse"
                                style={{ backgroundColor: "#1DF2F2" }}
                            />
                            <svg
                                width="100"
                                height="100"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1DF2F2"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="drop-shadow-[0_0_10px_#1DF2F2]"
                            >
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                <rect x="8" y="2" width="8" height="4" rx="1" />
                                <path d="M9 8h6" />
                                <path d="M9 12h6" />
                                <path d="M9 16h6" />
                            </svg>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-3">
                            Registro de Sede Arequipa
                        </h3>

                        <p className="text-gray-400 text-md mb-6 h-10 max-w-[250px]">
                            Llena el formulario local para confirmar tu participación
                        </p>

                        <button
                            className="
                                select-none    
                                w-full max-w-[250px]
                                h-[60px]
                                px-4
                                rounded
                                font-bold
                                uppercase
                                tracking-wider
                                text-xs md:text-sm
                                cursor-pointer
                                border
                                bg-transparent
                                text-[#1DF2F2]
                                transition-all duration-300
                                hover:scale-105
                                hover:bg-[#1DF2F2]
                                hover:text-black
                                hover:shadow-[0_0_20px_#1DF2F2]
                            "
                            style={{ borderColor: "#1DF2F2" }}
                        >
                            Formulario Local
                        </button>
                    </div>

                    {/* STEP 2 */}
                    <div className="flex-1 flex flex-col items-center text-center w-full z-10">
                        <div className="mb-4 relative">
                            <div
                                className="absolute inset-0 rounded-full blur-md glow-pulse"
                                style={{ backgroundColor: "#F130EE" }}
                            />
                            <svg
                                width="100"
                                height="100"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#F130EE"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="drop-shadow-[0_0_10px_#F130EE]"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-3">
                            Registro Global Game Jam
                        </h3>

                        <p className="text-gray-400 text-md mb-6 h-10 max-w-[250px]">
                            Crea tu cuenta en la plataforma oficial del evento
                        </p>

                        <button
                            className="
                                select-none
                                w-full max-w-[250px]
                                h-[60px]
                                px-4
                                rounded
                                font-bold
                                uppercase
                                tracking-wider
                                text-xs md:text-sm
                                cursor-pointer
                                border
                                bg-transparent
                                text-[#FFA1FE]
                                transition-all duration-300
                                hover:scale-105
                                hover:bg-[#fa48f7]
                                hover:text-black
                                hover:shadow-[0_0_20px_#F130EE]
                            "
                            style={{ borderColor: "#F130EE" }}
                        >
                            Formulario Global
                        </button>
                    </div>

                    {/* STEP 3 */}
                    <div className="flex-1 flex flex-col items-center text-center w-full z-10">
                        <div className="mb-4 relative">
                            <div
                                className="absolute inset-0 rounded-full blur-md glow-pulse"
                                style={{ backgroundColor: "#39FF14" }}
                            />
                            <svg
                                width="100"
                                height="100"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#39FF14"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="drop-shadow-[0_0_10px_#39FF14]"
                            >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-3">
                            ¡Espera tu confirmación!
                        </h3>

                        <p className="text-gray-400 text-md mb-6 h-10 max-w-[250px]">
                            Te enviaremos un email con todos los detalles
                        </p>

                        <button
                            className="
                                select-none
                                w-full max-w-[250px]
                                h-[60px]
                                px-4
                                rounded
                                font-bold
                                uppercase
                                tracking-wider
                                text-xs md:text-sm
                                cursor-pointer
                                border
                                bg-transparent
                                text-[#80FF66]
                                transition-all duration-300
                                hover:scale-105
                                hover:bg-[#64ff47]
                                hover:text-black
                                hover:shadow-[0_0_20px_#39FF14]
                            "
                            style={{ borderColor: "#39FF14" }}
                        >
                            Ver Guía Completa de Inscripción
                        </button>
                    </div>
                </div>




                {/* Footer Alert */}
                <div className="mt-10 flex justify-center">
                    <div className="
                        bg-[#1e052b]
                        rounded-lg
                        p-4
                        px-8
                        max-w-4xl
                        mx-auto
                        flex flex-row items-center
                        gap-4
                        border border-white/10
                    ">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffccf8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0"
                        >
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>

                        <p className="text-gray-300 text-sm md:text-base text-left">
                            Completa ambos formularios y recibirás un email de confirmación en las próximas 48 horas.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default RegistrationStepsSection;
