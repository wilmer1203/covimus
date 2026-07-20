// Spike descartable (Commit 0): confirma que Playwright/Chromium puede lanzar
// en el entorno de build actual. Borrar una vez validado en Vercel Preview.
import { chromium } from 'playwright';

const browser = await chromium.launch();
console.log('OK: Chromium launched', await browser.version());
await browser.close();
