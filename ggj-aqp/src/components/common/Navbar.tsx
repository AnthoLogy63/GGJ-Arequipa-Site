import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logos/AQP-GGJ_logo-h.svg';

const Navbar = () => {
    const location = useLocation();
    const isRegistrationPage = location.pathname === '/inscripcion';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 bg-[#090113]/90 backdrop-blur-[8px] text-white py-[0.8rem] z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <div className="flex justify-between items-center w-full m-0 px-12 sm:px-6">
                <div className="flex items-center">
                    <Link to="/" onClick={scrollToTop}>
                        <img
                            src={logo}
                            alt="GGJ Arequipa 2026"
                            className="h-[75px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>

                <button
                    className={`flex flex-col gap-[5px] bg-transparent border-none cursor-pointer md:hidden z-[1002] ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className={`w-[25px] h-[3px] bg-white rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`}></span>
                    <span className={`w-[25px] h-[3px] bg-white rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-[25px] h-[3px] bg-white rounded-[2px] transition-all duration-300 ${isMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></span>
                </button>

                <div className={`
                    flex gap-8 items-center
                    /* Mobile Styles (Base) */
                    absolute top-full right-8 w-[250px] flex-col justify-start p-6 rounded-[15px]
                    bg-[#090113]/95 backdrop-blur-[10px] border border-white/10 shadow-2xl
                    transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                    
                    /* Mobile Visibility State */
                    ${isMenuOpen ? 'translate-y-[10px] opacity-100 visible' : '-translate-y-[20px] opacity-0 invisible pointer-events-none'}

                    /* Desktop Overrides (Reset to standard navbar) */
                    md:static md:w-auto md:h-auto md:flex-row md:p-0 
                    md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none
                    md:translate-y-0 md:opacity-100 md:visible md:pointer-events-auto
                `}>
                    {isRegistrationPage ? (
                        <Link
                            to="/"
                            style={{ textDecoration: 'none' }}
                            onClick={scrollToTop}
                            className="w-full md:w-auto"
                        >
                            <button className="bg-transparent border-none cursor-pointer text-white text-[0.9rem] font-medium transition-colors duration-300 hover:text-[#D334E9] md:text-[1rem] w-full md:w-auto">
                                Volver al Home
                            </button>
                        </Link>
                    ) : (
                        <>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="bg-transparent border-none cursor-pointer text-white text-[0.9rem] font-medium transition-colors duration-300 hover:text-[#D334E9] md:text-[1rem] w-full md:w-auto"
                            >
                                Sobre el evento
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-transparent border-none cursor-pointer text-white text-[0.9rem] font-medium transition-colors duration-300 hover:text-[#D334E9] md:text-[1rem] w-full md:w-auto"
                            >
                                Contacto
                            </button>
                            <Link
                                to="/inscripcion"
                                style={{ textDecoration: 'none' }}
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full md:w-auto"
                            >
                                <button className="bg-[#D334E9] text-white border-none py-[0.5rem] px-[1.4rem] rounded-[50px] font-bold text-[0.9rem] cursor-pointer uppercase transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] shadow-[0_4px_6px_rgba(211,52,233,0.3)] hover:scale-105 hover:-translate-y-[2px] hover:shadow-[0_10px_20px_rgba(211,52,233,0.5)] hover:bg-[#e045f5] active:scale-95 active:shadow-[0_2px_4px_rgba(211,52,233,0.3)] w-full md:w-auto md:text-[1rem] md:py-[0.6rem] md:px-[1rem]">
                                    INSCRIPCION
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
