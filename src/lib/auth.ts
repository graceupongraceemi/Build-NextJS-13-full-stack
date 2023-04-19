import { NextAuthOptions } from 'next-auth';
import { db } from '@/lib/db';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db)
  session: {
    strategy: 'jwt'
  }
};
