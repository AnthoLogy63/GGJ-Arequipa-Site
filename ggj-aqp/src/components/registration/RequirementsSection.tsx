import { Laptop, FileText, CheckCircle, User } from 'lucide-react';

const RequirementsSection = () => {
    const requirements = [
        {
            icon: <User className="w-8 h-8" />,
            title: "Ser mayor de edad",
            description: "Todos los participantes deben tener 18 años o más al momento del evento"
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Tener equipo propio",
            description: "Debes traer tu laptop con el software que necesites (motor de juego, herramientas, etc.)"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Completar ambos registros",
            description: "El formulario local y el registro en la plataforma GGJ son obligatorios"
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Confirmar antes del 25 de Enero, 2026",
            description: "Los cupos son limitados. Inscríbete pronto para asegurar tu participación"
        }
    ];

    return (
        <section className="py-16 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Título con efecto outline - Zing Rust Demo 64px */}
                <h2
                    className="text-5xl md:text-6xl font-black text-center mb-2 tracking-wider"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #1DF2F2',
                        fontFamily: 'Zing Rust Demo, sans-serif',
                        fontSize: '64px',
                        lineHeight: '1.2'
                    }}
                >
                    ANTES DE EMPEZAR
                </h2>

                {/* Subtítulo - Raleway */}
                <p className="text-gray-400 text-center mb-12 font-['Raleway']">
                    Antes de iniciar tu inscripción, asegúrate de cumplir con los siguientes requisitos:
                </p>

                {/* Grid de tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {requirements.map((req, index) => (
                        <div
                            key={index}
                            className="bg-[#1C1625] p-6 rounded-2xl border border-[#2C223B] hover:border-[#6E2880] transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Círculo de fondo del icono - #2C223B */}
                            <div className="w-16 h-16 rounded-full bg-[#2C223B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-white">
                                    {req.icon}
                                </div>
                            </div>

                            {/* Título con gradiente Cyan a Magenta */}
                            <h3
                                className="text-xl font-bold mb-2 font-['Raleway']"
                                style={{
                                    background: 'linear-gradient(90deg, #1DF2F2 0%, #F130EE 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                {req.title}
                            </h3>

                            {/* Descripción - Raleway */}
                            <p className="text-gray-400 text-sm leading-relaxed font-['Raleway']">
                                {req.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 8 Puntos decorativos derecha - Color magenta #9671F3 */}
            <div className="absolute top-1/4 right-4 flex flex-col gap-2 hidden lg:flex">
                <div className="w-2 h-2 rounded-full bg-[#9671F3]"></div>
                <div className="w-2 h-2 rounded-full bg-[#9671F3] opacity-80"></div>
                <div className="w-2 h-2 rounded-full bg-[#9671F3] opacity-60"></div>
                <div className="w-2 h-2 rounded-full bg-[#9671F3] opacity-40"></div>
                <div className="w-2 h-2 rounded-full bg-[#9671F3] opacity-30"></div>
                <div className="w-2 h-2 rounded-full bg-[#9671F3] opacity-20"></div>
                <div className="w-2 h-2 rounded-full bg-[#9671F3] opacity-10"></div>
                <div className="w-2 h-2 rounded-full bg-[#9671F3] opacity-5"></div>
            </div>
        </section>
    );
};

export default RequirementsSection;
