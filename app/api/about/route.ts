import { overview, services } from './data';
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ overview, services });
}
