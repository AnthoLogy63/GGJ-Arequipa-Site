import { useState } from 'react';

type DaySchedule = {
  title: string;
  date: string;
  description: string;
  events: Array<{
    time: string;
    location: string;
    name: string;
    desc: string;
  }>;
>>>>>>> origin/feature/jheeremy
};

const scheduleData: Record<string, DaySchedule> = {
  "DIA 1": {
    title: "KICKOFF & IDEACIÓN",
    date: "VIE 30",
    description: "Bienvenida, revelación del tema y arranque del desarrollo.",
    events: [
      { time: "04:00 PM", location: "Lobby Principal - UNSA", name: "RECEPCIÓN Y ACREDITACIÓN", desc: "Recoge tu kit de bienvenida y credencial" },
      { time: "05:00 PM", location: "Auditorio Principal", name: "CEREMONIA DE APERTURA", desc: "Palabras de bienvenida del equipo organizador" },
      { time: "05:00 PM", location: "Auditorio Principal", name: "CHARLAS INTRODUCTORIAS", desc: "Palabras de bienvenida del equipo organizador" },
      { time: "05:00 PM", location: "Auditorio Principal", name: "REVELACIÓN DEL TEMA", desc: "El momento más esperado: descubre el tema sorpresa." },
      { time: "05:00 PM", location: "Área de Trabajo Colaborativo", name: "FORMACION DE EQUIPOS & BRAINSTORNING", desc: "Networking activo para formar equipos, sesión de ideación grupal" },
      { time: "05:00 PM", location: "Estaciones de Desarrollo", name: "INICIO DE DESARROLLO", desc: "¡Manos a la obra! Comienza la creación de tu juego." },
    ]
  },
  "DIA 2": { 
    title: "DESARROLLO INTENSIVO",
    date: "SAB 31",
    description: "Desarrollo completo, mentorías y actividades de interacción.",
    events: [
      { time: "09:00 AM", location: "Lobby Principal - UNSA", name: "APERTURA DIA 2", desc: "Revision del progreso con mentores" },
      { time: "09:30 AM", location: "Auditorio Principal", name: "DESARROLLO LIBRE MAS CHARLAS TECNICAS", desc: "Palabras de bienvenida del equipo organizador" },
      { time: "12:00 PM", location: "Auditorio Principal", name: "BLOQUE DE MENTORIAS", desc: "Palabras de bienvenida del equipo organizador" },
      { time: "02:00 PM", location: "Auditorio Principal", name: "ALMUERZO LIBRE", desc: "Food trucks disponibles en el campus. Aprovecha para descansar y socializar" },
      { time: "04:00 PM", location: "Auditorio Principal", name: "SPRINT DE DESARROLLO", desc: "Tiempo intensivo de trabajo. Mentores circulando para soporte" },
      { time: "09:00 PM", location: "Auditorio Principal", name: "CIERRE DIA 2", desc: "Checkpoint recomendado: Tu juego deberia ser jugable mañana" },

    ]
  },
  "DIA 3": { 
    title: "CIERRE & SHOWCASE",
    date: "DOM 1",
    description: "Toques finales, presentaciones de proyectos y clausura del evento.",
    events: [
      { time: "04:00 PM", location: "Lobby Principal - UNSA", name: "RECEPCIÓN Y ACREDITACIÓN", desc: "Recoge tu kit de bienvenida y credencial" },
      { time: "05:00 PM", location: "Auditorio Principal", name: "CEREMONIA DE APERTURA", desc: "Palabras de bienvenida del equipo organizador" },
      { time: "05:00 PM", location: "Auditorio Principal", name: "CHARLAS INTRODUCTORIAS", desc: "Palabras de bienvenida del equipo organizador" },
      { time: "05:00 PM", location: "Auditorio Principal", name: "REVELACIÓN DEL TEMA", desc: "El momento más esperado: descubre el tema sorpresa." },
      { time: "05:00 PM", location: "Área de Trabajo Colaborativo", name: "FORMACION DE EQUIPOS & BRAINSTORNING", desc: "Networking activo para formar equipos, sesión de ideación grupal" },
      { time: "05:00 PM", location: "Estaciones de Desarrollo", name: "INICIO DE DESARROLLO", desc: "¡Manos a la obra! Comienza la creación de tu juego." },
    ]
},
};

