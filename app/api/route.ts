import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request) {
  const data = { name: 'llq' };
  return NextResponse.json(data);
}
