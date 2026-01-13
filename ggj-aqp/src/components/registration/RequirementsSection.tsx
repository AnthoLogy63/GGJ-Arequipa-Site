import { Laptop, ClipboardList, Check } from 'lucide-react';

const RequirementsSection = () => {
    const requirements = [
        {
            customIcon: <span className="text-white font-bold text-xl font-sans">+18</span>,
            title: <>Ser mayor<br />de edad</>,
            description: "Todos los participantes deben tener 18 años o más al momento del evento",
            gradient: 'linear-gradient(90deg, #1DF2F2 0%, #1DF2F2 20%, #F130EE 48%, #F130EE 100%)'
        },
        {
            icon: <Laptop className="w-8 h-8 text-white" />,
            title: <>Tener<br />equipo propio</>,
            description: "Debes traer tu laptop con el software que necesites (motor de juego, herramientas, etc.)",
            gradient: 'linear-gradient(90deg, #1DF2F2 0%, #1DF2F2 30%, #F130EE 60%, #F130EE 100%)'
        },
        {
            icon: <ClipboardList className="w-8 h-8 text-white" />,
            title: <>Completar ambos<br />registros</>,
            description: "El formulario local y el registro en la plataforma GGJ son obligatorios",
            gradient: 'linear-gradient(90deg, #1DF2F2 0%, #1DF2F2 40%, #F130EE 80%, #F130EE 100%)'
        },
        {
            icon: <Check className="w-8 h-8 text-white" strokeWidth={4} />,
            title: <>Confirmar antes del 25<br />de Enero, 2026</>,
            description: "Los cupos son limitados. Inscríbete pronto para asegurar tu participación",
            gradient: 'linear-gradient(90deg, #1DF2F2 0%, #9683F0 57%, #A378EF 57%, #F130EE 100%)'
        }
    ];

    return (
        <section className="py-60 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10 overflow-x-hidden md:overflow-visible">
                {/* === FONDO AMBIENTAL (GLOWS) === */}
                {/* 1. Círculo Magenta Izquierda - Con pulso lento */}
                <div
                    className="absolute top-[-50%] -left-[400px] w-[500px] h-[500px] bg-[#F130EE] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"
                    style={{
                        animation: 'glowPulseSoft 4s ease-in-out infinite'
                    }}
                ></div>

                {/* 2. Círculo Magenta Derecha - Con pulso lento */}
                <div
                    className="absolute top-[70%] -right-[500px] w-[500px] h-[500px] bg-[#F130EE] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"
                    style={{
                        animation: 'glowPulseSoft 4s ease-in-out infinite'
                    }}
                ></div>


                <h2
                    className="text-5xl md:text-[64px] font-black text-center mb-2 tracking-wide"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '0.2px #1DF2F2',
                        fontFamily: '"Zing Rust Demo", "Impact", sans-serif',
                        lineHeight: '1.1'
                    }}
                >
                    ANTES DE EMPEZAR
                </h2>

                <div className="flex justify-center mb-16">
                    <p className="text-gray-300 text-center font-['Raleway'] font-medium max-w-xl text-sm md:text-base leading-relaxed">
                        Antes de iniciar tu inscripción, asegúrate de cumplir<br />
                        con los siguientes requisitos:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {requirements.map((req, index) => (
                        <div
                            key={index}
                            className="bg-[#1C1625] p-8 rounded-[32px] border border-[#2C223B] hover:border-[#6E2880] transition-all duration-300 group flex flex-col items-start"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#2C223B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                {req.customIcon ? req.customIcon : req.icon}
                            </div>

                            <div className="w-full -mx-2">
                                <h6
                                    className="text-base font-semibold mb-4 font-['Raleway'] leading-tight h-14 flex items-center px-2"
                                    style={{
                                        background: req.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {req.title}
                                </h6>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed font-['Raleway']">
                                {req.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Decorative dots */}
                <div className="absolute top-[7%] right-5 hidden xl:flex flex-col gap-y-3 opacity-80">
                    <div className="w-[5px] h-[5px] rounded-full bg-[#9671F3]"></div>

                    <div className="flex gap-x-4">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#9671F3]"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#9671F3]"></div>
                    </div>

                    <div className="flex gap-x-4">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#9671F3]"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#9671F3]"></div>
                    </div>

                    <div className="flex gap-x-4">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#9671F3]"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#9671F3]"></div>
                    </div>

                    <div className="flex justify-end mt-1">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#9671F3]"></div>
                    </div>
                </div>
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6E2880] opacity-[0.05] blur-[100px] pointer-events-none rounded-full"></div>

        </section>
    );
};

export default RequirementsSection;