export const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState<string>("DIA 1");
  const currentDayData = scheduleData[activeDay];

  return (
    <section id="schedule" className="relative bg-[#0a0510] text-white overflow-hidden">
      
      {/* SECTOR SUPERIOR*/}
      <div className="relative h-[400px] w-full">
        <img 
          src="src\assets\images\backgrounds\Fondo1.webp" 
          alt="Cyberpunk Arequipa" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0510] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto pt-20 px-6">
          <h2 className="text-5xl font-bold mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Cronograma del Evento
          </h2>
          <p className="text-cyan-400 text-lg font-medium mb-6">
            3 días de Creatividad, Código y Comunidad.
          </p>
          <button className="border-2 border-pink-500 text-pink-500 font-bold px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            DESCARGAR CRONOGRAMA PDF
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-10 pb-20">

        <div className="flex gap-3 mb-6">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-10 py-3 rounded-xl font-bold transition-all border-2 ${
                activeDay === day 
                ? "border-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.4)] text-white" 
                : "border-gray-800 bg-gray-900/50 text-gray-500 hover:border-gray-600"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="border-2 border-gray-800 rounded-[40px] p-8 md:p-16 bg-[#0a0510]/80 backdrop-blur-md flex flex-col md:flex-row gap-12 shadow-2xl">
          
          <div className="md:w-2/5">
            <div className="sticky top-10">
                <h3 className="text-7xl font-black text-cyan-400 leading-none italic mb-4">
                  {activeDay}
                </h3>
                <p className="text-2xl font-bold text-purple-400 mb-6 tracking-tight leading-tight">
                  {currentDayData.title}
                </p>
                <div className="space-y-2">
                    <p className="text-xl font-bold">{currentDayData.date}</p>
                    <p className="text-gray-400 leading-relaxed italic">
                      "{currentDayData.description}"
                    </p>
                </div>
            </div>
          </div>


          <div className="md:w-3/5 relative ml-4">
            {currentDayData.events.map((event, index) => {
              const colors = [
                { dot: "bg-[#1DF2F2]", line: "bg-[#1DF2F2]", text: "text-[#1DF2F2]" }, // Cian brillante
                { dot: "bg-[#50C3EF]", line: "bg-[#50C3EF]", text: "text-[#50C3EF]" }, // Azul
                { dot: "bg-[#71A5EE]", line: "bg-[#71A5EE]", text: "text-[#71A5EE]" }, // Lavanda/Morado
                { dot: "bg-[#E43BEA]", line: "bg-[#E43BEA]", text: "text-[#E43BEA]" }, // Rosa neón
                { dot: "bg-[#F02FE9]", line: "bg-[#F02FE9]", text: "text-[#F02FE9]" }, // Rosa fuerte
                { dot: "bg-[#EC34E9]", line: "bg-[#EC34E9]", text: "text-[#EC34E9]" }, 
              ];

              const color = colors[index % colors.length];
              const nextColor = colors[(index + 1) % colors.length];

              return (
                <div key={index} className="mb-12 relative last:mb-0 pl-12">
                  {index !== currentDayData.events.length - 1 && (
                    <div 
                      className={`absolute left-[7px] top-[24px] w-[2px] h-[calc(100%+30px)] opacity-50 bg-gradient-to-b ${color.line} to-${nextColor.line.replace('bg-', '')}`} 
                    />
                  )}

                  <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${color.dot} z-10 shadow-[0_0_15px_rgba(inherit)] shadow-${color.dot.replace('bg-', '')}`} style={{ boxShadow: '0 0 15px currentColor' }} />
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <span className="text-gray-400 font-mono text-lg min-w-[95px] pt-0.5">
                      {event.time}
                    </span>

                    <div className="flex-1">
                      <p className={`${color.text} text-[11px] font-bold tracking-[0.15em] uppercase mb-1`}>
                        {event.location}
                      </p>
                      <h4 className="text-xl font-bold mb-2 text-white leading-tight">
                        {event.name}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ScheduleSection;
