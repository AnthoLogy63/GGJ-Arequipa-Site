import type { ComponentProps } from 'react';
import listIcon from '../../assets/images/icons/neon-list.png';
import worldIcon from '../../assets/images/icons/neon-world.png';
import checkIcon from '../../assets/images/icons/neon-check.png';
import type React from 'react';

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

function GradientCircle(props: ComponentProps<'svg'>) {
  return (
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="18.5" cy="18.5" r="18.5" fill="url(#paint0_linear_126_1101)"/>
    <defs>
    <linearGradient id="paint0_linear_126_1101" x1="2.14158e-07" y1="17.9394" x2="33" y2="17.9394" gradientUnits="userSpaceOnUse">
    <stop stop-color="#28D7D7"/>
    <stop offset="1" stop-color="#DA11D7"/>
    </linearGradient>
    </defs>
    </svg>
  )
}

function DistributedDots(props: ComponentProps<'svg'>) {
  return (
    <svg width="21" height="89" viewBox="0 0 21 89" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z" fill="#F130EE"/>
    <path d="M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z" fill="#F130EE"/>
    <circle cx="2.5" cy="23.5" r="2.5" fill="#F130EE"/>
    <circle cx="2.5" cy="44.5" r="2.5" fill="#F130EE"/>
    <circle cx="2.5" cy="65.5" r="2.5" fill="#F130EE"/>
    <path d="M21 23.5C21 24.8807 19.8807 26 18.5 26C17.1193 26 16 24.8807 16 23.5C16 22.1193 17.1193 21 18.5 21C19.8807 21 21 22.1193 21 23.5Z" fill="#F130EE"/>
    <path d="M21 23.5C21 24.8807 19.8807 26 18.5 26C17.1193 26 16 24.8807 16 23.5C16 22.1193 17.1193 21 18.5 21C19.8807 21 21 22.1193 21 23.5Z" fill="#F130EE"/>
    <circle cx="18.5" cy="44.5" r="2.5" fill="#F130EE"/>
    <circle cx="18.5" cy="65.5" r="2.5" fill="#F130EE"/>
    <circle cx="18.5" cy="86.5" r="2.5" fill="#F130EE"/>
    </svg>
  )
}

