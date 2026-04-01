export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxLjoLmAJUD-Qo-WEAUXrOSLZeW8SU_xCZdQaZmyQqIxeBZ0l2u7gXXV0GbpHiME-W2/exec';

    const response = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
      redirect: 'follow'
    });

    const text = await response.text();
    res.status(200).json({ status: 'ok', response: text.substring(0, 100) });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
}
