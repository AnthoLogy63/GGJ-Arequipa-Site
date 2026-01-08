# ESTRUCTURA DEL PROYECTO – INDICACIONES DE COMPONENTES

## LAYOUTS

**Navbar**: Menú de navegación superior persistente que contiene el logotipo del evento, enlaces a las secciones principales del sitio y el botón de acceso al registro.

**Footer**: Pie de página global con enlaces a redes sociales, información de contacto, créditos del evento y términos legales.

---

## PAGE HOME

**HeroSection**: Banner principal de la landing con el título “Game Jam 2026”, una breve descripción del evento y un contador regresivo hasta el inicio.

**CountdownSection**: Sección de contador regresivo que muestra el tiempo restante hasta el inicio del evento.

**AboutSection**: Sección introductoria que explica qué es la Game Jam y su propósito, acompañada de un recurso visual o ilustración temática.

**MissionSection**: Conjunto de tarjetas informativas que presentan los pilares, valores u objetivos principales del evento mediante iconos y texto breve.

**ScheduleSection**: Sección de cronograma que organiza las actividades del evento por fechas y días, utilizando un selector para facilitar la navegación.

**CallToActionMid**: Bloque intermedio de llamado a la acción con un mensaje motivador y botones que invitan a registrarse o conocer más.

**LocationSection**: Sección informativa que muestra la ubicación física del evento, fechas, horarios y un mapa integrado.

**BenefitsSection**: Cuadrícula visual que resalta los principales beneficios de participar en la Game Jam.

**TeamSection**: Galería que presenta al equipo organizador mediante fotografías y cargos.

**SponsorsSection**: Barra o fila horizontal que muestra los logotipos de las marcas y empresas patrocinadoras del evento.

**FaqSection**: Sección de preguntas frecuentes con un sistema tipo acordeón para optimizar el espacio y la lectura.

**FinalCallToAction**: Banner final de cierre con un mensaje de comunidad y el último llamado a la inscripción.

---

## PAGE INSCRIPCIONES

**RegistrationHero**: Banner de cabecera con el título principal de registro, una descripción motivadora del evento en Arequipa y un fondo visual temático.

**RequirementsSection**: Conjunto de fichas informativas con iconos que detallan los requisitos previos para participar, como edad mínima, equipo necesario y materiales.

**RegistrationStepper**: Componente central del proceso de inscripción que muestra los pasos del registro mediante una línea de tiempo visual, indicadores de fase y requisitos específicos por etapa.

**InstructionNotice**: Cuadro de alerta visual que resalta instrucciones críticas y reglas importantes que deben seguirse al completar los formularios.

**FinalVerificationCTA**: Bloque de cierre del proceso de inscripción con una pregunta de validación final y botones de acción para confirmar o corregir la información ingresada.


## ESTRUCTURA SUGERIDA
src/
├── components/
│   ├── common/                       # Componentes compartidos
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/                         # Componentes exclusivos de la Home
│   │   ├── HeroSection.tsx
│   │   ├── CountdownSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── MissionSection.tsx
│   │   ├── ScheduleSection.tsx
│   │   ├── CallToActionMid.tsx       # El bloque del mando de consola
│   │   ├── LocationSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── SponsorsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── FinalCallToAction.tsx
│   └── registration/                 # Componentes de la página de Inscripción
│       ├── RegistrationHero.tsx
│       ├── RequirementsSection.tsx
│       ├── RegistrationStepper.tsx   # El sistema con la línea curva y pasos
│       ├── InstructionNotice.tsx     # El cuadro de "Importante - Leer"
│       └── FinalVerificationCTA.tsx
├── pages/                            # Vistas principales
│   ├── Home.tsx                      # Importa todos los componentes de home/
│   └── Inscripcion.tsx               # Importa todos los componentes de registration/
├── assets/                           # Archivos estáticos
│   ├── images/                       # Fotos de equipo y sponsors
│   └── illustrations/                # Montaña, mando de consola, línea curva
└── styles/
    └── globals.css                   # Colores neón, fuentes y gradientes



## RESUMEN DEL ORDEN DE LA ESTRUCTURA
1. Página: HOME (Inicio)
El orden de apilamiento vertical es el siguiente:

Navbar: Cabecera global con navegación y acceso a inscripción.

HeroSection: Primer impacto visual con el título "Game Jam 2026" y el contador de tiempo.

CountdownSection: Sección de contador regresivo que muestra el tiempo restante hasta el inicio del evento.

AboutSection: Bloque informativo que explica la naturaleza del evento.

MissionSection: Fichas con los pilares fundamentales o visión de la competencia.

ScheduleSection: Sección interactiva con el cronograma de actividades por días.

CallToActionMid: Bloque de refuerzo con la ilustración del mando y botones de acción rápida.

LocationSection: Información logística sobre el lugar físico en Arequipa y mapas.

BenefitsSection: Cuadrícula que resume las ventajas de participar.

TeamSection: Galería de fotos y nombres del equipo organizador.

SponsorsSection: Franja con logotipos de patrocinadores y colaboradores.

FaqSection: Lista de preguntas frecuentes desplegables.

FinalCallToAction: Banner final con imagen de comunidad y registro final.

Footer: Pie de página global con redes y enlaces legales.

2. Página: INSCRIPCIÓN
El flujo de usuario para completar el registro sigue este orden:

Navbar: (Global) Mantiene la consistencia de navegación.

RegistrationHero: Banner de bienvenida específico para el proceso de registro.

RequirementsSection: Bloque "Antes de empezar" con los requisitos previos indispensables.

RegistrationStepper: Componente central que guía al usuario a través de la línea curva y los pasos de inscripción.

InstructionNotice: Recuadro de advertencia "Importante - Leer" sobre los formularios.

FinalVerificationCTA: Sección de confirmación para validar que se completaron los registros.

Footer: (Global) Pie de página con información de contacto y soporte.
