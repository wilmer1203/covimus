/**
 * CIFRAS DE ASFALTADO (GESTIÓN DIRECTA)
 *
 * Toneladas colocadas por COVIMUS bajo gestión directa (Dr. Jesús Marcano),
 * desglosadas por tipo de mezcla y por año. Es un registro APARTE de
 * `projectsData.js` (obras municipales) y de `contractsData.js` (contratos
 * con terceros). Ninguno de esos archivos importa este.
 */

const year2025Tons = 9747; // dato real (gerencia), actualizado 30/10/2026
const year2026Tons = 3903; // dato real (gerencia), actualizado 30/10/2026

export const hotAsphalt = {
  totalTons: year2025Tons + year2026Tons, // suma de Año 2025 + Año 2026
  since: "09/09/2025",
  year2025Tons,
  year2026Tons,
  year2026PeriodLabel: "Enero - Octubre 2026",
};

export const coldAsphalt = {
  year2026Tons: 20.72, // dato real (gerencia) — 20.723 Kg colocados en 2026
};

export const compactedGravelPlan = {
  year2026M3: 259, // dato real (gerencia) — unidad es M3, no toneladas
};
