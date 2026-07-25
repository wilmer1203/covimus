# Esquema de `projects[]` (`src/data/projectsData.js`)

Cada obra es un objeto dentro del array `export const projects = [...]`. Campos:

| Campo | Tipo | Obligatorio | Notas |
|---|---|---|---|
| `id` | number | sí | Calcular como `max(ids existentes) + 1` **en el momento de escribir el archivo**, no antes (por si se agregó otra obra a mitad de la conversación). El orden dentro del array no importa para el sitio — `src/pages/projects/index.jsx` ordena la lista por `startDate` descendente. |
| `name` | string | sí | Nombre de la obra tal como debe verse en la card/modal. |
| `category` | string | sí | Hoy todas las obras existentes usan `"infrastructure"`. Mantener salvo que el usuario indique otra cosa. |
| `categoryIcon` | string | sí | Nombre de ícono de `lucide-react`. Todas las obras existentes usan `"Construction"`. |
| `municipality` | string | sí | Este campo alimenta el filtro de sectores de la página de Proyectos (se deriva dinámicamente, no hay que registrar nada más). Usar el nombre del sector/avenida tal como aparece en obras similares (ver los 12 valores existentes en este mismo archivo antes de inventar uno nuevo). |
| `description` | string | sí | Descripción corta (1 línea), se muestra en la card. |
| `fullDescription` | string | sí | Párrafo largo. Ver `house-style.md` para el tono institucional. |
| `images` | string[] | sí | Rutas absolutas `/assets/images/ima_projects/<año>/<CarpetaProyecto>/<slug>-01.webp`, `-02.webp`, etc. Deben coincidir exactamente con lo que produjo `process_images.py`. |
| `image` | string | sí | Portada — siempre el primer elemento de `images`. |
| `imageAlt` | string | sí | Texto alternativo descriptivo de la portada (accesibilidad/SEO). |
| `status` | `"completed"` \| `"in-progress"` \| `"planned"` | sí | Todas las obras existentes son `"completed"`. |
| `progress` | number (0-100) | sí | 100 si `status` es `"completed"`. |
| `startDate` / `endDate` | string `"DD/MM/YYYY"` | sí | Formato exacto, con ceros a la izquierda. Se usa para ordenar la lista. |
| `budget` | string | sí | Material/insumo usado, ej. `"200 Ton Asfalto"`. No es un monto en bolívares/dólares pese al nombre del campo — sigue la convención ya establecida en los datos existentes. |
| `beneficiaries` | string | sí | Métrica de alcance, ej. `"160 Metros lineales"` o `"2,000 m²"`. |
| `contractor` | string | sí | Siempre `"Covimus"` en todas las obras existentes. |
| `coordinates` | `{ lat: number, lng: number }` | sí | **Nunca inventar/poner `{0,0}`.** Si el usuario no las tiene a mano, dejar la obra pendiente de ese dato y preguntar explícitamente antes de escribir el archivo — unas coordenadas falsas rompen el mapa silenciosamente. |
| `impact` | string | sí | Una línea resumen del impacto (ej. "Optimización del tránsito en el Casco Central."). |
| `testimonial` | string \| `null` | no | Si no hay testimonio, escribir `null` explícito (no omitir el campo) — así lo hacen ya 9 de las 12 obras existentes. |
| `testimonialAuthor` | string | solo si `testimonial` no es `null` | |
| `testimonialRole` | string | solo si `testimonial` no es `null` | Ej. "Vecina de Paseo La Cruz y El Mar", "Conductora y Habitante". |

## Convención de carpetas/archivos de imágenes

```
public/assets/images/ima_projects/<año>/<CarpetaProyecto>/<slug>-01.webp
                                                            <slug>-02.webp
                                                            ...
```

- `<año>`: año en que se ejecutó la obra (ej. `2026`, `2025`), no el año de la carga de datos.
- `<CarpetaProyecto>`: PascalCase o snake_case con mayúscula inicial, coincidiendo con el patrón ya usado (`Mejoramiento_Espigon`, `Cristina_Suite`, `Doral_Beach`, `Isla_Cuba`). Debe ser único — `process_images.py` falla si la carpeta destino ya existe y no está vacía (salvo `--force`).
- `<slug>`: kebab-case corto derivado del nombre de la obra (ej. `av-municipal-cristina-suite`), coincidiendo con el patrón de nombres de archivo ya usado (`av-5-julio-01.jpg`, `rehabilitacion-av-bolivar-01.jpg`).
- Formato final siempre `.webp` (ver `process_images.py` para el preset de tamaño/calidad).
