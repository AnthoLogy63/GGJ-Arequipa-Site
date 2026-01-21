# Configuración para SPA (Single Page Application)

Este proyecto es una aplicación React con enrutamiento del lado del cliente (React Router).

## Problema del 404 en Producción

Cuando un usuario visita directamente una ruta como `/inscripcion` o recarga la página, el servidor web busca un archivo físico en esa ruta. Como no existe, devuelve un error 404.

## Solución

El servidor debe estar configurado para **redirigir todas las peticiones al archivo `index.html`**, permitiendo que React Router maneje el enrutamiento.

## Archivos Incluidos en el Build

Después de ejecutar `npm run build`, la carpeta `dist` contendrá:

- `index.html` - Archivo principal
- `_redirects` - Configuración para Netlify (si se usa)
- `.htaccess` - Configuración para servidores Apache (si se usa)
- `/assets/` - Archivos CSS, JS, imágenes optimizadas

## Instrucciones para el Proveedor de Hosting

**El servidor debe configurarse para:**

1. Servir todos los archivos estáticos normalmente (CSS, JS, imágenes)
2. Para cualquier ruta que NO sea un archivo estático, devolver `index.html` con código HTTP 200

### Ejemplos de Configuración por Servidor:

**Apache (.htaccess ya incluido en public/):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Nginx:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Netlify (_redirects ya incluido en public/):**
```
/*    /index.html   200
```

**Vercel/Cloudflare Pages:**
Detectan automáticamente SPAs de React y configuran las redirecciones.

## Verificación

Después del despliegue, probar:
1. Visitar la URL raíz (ejemplo.com) ✓
2. Visitar ejemplo.com/inscripcion directamente ✓
3. Recargar la página en /inscripcion ✓ (NO debe dar 404)
