import { Check, X } from 'lucide-react';

const InstructionNotice = () => {
    return (
        <div className="w-full max-w-5xl mx-auto p-4">
            <div className="relative overflow-x-hidden md:overflow-visible">
                {/* Background glows */}
                <div
                    className="absolute top-[-100%] -right-[530px] w-[500px] h-[500px] bg-[#F130EE] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"
                    style={{
                        animation: 'glowPulseSoft 4s ease-in-out infinite'
                    }}
                ></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[500px] bg-[#F130EE] opacity-[0.03] blur-[90px] rounded-full pointer-events-none"></div>

                <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#55F4FC] to-[#F130EE]">

                    <div className="bg-[#130D22] rounded-2xl p-8 md:p-12 relative overflow-hidden">

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#55F4FC]/20 blur-xl"></div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-wide font-['Raleway'] text-center">
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: 'linear-gradient(135deg, #55F4FC 0%, #55F4FC 20%, #F130EE 80%, #F130EE 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                IMPORTANTE - LEER
                            </span>
                        </h3>

                        <div className="max-w-3xl mx-auto w-full">
                            <div className="w-full h-[2px] mb-6" style={{
                                background: 'linear-gradient(90deg, #2A1C3D 16%, #227575 49%, #331B53 86%)'
                            }}></div>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <p className="text-gray-300 mb-8 text-sm md:text-base font-['Raleway'] text-left">
                                Debes completar <strong className="text-white">AMBOS</strong> registros para garantizar tu participación en el evento.
                            </p>

                            <div className="flex flex-col gap-4 mb-8 text-left">

                                <div className="flex items-start md:items-center gap-3">
                                    <div className="min-w-[24px] w-6 h-6 bg-gradient-to-br from-[#E10B98] to-[#7F06EC] rounded-[4px] flex items-center justify-center shadow-[0_0_8px_rgba(225,11,152,0.4)] mt-0.5 md:mt-0">
                                        <X size={16} className="text-white" strokeWidth={4} />
                                    </div>
                                    <p className="text-gray-400 text-sm md:text-base leading-tight font-['Raleway']">
                                        <strong className="text-white">Solo registro local</strong> - No podrás subir tu juego
                                    </p>
                                </div>

                                <div className="flex items-start md:items-center gap-3">
                                    <div className="min-w-[24px] w-6 h-6 bg-gradient-to-br from-[#E10B98] to-[#7F06EC] rounded-[4px] flex items-center justify-center shadow-[0_0_8px_rgba(225,11,152,0.4)] mt-0.5 md:mt-0">
                                        <X size={16} className="text-white" strokeWidth={4} />
                                    </div>
                                    <p className="text-gray-400 text-sm md:text-base leading-tight font-['Raleway']">
                                        <strong className="text-white">Solo registro global</strong> - No tendrás acceso
                                    </p>
                                </div>

                                <div className="flex items-start md:items-center gap-3">
                                    <div className="min-w-[24px] w-6 h-6 bg-gradient-to-br from-[#E10B98] to-[#7F06EC] rounded-[4px] flex items-center justify-center shadow-[0_0_8px_rgba(225,11,152,0.4)] mt-0.5 md:mt-0">
                                        <Check size={16} className="text-white" strokeWidth={4} />
                                    </div>
                                    <p className="text-gray-400 text-sm md:text-base leading-tight font-['Raleway']">
                                        <strong className="text-white">Ambos registros</strong> - ¡Participación completa!
                                    </p>
                                </div>
                            </div>

                            <p className="text-[#F580F3] font-semibold text-sm md:text-base tracking-wide font-['Raleway'] text-left">
                                Una vez completes ambos formularios, recibirás un email de confirmación en 24-48 horas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructionNotice;
