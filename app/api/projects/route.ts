import { NextResponse } from 'next/server';
import { projects } from './data';

export function GET() {
  return NextResponse.json({ projects });
}
