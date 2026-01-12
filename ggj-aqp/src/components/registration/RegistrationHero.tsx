import Fondo1 from '../../assets/images/backgrounds/Fondo1.webp';

const RegistrationHero = () => {
    return (
        <section 
            style={{ 
                position: 'relative',
                backgroundImage: `url(${Fondo1})`,
                backgroundSize: '120%',
                backgroundPosition: 'center 40%',
                backgroundRepeat: 'no-repeat',
                padding: '8rem 2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '70vh',
                overflow: 'hidden'
            }}
        >
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    zIndex: 1
                }}
            ></div>
            <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
                <h1 
                    style={{ 
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '3.5rem',
                        marginBottom: '0.5rem',
                        lineHeight: '1.1'
                    }}
                >
                    Asegura tu lugar en la
                </h1>
                
                <div 
                    style={{ 
                        display: 'inline-block',
                        backgroundColor: '#00FFFF',
                        padding: '0.3rem 1rem',
                        marginBottom: '1rem'
                    }}
                >
                    <h2 
                        style={{ 
                            fontFamily: 'Zing Rust Demo, sans-serif',
                            color: '#4A0E4E',
                            fontSize: '2.5rem',
                            margin: 0
                        }}
                    >
                        GAME JAM
                    </h2>
                </div>
                
                <p 
                    style={{ 
                        fontFamily: 'Raleway, sans-serif',
                        color: '#D7D7D7',
                        fontSize: '24px',
                        fontWeight: 'normal',
                        margin: 0
                    }}
                >
                    Sigue los pasos para unirte al evento de desarrollo de videojuegos más importante de Arequipa
                </p>
            </div>
        </section>
    );
};

export default RegistrationHero;
