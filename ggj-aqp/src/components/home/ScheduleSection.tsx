import { useState } from 'react';
import fondoImage from '@/assets/images/backgrounds/Fondo1.webp';

type DaySchedule = {
  title: string;
  date: string;
  description: string;
  events: Array<{
    time: string;
    location: string;
    tiempo: string;
    desc: string;
  }>;

};

const scheduleData: Record<string, DaySchedule> = {
  "DIA 1": {
    title: "KICKOFF & IDEACIÓN",
    date: "LUN 26",
    description: "Bienvenida, revelación del tema y arranque del desarrollo.",
    events: [
      { time: "02:00 PM", location: "Auditorio Principal", tiempo: "5 min", desc: "Palabras de inauguración del evento por parte del Director de la Dirección de Innovación y Transferencia Tecnológica, Mag. Jesús Silva Fernández." },
      { time: "02:05 PM", location: "Auditorio Principal", tiempo: "10 min", desc: "Acogida por parte del staff. Se acompañará a los participantes y se proyectará un conteo regresivo de inicio (10 minutos)." },
      { time: "02:15 PM", location: "Auditorio Principal", tiempo: "10 min", desc: "Presentación del Laboratorio de Investigación." },
      { time: "02:25 PM", location: "Auditorio Principal", tiempo: "10 min", desc: "Presentación del Centro de Escalamiento." },
      { time: "02:35 PM", location: "Auditorio Principal", tiempo: "15 min", desc: "Charla de bienvenida a los participantes de la Game Jam." },
      { time: "02:50 PM", location: "Auditorio Principal", tiempo: "30 min", desc: "Charla: Tipos de videojuegos: formas, estilos y experiencias de juego." },
      { time: "03:20 PM", location: "Auditorio Principal", tiempo: "20 min", desc: "Charla: Recomendaciones para game jams." },
      { time: "03:40 PM", location: "Auditorio Principal", tiempo: "5 min", desc: "Proyección de la revelación del tema mundial." },
      { time: "03:45 PM", location: "Auditorio Principal", tiempo: "30 min", desc: "Distribución de grupos." },
      { time: "04:15 PM", location: "Auditorio Principal", tiempo: "95 min", desc: "Espacio de trabajo: definición de la idea del videojuego." },
      { time: "05:50 PM", location: "Auditorio Principal", tiempo: "10 min", desc: "Avisos finales: recordatorio de actividades del día viernes y tips generales." },
    ]
  },
  "DIA 2": {
    title: "DESARROLLO INTENSIVO",
    date: "VIE 30",
    description: "Desarrollo completo, mentorías y actividades de interacción.",
    events: [
      { time: "09:00 AM", location: "Auditorio Principal", tiempo: "45 min", desc: "Registro de participantes y entrega de merchandising." },
      { time: "09:45 AM", location: "Auditorio Principal", tiempo: "15 min", desc: "Bienvenida." },
      { time: "10:00 AM", location: "Auditorio Principal", tiempo: "30 min", desc: "Charla: Prototipado en Godot." },
      { time: "10:30 AM", location: "Auditorio Principal", tiempo: "30 min", desc: "Charla: Prototipado en Unity." },
      { time: "11:00 AM", location: "Transicion", tiempo: "15 min", desc: "Traslado del auditorio al salón (descanso)." },
      { time: "11:15 AM", location: "Salón", tiempo: "135 min", desc: "Mentoría + trabajo en equipo (avance del videojuego)." },
      { time: "13:30 PM", location: "Salón", tiempo: "90 min", desc: "Hora de almuerzo." },
      { time: "15:00 PM", location: "Salón", tiempo: "120 min", desc: "Mentoría + trabajo en equipo (avance del videojuego)." },

    ]
  },
  "DIA 3": {
    title: "CIERRE & SHOWCASE",
    date: "SAB 31",
    description: "Toques finales, presentaciones de proyectos y clausura del evento.",
    events: [
      { time: "09:00 AM", location: "Auditorio Principal", tiempo: "45 min", desc: "Registro de participantes y entrega de merchandising." },
      { time: "09:45 AM", location: "Auditorio Principal", tiempo: "15 min", desc: "Bienvenida." },
      { time: "10:00 AM", location: "Auditorio Principal", tiempo: "60 min", desc: "Charla: Introducción a presentaciones y pitch" },
      { time: "11:00 AM", location: "Transicion", tiempo: "15 min", desc: "Traslado del auditorio al salón (descanso)." },
      { time: "11:15 AM", location: "Salón", tiempo: "135 min", desc: "Mentoría + trabajo en equipo (avance del videojuego)." },
      { time: "13:30 PM", location: "Salón", tiempo: "90 min", desc: "Hora de almuerzo." },
      { time: "15:00 PM", location: "Auditorio Principal", tiempo: "105 min", desc: "Presentación de avances de videojuegos (5 min por equipo + 2 min de transición aprox., 15 equipos)." },
      { time: "16:45 PM", location: "Auditorio Principal", tiempo: "15 min", desc: "Clausura: cierre del evento, entrega de certificados y foto grupal." },
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
          src={fondoImage}
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
          <button 
          onClick={() => window.open('https://docs.google.com/document/d/1uw-fCYhpVLfFV1qol3inpousszDwcHmimBvMaRHQ93w/edit?tab=t.b15ppru436an', '_blank')} 
          className="
                                select-none
                                w-full max-w-[300px]
                                h-[60px]
                                px-4
                                rounded
                                font-bold
                                uppercase
                                tracking-wider
                                text-xs md:text-sm
                                cursor-pointer
                                border
                                bg-transparent
                                text-[#FFA1FE]
                                transition-all duration-300
                                hover:scale-105
                                hover:bg-[#fa48f7]
                                hover:text-black
                                hover:shadow-[0_0_20px_#F130EE]
                            "
            style={{ borderColor: "#F130EE" }}>
            ABRIR CRONOGRAMA COMPLETO
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-10 pb-20">

        <div className="flex gap-3 mb-6">
          <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex flex-row md:justify-center gap-3 min-w-max px-4">
              {Object.keys(scheduleData).map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`cursor-pointer px-6 md:px-10 py-3 rounded-xl font-bold transition-all border-2 text-sm md:text-base whitespace-nowrap ${activeDay === day
                      ? "border-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.4)] text-white"
                      : "border-gray-800 bg-gray-900/50 text-gray-500 hover:border-gray-600"
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-800 rounded-[40px] p-8 md:p-16 bg-[#0a0510]/80 backdrop-blur-md flex flex-col md:flex-row gap-12 shadow-2xl">
          <div className="md:w-2/5 mx-auto mt-[30vh] mb-[30vh]">
            <div className="sticky top-10">
              <h3 className="text-[120px] italic text-7xl font-black text-cyan-400 leading-none italic mb-4 -rotate-10">
                {activeDay}
                <p className="italic text-2xl font-bold text-purple-400 mb-6 tracking-tight leading-tight">
                {currentDayData.title}
              </p>
              </h3>
              <div className="mt-15">
                <p className="text-[22px] text-xl font-bold">{currentDayData.date}</p>
                <p className="text-[20px] text-gray-400 leading-relaxed italic">
                  "{currentDayData.description}"
                </p>
              </div>
            </div>
          </div>


          <div className="md:w-3/5 relative ml-4">
            {currentDayData.events.map((event, index) => {
              const colors = [
              { dot: "bg-[#1DF2F2]", line: "bg-[#1DF2F2]", text: "text-[#1DF2F2]" }, // Cian Brillante
              { dot: "bg-[#2EE5F3]", line: "bg-[#2EE5F3]", text: "text-[#2EE5F3]" }, // Turquesa
              { dot: "bg-[#40D8F4]", line: "bg-[#40D8F4]", text: "text-[#40D8F4]" }, // Azul Cielo
              { dot: "bg-[#50C3EF]", line: "bg-[#50C3EF]", text: "text-[#50C3EF]" }, // Azul Soft
              { dot: "bg-[#60B2ED]" , line: "bg-[#60B2ED]", text: "text-[#60B2ED]" }, // Azul Acero
              { dot: "bg-[#71A5EE]", line: "bg-[#71A5EE]", text: "text-[#71A5EE]" }, // Lavanda
              { dot: "bg-[#9189ED]", line: "bg-[#9189ED]", text: "text-[#9189ED]" }, // Violeta Claro
              { dot: "bg-[#B568EB]", line: "bg-[#B568EB]", text: "text-[#B568EB]" }, // Púrpura
              { dot: "bg-[#E43BEA]", line: "bg-[#E43BEA]", text: "text-[#E43BEA]" }, // Rosa Neón
              { dot: "bg-[#EC34E9]", line: "bg-[#EC34E9]", text: "text-[#EC34E9]" }, // Fucsia
              { dot: "bg-[#F02FE9]", line: "bg-[#F02FE9]", text: "text-[#F02FE9]" }, // Rosa Fuerte
              { dot: "bg-[#F429A4]", line: "bg-[#F429A4]", text: "text-[#F429A4]" }, // Magenta Profundo
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
                      <p className={`${color.text} text-gray-250 text-[13px] font-bold tracking-[0.15em] uppercase mb-1`}>
                        {event.location}
                      </p>
                      <p className="text-[16px] text-gray-200 text-sm leading-relaxed">
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
