import { useRef, type ComponentProps } from 'react';
import type React from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

function ListIcon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1DF2F2"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="drop-shadow-[0_0_10px_#1DF2F2]"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  )
}

function WorldIcon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F130EE"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="drop-shadow-[0_0_10px_#F130EE]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#39FF14"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="drop-shadow-[0_0_10px_#39FF14]"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function Hexagon(props: ComponentProps<'svg'>) {
  return (
    <svg width="208" height="241" viewBox="0 0 208 241" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_dd_126_1098)">
        <path d="M103.571 24L187.143 73V171L103.571 220L19.9998 171V73L103.571 24Z" fill="#11091C" />
      </g>
      <defs>
        <filter
          id="filter0_dd_126_1098"
          x="0"
          y="0"
          width="207.143"
          height="241"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0978106 0 0 0 0 0.422347 0 0 0 0 0.584615 0 0 0 0.6 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126_1098" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.461538 0 0 0 0 0.119822 0 0 0 0 0.456227 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_126_1098"
            result="effect2_dropShadow_126_1098"
          />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_126_1098" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

// function GradientCircle(props: ComponentProps<'svg'>) {
//   return (
//     <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//     <circle cx="18.5" cy="18.5" r="18.5" fill="url(#paint0_linear_126_1101)"/>
//     <defs>
//     <linearGradient id="paint0_linear_126_1101" x1="2.14158e-07" y1="17.9394" x2="33" y2="17.9394" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#28D7D7"/>
//     <stop offset="1" stop-color="#DA11D7"/>
//     </linearGradient>
//     </defs>
//     </svg>
//   )
// }

function DistributedDots(props: ComponentProps<'svg'>) {
  return (
    <svg width="21" height="89" viewBox="0 0 21 89" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z" fill="#F130EE" />
      <path d="M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z" fill="#F130EE" />
      <circle cx="2.5" cy="23.5" r="2.5" fill="#F130EE" />
      <circle cx="2.5" cy="44.5" r="2.5" fill="#F130EE" />
      <circle cx="2.5" cy="65.5" r="2.5" fill="#F130EE" />
      <path d="M21 23.5C21 24.8807 19.8807 26 18.5 26C17.1193 26 16 24.8807 16 23.5C16 22.1193 17.1193 21 18.5 21C19.8807 21 21 22.1193 21 23
.5Z" fill="#F130EE" />
      <path d="M21 23.5C21 24.8807 19.8807 26 18.5 26C17.1193 26 16 24.8807 16 23.5C16 22.1193 17.1193 21 18.5 21C19.8807 21 21 22.1193 21 23.5Z" fill="#F130EE" />
      <circle cx="18.5" cy="44.5" r="2.5" fill="#F130EE" />
      <circle cx="18.5" cy="65.5" r="2.5" fill="#F130EE" />

      <circle cx="18.5" cy="86.5" r="2.5" fill="#F130EE" />
    </svg>
  )
}

function SnakeLine(props: ComponentProps<'svg'>) {
  return (
    <svg width="572" height="588" viewBox="0 0 572 588" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15.0008 572.524C68.1017 568.486 63.4872 568.837 78.6304 567.685C78.6304 567.685 96.4342 565.184 136.4 560.902C176.365 556.619 288.268 526.179 337.887 476.191C387.506 426.203 355.703 360.576 355.703 360.576C355.703 360.576 338.192 329.129 330.798 318.859C317.996 301.076 279.251 219.902 321.928 160.284C331.687 146.652 341.382 134.106 356.94 120.811C371.529 108.345 383.03 101.383 391.891 94.0145C397.695 89.1868 406.947 83.2524 417.974 76.8108C441.35 63.1543 456.945 56.7132 463.693 54.0848C468.474 52.8948 554.398 15.8609 556.866 15.0042" stroke="url(#paint0_linear_126_1056)" stroke-width="30" stroke-linecap="round" />
      <defs>
        <linearGradient id="paint0_linear_126_1056" x1="757.959" y1="-280.996" x2="69.2199" y2="537.607" gradientUnits="userSpaceOnUse">
          <stop stop-color="#31ECFA" />
          <stop offset="1" stop-color="#B045A8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

interface StepIndicatorProps {
  stepNumber: number;
  side?: 'left' | 'right';
}

function StepIndicator({
  stepNumber,
  side = 'left',
}: StepIndicatorProps) {
  return (
    <div className={`flex items-center ${side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      <DistributedDots className={`${side === 'right' ? 'scale-x-[-1] ml-4' : 'mr-4'}`} />
      <div className="grid grid-cols-1 grid-rows-1 place-items-center">
        <Hexagon className="row-start-1 col-start-1" />
        <div className="row-start-1 col-start-1 text-center">
          <span className="font-semibold text-2xl">Paso</span>
          <br />
          <span className="font-bold text-5xl">{`0${stepNumber}`}</span>
        </div>
      </div>
      {/*<div className={`flex items-center ${side === 'right' ? 'flex-row-reverse translate-x-5' : 'flex-row -translate-x-5' }`}>
        <hr className="w-16 border-t-2 border-gray-400" />
        <GradientCircle className={`${side === 'right' ? 'scale-x-[-1]' : ''}`} />
      </div>*/}
    </div>
  )
}

interface StepCardProps {
  icon: React.ReactNode
  title: string;
  description: string;
  buttonContent?: string;
  buttonUrl?: string;
  buttonExternal?: boolean;
}

function StepCard(props: StepCardProps) {
  const buttonElement = props.buttonContent ? (
    <button className="group relative inline-block p-0.5 rounded-md hover:scale-105 transition-transform cursor-pointer">
      <div className="absolute inset-0 rounded-md bg-linear-to-r from-theme-light-purple to-theme-cyan" />
      <div className="relative h-full w-full bg-theme-background rounded-sm px-6 py-2">
        <span className="block text-center bg-clip-text text-transparent bg-linear-to-r from-theme-light-purple to-theme-cyan uppercase font-semibold">
          {props.buttonContent}
        </span>
      </div>
    </button>
  ) : null;

  return (
    <div className="flex flex-col items-center gap-y-4 w-full max-w-87.5 shrink-0 bg-theme-background/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50">
      {props.icon}
      <h3 className="font-bold text-xl text-center">{props.title}</h3>
      <p className="text-center text-gray-400">{props.description}</p>
      {props.buttonUrl && buttonElement ? (
        props.buttonExternal ? (
          <a href={props.buttonUrl} target="_blank" rel="noopener noreferrer">
            {buttonElement}
          </a>
        ) : (
          <a href={props.buttonUrl}>
            {buttonElement}
          </a>
        )
      ) : buttonElement}
    </div>
  )
}

interface StepQuestionProps {
  question: string;
  answerDescription: string | React.ReactNode;
  answerList: (string | React.ReactNode)[];
}

function StepQuestion(props: StepQuestionProps) {
  return (
    <div className="flex flex-col gap-y-4 w-full max-w-100 shrink-0">
      <h3 className="text-center text-transparent font-bold text-2xl bg-clip-text bg-linear-to-r from-theme-cyan to-theme-pink">{props.question}</h3>
      <p>{props.answerDescription}</p>
      <div className="h-0.5 bg-linear-to-r from-theme-blue via-theme-cyan to-theme-blue" />
      <ul className="list-disc list-inside marker:text-theme-cyan">
        {props.answerList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

interface StepProps {
  indicator: StepIndicatorProps;
  card: StepCardProps;
  questions: StepQuestionProps;
}

function BackgroundTrack({ side, stepNumber }: { side: 'left' | 'right', stepNumber: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
      <div className="absolute h-full w-px bg-linear-to-b from-transparent via-theme-cyan/30 to-transparent border-r border-dashed border-theme-cyan/20" />
      <div className={`absolute top-1/2 -translate-y-1/2 text-[30vh] md:text-[40vh] font-black text-theme-cyan/5 select-none max-w-full ${side === 'left' ? 'md:left-[10%]' : 'md:right-[10%]'}`}>
        0{stepNumber}
      </div>
    </div>
  );
}

// VERSIÓN DESKTOP - Elementos entran desde los lados
function StepDesktop(props: StepProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isLeft = props.indicator.side === 'left';

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // HEXÁGONO - Entra desde su lado y se queda fijo
  const hexagonX = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    isLeft ? [-400, 0, 0, 0] : [400, 0, 0, 0]
  );

  const hexagonOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0, 1, 1, 0.3]
  );

  // CARD - Entra desde el lado opuesto al hexágono y se detiene
  const cardX = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.8, 0.95],
    isLeft ? [800, 0, 0, -300] : [-800, 0, 0, 300]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.18, 0.82, 0.95],
    [0, 1, 1, 0]
  );

  // SNAKE LINE - Aparece en el medio
  const snakeOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.75, 0.85],
    [0, 1, 1, 0]
  );

  // PREGUNTAS - Entra desde el mismo lado que el card
  const questionX = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.7, 0.9],
    isLeft ? [800, 0, 0, -300] : [-800, 0, 0, 300]
  );

  const questionOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.28, 0.72, 0.9],
    [0, 1, 1, 0]
  );

  return (
    <div ref={targetRef} className="h-[400vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <BackgroundTrack side={props.indicator.side || 'left'} stepNumber={props.indicator.stepNumber} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          <div className={`flex items-center justify-center gap-4 lg:gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>

            {/* HEXÁGONO */}
            <motion.div
              style={{ x: hexagonX, opacity: hexagonOpacity }}
              className="shrink-0"
            >
              <StepIndicator {...props.indicator} />
            </motion.div>

            {/* CONTENIDO */}
            <div className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>

              {/* CARD */}
              <motion.div
                style={{ x: cardX, opacity: cardOpacity }}
                className="shrink-0"
              >
                <StepCard {...props.card} />
              </motion.div>

              {/* SNAKE LINE */}
              <motion.div
                style={{ opacity: snakeOpacity }}
                className="relative shrink-0 w-24 h-64 flex items-center justify-center"
              >
                <SnakeLine className={`absolute scale-x-50 scale-y-110 object-contain ${!isLeft ? 'scale-y-[-1.1] rotate-180' : ''}`} />
              </motion.div>

              {/* PREGUNTAS */}
              <motion.div
                style={{ x: questionX, opacity: questionOpacity }}
                className="shrink-0"
              >
                <StepQuestion {...props.questions} />
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

// VERSIÓN MOBILE - Todo el contenido se desliza horizontalmente junto
function StepMobile(props: StepProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isLeft = props.indicator.side === 'left';

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Todo el contenedor se mueve horizontalmente como una unidad
  const containerX = useTransform(
    scrollYProgress,
    [0, 0.26, 0.37, 0.63, 0.74, 1],
    isLeft
      ? ['0%', '0%', '-33%', '-33%', '-66%', '-66%']
      : ['-66%', '-66%', '-33%', '-33%', '0%', '0%']
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  return (
    <div ref={targetRef} className="h-[400vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <BackgroundTrack side={props.indicator.side || 'left'} stepNumber={props.indicator.stepNumber} />

        {/* Todo el contenido se mueve junto */}
        <motion.div
          style={{ x: containerX, opacity }}
          className={`z-10 h-full w-[300%] [&>div]:w-1/3 [&>div]:px-8 flex items-center [&>div]:px- ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
        >

          {/* HEXÁGONO */}
          <div className="shrink-0 flex justify-center">
            <StepIndicator {...props.indicator} />
          </div>

          {/* CARD */}
          <div className="shrink-0 flex justify-center">
            <StepCard {...props.card} />
          </div>

          {/* PREGUNTAS */}
          <div className="shrink-0 flex justify-center">
            <StepQuestion {...props.questions} />
          </div>

        </motion.div>
      </div>
    </div>
  )
}

// Componente que elige qué versión mostrar
function Step(props: StepProps) {
  return (
    <>
      {/* Mobile */}
      <div className="xl:hidden">
        <StepMobile {...props} />
      </div>

      {/* Desktop */}
      <div className="hidden xl:block">
        <StepDesktop {...props} />
      </div>
    </>
  )
}

const steps: StepProps[] = [
  {
    indicator: { stepNumber: 1, side: 'left' },
    card: {
      icon: <ListIcon />,
      title: 'Registro de Sede Arequipa',
      description: 'Llena el formulario local para confirmar tu participación',
      buttonContent: 'Completar Registro UNSA',
      buttonUrl: 'https://forms.fillout.com/t/mkgbTWNZ6Dus',
      buttonExternal: true
    },
    questions: {
      question: '¿Por qué necesito este registro?',
      answerDescription: (<>Este formulario es requerido para confirmar tu participación en la sede oficial de <b>Arequipa</b>. Nos permite:</>),
      answerList: [
        (<>Gestionar el accesos a las <b>instalaciones del evento</b>.</>),
        'Coordinar la logística y recursos necesarios.',
        'Enviarle información específica de la sede.',
        (<>Preparar tu <b>kit de bienvenida</b>.</>)
      ],
    }
  },
  {
    indicator: { stepNumber: 2, side: 'right' },
    card: {
      icon: <WorldIcon />,
      title: 'Registro Global Game Jam',
      description: 'Crea tu cuenta en la plataforma oficial del evento',
      buttonContent: 'Ir a la plataforma global',
      buttonUrl: 'https://globalgamejam.org/jam-sites/2026/arequipa-game-jam-2026',
      buttonExternal: true
    },
    questions: {
      question: '¿Por qué necesito este registro?',
      answerDescription: (<>La plataforma oficial de <b>Global Game Jam</b> es tu puerta de entrada a la comunidad mundial. Te permite:</>),
      answerList: [
        'Subir tu proyecto una vez finalizado el evento.',
        (<>Acceder a <b>recursos, tutoriales y guías oficiales</b>.</>),
        'Conectar con jammers de todo el mundo.',
        'Ver todos los juegos creados en las demás sedes',
        'Obtener tu certificado digital de participación'
      ]
    }
  },
  {
    indicator: { stepNumber: 3, side: 'left' },
    card: {
      icon: <CheckIcon />,
      title: '¡Espera tu confirmación!',
      description: 'Te enviaremos un email con todos los detalles'
    },
    questions: {
      question: 'Confirmación de registro',
      answerDescription: (<>Recibirás un <b>email</b> confirmando tu participación con:</>),
      answerList: [
        'Número de registro.',
        (<>Detalles de <b>acceso</b>.</>),
        'Lista de materiales recomendados'
      ]
    }
  }
]

const RegistrationStepper = () => {
  return (
    <section id="registration-stepper" className="py-12 w-full relative">
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="mb-12 text-center">
          <span className="font-bold text-4xl">Tu ruta hacia la</span>
          <br />
          <span className="text-4xl text-theme-cyan font-bold">Arequipa Game Jam.</span>
        </h2>
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default RegistrationStepper;
