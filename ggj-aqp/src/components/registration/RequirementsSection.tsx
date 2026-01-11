import { Laptop, FileText, CheckCircle, User } from 'lucide-react';

const RequirementsSection = () => {
    const requirements = [
        {
            icon: <User className="w-8 h-8" />,
            title: "Ser mayor de edad",
            highlight: "Ser mayor",
            description: "Todos los participantes deben tener 18 años o más al momento del evento"
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Tener equipo propio",
            highlight: "Tener",
            description: "Debes traer tu laptop con el software que necesites (motor de juego, herramientas, etc.)"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Completar ambos registros",
            highlight: "Completar",
            description: "El formulario local y el registro en la plataforma GGJ son obligatorios"
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Confirmar antes del 25",
            highlight: "Confirmar",
            description: "Los cupos son limitados. Inscríbete pronto para asegurar tu participación"
        }
    ];

    return (
        <section className="py-16 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Título con efecto outline (hueco) */}
                <h2
                    className="text-4xl md:text-5xl font-black text-center mb-2 tracking-wider"
                    style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px #1DF2F2',
                        fontFamily: 'sans-serif'
                    }}
                >
                    ANTES DE EMPEZAR
                </h2>
                <p className="text-gray-400 text-center mb-12">
                    Antes de iniciar tu inscripción, asegúrate de cumplir con los siguientes requisitos:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {requirements.map((req, index) => (
                        <div key={index} className="bg-[#1A1025] p-6 rounded-2xl border border-[#3F215F] hover:border-[#6E2880] transition-all duration-300 group relative overflow-hidden">

                            {/* Icono: Círculo oscuro (#2D1F5A) con icono blanco */}
                            <div className="w-16 h-16 rounded-full bg-[#2D1F5A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(29,242,242,0.2)]">
                                <div className="text-white">
                                    {req.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#1DF2F2] mb-2">
                                <span className="text-[#1DF2F2]">{req.highlight}</span> {req.title.replace(req.highlight, '')}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {req.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Puntos decorativos derecha */}
            <div className="absolute top-1/4 right-0 flex flex-col gap-2 p-4 hidden lg:flex">
                <div className="w-2 h-2 rounded-full bg-[#6E2880]"></div>
                <div className="w-2 h-2 rounded-full bg-[#6E2880] opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-[#6E2880] opacity-25"></div>
            </div>
        </section>
    );
};

export default RequirementsSection;
