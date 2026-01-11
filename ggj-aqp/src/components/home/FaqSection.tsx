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
        // section con overflow-hidden para que los elementos flotantes no rompan el layout
        <section className="py-20 px-4 relative overflow-hidden">

            {/* Decoración Rombo Magenta (Izquierda Arriba) */}
            <div className="absolute top-10 left-[-20px] md:left-10 w-8 h-8 bg-[#EC469A] rotate-45 blur-[1px] animate-float opacity-80"></div>

            {/* Decoración Línea/Cuadrado Cyan (Derecha Abajo) */}
            <div className="absolute bottom-10 right-[-10px] md:right-10 w-6 h-6 border-2 border-[#1DF2F2] rotate-12 blur-[1px] animate-pulse"></div>

            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Preguntas Frecuentes (FAQ)
                </h2>
                <p className="text-[#1DF2F2] mb-12">
                    Todo lo que necesitas saber sobre el evento
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            onClick={() => toggleFaq(index)}
                            className={`
                                cursor-pointer rounded-2xl transition-all duration-300 border mb-4
                                ${openIndex === index
                                    ? 'bg-[#1A1025] border-[#6E2880] shadow-[0_0_20px_rgba(110,40,128,0.3)]' // Abierto: Brilla
                                    : 'bg-[#130D22] border-[#2D1F5A] hover:border-[#6E2880]/50' // Cerrado: Muy oscuro
                                }
                            `}
                        >
                            <div className="p-6 flex justify-between items-center">
                                <h3 className="text-lg md:text-xl font-semibold text-white">
                                    {faq.question}
                                </h3>
                                {/* Botón */}
                                <div className="text-white transition-transform duration-300">
                                    {openIndex === index ? <X /> : <Plus />}
                                </div>
                            </div>

                            {/* Contenido desplegable */}
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
