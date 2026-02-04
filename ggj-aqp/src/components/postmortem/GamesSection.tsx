import clsx, {type ClassValue} from 'clsx';
import { Download, Gamepad2, Info } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Game {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
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
    <button className={cn('inline-flex px-4 py-2.5 gap-x-2 text-white font-semibold text-xl rounded-md hover:shadow-lg transition-all duration-200 hover:scale-110 items-center', className)} {...props} />
  );
}

const GamesSection: React.FC = () => {
  // Mock data with realistic game jam entries
  const games: Game[] = [
    {
      id: 1,
      name: 'Shadow Mask',
      description: 'Un juego de plataformas donde la máscara te da poderes oscuros',
      imageUrl: 'https://via.placeholder.com/415x415/6E2880/FFFFFF?text=Shadow+Mask',
      liveDemoUrl: '#',
      tags: ['Plataformas', '2D'],
    },
    {
      id: 2,
      name: 'Carnival of Souls',
      description: 'Explora un carnaval místico donde las máscaras cobran vida',
      imageUrl: 'https://via.placeholder.com/415x415/3F215F/FFFFFF?text=Carnival',
      liveDemoUrl: '#',
      downloadUrl: '#',
      tags: ['Aventura', 'Puzzle'],
    },
    {
      id: 3,
      name: 'Mask Runner',
      description: 'Corre a través de Arequipa evitando obstáculos con máscaras mágicas',
      imageUrl: 'https://via.placeholder.com/415x415/EC469A/FFFFFF?text=Mask+Runner',
      liveDemoUrl: '#',
      moreInfoUrl: '#',
      tags: ['Endless Runner', 'Casual'],
    },
    {
      id: 4,
      name: 'The Last Disguise',
      description: 'Un juego de sigilo donde cambias de identidad con diferentes máscaras',
      imageUrl: 'https://via.placeholder.com/415x415/1DF2F2/000000?text=Last+Disguise',
      downloadUrl: '#',
      tags: ['Stealth', 'Strategy'],
    },
    {
      id: 5,
      name: 'Ritual Andino',
      description: 'Descubre los secretos ancestrales de las máscaras ceremoniales',
      imageUrl: 'https://via.placeholder.com/415x415/2D1F5A/FFFFFF?text=Ritual+Andino',
      liveDemoUrl: '#',
      downloadUrl: '#',
      moreInfoUrl: '#',
      tags: ['Cultural', 'Educativo'],
    },
    {
      id: 6,
      name: 'Face Swap Chaos',
      description: 'Un party game donde intercambias máscaras y habilidades con otros jugadores',
      imageUrl: 'https://via.placeholder.com/415x415/6E2880/FFFFFF?text=Face+Swap',
      liveDemoUrl: '#',
      tags: ['Party', 'Multiplayer'],
    },
    {
      id: 7,
      name: 'Masked Memories',
      description: 'Una novela visual sobre recuerdos ocultos detrás de máscaras familiares',
      imageUrl: 'https://via.placeholder.com/415x415/3F215F/FFFFFF?text=Memories',
      liveDemoUrl: '#',
      downloadUrl: '#',
      tags: ['Visual Novel', 'Story'],
    },
    {
      id: 8,
      name: 'Masquerade Battle',
      description: 'Lucha en un torneo de máscaras con combos y poderes especiales',
      imageUrl: 'https://via.placeholder.com/415x415/EC469A/FFFFFF?text=Masquerade',
      liveDemoUrl: '#',
      tags: ['Fighting', 'Action'],
    },
    {
      id: 9,
      name: 'Identity Crisis',
      description: 'Resuelve puzzles cambiando entre diferentes personalidades con máscaras',
      imageUrl: 'https://via.placeholder.com/415x415/1DF2F2/000000?text=Identity',
      liveDemoUrl: '#',
      moreInfoUrl: '#',
      tags: ['Puzzle', 'Psychological'],
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

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-8 lg:px-20">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative"
            >
              {/* Game Card */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl transition-all duration-300 hover:shadow-[#EC469A]/30 hover:-translate-y-2">
                {/* Game Image */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#6E2880] to-[#3F215F] relative">
                  <img
                    src={game.imageUrl}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Desktop Hover Overlay */}
                  <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-[#11091C]/95 via-[#6E2880]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col items-center justify-center gap-3 p-6">
                    <p className="text-white/90 text-sm text-center mb-2">
                      {game.description}
                    </p>
                  </div>
                </div>

                {/* Game Info Card - Always Visible (Mobile-Friendly) */}
                <div className="bg-[#20152F] p-4">
                  {/* Game Title */}
                  <h3 className="text-[#C6C6C6] font-bold text-lg mb-3 tracking-wide font-['Lato']">
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
                  <div className="flex flex-col sm:flex-row gap-2">
                    {game.liveDemoUrl && (
                      <CardButton
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(game.liveDemoUrl, '_blank');
                        }}
                        className=""
                        title="Jugar Ahora"
                      >
                        <Gamepad2 className="size-5" />
                        Jugar ahora
                      </CardButton>
                    )}

                    {game.downloadUrl && (
                      <CardButton
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(game.downloadUrl, '_blank');
                        }}
                        className=""
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
                        className=""
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
