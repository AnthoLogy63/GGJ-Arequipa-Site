import { Check, X } from 'lucide-react';

const InstructionNotice = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            {/* Borde con gradiente Cyan (#1DF2F2) a Pink (#EC469A) */}
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#1DF2F2] to-[#EC469A]">

                {/* Contenido Principal - Fondo casi negro (#130D22) */}
                <div className="bg-[#130D22] rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col items-center text-center">

                    {/* Efecto de brillo superior */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#1DF2F2]/20 blur-xl"></div>

                    {/* Título con Texto Gradiente */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
                        <span className="bg-gradient-to-r from-[#1DF2F2] to-[#EC469A] text-transparent bg-clip-text">
                            IMPORTANTE - LEER
                        </span>
                    </h3>

                    {/* Línea separadora sutil (Visible en el diseño) */}
                    <div className="w-2/3 h-[1px] bg-gray-800/80 mb-6"></div>

                    <p className="text-gray-300 mb-8 max-w-2xl text-sm md:text-base">
                        Debes completar <strong className="text-white">AMBOS</strong> registros para garantizar tu participación en el evento.
                    </p>

                    {/* Lista de condiciones - Usamos 'items-start' en móvil pero alineación visual centrada */}
                    {/* 'inline-block' y 'text-left' para que el bloque se centre pero las líneas se lean natural */}
                    <div className="flex flex-col gap-4 mb-8 text-left w-full max-w-lg mx-auto">

                        {/* Item 1 - Solo Local */}
                        <div className="flex items-start md:items-center gap-3">
                            {/* Cuadrado ROSA (#EC469A) más pequeño (w-6) */}
                            <div className="min-w-[24px] w-6 h-6 bg-[#EC469A] rounded-[4px] flex items-center justify-center shadow-[0_0_8px_rgba(236,70,154,0.4)] mt-0.5 md:mt-0">
                                <X size={16} className="text-white" strokeWidth={4} />
                            </div>
                            <p className="text-gray-400 text-sm md:text-base leading-tight">
                                <strong className="text-white">Solo registro local</strong> - No podrás subir tu juego
                            </p>
                        </div>

                        {/* Item 2 - Solo Global */}
                        <div className="flex items-start md:items-center gap-3">
                            {/* Cuadrado ROSA (#EC469A) */}
                            <div className="min-w-[24px] w-6 h-6 bg-[#EC469A] rounded-[4px] flex items-center justify-center shadow-[0_0_8px_rgba(236,70,154,0.4)] mt-0.5 md:mt-0">
                                <X size={16} className="text-white" strokeWidth={4} />
                            </div>
                            <p className="text-gray-400 text-sm md:text-base leading-tight">
                                <strong className="text-white">Solo registro global</strong> - No tendrás acceso
                            </p>
                        </div>

                        {/* Item 3 - Ambos */}
                        <div className="flex items-start md:items-center gap-3">
                            {/* Cuadrado MORADO (#6E2880) - Según imagen image_c49568.png es distinto a los rosas */}
                            <div className="min-w-[24px] w-6 h-6 bg-[#6E2880] rounded-[4px] flex items-center justify-center shadow-[0_0_8px_rgba(110,40,128,0.4)] mt-0.5 md:mt-0">
                                <Check size={16} className="text-white" strokeWidth={4} />
                            </div>
                            <p className="text-gray-400 text-sm md:text-base leading-tight">
                                <strong className="text-white">Ambos registros</strong> - ¡Participación completa!
                            </p>
                        </div>
                    </div>

                    {/* Mensaje final - Rosa */}
                    <p className="text-[#EC469A] font-semibold text-xs md:text-sm tracking-wide">
                        Una vez completes ambos formularios, recibirás un email de confirmación en 24-48 horas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstructionNotice;
