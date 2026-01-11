import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "¿Necesito tener un equipo para inscribirme?",
            answer: "No. Puedes venir solo y formar equipo aquí. Habrá dinámicas para facilitar la conexión."
        },
        {
            question: "¿Necesito saber programar?",
            answer: "No. Se necesitan todo tipo de perfiles: artistas 2D/3D, músicos, diseñadores de sonido, escritores, diseñadores de juegos y organizadores. ¡Toda habilidad es bienvenida!"
        },
        {
            question: "¿Habrá comida y bebida?",
            answer: "Sí, cubriremos snacks, bebidas, pizza, etc. para mantener a los jammers energizados durante el evento."
        },
        {
            question: "¿Qué debo llevar?",
            answer: "Tu laptop o PC, periféricos (ratón, teclado, tableta gráfica), audífonos y cualquier software con el que te sientas cómodo. Y mucha energía."
        }
    ];

    return (
        <section className="py-24 px-4 relative bg-[#11091C] flex justify-center">

            {/* Contenedor Principal con 'relative' para que los adornos se peguen a él */}
            <div className="w-full max-w-3xl relative">

                {/* === ZONA DE ADORNOS (Ajustados al milímetro) === */}
                <div className="hidden md:block">

                    {/* 1. LADO IZQUIERDO */}
                    {/* Línea Horizontal Cyan (Arriba de la 1ra pregunta) */}
                    <div className="absolute top-[130px] -left-4 w-16 h-[3px] bg-[#1DF2F2] shadow-[0_0_10px_#1DF2F2] rounded-full"></div>

                    {/* Guion Magenta (Medio) */}
                    <div className="absolute top-[45%] -left-10 w-4 h-[3px] bg-[#EC469A] rounded-full opacity-80"></div>

                    {/* Línea Vertical Cyan (Abajo - Pegada al final) */}
                    <div className="absolute bottom-8 -left-8 w-[3px] h-24 bg-[#1DF2F2] shadow-[0_0_10px_#1DF2F2] rounded-full"></div>


                    {/* 2. LADO DERECHO */}
                    {/* Rombo Grande Hueco Magenta (Arriba) */}
                    <div className="absolute top-[100px] -right-16 w-8 h-8 border-2 border-[#EC469A] rotate-45 shadow-[0_0_5px_#EC469A] opacity-80"></div>

                    {/* Rombo Pequeño Sólido Cyan (Justo debajo del grande) */}
                    <div className="absolute top-[150px] -right-8 w-3 h-3 bg-[#1DF2F2] rotate-45 shadow-[0_0_5px_#1DF2F2]"></div>

                    {/* Guion Magenta (Medio-Bajo) */}
                    <div className="absolute top-[65%] -right-10 w-6 h-[3px] bg-[#EC469A] rounded-full"></div>

                    {/* Línea Vertical Magenta (Abajo) */}
                    <div className="absolute bottom-16 -right-6 w-[3px] h-16 bg-[#EC469A] shadow-[0_0_10px_#EC469A] rounded-full"></div>


                    {/* 3. ZONA INFERIOR (Los que faltaban) */}
                    {/* Rombo pequeñito morado (Centro-Izquierda) */}
                    <div className="absolute -bottom-8 left-[30%] w-2 h-2 border border-[#EC469A] rotate-45 opacity-60"></div>

                    {/* Guioncito Cyan (Centro-Derecha) */}
                    <div className="absolute -bottom-6 right-[40%] w-3 h-1 bg-[#1DF2F2] opacity-60"></div>
                </div>

                {/* === CONTENIDO === */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">
                        Preguntas Frecuentes (FAQ)
                    </h2>
                    {/* Subtítulo Cyan brillante */}
                    <p className="text-[#1DF2F2] text-lg font-medium tracking-wide drop-shadow-[0_0_2px_rgba(29,242,242,0.5)]">
                        Todo lo que necesitas saber sobre el evento
                    </p>
                </div>

                <div className="space-y-4 relative z-10">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            onClick={() => toggleFaq(index)}
                            className={`
                cursor-pointer rounded-2xl transition-all duration-300 border mb-4 relative overflow-hidden group
                ${openIndex === index
                                    ? 'bg-[#1A1025] border-[#6E2880] shadow-[0_0_20px_rgba(110,40,128,0.3)]'
                                    : 'bg-[#1A1025]/40 border-transparent hover:bg-[#1A1025] hover:border-[#6E2880]/30'
                                }
              `}
                        >
                            <div className="p-6 flex justify-between items-center relative z-20">
                                <h3 className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-white' : 'text-gray-200'}`}>
                                    {faq.question}
                                </h3>
                                <div className="text-white transition-transform duration-300">
                                    {openIndex === index ? <X /> : <Plus />}
                                </div>
                            </div>

                            <div
                                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                `}
                            >
                                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-800/50 pt-4 mt-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
