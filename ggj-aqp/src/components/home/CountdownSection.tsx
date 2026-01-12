import { useState, useEffect } from 'react';

const CountdownSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-01-26T00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-screen" style={{ backgroundColor: '#11091C' }}>
            <div className="relative max-w-7xl mx-auto text-center w-full">
                {/* Título estilo neon inclinado */}
                <h2 
                    className="font-black text-transparent mb-20 italic"
                    style={{
                        WebkitTextStroke: '3px #F130EE',
                        transform: 'skewX(-5deg)',
                        letterSpacing: '0.15em',
                        fontSize: '75px'
                    }}
                >
                    GAME START IN...
                </h2>

                {/* Contenedores de cuenta regresiva - estilo synthwave */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                    {/* Días */}
                    <div 
                        className="
                            border-2 border-[#1DF2F2]
                            rounded-2xl
                            transition-all
                            duration-300
                            hover:scale-105
                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                        style={{
                            backgroundColor: '#251241',
                            width: '210px',
                            height: '170px'
                        }}
                    >
                        <div 
                            className="font-black text-[#1DF2F2] mb-2"
                            style={{
                                fontFamily: 'Impact, sans-serif',
                                fontSize: '75px'
                            }}
                        >
                            {timeLeft.days.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[10px] md:text-xs text-[#1DF2F2] uppercase tracking-widest font-bold"
                        >
                            DÍAS
                        </div>
                    </div>

                    {/* Horas */}
                    <div 
                        className="
                            border-2 border-[#1DF2F2]
                            rounded-2xl
                            transition-all
                            duration-300
                            hover:scale-105
                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                        style={{
                            backgroundColor: '#251241',
                            width: '210px',
                            height: '170px'
                        }}
                    >
                        <div 
                            className="font-black text-[#1DF2F2] mb-2"
                            style={{
                                fontFamily: 'Impact, sans-serif',
                                fontSize: '75px'
                            }}
                        >
                            {timeLeft.hours.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[10px] md:text-xs text-[#1DF2F2] uppercase tracking-widest font-bold"
                        >
                            HORAS
                        </div>
                    </div>

                    {/* Minutos */}
                    <div 
                        className="
                            border-2 border-[#1DF2F2]
                            rounded-2xl
                            transition-all
                            duration-300
                            hover:scale-105
                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                        style={{
                            backgroundColor: '#251241',
                            width: '210px',
                            height: '170px'
                        }}
                    >
                        <div 
                            className="font-black text-[#1DF2F2] mb-2"
                            style={{
                                fontFamily: 'Impact, sans-serif',
                                fontSize: '75px'
                            }}
                        >
                            {timeLeft.minutes.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[10px] md:text-xs text-[#1DF2F2] uppercase tracking-widest font-bold"
                        >
                            MINUTOS
                        </div>
                    </div>

                    {/* Segundos */}
                    <div 
                        className="
                            border-2 border-[#1DF2F2]
                            rounded-2xl
                            transition-all
                            duration-300
                            hover:scale-105
                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                        style={{
                            backgroundColor: '#251241',
                            width: '210px',
                            height: '170px'
                        }}
                    >
                        <div 
                            className="font-black text-[#1DF2F2] mb-2"
                            style={{
                                fontFamily: 'Impact, sans-serif',
                                fontSize: '75px'
                            }}
                        >
                            {timeLeft.seconds.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[10px] md:text-xs text-[#1DF2F2] uppercase tracking-widest font-bold"
                        >
                            SEGUNDOS
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountdownSection;
