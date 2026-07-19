// Envía el reporte del formulario de contacto por correo usando Resend.
// Requiere la variable de entorno RESEND_API_KEY configurada en Vercel.
// Sin dominio verificado, Resend solo permite enviar al correo dueño de la
// cuenta, por eso el destinatario está fijo.
const RECIPIENT = 'atencionciudadanacovimus@gmail.com';

const REQUEST_TYPE_LABELS = {
  denuncia: 'Denuncia',
  servicio: 'Solicitud de Servicio',
  reclamo: 'Reclamo',
  sugerencia: 'Sugerencia',
};

const escapeHtml = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY no está configurada en el servidor' });
  }

  const {
    anonymous,
    name,
    cedula,
    phone,
    email,
    requestType,
    sector,
    reference,
    message,
    imageUrl,
  } = req.body || {};

  if (!message || !sector) {
    return res.status(400).json({ error: 'Faltan campos obligatorios (sector, descripción)' });
  }

  const typeLabel = REQUEST_TYPE_LABELS[requestType] || 'Solicitud';

  const identityRows = anonymous
    ? '<tr><td colspan="2" style="padding:8px 12px;color:#92400e;background:#fef3c7;border-radius:6px;font-weight:bold;">Reporte enviado en modo anónimo</td></tr>'
    : `
      <tr><td style="padding:6px 12px;color:#64748b;">Nombre</td><td style="padding:6px 12px;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:6px 12px;color:#64748b;">Cédula</td><td style="padding:6px 12px;">${escapeHtml(cedula)}</td></tr>
      <tr><td style="padding:6px 12px;color:#64748b;">Teléfono</td><td style="padding:6px 12px;">${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:6px 12px;color:#64748b;">Correo</td><td style="padding:6px 12px;">${escapeHtml(email)}</td></tr>`;

  const evidenceRow = imageUrl
    ? `<tr><td style="padding:6px 12px;color:#64748b;">Evidencia</td><td style="padding:6px 12px;"><a href="${escapeHtml(imageUrl)}">Ver fotografía adjunta</a></td></tr>`
    : '';

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0f172a;">
      <h2 style="background:#0f172a;color:#FFCC00;padding:16px 20px;border-radius:8px 8px 0 0;margin:0;">
        ${escapeHtml(typeLabel)} — Formulario Web COVIMUS
      </h2>
      <table style="width:100%;border-collapse:collapse;background:#f8fafc;border:1px solid #e2e8f0;">
        ${identityRows}
        <tr><td style="padding:6px 12px;color:#64748b;">Tipo</td><td style="padding:6px 12px;">${escapeHtml(typeLabel)}</td></tr>
        <tr><td style="padding:6px 12px;color:#64748b;">Sector / Parroquia</td><td style="padding:6px 12px;">${escapeHtml(sector)}</td></tr>
        <tr><td style="padding:6px 12px;color:#64748b;">Punto de referencia</td><td style="padding:6px 12px;">${escapeHtml(reference)}</td></tr>
        ${evidenceRow}
      </table>
      <div style="padding:16px 20px;background:#fff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
        <p style="color:#64748b;margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Descripción</p>
        <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
      </div>
    </div>`;

  const payload = {
    from: 'COVIMUS Web <onboarding@resend.dev>',
    to: [RECIPIENT],
    subject: `${typeLabel} — ${sector}`,
    html,
  };

  if (!anonymous && email) {
    payload.reply_to = [email];
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(502).json({ error: data.message || 'Resend rechazó el envío' });
    }

    return res.status(200).json({ id: data.id });
  } catch (error) {
    return res.status(502).json({ error: 'No se pudo enviar el correo' });
  }
}
