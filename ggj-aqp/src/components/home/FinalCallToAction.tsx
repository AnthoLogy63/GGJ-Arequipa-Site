import ctaImage from "@/assets/finalCallToAction/fotoPersonas.png";
import ggjLogo from "@/assets/finalCallToAction/ggjImagen.png";
import coraImage from "@/assets/finalCallToAction/corazon.png";
import mandoImage from "@/assets/finalCallToAction/mando.png";

const FinalCallToAction = () => {
    return (
        <section className="relative overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#12091f] via-[#1b1030] to-[#12091f]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div className="flex-1 sm:px-20 md:text-center sm:lg:text-left md:whitespace-nowrap py-auto relative">
                        <h2 className="text-[clamp(2rem,4vw,3.7rem)] font-bold text-white leading-tight">
                            No necesitas {"  "}
                            <br className="hidden md:block" />
                            <span className="text-[#54F4FC]">experiencia previa</span> ni un
                            <br className="hidden md:block" />
                            {"  "}equipo armado.
                        </h2>

                        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                            Solo ganas de crear, aprender y compartir.
                        </p>

                        <div className="hidden border-t-[#875FBE] border-l-[#786492] border-b-[#875FBE] border-r-0 lg:block absolute border-2 -ml-[calc(4%+3px)] top-0 mt-[4%] h-[70%] w-[4%]">
                        </div>

                        <div className="hidden mt-20 lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => {
                                    const element = document.getElementById('registration');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="px-8 py-4 rounded-xl bg-[#54F4FC] text-black font-semibold hover:cursor-pointer hover:scale-105 transition"
                            >
                                QUIERO SER PARTE
                            </button>

                            <a href="https://www.instagram.com/acm.unsa/" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-4 rounded-xl border border-[#54F4FC] text-[#54F4FC] font-semibold hover:bg-[#54F4FC]/15 hover:scale-105 hover:cursor-pointer transition">
                                    HABLA CON NOSOTROS
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 relative sm:mt-5 sm:pl-8 pb-28 pt-5 md:pr-15 flex justify-center">
                        <div className="relative">
                            <img
                                src={ctaImage}
                                alt="Global Game Jam"
                                className="w-[280px] sm:w-[340px] md:w-[350px] rounded-xl shadow-2xl rotate-[1deg]"
                            />

                            <img
                                src={ggjLogo}
                                alt="GGJ Logo"
                                className="absolute w-[65%] -bottom-[32%] -right-10 rotate-[5deg]"
                            />

                            <img
                                src={mandoImage}
                                alt="Mando Image"
                                className="absolute w-[42%] bottom-[22%] -right-[25%]"
                            />

                            <img
                                src={coraImage}
                                alt="Cora Image"
                                className="absolute w-[50%] -bottom-27 left-12"
                            />

                        </div>
                        <span className="absolute -top-0 -left-0 w-4 h-4 border-l-2 border-t-2 border-[#54F4FC]" />
                        <span className="absolute -top-0 -right-0 w-4 h-4 border-r-2 border-t-2 border-[#54F4FC]" />
                        <span className="absolute -bottom-0 -left-0 w-4 h-4 border-l-2 border-b-2 border-[#54F4FC]" />
                        <span className="absolute -bottom-0 -right-0 w-4 h-4 border-r-2 border-b-2 border-[#54F4FC]" />
                    </div>
                </div>

                <div className="mt-12 lg:hidden">
                    <button
                        onClick={() => {
                            const element = document.getElementById('registration');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="w-full px-8 py-5 rounded-xl bg-[#54F4FC] text-black font-semibold text-lg"
                    >
                        QUIERO SER PARTE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCallToAction;
