import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isRegistrationPage = location.pathname === '/inscripcion';

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const buttonStyle = {
        cursor: 'pointer',
        padding: '0.5rem 1rem',
        border: 'none',
        backgroundColor: 'transparent',
        color: 'black',
        fontSize: '1rem',
        transition: 'color 0.3s ease'
    };

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            color: 'black',
            padding: '1rem',
            borderBottom: '1px solid #ccc',
            zIndex: 1000
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div>
                    <h2 style={{ color: 'black' }}>LOGO GGJ</h2>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {isRegistrationPage ? (
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <button
                                style={buttonStyle}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#666'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                            >
                                Volver al Home
                            </button>
                        </Link>
                    ) : (
                        <>
                            <button
                                onClick={() => scrollToSection('about')}
                                style={buttonStyle}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#666'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                            >
                                Sobre el Evento
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                style={buttonStyle}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#666'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                            >
                                Contacto
                            </button>
                            <Link to="/inscripcion" style={{ textDecoration: 'none' }}>
                                <button
                                    style={buttonStyle}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#666'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
                                >
                                    Inscripción
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
