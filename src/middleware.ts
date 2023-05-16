import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { withAuth } from 'next-auth/middleware';

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_SECRET
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 h')
});

export default withAuth(async function middleware(req) {
  const pathname = req.nextUrl.pathname; // relative path

  // Manage rate limiting
  if (pathname.startsWith('/api')) {
    const ip = req.ip ?? '127.0.0.1';
    try {
      const { success } = await ratelimit.limit(ip);
    } catch (error) {}
  }
});
