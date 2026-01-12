import { useState, useEffect } from 'react';

const CountdownSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [glitchText, setGlitchText] = useState('GAME START IN...');
    const originalText = 'GAME START IN...';
    const glitchChars = '!@#$%^&*(){}[]<>?/|\\~`';

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

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                const textArray = originalText.split('');
                const glitchedArray = textArray.map((char, index) => {
                    if (char !== ' ' && Math.random() > 0.7) {
                        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    }
                    return char;
                });
                setGlitchText(glitchedArray.join(''));
                
                setTimeout(() => {
                    setGlitchText(originalText);
                }, 50);
            }
        }, 1200);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <>
            <style>
                {`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                    
                    @keyframes floatDiamond {
                        0%, 100% { transform: translateY(0px) rotate(45deg); }
                        50% { transform: translateY(-8px) rotate(45deg); }
                    }
                    
                    @keyframes pulse {
                        0%, 100% { opacity: 0.6; }
                        50% { opacity: 1; }
                    }
                    
                    @keyframes fadeInOut {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 0.8; }
                    }
                    
                    @keyframes shimmer {
                        0% { opacity: 0.4; transform: translateX(0); }
                        50% { opacity: 1; transform: translateX(2px); }
                        100% { opacity: 0.4; transform: translateX(0); }
                    }
                    
                    @keyframes glitch {
                        0% {
                            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                                0.025em 0.04em 0 #fffc00;
                        }
                        15% {
                            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
                                0.025em 0.04em 0 #fffc00;
                        }
                        16% {
                            text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                                -0.05em -0.05em 0 #fffc00;
                        }
                        49% {
                            text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
                                -0.05em -0.05em 0 #fffc00;
                        }
                        50% {
                            text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                                0 -0.04em 0 #fffc00;
                        }
                        99% {
                            text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
                                0 -0.04em 0 #fffc00;
                        }
                        100% {
                            text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
                                -0.04em -0.025em 0 #fffc00;
                        }
                    }
                    
                    @keyframes glitchSkew {
                        0% { transform: skewX(-5deg) translateX(0); }
                        10% { transform: skewX(-5deg) translateX(-8px); }
                        11% { transform: skewX(-5deg) translateX(8px); }
                        12% { transform: skewX(-5deg) translateX(0); }
                        20% { transform: skewX(-5deg) translateX(0); }
                        30% { transform: skewX(-5deg) translateX(6px); }
                        31% { transform: skewX(-5deg) translateX(-6px); }
                        32% { transform: skewX(-5deg) translateX(0); }
                        50% { transform: skewX(-5deg) translateX(0); }
                        60% { transform: skewX(-5deg) translateX(-5px); }
                        61% { transform: skewX(-5deg) translateX(5px); }
                        62% { transform: skewX(-5deg) translateX(0); }
                        80% { transform: skewX(-5deg) translateX(0); }
                        90% { transform: skewX(-5deg) translateX(7px); }
                        91% { transform: skewX(-5deg) translateX(-7px); }
                        92% { transform: skewX(-5deg) translateX(0); }
                        100% { transform: skewX(-5deg) translateX(0); }
                    }
                `}
            </style>
            <section className="w-full py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-screen" style={{ backgroundColor: '#11091C' }}>
            <div className="relative max-w-7xl mx-auto text-center w-full">
                {/* Título estilo neon inclinado con efecto glitch hacker */}
                <h2 
                    className="font-black text-transparent mb-20 italic uppercase mx-auto"
                    style={{
                        WebkitTextStroke: '3px #F130EE',
                        letterSpacing: '0.15em',
                        fontSize: '75px',
                        fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                        width: '467px',
                        height: '93px',
                        lineHeight: '93px',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: 'glitchSkew 5s infinite, glitch 3s infinite'
                    }}
                >
                    {glitchText}
                </h2>

                {/* Contenedores de cuenta regresiva - estilo synthwave con decoraciones Cyberpunk HUD */}
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-[6px] relative" style={{ paddingTop: '3px', paddingBottom: '3px', paddingLeft: '3px', paddingRight: '3px' }}>
                    {/* ===== DECORACIONES CYBERPUNK HUD ===== */}
                    
                    {/* Marco superior izquierdo - Rosa con glow intenso */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '-20px',
                            left: '15%',
                            width: '45px',
                            height: '45px',
                            borderTop: '4px solid #F130EE',
                            borderLeft: '4px solid #F130EE',
                            borderTopLeftRadius: '18px',
                            filter: 'drop-shadow(0 0 12px #F130EE) drop-shadow(0 0 20px #F130EE)',
                            zIndex: 20
                        }}
                    />
                    
                    {/* Marco superior derecho - Cian con glow intenso */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '-20px',
                            right: '15%',
                            width: '45px',
                            height: '45px',
                            borderTop: '4px solid #1DF2F2',
                            borderRight: '4px solid #1DF2F2',
                            borderTopRightRadius: '18px',
                            filter: 'drop-shadow(0 0 12px #1DF2F2) drop-shadow(0 0 20px #1DF2F2)',
                            zIndex: 20
                        }}
                    />
                    
                    {/* Marco inferior derecho - Rosa con glow intenso */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            bottom: '-20px',
                            right: '15%',
                            width: '45px',
                            height: '45px',
                            borderBottom: '4px solid #F130EE',
                            borderRight: '4px solid #F130EE',
                            borderBottomRightRadius: '18px',
                            filter: 'drop-shadow(0 0 12px #F130EE) drop-shadow(0 0 20px #F130EE)',
                            zIndex: 20
                        }}
                    />

                    {/* Líneas horizontales - Izquierda */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '18%',
                            left: '180px',
                            width: '20px',
                            height: '2px',
                            background: '#1DF2F2',
                            borderRadius: '9999px',
                            boxShadow: '0 0 10px #1DF2F2',
                            zIndex: 5,
                            animation: 'shimmer 2s ease-in-out infinite'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '45%',
                            left: '175px',
                            width: '15px',
                            height: '2px',
                            background: '#F130EE',
                            borderRadius: '9999px',
                            opacity: 0.8,
                            zIndex: 5,
                            animation: 'shimmer 2.5s ease-in-out infinite 0.3s'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '75%',
                            left: '170px',
                            width: '18px',
                            height: '2px',
                            background: '#1DF2F2',
                            borderRadius: '9999px',
                            boxShadow: '0 0 10px #1DF2F2',
                            zIndex: 5,
                            animation: 'shimmer 2.2s ease-in-out infinite 0.5s'
                        }}
                    />

                    {/* Líneas horizontales - Derecha */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '25%',
                            right: '180px',
                            width: '20px',
                            height: '2px',
                            background: '#F130EE',
                            borderRadius: '9999px',
                            boxShadow: '0 0 10px #F130EE',
                            zIndex: 5,
                            animation: 'shimmer 2.3s ease-in-out infinite 0.2s'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '60%',
                            right: '170px',
                            width: '16px',
                            height: '2px',
                            background: '#1DF2F2',
                            borderRadius: '9999px',
                            opacity: 0.9,
                            zIndex: 5,
                            animation: 'shimmer 2.6s ease-in-out infinite 0.4s'
                        }}
                    />

                    {/* Líneas verticales - Izquierda */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            bottom: '10%',
                            left: '180px',
                            width: '2px',
                            height: '60px',
                            background: '#1DF2F2',
                            borderRadius: '9999px',
                            boxShadow: '0 0 10px #1DF2F2',
                            zIndex: 5,
                            animation: 'pulse 3s ease-in-out infinite'
                        }}
                    />

                    {/* Líneas verticales - Derecha */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            bottom: '15%',
                            right: '180px',
                            width: '2px',
                            height: '50px',
                            background: '#F130EE',
                            borderRadius: '9999px',
                            boxShadow: '0 0 10px #F130EE',
                            zIndex: 5,
                            animation: 'pulse 3.2s ease-in-out infinite 0.5s'
                        }}
                    />

                    {/* Rombos pequeños */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '-15px',
                            left: '35%',
                            width: '12px',
                            height: '12px',
                            border: '2px solid #F130EE',
                            transform: 'rotate(45deg)',
                            filter: 'drop-shadow(0 0 3px #F130EE) drop-shadow(0 0 1px #F130EE)',
                            zIndex: 5,
                            animation: 'floatDiamond 3s ease-in-out infinite'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '-10px',
                            right: '35%',
                            width: '8px',
                            height: '8px',
                            border: '2px solid #1DF2F2',
                            transform: 'rotate(45deg)',
                            filter: 'drop-shadow(0 0 3px #1DF2F2) drop-shadow(0 0 1px #1DF2F2)',
                            zIndex: 5,
                            animation: 'floatDiamond 3.5s ease-in-out infinite 0.5s'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            bottom: '-12px',
                            left: '35%',
                            width: '10px',
                            height: '10px',
                            border: '2px solid #F130EE',
                            transform: 'rotate(45deg)',
                            filter: 'drop-shadow(0 0 3px #F130EE) drop-shadow(0 0 1px #F130EE)',
                            zIndex: 5,
                            animation: 'floatDiamond 3.2s ease-in-out infinite 0.8s'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            bottom: '-10px',
                            right: '35%',
                            width: '8px',
                            height: '8px',
                            border: '2px solid #1DF2F2',
                            transform: 'rotate(45deg)',
                            filter: 'drop-shadow(0 0 3px #1DF2F2) drop-shadow(0 0 1px #1DF2F2)',
                            zIndex: 5,
                            animation: 'floatDiamond 3.8s ease-in-out infinite 1s'
                        }}
                    />

                    {/* Puntos pequeños con glow */}
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '30%',
                            left: '160px',
                            width: '4px',
                            height: '4px',
                            background: '#1DF2F2',
                            borderRadius: '50%',
                            filter: 'drop-shadow(0 0 4px #1DF2F2) drop-shadow(0 0 2px #1DF2F2)',
                            zIndex: 5,
                            animation: 'fadeInOut 2s ease-in-out infinite'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '55%',
                            right: '160px',
                            width: '4px',
                            height: '4px',
                            background: '#F130EE',
                            borderRadius: '50%',
                            filter: 'drop-shadow(0 0 4px #F130EE) drop-shadow(0 0 2px #F130EE)',
                            zIndex: 5,
                            animation: 'fadeInOut 2.5s ease-in-out infinite 0.3s'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            bottom: '-8px',
                            left: '42%',
                            width: '4px',
                            height: '4px',
                            background: '#1DF2F2',
                            borderRadius: '50%',
                            filter: 'drop-shadow(0 0 4px #1DF2F2) drop-shadow(0 0 2px #1DF2F2)',
                            zIndex: 5,
                            animation: 'fadeInOut 2.2s ease-in-out infinite 0.5s'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            bottom: '-5px',
                            right: '42%',
                            width: '3px',
                            height: '3px',
                            background: '#F130EE',
                            borderRadius: '50%',
                            filter: 'drop-shadow(0 0 4px #F130EE) drop-shadow(0 0 2px #F130EE)',
                            zIndex: 5,
                            animation: 'fadeInOut 2.8s ease-in-out infinite 0.7s'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '-8px',
                            left: '40%',
                            width: '3px',
                            height: '3px',
                            background: '#F130EE',
                            borderRadius: '50%',
                            filter: 'drop-shadow(0 0 4px #F130EE) drop-shadow(0 0 2px #F130EE)',
                            zIndex: 5,
                            animation: 'fadeInOut 2.4s ease-in-out infinite 0.2s'
                        }}
                    />
                    <div 
                        className="absolute pointer-events-none"
                        style={{
                            top: '-6px',
                            right: '40%',
                            width: '4px',
                            height: '4px',
                            background: '#1DF2F2',
                            borderRadius: '50%',
                            filter: 'drop-shadow(0 0 4px #1DF2F2) drop-shadow(0 0 2px #1DF2F2)',
                            zIndex: 5,
                            animation: 'fadeInOut 2.6s ease-in-out infinite 0.4s'
                        }}
                    />

                    {/* Círculo decorativo eliminado para centrar más */}

                    {/* ===== FIN DECORACIONES CYBERPUNK HUD ===== */}
                    
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
                            relative
                        "
                        style={{
                            backgroundColor: '#251241',
                            width: '210px',
                            height: '170px'
                        }}
                    >
                        {/* Borde celeste inferior izquierdo */}
                        <div 
                            className="absolute bottom-0 left-0"
                            style={{
                                width: '90px',
                                height: '90px',
                                borderBottom: '3px solid #1DF2F2',
                                borderLeft: '3px solid #1DF2F2',
                                borderBottomLeftRadius: '16px'
                            }}
                        />
                        <div 
                            className="font-black text-[#1DF2F2] mb-0"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '96px',
                                lineHeight: '1'
                            }}
                        >
                            {timeLeft.days.toString().padStart(2, '0')}
                        </div>
                        <div 
                            className="text-[#1DF2F2] uppercase tracking-widest font-bold mt-1"
                            style={{
                                fontFamily: 'Zing Rust Demo, Impact, sans-serif',
                                fontSize: '24px',
                                lineHeight: '1'
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
                            relative
                        "
                        style={{
                            backgroundColor: '#251241',
                            width: '210px',
                            height: '170px'
                        }}
                    >
                        {/* Borde celeste superior derecho */}
                        <div 
                            className="absolute top-0 right-0"
                            style={{
                                width: '90px',
                                height: '90px',
                                borderTop: '3px solid #1DF2F2',
                                borderRight: '3px solid #1DF2F2',
                                borderTopRightRadius: '16px'
                            }}
                        />
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
        </>
    );
};

export default CountdownSection;
