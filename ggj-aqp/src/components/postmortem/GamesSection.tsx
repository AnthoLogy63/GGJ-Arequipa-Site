import clsx, {type ClassValue} from 'clsx';
import { Download, Gamepad2, Info } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import GamejamLogo from '../../assets/logos/AQP-GGJ_logo.svg';
import HallOfMasks from '../../assets/games/hall-of-masks.webp';
import TwoSides from '../../assets/games/two-sides.webp';
import EvilExorcist from '../../assets/games/evil-exorcist.webp';
import Animalia from '../../assets/games/animalia.webp';
import Psycho from '../../assets/games/psycho.webp';
import _1930TwoSides from '../../assets/games/1930-two-sides.webp';
import ElConflicto from '../../assets/games/el-conflicto.webp';
import Delogic from '../../assets/games/delogic.webp';
import Hide_Gan_GO from '../../assets/games/hide-gan-go.webp';
import DeliveryMan from '../../assets/games/delivery-man.webp';

interface Game {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  liveDemoUrl?: string;
  downloadUrl?: string;
  moreInfoUrl?: string;
  tags?: string[];
}

function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

function CardButton({className, ...props}: React.ComponentProps<'button'>) {
  return (
    <button className={cn('inline-flex px-3 h-10 py-2.5 gap-x-2 font-semibold text-shadow-md rounded-md transition-all duration-200 hover:scale-105 items-center justify-center', className)} {...props} />
  );
}

