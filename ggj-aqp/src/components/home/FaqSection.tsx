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
        <section className="py-24 px-4 relative overflow-hidden bg-[#11091C]">

            {/* === ZONA DE ADORNOS FLOTANTES (EL "MARCO") === */}
            {/* Nota: 'hidden md:block' es para que solo salgan en PC y no estorben en celular */}

            {/* Lado IZQUIERDO */}
            {/* Línea vertical Cyan larga */}
            <div className="hidden md:block absolute top-1/3 left-[5%] w-[2px] h-32 bg-[#1DF2F2] shadow-[0_0_10px_#1DF2F2]"></div>
            {/* Guion Magenta horizontal */}
            <div className="hidden md:block absolute top-[30%] left-[3%] w-6 h-1 bg-[#EC469A]"></div>
            {/* Guion Cyan pequeño */}
            <div className="hidden md:block absolute bottom-[30%] left-[8%] w-4 h-1 bg-[#1DF2F2]"></div>

            {/* Lado DERECHO */}
            {/* Rombo Hueco Magenta (Arriba) */}
            <div className="hidden md:block absolute top-[20%] right-[10%] w-6 h-6 border-2 border-[#EC469A] rotate-45 shadow-[0_0_10px_#EC469A]"></div>
            {/* Rombo Relleno Cyan pequeño */}
            <div className="hidden md:block absolute top-[30%] right-[5%] w-3 h-3 bg-[#1DF2F2] rotate-45"></div>
            {/* Línea Vertical Magenta (Abajo) */}
            <div className="hidden md:block absolute bottom-[25%] right-[8%] w-[2px] h-20 bg-[#EC469A] shadow-[0_0_10px_#EC469A]"></div>
            {/* Guion Magenta horizontal */}
            <div className="hidden md:block absolute bottom-[40%] right-[4%] w-6 h-1 bg-[#EC469A]"></div>


            {/* Contenido Principal */}
            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">
                    Preguntas Frecuentes (FAQ)
                </h2>

                {/* CORRECCIÓN 1: Texto Cyan más grueso y un poco más grande */}
                <p className="text-[#1DF2F2] text-lg font-medium mb-12 tracking-wide">
                    Todo lo que necesitas saber sobre el evento
                </p>

                <div className="space-y-4">
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
