/**
 * CONTRATACIONES
 *
 * Registro de los trabajos que COVIMUS ejecuta bajo contrato para terceros
 * (entes públicos, industria, empresas privadas), usando su planta de
 * asfalto. Es un listado APARTE del de `projectsData.js`, que corresponde a
 * las obras municipales ejecutadas en el marco de la gestión de la Alcaldía
 * del Municipio Sotillo. Ninguno de los dos archivos importa al otro.
 *
 * Campos:
 *  - contractNumber : número de contrato tal como aparece en el documento.
 *  - front          : frente de trabajo asignado dentro del contrato (opcional).
 *  - client         : ente o empresa contratante. "" si no se puede publicar
 *                      (la UI omite esa fila en vez de mostrarla vacía).
 *  - facility       : instalación / sitio donde se ejecutó (nombre completo).
 *  - facilityShort  : versión corta para tarjetas (sigla o nombre breve).
 *  - tons           : toneladas colocadas, numérico, para los totales del sitio.
 *  - tonsLabel      : el mismo dato formateado para mostrar (ej. "1,997 Ton").
 *  - startDate / endDate : "DD/MM/YYYY" o null si no está confirmada.
 *                      NUNCA inventar una fecha — misma regla que aplica
 *                      add-project con las coordenadas de projectsData.js.
 *  - activities     : lista de actividades principales ejecutadas.
 *  - images         : opcional. Si está vacío, ContractCard y
 *                      ContractDetailsModal caen a un modo "sin foto" que no
 *                      deja huecos visuales ni imágenes rotas.
 */

export const contracts = [
  {
    id: 1,
    contractNumber: "4600143652",
    front: "Frente B",
    name: "Adecuación de vialidad y drenajes del Terminal de Almacenamiento y Embarque de Crudo José Antonio Anzoátegui (TAECJAA)",
    client: "PDVSA",
    facility: "Terminal de Almacenamiento y Embarque de Crudo José Antonio Anzoátegui (TAECJAA)",
    facilityShort: "TAECJAA",
    sector: "Industrial / Petrolero",
    description:
      "Colocación de 1,997 toneladas de mezcla asfáltica en caliente, con demarcación y señalización de la calle de servicio, el acceso para vehículos pesados y la calle D.",
    fullDescription:
      "En el marco del contrato N° 4600143652, correspondiente al Frente B, se llevó a cabo la colocación de 1,997 toneladas en el proyecto de denominación “Adecuación de vialidad y drenajes del Terminal de Almacenamiento y Embarque de Crudo José Antonio Anzoátegui (TAECJAA)”. Además, se ejecutaron diversas actividades complementarias, entre las que destacan la organización y limpieza del área de trabajo. Se realizó con éxito la demarcación y señalización de la calle de servicio, el acceso para vehículos pesados y la calle D. Estas labores contribuyen a mejorar la funcionalidad, seguridad y orden en las instalaciones del terminal.",
    tons: 1997,
    tonsLabel: "1,997 Ton",
    scope: "Calle de servicio, acceso de vehículos pesados y calle D",
    activities: [
      "Instalación de señales de identificación en edificios.",
      "Vaciado de pedestales para señalética.",
      "Reparación y corte de baches en los linderos de mantenimiento.",
      "Adecuación de la vialidad con mezcla asfáltica en caliente.",
      "Carpeta corrida y cortes de bacheo.",
      "Demarcación y señalización vial.",
      "Organización y limpieza del área de trabajo.",
    ],
    impact:
      "Mejora de la funcionalidad, la seguridad y el orden en las instalaciones del terminal.",
    status: "completed",
    year: "2026",
    startDate: null,
    endDate: null,
    images: [
      "/assets/images/ima_contratos/2026/TAECJAA_Frente_B/taecjaa-frente-b-01.webp",
      "/assets/images/ima_contratos/2026/TAECJAA_Frente_B/taecjaa-frente-b-02.webp",
      "/assets/images/ima_contratos/2026/TAECJAA_Frente_B/taecjaa-frente-b-03.webp",
      "/assets/images/ima_contratos/2026/TAECJAA_Frente_B/taecjaa-frente-b-04.webp",
      "/assets/images/ima_contratos/2026/TAECJAA_Frente_B/taecjaa-frente-b-05.webp",
      "/assets/images/ima_contratos/2026/TAECJAA_Frente_B/taecjaa-frente-b-06.webp",
      "/assets/images/ima_contratos/2026/TAECJAA_Frente_B/taecjaa-frente-b-07.webp",
    ],
    image: "/assets/images/ima_contratos/2026/TAECJAA_Frente_B/taecjaa-frente-b-01.webp",
    imageAlt:
      "Vialidad adecuada con mezcla asfáltica en caliente y demarcación en el TAECJAA",
  },
];

/** Total de toneladas colocadas bajo contratación (alimenta los indicadores de la página). */
export const totalContractTons = contracts.reduce(
  (sum, contract) => sum + (contract?.tons || 0),
  0
);
