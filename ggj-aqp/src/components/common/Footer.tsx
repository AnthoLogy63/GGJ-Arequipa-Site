import { Link, useLocation, useNavigate } from 'react-router-dom';
import iconLogo from '../../assets/logos/AQP-GGJ_icon.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigation = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        if (location.pathname === '/') {
            scrollToSection(id);
        } else {
            navigate(`/#${id}`);
            // Optional: fallback if hash navigation doesn't scroll automatically
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
            }, 100);
        }
    };

    return (
        <footer className="bg-[#090113] text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
                    {/* Column 1: Brand */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="font-bold text-xl leading-tight text-center md:text-left">
                            AREQUIPA<br />
                            GAME JAM<br />
                            {currentYear}
                        </h3>
                        <div className="w-32 h-32 relative flex justify-center items-center">
                            <Link to="/" onClick={scrollToTop}>
                                <img
                                    src={iconLogo}
                                    alt="GGJ Arequipa Icon"
                                    className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(211,52,233,0.3)] transition-transform hover:scale-105 select-none"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-bold text-lg mb-2">Links Rápidos</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="hover:text-[#19FFFF] transition-colors cursor-pointer">Qué es GGJ</a></li>
                            <li><a href="#registration" onClick={(e) => handleNavigation(e, 'registration')} className="hover:text-[#19FFFF] transition-colors cursor-pointer">Inscripción</a></li>
                            <li><a href="#schedule" onClick={(e) => handleNavigation(e, 'schedule')} className="hover:text-[#19FFFF] transition-colors cursor-pointer">Cronograma</a></li>
                            <li><a href="#faq" onClick={(e) => handleNavigation(e, 'faq')} className="hover:text-[#19FFFF] transition-colors cursor-pointer">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-bold text-lg mb-2">Contacto:</h4>
                        <div className="flex flex-col space-y-2 text-gray-300">
                            <a
                                className="hover:text-[#19FFFF] transition-colors cursor-pointer"
                                onClick={() => navigator.clipboard.writeText("info@arequipagamejam.com")}
                            >
                                info@arequipagamejam.com
                            </a>
                            <a
                                className="hover:text-[#19FFFF] transition-colors cursor-pointer"
                                onClick={() => navigator.clipboard.writeText("WhatsApp: +51 9XX XXX XXX")}
                            >
                                WhatsApp: +51 9XX XXX XXX
                            </a>
                            <p>UNSA, Arequipa, Perú</p>
                        </div>
                    </div>

                    {/* Column 4: Credits */}
                    <div className="flex flex-col space-y-4">
                        <div className="space-y-1">
                            <span className="text-gray-300">Diseñado por:</span>
                            <a href="#" className="block text-[#19FFFF] hover:underline font-medium">Alexandra Raquel Quispe Arratea</a>
                        </div>
                        <div className="space-y-1">
                            <span className="text-gray-300">Desarrollado por:</span>
                            <div className="flex flex-col space-y-1">
                                <a href="#" className="text-[#19FFFF] hover:underline font-medium">Ajra Huacso, Jeans Anthony</a>
                                <a href="#" className="text-[#19FFFF] hover:underline font-medium">Alfaro Buiza, Jesus Alberto</a>
                                <a href="#" className="text-[#19FFFF] hover:underline font-medium">Aliaga Chaiña, Sandra Gabriela</a>
                                <a href="#" className="text-[#19FFFF] hover:underline font-medium">Alvarez Astete, Jheeremy Manuel</a>
                                <a href="#" className="text-[#19FFFF] hover:underline font-medium">Garambel Marin, Fernando Miguel</a>
                                <a href="#" className="text-[#19FFFF] hover:underline font-medium">Luque Condori, Luis Guillermo</a>
                                <a href="#" className="text-[#19FFFF] hover:underline font-medium">Sequeiros Condori, Luis Gustavo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-white/25 my-8 " />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
                    <div className="order-3 md:order-1">
                        © {currentYear} Global Game Jam Arequipa
                    </div>

                    <div className="order-1 md:order-2 flex items-center gap-2">
                        <span>Con</span>
                        <svg className="w-5 h-5 text-[#E045F5] fill-current animate-pulse" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>desde Arequipa</span>
                    </div>

                    <div className="order-2 md:order-3 flex items-center gap-6">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#19FFFF]/80 hover:text-[#19FFFF] transform hover:scale-110 transition-all">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68"/>
                            </svg>
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#E045F5]/80 hover:text-[#E045F5] transform hover:scale-110 transition-all">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12z"/>
                            </svg>
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#9C27B0]/80 hover:text-[#9C27B0] transform hover:scale-110 transition-all">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
