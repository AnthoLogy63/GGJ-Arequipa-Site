import fernando from "@/assets/team/Fernando Peralta.webp";
import romina from "@/assets/team/RominaCamargo.webp";
import sharon from "@/assets/team/SHARON MISHEL CONDORI PANIGUARA.webp";
import jose from "@/assets/team/Jose Ismael Cahuana Turpo.webp";
import jeans from "@/assets/team/JEANS ANTHONY AJRA HUACSO.webp";
import edson from "@/assets/team/EDSON PEDRO MIRANDA CALLO.webp";
import sandra from "@/assets/team/SANDRA GABRIELA ALIAGA CHAIÑA.webp";
import tania from "@/assets/team/TANIA LUZ AYQUE PURACA.webp";

const team = [
  {
    name: "Tania Ayque",
    role: "Presidente ACM UNSA",
    image: tania,
    link: "https://www.linkedin.com/in/tniia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Romina Camargo",
    role: "Vicepresidenta ACM UNSA",
    image: romina,
    link: "https://www.linkedin.com/in/romina-giuliana-camargo-hilachoque-4b2a32350/"
  },
    {
    name: "Sandra Aliaga",
    role: "Secretaria ACM UNSA",
    image: sandra,
    link: "https://www.linkedin.com/in/sandra-aliaga-03663a324/"
  },

  {
    name: "Sharon Condori",
    role: "Tesorera ACM UNSA",
    image: sharon,
    link: "https://www.linkedin.com/in/sharon-mishel-condori-paniguara-a60b5a270/"
  },
  {
    name: "Fernando Peralta",
    role: "Presidente ACM UCSP",
    image: fernando,
    link: "https://www.linkedin.com/in/fernandoperaltab/"
  },
  {
    name: "Edson Miranda",
    role: "Miembro ACM UNSA",
    image: edson,
    link: "http://www.linkedin.com/in/edsonmc"
  },
  {
    name: "Anthony Ajra",
    role: "Tesorero IEEE UNSA",
    image: jeans,
    link: "https://www.linkedin.com/in/anthonyajra/"
  },
  {
    name: "Jose Cahuana",
    role: "Director Volcán Game Lab",
    image: jose,
    link: "https://fallthem000.itch.io/"
  },


];

const TeamSection = () => {
    return (
        <section className="relative py-20 px-6">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#12091f] via-[#1b1030] to-[#12091f]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-white font-bold text-4xl md:text-6xl">
                    Nuestro <span className="text-[#54F4FC]">equipo.</span>
                </h2>

                {/* Cards: responsive grid 1 / 2 / 4 */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="
                                rounded-2xl
                                border border-white/10
                                bg-white/5
                                backdrop-blur
                                p-6
                                text-center
                                hover:scale-101 
                                hover:bg-white/10

                                transition
                            "
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-auto max-h-[400px] md:h-[320px] object-contain md:object-cover"
                                />
                            </div>

                            {/* button */}
                            <div className="flex justify-center -mt-6">
                                <a className="bg-[#7C4DFF] rounded-full p-3 shadow-lg hover:scale-105 transition hover:cursor-pointer" href={member.link} target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                      {member.name == "Jose Cahuana" ?
                                      (
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 
           10-4.477 10-10S17.523 2 12 2zm7.938 9h-3.017a16.023 16.023 0 0 0-1.214-5.218A8.01 8.01 0 0 1 19.938 11zM12 4a14.04 14.04 0 0 1 1.75 5H10.25A14.04 14.04 0 0 1 12 4zM4.062 13h3.017a16.023 16.023 0 0 0 1.214 5.218A8.01 8.01 0 0 1 4.062 13zm0-2a8.01 8.01 0 0 1 4.231-5.218A16.023 16.023 0 0 0 7.078 11H4.062zm5.188 2h5.5a14.08 14.08 0 0 1-2.75 5 14.08 14.08 0 0 1-2.75-5zm5.747-2H9.003a14.08 14.08 0 0 1 2.75-5 14.08 14.08 0 0 1 2.75 5zm.192 7.218A16.023 16.023 0 0 0 16.922 13h3.017a8.01 8.01 0 0 1-4.231 5.218z" />
                                      ):
                                      (
                                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.21 8.66h4.55v14.56H.21V8.66zM8.25 8.66h4.36v1.99h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99v8.97h-4.54v-7.94c0-1.89-.03-4.33-2.64-4.33-2.64 0-3.04 2.06-3.04 4.19v8.08H8.25V8.66z" />
                                      )}
                                    </svg>
                                </a>
                            </div>

                            {/* Text */}
                            <div className="mt-6">
                                <p className="text-white font-semibold text-lg">
                                    {member.name}
                                </p>
                                <p className="text-sm text-gray-400 mt-1">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
