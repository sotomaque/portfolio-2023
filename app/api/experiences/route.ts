import { experiences } from './data';
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ experiences });
}
