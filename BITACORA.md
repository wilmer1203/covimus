# Bitácora de Seguimiento — Covimus

Registro interno de cada tarea hecha al sitio (contenido, cambios, funciones, mantenimiento). No se despliega: vive fuera de `src/` y `public/`, así que Vite nunca lo incluye en el build ni queda visible en el sitio publicado.

Plantillas de reporte al cliente (una por tipo de tarea, con botón de copiar): https://claude.ai/code/artifact/e5272c17-d27a-456f-968d-646b8103cfa7

## Cómo usarla

Después de cada tarea, agregar una fila abajo (fecha en que se hizo/publicó, no la fecha de ejecución de la obra en campo). "Reportado" se marca en Sí una vez enviado el mensaje al cliente con la plantilla correspondiente.

## Registro

| Fecha | Tipo | Qué se hizo | Evidencia | Estado | Reportado |
|---|---|---|---|---|---|
| 02/08/2026 | Contenido | Alta de 5 obras (Calle Chimborazo, Sierra Maestra, Bella Vista, Cerro Amarillo, Elevado PLC) | `f60a905` | Publicado | Sí |
| 02/08/2026 | Contenido | Alta de 4 obras (Calle Montes, Av. Municipal UDO, Resuelve Tu Calle ×2) | `5f5d57e` | Publicado | Sí |
| 11/08/2026 | Función | Nuevo apartado `/contrataciones`, aparte de Proyectos, para obras ejecutadas bajo contrato para terceros (1er registro: contrato N° 4600143652 con PDVSA, TAECJAA). Incluye página, tarjeta y ficha propias, enlaces en Header/Footer, ruta agregada al prerender, sitemap y llms.txt, más las 7 fotos del contrato procesadas a WEBP. Pendiente: confirmar si el contrato es directo con PDVSA o vía contratista principal. | Pendiente de commit | Sin publicar | No |
