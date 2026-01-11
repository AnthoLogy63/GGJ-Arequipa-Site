// Información centralizada de los beneficios
const BENEFITS_INFO = {
    titulo: "¿Por qué ",
    tituloDestacado: "participar?",
    beneficios: [
        {
            icono: <i className="fi fi-rr-e-learning"></i>,
            titulo: "Aprendizaje Aplicado",
            descripcion: "Aprende desarrollando un juego desde cero con tutoriales, mentorías y el apoyo constante de personas expertas.",
        },
        {
            icono: <i className="fi fi-sr-people-network-partner"></i>,
            titulo: "Networking para el Impulso",
            descripcion: "Conecta con desarrolladores, artistas, diseñadores y músicos. Forma equipos y crea ideas a simple tu red profesional.",
        },
        {
            icono: <i className="fi fi-rs-lightbulb-setting"></i>,
            titulo: "Un Proyecto Propio",
            descripcion: "Al finalizar tendrás un juego completo o prototipo funcional que podrás compartir o mostrar en tu portafolio.",
        },
        {
            icono: <i className="fi fi-rr-users-medical"></i>,
            titulo: "Comunidad y Experiencia Global",
            descripcion: "Sé parte de un evento internacional que conecta a miles de creadores en todo el mundo durante 48 horas.",
        },
    ],
};

const BenefitsSection = () => {
    return (
        <section
            className="
                w-full
                py-16 md:py-24
                px-6
                bg-[#11091C]
                relative
            "
        >
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
                    {BENEFITS_INFO.titulo}
                    <span className="
                        text-[#1DF2F2]
                        drop-shadow-[2px_0_6px_#1DF2F2]
                        drop-shadow-[-2px_0_6px_#1DF2F2]
                        drop-shadow-[0_0_10px_#1DF2F2]
                    ">
                        {BENEFITS_INFO.tituloDestacado}
                    </span>
                </h2>

                {/* Grid de beneficios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto md:max-w-none">
                    {BENEFITS_INFO.beneficios.map((beneficio, index) => (
                        <div
                            key={index}
                            className="
                                relative
                                rounded-2xl
                                transition-all
                                duration-300
                                hover:scale-105
                                mx-auto
                                w-[75%]
                                md:w-full
                                bg-[#11091C]
                                p-8
                                lg:p-10
                            "
                            style={{
                                border: '1px solid transparent',
                                backgroundImage: 'linear-gradient(#11091C, #11091C), linear-gradient(135deg, #1DF2F2 0%, #0EA5E9 100%)',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
                            }}
                        >
                            {/* Icono */}
                            <div className="mb-4 flex justify-center">
                                <span
                                    className="text-5xl"
                                    style={{
                                        color: '#1DF2F2'
                                    }}
                                >
                                    {beneficio.icono}
                                </span>
                            </div>

                            {/* Título con degradado turquesa */}
                            <h3
                                className="text-xl lg:text-2xl font-bold mb-3 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #1DF2F2 0%, #FFFFFF 100%)',
                                }}
                            >
                                {beneficio.titulo}
                            </h3>

                            {/* Descripción */}
                            <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                                {beneficio.descripcion}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
