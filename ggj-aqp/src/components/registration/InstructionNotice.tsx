import { Check, X } from 'lucide-react';

const InstructionNotice = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            {/* Borde con gradiente Cyan (#1DF2F2) a Pink (#EC469A) */}
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#1DF2F2] to-[#EC469A]">

                {/* Contenido Principal - Fondo casi negro (#130D22) */}
                <div className="bg-[#130D22] rounded-2xl p-8 md:p-10 relative overflow-hidden">

                    {/* Efecto de brillo superior */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#1DF2F2]/20 blur-xl"></div>

                    {/* Título con Texto Gradiente */}
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        <span className="bg-gradient-to-r from-[#1DF2F2] to-[#EC469A] text-transparent bg-clip-text">
                            IMPORTANTE - LEER
                        </span>
                    </h3>

                    <p className="text-gray-300 text-center mb-8">
                        Debes completar <strong className="text-white">AMBOS</strong> registros para garantizar tu participación en el evento.
                    </p>

                    {/* Lista de condiciones */}
                    <div className="space-y-4 max-w-2xl mx-auto mb-8">
                        {/* Item 1 - Solo Local */}
                        <div className="flex items-center gap-4">
                            {/* Cuadrado Sólido Rosa */}
                            <div className="w-8 h-8 min-w-[32px] bg-[#EC469A] rounded flex items-center justify-center shadow-[0_0_10px_rgba(236,70,154,0.5)]">
                                <X size={20} className="text-white" strokeWidth={3} />
                            </div>
                            <p className="text-gray-300 text-sm md:text-base">
                                <strong className="text-white block">Solo registro local</strong>
                                <span className="opacity-80">No podrás subir tu juego</span>
                            </p>
                        </div>

                        {/* Item 2 - Solo Global */}
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 min-w-[32px] bg-[#EC469A] rounded flex items-center justify-center shadow-[0_0_10px_rgba(236,70,154,0.5)]">
                                <X size={20} className="text-white" strokeWidth={3} />
                            </div>
                            <p className="text-gray-300 text-sm md:text-base">
                                <strong className="text-white block">Solo registro global</strong>
                                <span className="opacity-80">No tendrás acceso</span>
                            </p>
                        </div>

                        {/* Item 3 - Ambos (Correcto) */}
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 min-w-[32px] bg-[#6E2880] rounded flex items-center justify-center shadow-[0_0_10px_rgba(110,40,128,0.5)]">
                                <Check size={20} className="text-white" strokeWidth={3} />
                            </div>
                            <p className="text-gray-300 text-sm md:text-base">
                                <strong className="text-white block">Ambos registros</strong>
                                <span className="text-[#1DF2F2]">¡Participación completa!</span>
                            </p>
                        </div>
                    </div>

                    {/* Mensaje final - Rosa */}
                    <p className="text-[#EC469A] text-center font-semibold text-sm md:text-base">
                        Una vez completes ambos formularios, recibirás un email de confirmación en 24-48 horas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstructionNotice;
