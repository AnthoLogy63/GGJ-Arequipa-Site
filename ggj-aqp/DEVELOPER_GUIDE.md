# Guía para Desarrolladores - GGJ Arequipa Site

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

### Componentes (`src/components/`)

#### Common (Componentes Compartidos)
- **Navbar.tsx**: Menú de navegación sticky con scroll suave a secciones
- **Footer.tsx**: Pie de página global

#### Home (Componentes de la Página Principal)
Todos los componentes están listos para ser desarrollados:
- HeroSection.tsx
- AboutSection.tsx (id: "about" para scroll)
- MissionSection.tsx
- ScheduleSection.tsx
- CallToActionMid.tsx
- LocationSection.tsx (id: "contact" para scroll)
- BenefitsSection.tsx
- TeamSection.tsx
- SponsorsSection.tsx
- FaqSection.tsx
- FinalCallToAction.tsx

#### Registration (Componentes de Inscripción)
- RegistrationHero.tsx
- RequirementsSection.tsx
- RegistrationStepper.tsx
- InstructionNotice.tsx
- FinalVerificationCTA.tsx

### Páginas (`src/pages/`)
- **Home.tsx**: Página principal que importa todos los componentes de home
- **Inscripcion.tsx**: Página de inscripción que importa todos los componentes de registration

### Navegación

#### Navbar
El navbar cambia dinámicamente según la página actual:

**En la página Home:**
1. **Sobre el Evento**: Hace scroll suave a la sección AboutSection (id="about")
2. **Contacto**: Hace scroll suave a la sección LocationSection (id="contact")
3. **Inscripción**: Navega a la página /inscripcion usando React Router

**En la página de Inscripción:**
1. **Volver al Home**: Navega de regreso a la página principal (/)

El navbar detecta la ruta actual usando el hook `useLocation` de React Router.

#### Sticky Behavior
El navbar usa `position: sticky` para permanecer visible al hacer scroll.

## Cómo Desarrollar

### 1. Agregar Estilos
Los estilos globales se pueden agregar en:
- `src/styles/globals.css` - Para colores neón, fuentes y gradientes
- `src/index.css` - Ya configurado con Tailwind CSS

### 2. Agregar Imágenes
- Fotos de equipo y sponsors: `src/assets/images/`
- Ilustraciones (montaña, mando, etc.): `src/assets/illustrations/`

### 3. Desarrollar Componentes
Cada componente actualmente muestra "Hola desde [NombreComponente]". 
Para desarrollar un componente:
1. Abre el archivo del componente
2. Reemplaza el contenido básico con tu diseño
3. Importa estilos o usa Tailwind CSS

### 4. Agregar Nuevas Secciones con Scroll
Si necesitas agregar una nueva sección que se pueda acceder desde el navbar:
1. Agrega un `id` al elemento section del componente
2. Actualiza el Navbar para agregar el botón con `scrollToSection('tu-id')`

## Tecnologías Utilizadas
- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS v4

## Notas Importantes
- Todos los componentes usan `.tsx` (TypeScript)
- El proyecto usa Tailwind CSS v4 con el plugin de Vite
- La navegación entre páginas usa React Router (no recargar la página)
- El scroll suave está implementado con JavaScript nativo
