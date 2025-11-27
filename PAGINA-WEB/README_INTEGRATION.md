# Integración: Landing "Nocturna"

Este pequeño documento explica cómo está integrado el *landing page* de ejemplo "Nocturna" en el proyecto y cómo probarlo.

Archivos añadidos:

- `src/components/Hero.tsx`
- `src/components/FeatureCard.tsx`
- `src/components/Trailer.tsx`
- `src/components/CTA.tsx`
- `src/pages/Landing.tsx`
- `src/assets/*` (placeholders SVG: hero-bg, trailer-thumb, screenshot1, character1)

Cambios realizados en el proyecto:

- `src/App.tsx` ahora importa y renderiza `pages/Landing`

Cómo probar localmente:

1. Instala dependencias (si no lo hiciste antes):

```powershell
npm install
```

2. Ejecuta la app en modo desarrollo:

```powershell
npm run dev
```

3. Abre el navegador en la URL que imprime Vite (por defecto http://localhost:5173)

Notas y recomendaciones:

- Las imágenes añadidas son placeholders SVG. Sustitúyelas por tus assets reales en `src/assets/`.
- Tailwind está ya instalado en el proyecto. Si quieres personalizar colores o fuentes, edita `tailwind.config.js`.
- Los componentes usan `lucide-react` para iconos (ya está en `package.json`).
- Respeta `prefers-reduced-motion` para animaciones si agregas efectos.

Siguientes pasos sugeridos:

- Añadir tests visuales o snapshot tests si tienes un pipeline de CI.
- Reemplazar placeholders por screenshots del juego y assets de alta resolución.
- Añadir navegación y rutas si tu proyecto lo requiere.
