export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { type, data } = req.body;
  const token = process.env.NOTION_TOKEN;

  const DB_IDS = {
    subscribers: 'ee63c376-6038-4a1e-903e-fdd6751b0176',
    leads: 'dc87e897-faac-4e57-8b55-7952f1061c6f',
    listing: '6cc052fc-4a57-453f-8d7a-91de1c2898be'
  };

  let dbId, properties;

  if (type === 'subscriber') {
    dbId = DB_IDS.subscribers;
    properties = {
      'Email': { title: [{ text: { content: data.email } }] },
      'Source': { select: { name: data.source || 'Hero' } }
    };
  } else if (type === 'lead') {
    dbId = DB_IDS.leads;
    properties = {
      'Name': { title: [{ text: { content: data.xhandle || data.telegram || 'Anonymous' } }] },
      'Email': { rich_text: [{ text: { content: data.email || '' } }] },
      'X Handle': { rich_text: [{ text: { content: data.xhandle || '' } }] },
      'Telegram': { rich_text: [{ text: { content: data.telegram || '' } }] },
      'Journey Stage': { select: { name: data.journey || 'Pre-idea' } },
      'Vertical': { select: { name: data.vertical || 'Other' } },
      'Funding Types': { rich_text: [{ text: { content: (data.types || []).join(', ') } }] }
    };
  } else if (type === 'listing') {
    dbId = DB_IDS.listing;
    properties = {
      'Name': { title: [{ text: { content: data.xhandle || data.telegram || 'Anonymous' } }] },
      'X Handle': { rich_text: [{ text: { content: data.xhandle || '' } }] },
      'Telegram': { rich_text: [{ text: { content: data.telegram || '' } }] },
      'Status': { select: { name: 'New' } }
    };
  } else {
    return res.status(400).json({ error: 'Unknown type' });
  }

  const response = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    },
    body: JSON.stringify({ parent: { database_id: dbId }, properties })
  });

  const result = await response.json();
  if (!response.ok) return res.status(500).json({ error: result });
  return res.status(200).json({ success: true });
}
