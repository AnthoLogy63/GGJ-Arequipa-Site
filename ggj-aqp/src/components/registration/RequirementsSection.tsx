import { Laptop, ClipboardList, Check } from 'lucide-react';

const RequirementsSection = () => {
    const requirements = [
        {
            // TRUCO: Usamos un div con texto para el icono de +18 en lugar de un SVG
            customIcon: <span className="text-white font-bold text-xl font-sans">+18</span>,
            title: "Ser mayor de edad",
            description: "Todos los participantes deben tener 18 años o más al momento del evento"
        },
        {
            icon: <Laptop className="w-8 h-8 text-white" />,
            title: "Tener equipo propio",
            description: "Debes traer tu laptop con el software que necesites (motor de juego, herramientas, etc.)"
        },
        {
            icon: <ClipboardList className="w-8 h-8 text-white" />,
            title: "Completar ambos registros",
            description: "El formulario local y el registro en la plataforma GGJ son obligatorios"
        },
        {
            icon: <Check className="w-8 h-8 text-white" strokeWidth={4} />,
            title: "Confirmar antes del 25 de Enero, 2026",
            description: "Los cupos son limitados. Inscríbete pronto para asegurar tu participación"
        }
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Título - Zing Rust Demo */}
                <h2
                    className="text-5xl md:text-[64px] font-black text-center mb-2 tracking-wide"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '1.5px #1DF2F2',
                        fontFamily: '"Zing Rust Demo", "Impact", sans-serif',
                        lineHeight: '1.1'
                    }}
                >
                    ANTES DE EMPEZAR
                </h2>

                {/* Subtítulo - Raleway */}
                <div className="flex justify-center mb-16">
                    <p className="text-gray-300 text-center font-['Raleway'] font-medium max-w-xl text-sm md:text-base leading-relaxed">
                        Antes de iniciar tu inscripción, asegúrate de cumplir con los siguientes requisitos:
                    </p>
                </div>

                {/* Grid de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {requirements.map((req, index) => (
                        <div
                            key={index}
                            className="bg-[#1C1625] p-8 rounded-[32px] border border-[#2C223B] hover:border-[#6E2880] transition-all duration-300 group flex flex-col items-start"
                        >
                            {/* Círculo del icono - #2C223B */}
                            <div className="w-16 h-16 rounded-full bg-[#2C223B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                {req.customIcon ? req.customIcon : req.icon}
                            </div>

                            {/* Título con Gradiente Mitad/Mitad - Heading 6 */}
                            <h6
                                className="text-base font-semibold mb-4 font-['Raleway'] leading-tight h-14 flex items-center"
                                style={{
                                    background: 'linear-gradient(90deg, #1DF2F2 0%, #1DF2F2 30%, #F130EE 60%, #F130EE 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {req.title}
                            </h6>

                            {/* Descripción - Raleway */}
                            <p className="text-gray-300 text-sm leading-relaxed font-['Raleway']">
                                {req.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* === DECORACIÓN: 8 Puntos a la derecha === */}
            {/* Diseño: Layout escalonado. Color #9671F3 */}
            <div className="absolute top-[50%] right-[calc(25%-2rem)] hidden xl:flex flex-col gap-y-3 opacity-80">
                {/* Punto 1 (solo izquierda) */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#9671F3]"></div>

                {/* Puntos 2-3 (par) */}
                <div className="flex gap-x-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9671F3]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9671F3] opacity-60"></div>
                </div>

                {/* Puntos 4-5 (par) */}
                <div className="flex gap-x-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9671F3]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9671F3] opacity-60"></div>
                </div>

                {/* Puntos 6-7 (par) */}
                <div className="flex gap-x-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9671F3]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9671F3] opacity-60"></div>
                </div>

                {/* Punto 8 (solo derecha, más abajo) */}
                <div className="flex justify-end mt-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9671F3] opacity-60"></div>
                </div>
            </div>

            {/* Glow de ambiente */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6E2880] opacity-[0.05] blur-[100px] pointer-events-none rounded-full"></div>

        </section>
    );
};

export default RequirementsSection;