function SnakeLine(props: ComponentProps<'svg'>) {
  return (
    <svg width="572" height="588" viewBox="0 0 572 588" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.0008 572.524C68.1017 568.486 63.4872 568.837 78.6304 567.685C78.6304 567.685 96.4342 565.184 136.4 560.902C176.365 556.619 288.268 526.179 337.887 476.191C387.506 426.203 355.703 360.576 355.703 360.576C355.703 360.576 338.192 329.129 330.798 318.859C317.996 301.076 279.251 219.902 321.928 160.284C331.687 146.652 341.382 134.106 356.94 120.811C371.529 108.345 383.03 101.383 391.891 94.0145C397.695 89.1868 406.947 83.2524 417.974 76.8108C441.35 63.1543 456.945 56.7132 463.693 54.0848C468.474 52.8948 554.398 15.8609 556.866 15.0042" stroke="url(#paint0_linear_126_1056)" stroke-width="30" stroke-linecap="round"/>
    <defs>
    <linearGradient id="paint0_linear_126_1056" x1="757.959" y1="-280.996" x2="69.2199" y2="537.607" gradientUnits="userSpaceOnUse">
    <stop stop-color="#31ECFA"/>
    <stop offset="1" stop-color="#B045A8"/>
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
      <div className="grid grid-cols-1 grid-rows-1 place-items-center">
          <Hexagon className="row-start-1 col-start-1" />
          <div className="row-start-1 col-start-1 text-center">
            <span className="font-semibold text-2xl">Paso</span>
            <br />
            <span className="font-bold text-5xl">{`0${stepNumber}`}</span>
          </div>
      </div>
      <div className={`flex grow items-center ${side === 'right' ? 'flex-row-reverse translate-x-5' : 'flex-row -translate-x-5' }`}>
        <hr className="grow border-t-2 border-gray-400 max-w-48" />
        <GradientCircle className={`${side === 'right' ? 'scale-x-[-1]' : null}`} />
      </div>
      <DistributedDots className={`${side === 'right' ? 'scale-x-[-1]' : null}`}  />
    </div>
  )
}

interface StepCardProps {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  buttonContent?: string;
}
function StepCard(props: StepCardProps) {
  return (
    <div className="flex flex-col items-center gap-y-4 flex-1">
      <img src={props.icon.src} alt={props.icon.alt} className="size-32 aspect-square object-contain" />
      <h3 className="font-bold text-xl text-center">{props.title}</h3>
      <p className="text-center text-gray-400">{props.description}</p>
      {props.buttonContent ? (
        <button className="group relative inline-block p-0.5 rounded-md hover:scale-105 transition-transform">

          <div className="absolute inset-0 rounded-md bg-linear-to-r from-theme-light-purple to-theme-cyan" />

          <div className="relative h-full w-full bg-theme-background rounded-sm px-6 py-2">

            <span className="block text-center bg-clip-text text-transparent bg-linear-to-r from-theme-light-purple to-theme-cyan uppercase font-semibold">
              {props.buttonContent}
            </span>

          </div>
        </button>
      ) : null}
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
    <div className="flex flex-col gap-y-4 flex-1">
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

function Step(props: StepProps) {
  return (
    <div className="flex flex-col gap-y-16 my-24">
      <StepIndicator {...props.indicator} />
      <div className={`flex items-center gap-x-16 ${props.indicator.side === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
        <StepCard {...props.card} />
        <div className="relative shrink-0 w-20 h-120 overflow-visible">
          <SnakeLine className={`absolute inset-0 scale-x-50 scale-y-110 -translate-x-1/2 object-contain ${props.indicator.side === 'right' ? 'scale-y-[-1.1]' : ''}`} />

        </div>
        <StepQuestion {...props.questions} />
      </div>
    </div>
  )
}

const steps: StepProps[] = [
  {
    indicator: { stepNumber: 1, side: 'left' },
    card: {
      icon: {
        src: listIcon,
        alt: 'Icono de lista'
      },
      title: 'Registro de Sede Arequipa',
      description: 'Llena el formulario local para confirmar tu participación',
      buttonContent: 'Completar Registro UNSA'
    },
    questions: {
      question: '¿Por qué necesito este registro?',
      answerDescription: (<>Este formulario es requerido para confirmar tu participación en la sede oficial de <b>Arequipa</b>. Nos permite:</>),
      answerList: [
        (
          <>Gestionar el accesos a las <b>instalaciones del evento</b>.</>
        ),
        'Coordinar la logística y recursos necesarios.',
        'Enviarle información específica de la sede.',
        (
          <>Preparar tu <b>kit de bienvenida</b>.</>
        )
      ],
    }
  },
  {
    indicator: { stepNumber: 2, side: 'right' },
    card: {
      icon: {
        src: worldIcon,
        alt: 'Icono de mundo'
      },
      title: 'Registro Global Game Jam',
      description: 'Crea tu cuenta en la plataforma oficial del evento',
      buttonContent: 'Ir a la plataforma global'
    },
    questions: {
      question: '¿Por qué necesito este registro?',
      answerDescription: (<>La plataforma oficial de <b>Global Game Jam</b> es tu puerta
        de entrada a la comunidad mundial. Te permite:</>),
      answerList: [
        'Subir tu proyecto una vez finalizado el evento.',
        (
          <>Acceder a <b>recursos, tutoriales y guías oficiales</b>.</>
        ),
        'Conectar con jammers de todo el mundo.',
        'Ver todos los juegos creados en las demás sedes',
        'Obtener tu certificado digital de participación'
      ]
    }
  },
  {
    indicator: { stepNumber: 3, side: 'left' },
    card: {
      icon: {
        src: checkIcon,
        alt: 'Icono de check'
      },
      title: '¡Espera tu confirmación!',
      description: 'Te enviaremos un email con todos los detalles'
    },
    questions: {
      question: 'Confirmación de registro',
      answerDescription: (<>Recibirás un <b>email</b> confirmando tu participación con:</>),
      answerList: [
        'Número de registro.',
        (
        <>Detalles de <b>acceso</b>.</>
        ),
        'Lista de materiales recomendados'
      ]
    }
  }
]

const RegistrationStepper = () => {
  return (
    <section className="py-12 px-8 container mx-auto">
    <h2>
      <span className="font-bold text-4xl">Tu ruta hacia la</span>
      <br />
      <span className="text-4xl text-theme-cyan font-bold">Arequipa Game Jam.</span>
      </h2>
      {
        steps.map((step, index) => (
          <Step key={index} {...step} />
        ))
      }
    </section>
  );
};

export default RegistrationStepper;
