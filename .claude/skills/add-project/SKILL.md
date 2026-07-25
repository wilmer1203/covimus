---
name: add-project
description: Usar cuando el usuario quiera agregar una obra/proyecto nuevo al sitio COVIMUS — estandariza las fotos a WEBP y redacta la entrada de projectsData.js, mostrando todo para revisión antes de escribir nada. Triggers: "agregar obra", "nuevo proyecto", "subir fotos de la obra", "agregar proyecto", "cargar una obra nueva".
version: 0.1.0
user-invocable: true
argument-hint: "[carpeta de fotos] [nombre de la obra]"
allowed-tools:
  - Bash(python .claude/skills/add-project/scripts/process_images.py *)
  - Bash(python3 .claude/skills/add-project/scripts/process_images.py *)
---

# add-project — alta de una obra nueva en COVIMUS

Reemplaza el flujo manual de (a) bajar calidad/convertir fotos a mano y (b) editar `src/data/projectsData.js` directamente. Antes de este skill existía `scripts/generate_projects.js`, un generador basado en Excel que escribía un esquema incompatible (`excelProjects`, que nada importaba) — fue eliminado por peligroso. Este skill NO reintroduce ese patrón: es interactivo, revisa cada paso con el usuario, y nunca escribe `projectsData.js` sin aprobación explícita.

Lee `reference/schema.md` (campos del objeto y convención de carpetas/nombres de imagen) y `reference/house-style.md` (tono institucional de los textos) antes de redactar nada.

## Flujo

### 1. Recolectar datos

**Fotos:** el buzón por defecto es `fotos-pendientes/` en la raíz del repo (gitignored, solo staging local — nunca se versiona). Si el usuario dice "ya están las fotos" o algo similar sin dar ruta, mirar ahí primero (subcarpetas si hay varias obras en cola) antes de preguntar dónde están. Si las pega directo en el chat como adjuntos: **no asumir que eso alcanza** — avisar que se necesita la carpeta real en disco (`fotos-pendientes/` u otra ruta) porque el script necesita archivos físicos, no el contenido del mensaje. No perder tiempo rebuscando en Descargas/Temp del sistema salvo que el usuario confirme que ahí están.

Si falta información, preguntar en un solo mensaje por lo que haga falta de esta lista (ver `reference/schema.md` para el detalle de cada campo):

- Carpeta con las fotos originales de la obra (default: `fotos-pendientes/`).
- Nombre de la obra, `municipality` (sector/avenida), categoría (default `"infrastructure"` / ícono `"Construction"` si no dicen otra cosa).
- Descripción corta y `fullDescription` (o los datos crudos para redactarla: qué se hizo, dónde, toneladas/metros, quién ejecutó).
- `budget` (material, ej. "200 Ton Asfalto"), `beneficiaries` (ej. "160 Metros lineales").
- `coordinates` (lat/lng). **Nunca inventar `{0,0}` ni ningún valor** — si no las tienen a mano, marcar el dato como pendiente y preguntar explícitamente; no seguir sin ellas.
- `status`/`progress`, `startDate`/`endDate` (`DD/MM/YYYY`).
- `impact` (una línea).
- Testimonio (opcional): si no hay uno real, queda `testimonial: null` — no inventar citas atribuidas a nadie.

### 2. Derivar nombres

A partir del nombre de la obra, proponer `slug` (kebab-case) y `dest-folder` (carpeta, patrón `Palabra_Clave`) siguiendo la convención ya usada (ver `reference/schema.md`). Confirmar con el usuario antes de correr el script — si el nombre no calza bien, es más barato ajustarlo ahora que después de procesar fotos.

### 3. Procesar las imágenes

Correr:

```
python .claude/skills/add-project/scripts/process_images.py \
  --source "<carpeta de fotos>" \
  --slug <slug> \
  --dest-folder <CarpetaProyecto> \
  --year <año>
```

Defaults del preset (WEBP, máx. 1600px en el lado largo, calidad 80, techo ~300KB con reducción automática de calidad si se pasa): están definidos como constantes al inicio de `process_images.py` y son ajustables por flag (`--max-dim`, `--quality`, `--size-ceiling-kb`, `--min-quality`) si el usuario pide algo distinto para esta obra en particular.

El script nunca toca `projectsData.js`. Devuelve un JSON por stdout con la carpeta destino, cada imagen procesada (archivo original, peso antes/después, dimensiones finales, calidad usada, y `oversize: true` si no logró bajar del techo ni al mínimo de calidad) y la ruta de portada (`coverImage`, la primera imagen).

Si la carpeta destino ya existe y no está vacía, el script falla — no reintentar con `--force` sin antes confirmar con el usuario que no se trata de otra obra con nombre parecido.

### 4. Preview obligatorio — nunca saltar este paso

Antes de tocar `src/data/projectsData.js`, mostrar en el chat:

1. Una tabla/lista de las imágenes procesadas (peso original → final, dimensiones, ruta pública), señalando cualquier `oversize: true` o advertencia de archivo de origen muy pesado.
2. El objeto JS completo propuesto para `projects[]`, como bloque de código ` ```js `, con `id` calculado como `max(ids actuales en projectsData.js) + 1` en ese momento (leer el archivo primero, no asumir un valor).

No escribir nada en `projectsData.js` todavía.

### 5. Ajustes

Si el usuario pide cambios de texto, orden de fotos, portada distinta, etc.: regenerar el bloque propuesto y volver a mostrarlo (paso 4). Solo re-correr el script de imágenes si las fotos en sí cambiaron. Repetir hasta aprobación explícita ("sí", "dale", "así está bien", etc.).

### 6. Aplicar

Recién con la aprobación, usar la herramienta de edición para agregar el objeto al final del array `projects` en `src/data/projectsData.js`. El orden dentro del array no afecta el sitio: `src/pages/projects/index.jsx` ordena la lista por `startDate` descendente y deriva los filtros de sector dinámicamente desde `municipality` — no hay que tocar ningún otro archivo para que la obra aparezca.

### 7. Freno explícito

Esta skill **nunca** ejecuta `git add`, `git commit` ni `git push`, ni siquiera después de que el usuario apruebe el cambio de datos. Eso requiere un pedido explícito y separado en un mensaje posterior.

### 8. Paso opcional (solo si lo piden)

Se puede ofrecer levantar `npm start` y revisar `/projects` en el navegador para confirmar visualmente cómo se ve el recorte (`object-cover`) de la card y del modal con las imágenes nuevas, antes de sugerir el commit. No hacerlo automáticamente — agrega tiempo y no todos los cambios lo necesitan.
