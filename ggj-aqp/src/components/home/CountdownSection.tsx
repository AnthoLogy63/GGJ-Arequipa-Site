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
                    className="font-black text-transparent mb-20 italic uppercase mx-auto"
                    style={{
                        WebkitTextStroke: '3px #F130EE',
                        transform: 'skewX(-5deg)',
                        letterSpacing: '0.15em',
                        fontSize: '75px',
                        fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                        width: '467px',
                        height: '93px',
                        lineHeight: '93px',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    GAME START IN...
                </h2>

                {/* Contenedores de cuenta regresiva - estilo synthwave */}
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-[12px]">
                    {/* Días */}
                    <div 
                        className="
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
                            className="font-black text-[#1DF2F2]"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '96px',
                                lineHeight: '0.8',
                                marginBottom: '-10px'
                            }}
                        >
                            {timeLeft.days.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[#1DF2F2] uppercase tracking-widest font-bold"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '24px',
                                lineHeight: '0.8'
                            }}
                        >
                            DÍAS
                        </div>
                    </div>

                    {/* Horas */}
                    <div 
                        className="
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
                            className="font-black text-[#1DF2F2] mb-0"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '96px',
                                lineHeight: '1'
                            }}
                        >
                            {timeLeft.hours.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[#1DF2F2] uppercase tracking-widest font-bold mt-1"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '24px',
                                lineHeight: '1'
                            }}
                        >
                            HORAS
                        </div>
                    </div>

                    {/* Minutos */}
                    <div 
                        className="
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
                            className="font-black text-[#1DF2F2] mb-0"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '96px',
                                lineHeight: '1'
                            }}
                        >
                            {timeLeft.minutes.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[#1DF2F2] uppercase tracking-widest font-bold mt-1"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '24px',
                                lineHeight: '1'
                            }}
                        >
                            MINUTOS
                        </div>
                    </div>

                    {/* Segundos */}
                    <div 
                        className="
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
                            className="font-black text-[#1DF2F2] mb-0"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '96px',
                                lineHeight: '1'
                            }}
                        >
                            {timeLeft.seconds.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[#1DF2F2] uppercase tracking-widest font-bold mt-1"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '24px',
                                lineHeight: '1'
                            }}
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
