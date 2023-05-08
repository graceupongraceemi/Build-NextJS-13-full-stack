import { withMethods } from '@/lib/api-middlewares/with-methods';
import { authOptions } from '@/lib/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { RevokeApiData } from '@/types/api';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<RevokeApiData>
) => {
  const user = await getServerSession(req, res, authOptions).then(
    (res) => res?.user
  );

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized', success: false });
  }
};

export default withMethods(['POST'], handler);
