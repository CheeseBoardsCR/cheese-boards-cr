# Mi Página Accesible

Sitio estático listo para publicar. Cumple buenas prácticas de accesibilidad (WCAG 2.1) y es responsive.

## Estructura
```
sitio_accesible/
├─ index.html
├─ styles.css
├─ script.js
└─ assets/
   └─ logo.svg
```

## Cómo publicar

### Opción 1: GitHub Pages
1. Crea un repositorio nuevo y sube la carpeta `sitio_accesible`.
2. En **Settings → Pages**, selecciona **Deploy from branch** y la rama principal.
3. Carpeta `/root` (o `/docs` si prefieres mover archivos).
4. Guarda; tu sitio estará disponible en la URL que indique GitHub.

### Opción 2: Netlify (arrastrar y soltar)
1. Entra a https://app.netlify.com y crea un sitio nuevo.
2. Arrastra la carpeta `sitio_accesible` al panel para desplegar.

### Opción 3: Vercel
1. Importa el repositorio o sube la carpeta.
2. Despliega con la configuración por defecto.

## Personalización rápida
- Cambia el título en `index.html`.
- Sustituye colores en `styles.css` (variables `:root`).
- Reemplaza `assets/logo.svg` por tu logo.

## Nota de accesibilidad
- Mantén jerarquía de encabezados, etiquetas `label` vinculadas y contraste adecuado.
- Verifica con herramientas como Lighthouse y WAVE.
