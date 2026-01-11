// Información centralizada del evento
const EVENTO_INFO = {
    titulo: "Ubicación y Fecha",
    subtitulo: "Prepárate para 48 horas de pura creación",
    lugar: {
        nombre: "JAKU EMPRENDE UNSA",
        direccion: "UNSA SOCIALES",
    },
    fecha: {
        texto: "26, 29 y 30 de Enero 2026",
        inicio: "26, 29 y 30, Enero 2026",
    },
    horarios: {
        inicio: {
            dia: "Viernes 29",
            hora: "09:00 HRS",
            descripcion: "Primer día evento",
        },
        cierre: {
            dia: "Sábado 30",
            hora: "09:00 HRS",
            descripcion: "Segundo día evento",
        },
    },
    mapa: {
        url: "https://www.google.com/maps/search/JAKU+EMPRENDE+UNSA,+Arequipa",
        embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3345700229333!2d-71.5188982!3d-16.4078259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b6113bb0b57%3A0x8264f3b4a347b806!2sJAKU%20EMPRENDE%20UNSA!5e0!3m2!1ses!2spe!4v1768172124648!5m2!1ses!2spe",
    },
};

const Titulo_y_descripcion = () => {
    return (
        <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">{EVENTO_INFO.titulo}</h2>
            <p
                className="
                text-lg md:text-xl font-medium
                text-[#1DF2F2]
                drop-shadow-[2px_0_6px_#1DF2F2]
                drop-shadow-[-2px_0_6px_#1DF2F2]
                drop-shadow-[0_0_10px_#1DF2F2]
            "
            >
                {EVENTO_INFO.subtitulo}
            </p>
        </div>
    );
};

const Datos = () => {
    return (
        <div className="space-y-6">
            {/* Versión Mobile - Simplificada */}
            <div className="lg:hidden space-y-4">
                <p className="text-white text-base">
                    {EVENTO_INFO.lugar.nombre}, {EVENTO_INFO.lugar.direccion}
                </p>
                <p className="text-white/80 text-sm">{EVENTO_INFO.fecha.texto}</p>
                <div className="flex gap-4">
                    <div>
                        <p className="text-white/60 text-xs mb-1">{EVENTO_INFO.horarios.inicio.dia.split(" ")[0]}</p>
                        <p className="text-white font-semibold">{EVENTO_INFO.horarios.inicio.hora}</p>
                    </div>
                    <div>
                        <p className="text-white/60 text-xs mb-1">{EVENTO_INFO.horarios.cierre.dia.split(" ")[0]}</p>
                        <p className="text-white font-semibold">{EVENTO_INFO.horarios.cierre.hora}</p>
                    </div>
                </div>
            </div>

            {/* Versión Desktop - Completa con iconos */}
            <div className="hidden lg:block space-y-6">
                {/* Lugar y Dirección */}
                <div className="flex items-center gap-4">
                    <i className="fi fi-rs-marker text-[#1DF2F2] text-2xl drop-shadow-[0_0_8px_#1DF2F2]"></i>
                    <div className="space-y-3">
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-1">Lugar</h3>
                            <p className="text-white/80">{EVENTO_INFO.lugar.nombre}</p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-1">Dirección</h3>
                            <p className="text-white/80">{EVENTO_INFO.lugar.direccion}</p>
                        </div>
                    </div>
                </div>

                {/* Fecha */}
                <div className="flex items-start gap-4">
                    <i className="fi fi-rr-calendar text-[#D11CE4] text-2xl drop-shadow-[0_0_8px_#D11CE4]"></i>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-1">Fecha</h3>
                        <p className="text-white/80">{EVENTO_INFO.fecha.texto}</p>
                    </div>
                </div>

                {/* Hora de Inicio */}
                <div className="flex items-start gap-4">
                    <i className="fi fi-br-time-quarter-to text-[#D11CE4] text-2xl drop-shadow-[0_0_8px_#D11CE4]"></i>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-1">Hora de Inicio</h3>
                        <p className="text-white/80">
                            {EVENTO_INFO.horarios.inicio.dia}: {EVENTO_INFO.horarios.inicio.hora}
                        </p>
                        <p className="text-white/60 text-sm">{EVENTO_INFO.horarios.inicio.descripcion}</p>
                    </div>
                </div>

                {/* Hora de Cierre */}
                <div className="flex items-start gap-4">
                    <i className="fi fi-sr-time-quarter-to text-[#D11CE4] text-2xl drop-shadow-[0_0_8px_#D11CE4]"></i>
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-1">Hora de Cierre</h3>
                        <p className="text-white/80">
                            {EVENTO_INFO.horarios.cierre.dia}: {EVENTO_INFO.horarios.cierre.hora}
                        </p>
                        <p className="text-white/60 text-sm">{EVENTO_INFO.horarios.cierre.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Mapa = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border-2 border-[#D11CE4]/50 shadow-lg shadow-[#D11CE4]/20">
                {/* Google Maps Embed */}
                <iframe
                    src={EVENTO_INFO.mapa.embedUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0, filter: "hue-rotate(250deg) saturate(1.5)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación del evento"
                ></iframe>
            </div>

            {/* Botón debajo del mapa */}
            <div className="flex justify-center">
                <a
                    href={EVENTO_INFO.mapa.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        px-6 py-3
                        text-sm md:text-base font-semibold
                        text-[#D11CE4]
                        border-2
                        border-[#D11CE4]
                        rounded-full
                        transition-all
                        duration-300
                        cursor-pointer
                        select-none
                        drop-shadow-[0_0_8px_#D11CE4]
                        hover:text-[#F130EE]
                        hover:border-[#F130EE]
                        hover:drop-shadow-[0_0_12px_#F130EE]
                        hover:scale-105
                        inline-block
                    "
                >
                    VER EN GOOGLE MAPS
                </a>
            </div>
        </div>
    );
};

const Flechas = ({ position }: { position: "top-right" | "bottom-left" }) => {
    // Flechas decorativas tipo chevron en las esquinas de la sección
    const positionClasses =
        position === "top-right"
            ? "absolute top-8 right-8 flex flex-row gap-0"
            : "absolute bottom-8 left-8 flex flex-col gap-0";

    const chevronStyle = {
        width: "120px",
        height: "120px",
        borderRight: "40px solid #160E25",
        borderTop: "40px solid #160E25",
        transform: position === "top-right" ? "rotate(45deg)" : "rotate(-45deg)",
    };

    return (
        <div className={positionClasses}>
            <div style={chevronStyle}></div>
            <div style={chevronStyle}></div>
            <div style={chevronStyle}></div>
        </div>
    );
};

const LocationSection = () => {
    return (
        <section
            id="location"
            className="
                w-full
                py-16 md:py-24
                px-6
                bg-[#11091C]
                relative
            "
        >
            {/* Flechas decorativas en las esquinas de la sección */}
            <Flechas position="top-right" />
            <Flechas position="bottom-left" />

            <div className="max-w-7xl mx-auto relative">
                <Titulo_y_descripcion />

                {/* Contenedor principal que envuelve Datos y Mapa */}
                <div className="bg-[#160E25] backdrop-blur-sm rounded-2xl p-6 md:p-16 relative">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* En mobile: Mapa primero, en desktop: Datos primero */}
                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                            <Datos />
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <Mapa />
                        </div>
                    </div>
                </div>

                {/* Triángulos decorativos flotantes alrededor */}
                <div className="relative">
                    <span className="tri small absolute -top-12 left-20" style={{ backgroundColor: "#1DF2F2" }}></span>
                    <span className="tri tall absolute -top-16 right-32" style={{ backgroundColor: "#D11CE4" }}></span>
                    <span className="tri wide absolute -bottom-8 left-40" style={{ backgroundColor: "#6E2880" }}></span>
                    <span
                        className="tri medium absolute -bottom-12 right-24"
                        style={{ backgroundColor: "#1DF2F2" }}
                    ></span>
                </div>
            </div>
            {/* Círculos indicadores */}
            <div className="absolute bottom-0 right-6 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1DF2F2]"></span>
                <span className="w-2 h-2 rounded-full bg-[#D11CE4]"></span>
                <span className="w-2 h-2 rounded-full bg-[#6E2880]"></span>
                <span className="w-2 h-2 rounded-full bg-[#F130EE]"></span>
                <span className="w-2 h-2 rounded-full bg-[#1DF2F2]"></span>
                <span className="w-2 h-2 rounded-full bg-[#29F7F5]"></span>
            </div>
        </section>
    );
};

export default LocationSection;
