# Guía de Skills de Claude Code (COVIMUS)

Este proyecto tiene instaladas dos skills de terceros para Claude Code. Este documento explica qué es cada una, cuándo usarla y los comandos principales. Ver también [CLAUDE.md](CLAUDE.md) para el contexto general del proyecto.

## Impeccable — calidad de diseño visual

**Qué es:** revisa y mejora la interfaz (jerarquía visual, tipografía, color, motion, accesibilidad, responsive) y detecta patrones típicos de "diseño hecho por IA" (gradientes genéricos, cards anidadas, easing bounce, etc.).

**Instalación:** local al proyecto, en `.claude/skills/impeccable/` (no se sube a git, `.claude/` está en `.gitignore`). Ya corrimos `/impeccable init` pendiente — hacerlo la primera vez que se use para generar `PRODUCT.md`/`DESIGN.md` con el contexto del proyecto (institución pública, tono sobrio, stack React+Vite+Tailwind).

**Cuándo usarla:**
- Al terminar una página nueva o un rediseño visual, antes de darla por lista.
- Cuando algo "se ve bien pero no sabes por qué no convence" (usar `critique`).
- **No** para cambios puramente funcionales/lógicos (routing, formularios, integraciones) sin componente visual.
- Con cuidado en comandos que empujan hacia una estética más "startup/consumer" (`bolder`, `delight`, `overdrive`) — COVIMUS es una corporación municipal, el tono debe mantenerse sobrio e institucional. Revisar cada diff antes de aceptarlo.

**Comandos más útiles para este proyecto:**

| Comando | Para qué | Tipo |
|---|---|---|
| `/impeccable audit [target]` | Chequeo técnico: accesibilidad, performance, responsive | Solo lectura |
| `/impeccable critique [target]` | Revisión UX: jerarquía, claridad, impacto | Solo lectura |
| `/impeccable polish [target]` | Pasada final antes de publicar una página | Escribe código |
| `/impeccable layout [target]` | Corrige espaciado y ritmo visual | Escribe código |
| `/impeccable typeset [target]` | Corrige tipografía y jerarquía de fuentes | Escribe código |
| `/impeccable animate [target]` | Agrega motion con propósito (ya se usa `framer-motion`) | Escribe código |
| `/impeccable harden [target]` | Manejo de errores, edge cases, overflow de texto | Escribe código |
| `/impeccable adapt [target]` | Adaptación a distintos tamaños de pantalla | Escribe código |
| `/impeccable extract [target]` | Extrae componentes/tokens reutilizables al design system | Escribe código |

Comandos completos, incluyendo `bolder`, `quieter`, `distill`, `colorize`, `delight`, `overdrive`, `onboard`, `optimize`, `clarify`, `craft`, `shape`, `document`, `live`: ver `.claude/skills/impeccable/SKILL.md`.

`target` puede ser una ruta de archivo/carpeta (ej. `src/pages/homepage`) o quedar vacío para que la skill infiera el contexto (ej. archivos recién modificados).

**Nota:** el modo `/impeccable live` (iteración visual en navegador) necesita un servidor de automatización de navegador (Playwright/Chrome DevTools) que **no está configurado en este entorno**; sin eso, se degrada a revisión estática de código en vez de screenshots reales.

## claude-seo — auditoría SEO

**Qué es:** analiza SEO técnico, contenido (E-E-A-T), datos estructurados (schema.org), sitemap, Core Web Vitals, y optimización para motores de búsqueda con IA (AI Overviews / GEO). Orquesta hasta 18 sub-agentes en paralelo para una auditoría completa.

**Instalación:** **global**, no por proyecto — vive en `~/.claude/skills/seo/` (a diferencia de Impeccable). Corre con un runtime de Python aislado propio (venv con Chromium) creado durante la instalación; no toca las dependencias de `package.json` del proyecto.

**Cuándo usarla:**
- Después de tocar `src/components/SEO.jsx`, rutas (`Routes.jsx`), o el sitemap (`api/sitemap.js`, `public/sitemap_covimus.xml`).
- Periódicamente contra el dominio real `covimus.org` en producción, para validar la migración de dominio reciente.
- Riesgo específico a vigilar en este proyecto: es una SPA 100% client-side (Vite + `react-helmet`, sin SSR/prerender) — las etiquetas `<meta>` se inyectan en el navegador. `/seo page` detecta si un crawler que no ejecuta JS ve un `<head>` vacío.

**Comandos más útiles para este proyecto:**

| Comando | Para qué |
|---|---|
| `/seo page <url>` | Análisis profundo de **una** página — el punto de partida recomendado, más liviano que una auditoría completa |
| `/seo audit <url>` | Auditoría completa del sitio (delega a ~7-9 sub-agentes en paralelo) |
| `/seo schema <url>` | Detecta/valida/genera datos estructurados (schema.org) — hoy `SEO.jsx` no tiene ninguno |
| `/seo sitemap <url o generate>` | Analiza o genera el sitemap XML |
| `/seo technical <url>` | Crawlability, indexabilidad, Core Web Vitals |
| `/seo geo <url>` | Optimización para AI Overviews / ChatGPT / Perplexity |
| `/seo hreflang <url>` | Solo relevante si el sitio pasa a ser multi-idioma (hoy es 100% español) |
| `/seo drift baseline <url>` / `/seo drift compare <url>` | Guarda un snapshot y compara cambios de SEO en el tiempo |

Lista completa de 24+ sub-skills (incluye `content`, `images`, `local`, `plan`, `backlinks`, `cluster`, `sxo`, `ecommerce`, extensiones opcionales como `firecrawl`): ver `~/.claude/skills/seo/SKILL.md`.

**Notas:**
- Funciona sin API keys (Tier 0 gratis): PageSpeed Insights, CrUX, tendencias. Sin ellas, Core Web Vitals queda en "estimación de laboratorio" — suficiente para empezar.
- `/seo setup` y `/seo doctor` sirven para reparar o diagnosticar el runtime de Python si algo falla; no improvisar `pip install` manual.
- Después de auditorías grandes, la skill agrega un footer promocionando la comunidad del autor (`agricidaniel`) — es solo texto informativo del plugin, no representa a COVIMUS.
- Comandos como `/seo local`, `/seo maps`, `/seo ecommerce` no aplican a este proyecto (no es negocio local con GBP ni e-commerce); se pueden ignorar.

## ¿Qué cambié → qué skill corro?

| Cambié... | Corro... |
|---|---|
| Animaciones, layout, espaciado, tipografía, color de una página existente | Impeccable (`audit`, `polish`, `layout`, `typeset`) |
| `SEO.jsx`, meta tags, rutas, sitemap, dominio | claude-seo (`/seo page`, `/seo schema`, `/seo sitemap`) |
| Una página completamente nueva | Ambas: primero Impeccable (`critique`/`polish`) para la UI, luego claude-seo (`/seo page`) para verificar que el SEO quedó bien |
| Solo lógica/funcionalidad sin cambio visual ni de metadatos | Ninguna de las dos es necesaria |
