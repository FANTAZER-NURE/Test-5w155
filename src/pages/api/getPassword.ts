import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    'https://api.genratr.com/?length=8&uppercase&lowercase&numbers'
  );
  const data = await response.json();
  res.status(200).json(data);
}