const GamesSection: React.FC = () => {
  const games: Game[] = [
    {
      id: 1,
      name: 'Hall of Masks',
      imageUrl: HallOfMasks,
      tags: ['3D', 'Acción', 'Aventura', 'Primera persona', 'Platformer', 'Español', 'Inglés', 'Web', 'MS Windows', 'Godot'],
      description: 'A shifting nexus beyond reality, where identity is power and form is illusion.',
      liveDemoUrl: 'https://dev1d123.itch.io/hall-of-masks',
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/833636/exec/GGJ2026.zip?VersionId=tZSMWb40qcd95T0H93sNMijGeicaxytN',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/hall-masks-3',
    },
    {
      id: 2,
      name: 'Two sides',
      description: 'Two Sides is a Cold War-style espionage simulation where you play as a communications operator caught between two warring factions in the fictional nation of Valcora.',
      tags: ['2D', 'Puzzle', 'Simulación', 'Estrategia', 'Español', 'MS Windows', 'Web', 'Godot'],
      imageUrl: TwoSides,
      liveDemoUrl: 'https://rickbones112.itch.io/two-sides',
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/872893/exec/2sidesWindows.tar?VersionId=oAAbXk.FKu9Mpbv1AOh9xrNeBUPZ9ijN',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/two-sides-6',
    },
    {
      id: 3,
      name: 'Evil Exorcist',
      description: 'Estás atrapado en el bosque, pero no estás solo. "El Cambiacaras" te acecha, una entidad que altera su comportamiento con cada máscara que viste. Para sobrevivir, posees una máscara maldita que te hace invisible a sus ojos, pero usarla tiene un precio terrible: tu propia cordura.',
      tags: ['3D', 'Primera persona', 'Español', 'MS Windows', 'Unity', 'Cosas extrañas'],
      imageUrl: EvilExorcist,
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/885834/exec/release_0.zip?VersionId=pA7_8modLXquVMEc3BY1jQGaMl05TfW9',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/faces-forest-5',
    },
    {
      id: 4,
      name: 'Animalia',
      description: 'A classic platform game where you can transform into three animals, each one with its unique set of abilites!, allowing the player to pass the levels.',
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/870914/exec/Animalia.zip?VersionId=jP_F_XrIfFyeZXyuxBB6dviWwoYZBb7A',
      tags: ['2D', 'Platformer', 'Inglés', 'MS Windows', 'Godot'],
      imageUrl: Animalia,
      moreInfoUrl: 'https://globalgamejam.org/games/2026/animalia-6',
    },
    {
      id: 5,
      name: 'La mascara del calvo',
      description: '  Eres un hombre secuestrado por un culto hacia la calvicie, donde tu eres el principal sacrificio, recolecta los trozos de la mascara sagrada y escapa con vida, no dejes que te atrapen o te romperán la cabeza',
      tags: ['2D', 'Puzzle', 'Top-down', 'Español', 'MS Windows', 'Godot'],
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/870812/exec/La%20mascara%20del%20calvo_0.zip?VersionId=gKFh6Z6.PCOUefquC1.BZnCV85m2RTxk',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/la-mascara-del-calvo-1',
    },
    {
      id: 6,
      name: 'Psycho',
      description: 'Psycho is a platform game that tells the story of a man who, during a difficult time, lost his family and entered treatment using masks to avoid blaming himself for their deaths. He realizes he is being used as a subject for study and wants to escape by using the masks without losing his sanity. He searches for medications that will help him counteract the effects of the masks and flee the psychiatric hospital.',
      imageUrl: Psycho,
      tags: ['2D', 'Aventura', 'Platformer', 'Out of Sight', 'Encuentro aleatorio', 'Español', 'MS Windows', 'Unity'],
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/330252/exec/SpychoGame.zip?VersionId=oeuMckIJElnXo82adt3uov4OOUn6MQ9l',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/psycho-8',
    },
    {
      id: 7,
      name: '1930: Two Sides',
      description: 'In Valcora, a country fractured by civil war, information is the deadliest weapon. Six months ago, the government fell. Now, Valcora is torn between two opposing forces: "El Nuevo Orden", a military junta demanding absolute obedience, and "La Llama Libre", a chaotic constellation of rebels and opportunists. The capital is crumbling, resources are scarce, and trust is extinct.',
      imageUrl: _1930TwoSides,
      tags: ['2D', 'Casual', 'Estrategia', 'Español', 'MS Windows', 'Godot'],
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/866701/exec/Ejecutable_0.zip?VersionId=cTYPQOZcqUfAlewpYiHpQvSVjS.3kd9g',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/1930-two-sides-3',
    },
    {
      id: 8,
      name: 'El Conflicto',
      description: 'Hay una persona que tiene un conflicto con sus emociones, ayudale en esta lucha mental a recolectar reflexiones y ganar victorias para poder afrontar a sus emociones (version prototipo)',
      imageUrl: ElConflicto,
      tags: ['Arcade', 'Español', 'Web', 'LittleJS'],
      liveDemoUrl: 'https://ggj2026.jimynicanor.com/',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/el-conflicto-4',
    },
    {
      id: 9,
      name: 'DeLogic',
      description: 'Un juego sobre un hombre que es maldecido por una mascara, lo que le permite vivir en 2 estado (normal, y maldicion), ciertos objetos pueden ser interactuados con su estado normal y otros en su estado maldito',
      imageUrl: Delogic,
      tags: ['2D', 'Acción', 'Aventura', 'Arcade', 'Caminata', 'Español', 'Linux', 'Godot'],
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/884839/exec/Ejecutable.zip?VersionId=mRGuoIqu8CI9O59xURRJp2L68dW7pLUk',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/delogic-7',
    },
    {
      id: 10,
      name: 'Hide_Gan_GO',
      description: 'This is the story of a black kitten named GAN. Driven by hunger and curiosity, GAN follows a mouse, unaware that this pursuit will lead him into a very strange cave. Once inside, the kitten collapses, falls unconscious, and begins to dream.',
      imageUrl: Hide_Gan_GO,
      tags: ['2D', 'Aventura', 'Casual', 'Top-down', 'Cubos', 'La vida no es blanco y negro', 'Multijugador local', 'Español', 'MS Windows', 'Web', '.Net', 'Unity'],
      liveDemoUrl: 'https://dani-dev20.itch.io/hide-gan-go',
      downloadUrl: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2026/870823/exec/WINDOWNS_HIDE_GAN_GO.zip?VersionId=uRh05v15WuSl8vtDC0ni2EGMEWzlY85W',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/hideganggo-game-global-game-jam-2026-4',
    },
    {
      id: 11,
      name: 'Delivery Man',
      description: 'Set in 2017 "Delivery Man" is a top-down stealth game where you play as a silent deliveryman trapped in the middle of a criminal city.',
      imageUrl: DeliveryMan,
      tags: ['3D', 'Arcade', 'Casual', 'Top-down', 'Inglés', 'Android', 'MS Windows', 'Web', 'Godot'],
      liveDemoUrl: 'https://jphants.itch.io/delivery-man',
      moreInfoUrl: 'https://globalgamejam.org/games/2026/delivery-man-4',
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Gradient Background - matching Figma design */}
      <div className="absolute inset-0 bg-gradient-radial from-[#27133E] to-[#11091C]" />

      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#11091C] opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#11091C] opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#10081B] opacity-80" />

      <div className="relative max-w-360 mx-auto px-6 md:px-8 lg:px-20">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px #1DF2F2',
              paintOrder: 'stroke fill',
              fontFamily: "'Zing Rust Demo', cursive",
            }}
          >
            Los Juegos de la Jam
          </h2>
          <p className="text-[#E5E5E5] text-base md:text-lg max-w-xl leading-relaxed px-4">
            Explora los increíbles prototipos que nacieron en solo 48 horas.
            Dale clic a cada uno para jugarlo y conocer a sus creadores.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 lg:gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative"
            >
              {/* Game Card */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl transition-all duration-300 hover:shadow-[#EC469A]/30 hover:-translate-y-2 flex flex-col h-full w-full">
                {/* Game Image */}
                <div className="overflow-hidden bg-linear-to-br from-theme-light-purple to-theme-purple relative">
                      <img
                        src={game.imageUrl || GamejamLogo}
                        alt={game.name}
                        className="w-full h-86 object-cover transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(211,52,233,0.3)]"
                      />
                  {/* Desktop Hover Overlay */}
                  <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#11091C]/95 via-[#6E2880]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-center gap-3 p-6">
                    <p className="text-white/90 text-sm text-center mb-2">
                      {game.description}
                    </p>
                  </div>
                </div>

                {/* Game Info Card - Always Visible (Mobile-Friendly) */}
                <div className="bg-[#20152F] p-4 flex-1 flex flex-col">
                  {/* Game Title */}
                  <h3 className="text-[#C6C6C6] font-bold text-lg mb-3 tracking-wide">
                    {game.name}
                  </h3>

                  {/* Description - Visible on Mobile */}
                  <p className="text-[#959595] text-sm mb-4 line-clamp-2 md:hidden">
                    {game.description}
                  </p>

                  {/* Tags */}
                  {game.tags && game.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {game.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-[#6E2880]/40 text-[#1DF2F2] text-xs rounded-full font-medium border border-[#6E2880]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons - Always Visible */}
                  <div className="flex flex-col sm:flex-row gap-x-2 gap-y-3 mt-2 flex-1 sm:items-end">
                    {game.liveDemoUrl && (
                      <CardButton
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(game.liveDemoUrl, '_blank');
                        }}
                        className="border border-theme-cyan bg-theme-cyan text-black hover:shadow-theme-cyan hover:shadow-[0_0_18px_var(--color-theme-cyan)]"
                        title="Jugar"
                      >
                        <Gamepad2 className="size-5" />
                        Jugar
                      </CardButton>
                    )}

                    {game.downloadUrl && (
                      <CardButton
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(game.downloadUrl, '_blank');
                        }}
                        className="border border-theme-pink bg-theme-pink text-white hover:shadow-theme-pink hover:shadow-[0_0_18px_var(--color-theme-pink)]"
                        title="Descargar"
                      >
                        <Download className="size-5" />
                        Descargar
                      </CardButton>
                    )}

                    {game.moreInfoUrl && (
                      <CardButton
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(game.moreInfoUrl, '_blank');
                        }}
                        className="border border-theme-cyan text-theme-cyan hover:bg-theme-cyan/10"
                        title="Más Información"
                      >
                        <Info className="size-5" />
                        Más info
                      </CardButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center mt-12 md:mt-16 text-center px-4">
          <p className="text-[#B7B7B7] text-base md:text-lg mb-6">
            ¿Tienes un proyecto que no aparece aquí?
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-[#EC469A] to-[#D334E9] text-white font-bold text-base md:text-lg rounded-lg hover:shadow-lg hover:shadow-[#EC469A]/50 transition-all duration-300 hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
