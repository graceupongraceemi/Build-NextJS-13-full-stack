import { withMethods } from '@/lib/api-middlewares/with-methods';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const reqShema = z.object({
  text1: z.string().max(1000),
  text2: z.string().max(1000)
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown;

  const apiKey = req.headers.authorization;
  if (!apiKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { text1, text2 } = reqShema.parse(body);

    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true
      }
    });

    if (!validApiKey) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const start = new Date();

    const embedding = await Prommise.all(
      [text1, text2].map(async (text) => {
        const res = await openai;
      })
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues });
    }

    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default withMethods(['POST'], handler);
