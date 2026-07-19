// Sube la evidencia fotográfica a ImgBB sin exponer la clave en el cliente.
// Requiere la variable de entorno IMGBB_API_KEY configurada en Vercel.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const apiKey = process.env.IMGBB_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'IMGBB_API_KEY no está configurada en el servidor' });
  }

  const image = req.body?.image;
  if (!image || typeof image !== 'string') {
    return res.status(400).json({ error: 'Falta la imagen (base64) en el cuerpo de la solicitud' });
  }

  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ image }),
    });

    const data = await response.json();
    if (!data.success) {
      return res.status(502).json({ error: data.error?.message || 'ImgBB rechazó la imagen' });
    }

    return res.status(200).json({ url: data.data.url });
  } catch (error) {
    return res.status(502).json({ error: 'No se pudo subir la imagen' });
  }
}
