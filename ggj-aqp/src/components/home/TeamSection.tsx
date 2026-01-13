import max from "@/assets/team/Image.png";
import sarah from "@/assets/team/Image.png";
import david from "@/assets/team/Image.png";
import michael from "@/assets/team/Image.png";

const team = [
  {
    name: "Max",
    role: "Comunicación y Diseño",
    image: max,
  },
  {
    name: "Sarah Pepe",
    role: "Coordinación y Logística",
    image: sarah,
  },
  {
    name: "David Dias",
    role: "Gestión",
    image: david,
  },
  {
    name: "Michael Turner",
    role: "Asesor Legal",
    image: michael,
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
                                    className="w-full h-auto max-h-[300px] md:h-[320px] object-contain md:object-cover"
                                />
                            </div>

                            {/* Twitter button */}
                            <div className="flex justify-center -mt-6">
                                <a className="bg-[#7C4DFF] rounded-full p-3 shadow-lg hover:scale-105 transition hover:cursor-pointer" href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.557 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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
