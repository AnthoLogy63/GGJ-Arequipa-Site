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
                        {/* Item 1 */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#EC469A] p-1 rounded mt-1"> {/* Rosa */}
                                <X size={16} className="text-white" strokeWidth={3} />
                            </div>
                            <p className="text-gray-300"><strong className="text-white">Solo registro local</strong> - No podrás subir tu juego</p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#EC469A] p-1 rounded mt-1"> {/* Rosa */}
                                <X size={16} className="text-white" strokeWidth={3} />
                            </div>
                            <p className="text-gray-300"><strong className="text-white">Solo registro global</strong> - No tendrás acceso</p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-start gap-3">
                            <div className="bg-[#6E2880] p-1 rounded mt-1"> {/* Morado medio */}
                                <Check size={16} className="text-white" strokeWidth={3} />
                            </div>
                            <p className="text-gray-300"><strong className="text-white">Ambos registros</strong> - ¡Participación completa!</p>
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
