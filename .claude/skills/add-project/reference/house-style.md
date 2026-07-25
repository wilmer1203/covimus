# Tono institucional de `fullDescription` (y `description`/`impact`)

COVIMUS es una corporación municipal venezolana (Corporación de Vialidad e Infraestructura del Municipio Sotillo, Puerto La Cruz). Los textos de obras no son neutros/técnicos puros: siguen una voz de comunicación institucional/política. Antes de redactar una obra nueva, seguir este patrón en vez de improvisar un tono distinto.

## Patrón recurrente en `fullDescription`

1. **Frase de apertura** que ubica la obra dentro de un plan/programa mayor ("Como parte del plan integral de mantenimiento...", "Continuando con la transformación de Puerto La Cruz...", "Dando continuidad al Plan de Asfaltado Integral...", "Iniciando el plan de obras 2026...").
2. **Quién ejecuta**: casi siempre "la Corporación de Vialidad e Infraestructura del municipio Sotillo (Covimus)" o simplemente "Covimus", a veces articulada con otro organismo ("en articulación con la Comuna Bahía de Pozuelo", "con el Poder Popular", "la Comuna Socialista El Paraíso").
3. **Detalle técnico concreto**: toneladas de mezcla asfáltica en caliente colocadas, metros lineales o m² recuperados, ubicación exacta (avenida, tramo, punto de referencia local como un hotel o comercio conocido). Estos números deben ser reales, no inventados — pedirlos al usuario si faltan.
4. **Menciones de autoridades** (usar con moderación, no en cada frase, pero casi siempre aparece al menos una): "el Alcalde Jesús Marcano Tabata" (a veces "Jesús Marcano Tábata", ambas grafías aparecen en los datos existentes), "el gobernador Luis Marcano", ocasionalmente "el presidente Nicolás Maduro" o "el Gobierno Nacional, Regional y Municipal" cuando la obra es de mayor envergadura.
5. **Cierre con el beneficio/impacto ciudadano**: mejora de movilidad, seguridad vial, dignificación del espacio público, apoyo a la actividad económica/escolar local, etc.

`contractor` es siempre `"Covimus"` en todas las obras existentes.

## Ejemplos reales (tomados de `src/data/projectsData.js`)

**Obra grande, con autoridades y organismo articulado:**
> "En el marco de la recuperación de espacios públicos liderada por el Alcalde Jesús Marcano Tabata, se ejecutó la rehabilitación integral del estacionamiento del Paseo de la Cruz y el Mar. La obra comprendió la colocación de aproximadamente 350 toneladas de asfalto y la demarcación vial de 3,000 m², garantizando el ordenamiento y la seguridad en este punto clave para el esparcimiento familiar. Esta intervención reafirma el compromiso de la gestión municipal, con el apoyo del gobernador Luis Marcano y el presidente Nicolás Maduro, de elevar la calidad de vida de los ciudadanos y potenciar la infraestructura turística de Puerto La Cruz."

**Obra puntual, tono más breve:**
> "Como parte vital del plan de recuperación vial del municipio, la Covimus ejecutó la rehabilitación del tramo de la Avenida Municipal comprendido entre la Isla de Cuba (prolongación de la Av. Alterna) y la Redoma de Los Bomberos. Con la colocación de 350 toneladas de asfalto, esta intervención consolida la movilidad en este eje estratégico. El gobernador Luis Marcano y el alcalde Jesús Marcano Tabata continúan trabajando articuladamente en la recuperación de calles y avenidas, sumando esfuerzos para transformar la infraestructura vial de toda la zona metropolitana."

**Obra con enfoque social/comunitario (sin mencionar toneladas como cifra central):**
> "El Gobierno Nacional, la Gobernación de Anzoátegui y la Alcaldía de Puerto La Cruz unieron esfuerzos para la rehabilitación integral de la Calle El Comercio y Calle Colegio en el sector Pozuelos. Esta obra es fundamental para la actividad económica local y facilita el acceso seguro de estudiantes y docentes a las instituciones educativas de la zona. La intervención mejora la movilidad, reduce tiempos de traslado y garantiza la seguridad de peatones y conductores, reafirmando que el bienestar de las comunidades es prioridad de la gestión revolucionaria."

## `description` (corta) e `impact`

- `description`: una sola línea, factual, sin adjetivos institucionales — ej. "Colocación de 260 toneladas de asfalto frente al Cristina Suite.", "Recuperación de espacios públicos liderada por..." NO — mejor ver ejemplos reales: "Mejoramiento de la superficie con material granular.", "Colocación de 66 toneladas de asfalto en el Casco Central."
- `impact`: una línea de cierre/resumen del beneficio, ej. "Optimización del tránsito en el Casco Central.", "Recuperación de espacios públicos y optimización vial.", "Modernización y seguridad vial en zona de alto tráfico."

## Testimonios (`testimonial`, cuando existen)

Tono coloquial venezolano, en primera persona, breve (1-2 oraciones), atribuido a un vecino/conductor/visitante con nombre y rol:
> "El cambio es notable. Antes caminar por aquí era difícil por el terreno irregular, ahora se siente mucho más firme y seguro para venir con la familia." — Luisa Rodríguez, Vecina de Paseo La Cruz y El Mar

Si el usuario no tiene un testimonio real, dejar `testimonial: null` — no inventar una cita atribuida a una persona real o ficticia.
