export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch(
      'https://theattireclub.app.n8n.cloud/webhook/32cd7e0f-a1f9-4515-b43a-3d13f2f8e8fe',
{
          method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(req.body)
                      }
    );
    const data = await response.json();
    return res.status(200).json(data);
} catch (err) {
    return res.status(500).json({ reply: 'Something went wrong, please try again.' });
}
}
