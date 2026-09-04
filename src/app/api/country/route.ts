import { headers } from 'next/headers';
import { getCountryCode } from '@/lib/country';

export async function GET() {
  const countryCode = await getCountryCode(await headers());
  return Response.json({ countryCode });
}