# Guía de Contribución – Arequipa Game Jam Website

Esta guía establece los estándares y procedimientos para colaborar en el repositorio oficial de la **Arequipa Game Jam**.  
El cumplimiento de estas normas garantiza orden, trazabilidad y estabilidad en el desarrollo del proyecto.

---

## Estructura de Ramas

El repositorio utiliza una estructura de ramas simple y estricta, orientada a proteger la estabilidad del proyecto y facilitar la colaboración.

### Ramas principales

- **main**  
  Rama de producción.  
  Contiene únicamente código estable y listo para despliegue.  
  Está protegida y **no se permiten commits directos** bajo ninguna circunstancia.
  Solo se pueden subir pull requests revisados.

- **dev**  
  Rama principal de desarrollo.  
  Todas las nuevas funcionalidades, correcciones y mejoras se integran aquí antes de pasar a producción.  

### Ramas de trabajo

- **feature/NombreDelColaborador**  
  Ramas individuales de desarrollo.  
  Cada colaborador debe trabajar exclusivamente en su propia rama `feature`.

  Ejemplos:
  - `feature/anthony`
  - `feature/maria`
  - `feature/juan`

**Reglas obligatorias:**

- Todas las ramas `feature/*` deben crearse **únicamente desde `dev`**
- No se permite trabajar directamente en `main` ni en `dev`
- Cada rama `feature` debe enfocarse en un solo objetivo o conjunto relacionado de cambios

---

## Convención de Commits

Para mantener un historial claro y profesional, todos los commits deben seguir un formato estandarizado.

### Lineamientos generales

- Usar exclusivamente letras minúsculas  
- Redactar los mensajes en español  
- La descripción debe ser clara, directa y específica  
- Cada commit debe representar un cambio atómico (una sola tarea)

---

### Tipos de commit permitidos

| Tipo | Descripción |
|------|------------|
| feat | Implementación de una nueva funcionalidad o sección |
| fix | Corrección de errores o bugs |
| style | Cambios visuales o de formato (CSS, estilos, indentación) sin alterar la lógica |
| refactor | Reorganización del código sin cambiar su comportamiento |
| content | Actualización de textos, imágenes, datos o recursos del sitio |
| docs | Cambios exclusivos en la documentación |
| chore | Tareas de mantenimiento, configuración o ajustes técnicos |

---

### Ejemplos de commits correctos

feat: agregar sección de cronograma del evento  
fix: corregir error de alineación en navbar móvil  
style: mejorar estilos del formulario de inscripción  
content: actualizar descripción de la arequipa game jam  
docs: añadir guía de contribución al repositorio  
chore: ajustar configuración inicial del proyecto  
