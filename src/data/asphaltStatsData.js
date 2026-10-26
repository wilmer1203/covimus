/**
 * CIFRAS DE ASFALTADO (GESTIÓN DIRECTA)
 *
 * Toneladas colocadas por COVIMUS bajo gestión directa (Dr. Jesús Marcano),
 * desglosadas por tipo de mezcla y por año. Es un registro APARTE de
 * `projectsData.js` (obras municipales) y de `contractsData.js` (contratos
 * con terceros). Ninguno de esos archivos importa este.
 *
 * `heroFrenteA` es una excepción: es la cifra del Frente A (contrato
 * 4600143660) que todavía NO está dado de alta en `contractsData.js`
 * (falta la info completa para publicarlo en /contrataciones). Se usa solo
 * para la casilla del Hero hasta que se pueda agregar el contrato completo
 * allá — en ese momento este objeto debería eliminarse y el Hero debería
 * leer el contrato real, igual que ya hace con el Frente B.
 */

export const hotAsphalt = {
  totalTons: 9747, // dato real, ya se mostraba en el hero
  since: "09/09/2025",
  year2025Tons: 9798, // dato real (gerencia)
  year2026Tons: 3140, // dato real (gerencia)
  year2026PeriodLabel: "Enero - Agosto 2026",
};

export const coldAsphalt = {
  year2026Tons: 20.72, // dato real (gerencia) — 20.723 Kg colocados en 2026
};

export const compactedGravelPlan = {
  year2026M3: 259, // dato real (gerencia) — unidad es M3, no toneladas
};

export const heroFrenteA = {
  front: "Frente A",
  contractNumber: "4600143660",
  tons: 1500, // INVENTADO — reemplazar con dato real
};
