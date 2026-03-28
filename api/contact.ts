import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, projectType, message } = req.body;

  try {
    const response = await fetch("https://formsubmit.co/ajax/porus21029@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        "Project Type": projectType,
        message,
        _subject: `New Project Inquiry: ${projectType || 'General'}`
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send to FormSubmit');
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error in contact API:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
}
