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
| 11/08/2026 | Función | Nuevo apartado `/contrataciones`, aparte de Proyectos, para obras ejecutadas bajo contrato para terceros (1er registro: contrato N° 4600143652 con PDVSA, TAECJAA). Incluye página, tarjeta y ficha propias, enlaces en Header/Footer, ruta agregada al prerender, sitemap y llms.txt, más las 7 fotos del contrato procesadas a WEBP. Pendiente: confirmar si el contrato es directo con PDVSA o vía contratista principal. | `1236b5a` | Publicado | No |
| 11/08/2026 | Función | Home: nueva tarjeta "Contrataciones" en el bento del Hero (Toneladas Colocadas + Contratos Ejecutados, dinámica desde `contractsData.js`). De paso se corrigió el posicionamiento del bento (estaba en `absolute`, no crecía con el contenido) para que no se recorte al sumar más tarjetas. Pendiente: el cliente va a dar los números actualizados de "Toneladas Colocadas" (hoy 9.747, gestión Jesús Marcano) y "Localidades" (hoy 25) — no se tocaron en esta tarea. | Pendiente de commit | Sin publicar | No |
| 11/08/2026 | Contenido | Actualización de equipo directivo en `authoritiesData.js` (pedido directo del cliente): (1) Gerente de RRHH: Lcda. Gleni Bello; (2) Gerente de Operaciones: Ing Ricardo Sánchez; (3) Jefe de Bienes: Lcda. Milagro Lezama; (4) Consultor Jurídico: Abg. Rodnel Pereira; (5) Jefe de Contrataciones: T.S.U. Ruth Días. Removidos: Coordinador de Control de Calidad (Ing Ricardo Sanchez) y Jefe de Bienestar Social (T.S.U Elis Aguilera) quedan vacantes. Nota: la página `/authorities` sigue sin ruta activa en `Routes.jsx`, así que este dato no se ve todavía en el sitio publicado — solo queda listo en el código para cuando se active. | `9e17dfb` | Publicado | No |
| 11/08/2026 | Función | Rediseño del bento del Hero: la tarjeta de Contrataciones pasa a compartir fila con la de Jesús Marcano (mitad cada una) en vez de ir abajo sola; se agregó una 5ª tarjeta "Años · 17 · Transformando Sotillo" (dato institucional del aniversario, ya usado en el modal de bienvenida); los números de Contrataciones y Años pasan a amarillo (`#FFCC00`) sobre el fondo oscuro existente, resto sin cambios de color. Grid pasado de 2 a 6 columnas para lograr la proporción 1.5:1 entre la fila de arriba (2 tarjetas) y la de abajo (3 tarjetas). Verificado sin recortes en 1366×768, 1440×900 y 1920×1080. | `38198f3` | Publicado | No |
