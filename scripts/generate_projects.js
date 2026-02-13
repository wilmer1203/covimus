const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../Cuantificacion_asfalto.xlsx');
const outputPath = path.join(__dirname, '../src/data/projectsData.js');

try {
  const workbook = XLSX.readFile(inputPath);
  const sheetName = workbook.SheetNames[0];
  const rawData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  const projects = [];
  let currentMonth = 'Octubre'; // Default start
  let currentYear = '2025';

  rawData.forEach((row, index) => {
    // Detect Month Headers
    if (row['__EMPTY'] && !row['__EMPTY_3']) {
      const val = row['__EMPTY'].toString().trim().toUpperCase();
      if (['OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE', 'ENERO', 'FEBRERO'].includes(val)) {
        currentMonth = val.charAt(0) + val.slice(1).toLowerCase(); // Capitalize
        if (['ENERO', 'FEBRERO'].includes(val)) currentYear = '2026';
        return;
      }
    }

    // Skip Total rows or empty descriptions
    if (!row['__EMPTY_3'] || (row['__EMPTY_6'] && row['__EMPTY_6'].toString().toLowerCase().includes('total'))) {
      return;
    }

    const description = row['__EMPTY_3'] ? row['__EMPTY_3'].toString().trim() : 'Sin ubicación especificada';
    const sector = row['__EMPTY_4'] ? row['__EMPTY_4'].toString().trim() : 'Vialidad General';
    const km = row['__EMPTY_6'] ? parseFloat(row['__EMPTY_6']) : 0;
    const tons = row['__EMPTY_7'] ? parseFloat(row['__EMPTY_7']) : 0;

    // Skip row if it looks like a header (contains "DESCRIPCION" or similar)
    if (description.includes("DESCRIPCION") || description.includes("UBICACION")) return;

    projects.push({
      id: `excel-${projects.length + 1}`,
      title: description, // Many rows use description as location
      category: sector,
      status: "Completado",
      progress: 100,
      priority: "Alta",
      location: description,
      date: `${currentMonth} ${currentYear}`,
      image: "/assets/images/asphalt-default.jpg", // Placeholder
      stats: {
        toneladas: tons.toFixed(2),
        km: km.toFixed(2),
        inversion: "N/A"
      },
      description: `Trabajos de asfaltado y recuperación vial en ${sector}.`
    });
  });

  const fileContent = `// Auto-generated from Cuantificacion_asfalto.xlsx
export const excelProjects = ${JSON.stringify(projects, null, 2)};
`;

  // Create dir if not exists (should exist)
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, fileContent);
  console.log(`Successfully generated ${projects.length} projects in ${outputPath}`);

} catch (error) {
  console.error("Error generating projects:", error);
  process.exit(1);
}
