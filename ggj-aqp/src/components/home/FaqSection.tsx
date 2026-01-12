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
        <section className="py-16 px-4 relative bg-[#11091C] flex justify-center">
            <div className="w-full max-w-3xl relative">

                {/* Decoraciones */}
                <div className="hidden md:block">
                    <div className="absolute top-[152px] left-7 w-19 h-[2px] bg-[#1FF2F2] shadow-[0_0_10px_#1FF2F2] rounded-full"></div>
                    <div className="absolute top-[38%] -left-15 w-4 h-[3px] bg-[#F130EE] rounded-full opacity-80"></div>
                    <div className="absolute top-[69%] -left-12 w-4 h-[2px] bg-[#1FF2F2] shadow-[0_0_10px_#1FF2F2] rounded-full"></div>
                    <div className="absolute bottom-8 -left-8 w-[2px] h-24 bg-[#1FF2F2] shadow-[0_0_10px_#1FF2F2] rounded-full"></div>

                    <div
                        className="absolute top-[132px] -right-4 w-3 h-3 border-[2px] border-[#F130EE] rotate-37"
                        style={{ filter: 'drop-shadow(0 0 3px #F130EE) drop-shadow(0 0 1px #F130EE)' }}
                    ></div>

                    <div
                        className="absolute top-[182px] -right-11 w-2 h-2 border-[2px] border-[#1FF2F2] rotate-45"
                        style={{ filter: 'drop-shadow(0 0 3px #1FF2F2) drop-shadow(0 0 1px #1FF2F2)' }}
                    ></div>

                    <div className="absolute top-[60%] -right-18 w-4 h-[2px] bg-[#F130EE] rounded-full"></div>
                    <div className="absolute bottom-18 -right-6 w-[2px] h-18 bg-[#F130EE] shadow-[0_0_10px_#F130EE] rounded-full"></div>

                    <div
                        className="absolute top-[90%] -right-18 w-1 h-1 bg-[#1FF2F2] rounded-full"
                        style={{ filter: 'drop-shadow(0 0 4px #1FF2F2) drop-shadow(0 0 2px #1FF2F2)' }}
                    ></div>

                    <div
                        className="absolute -bottom-8 left-[20%] w-3 h-3| border-[2px] border-[#F130EE] rounded-full"
                        style={{ filter: 'drop-shadow(0 0 3px #F130EE) drop-shadow(0 0 1px #F130EE)' }}
                    ></div>

                    <div
                        className="absolute -bottom-2 left-[35%] w-1 h-1 bg-[#1FF2F2] rounded-full"
                        style={{ filter: 'drop-shadow(0 0 4px #1FF2F2) drop-shadow(0 0 2px #1FF2F2)' }}
                    ></div>

                    <div className="absolute -bottom-6 right-[20%] w-4 h-0.5 bg-[#1FF2F2] opacity-90"></div>
                </div>

                <div className="mb-12 md:mb-20 md:-ml-25 px-4 md:px-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide text-center md:text-left">
                        Preguntas Frecuentes (FAQ)
                    </h2>
                    <p className="text-[#1DF2F2] text-lg font-medium tracking-wide drop-shadow-[0_0_2px_rgba(29,242,242,0.5)] text-center md:text-left">
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
                                <div className="px-6 pb-6 text-gray-200 font-medium leading-relaxed border-t border-gray-800/50 pt-4 mt-2">
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
