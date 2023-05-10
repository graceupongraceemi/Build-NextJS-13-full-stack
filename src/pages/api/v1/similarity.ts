import { withMethods } from '@/lib/api-middlewares/with-methods';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const reqShema = z.object({
  text1: z.string().max(1000),
  text2: z.string().max(1000)
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown;
};

export default withMethods(['POST'], handler);
