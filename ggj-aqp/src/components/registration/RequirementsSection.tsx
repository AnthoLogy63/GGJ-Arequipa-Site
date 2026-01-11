import { Laptop, FileText, CheckCircle, User } from 'lucide-react';

const RequirementsSection = () => {
    const requirements = [
        {
            icon: <User className="w-8 h-8 text-[#130D22]" />,
            title: "Ser mayor de edad",
            highlight: "Ser mayor",
            description: "Todos los participantes deben tener 18 años o más al momento del evento"
        },
        {
            icon: <Laptop className="w-8 h-8 text-[#130D22]" />,
            title: "Tener equipo propio",
            highlight: "Tener",
            description: "Debes traer tu laptop con el software que necesites (motor de juego, herramientas, etc.)"
        },
        {
            icon: <FileText className="w-8 h-8 text-[#130D22]" />,
            title: "Completar ambos registros",
            highlight: "Completar",
            description: "El formulario local y el registro en la plataforma GGJ son obligatorios"
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-[#130D22]" />,
            title: "Confirmar antes del 25",
            highlight: "Confirmar",
            description: "Los cupos son limitados. Inscríbete pronto para asegurar tu participación"
        }
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Título Cyan (#1DF2F2) con sombra manual */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1DF2F2] mb-2" style={{ textShadow: '0 0 10px rgba(29, 242, 242, 0.5)' }}>
                    ANTES DE EMPEZAR
                </h2>
                <p className="text-gray-400 text-center mb-12">
                    Antes de iniciar tu inscripción, asegúrate de cumplir con los siguientes requisitos:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {requirements.map((req, index) => (
                        // Card: Fondo Morado Oscuro (#1A1025 aprox para contraste) y borde Deep Purple (#3F215F)
                        <div key={index} className="bg-[#1A1025] p-6 rounded-2xl border border-[#3F215F]/50 hover:border-[#6E2880] transition-all duration-300 group">

                            {/* Icono: Fondo gris por defecto, el icono cambia de color */}
                            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {req.icon}
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
        </section>
    );
};

export default RequirementsSection;
