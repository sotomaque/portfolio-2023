import { NextResponse } from 'next/server';

const overview = `As a full-stack engineer with a frontend focus and a background in economics and mathematics, I am a versatile problem-solver with a diverse skill set. I have experience developing high-volume enterprise applications using a range of technologies, including Javascript, Typescript, SwiftUI, GraphQL, Java, and Python. With a bachelor's degree in economics and a minor in mathematics from UT Austin, I have a strong foundation in data analysis and critical thinking, as well as a passion for exploring new ideas and approaches. In my current role, I am responsible for building and maintaining scalable, user-friendly web applications that drive business growth. In my free time, I enjoy staying up to date with the latest developments in the tech industry and applying my polymathic perspective to real-world challenges. I have a bachelor’s degree from UT Austin. I am most familiar with Javascript, Typescript, SwiftUI, GraphQL, Java, and Python.`;

export function GET() {
  return NextResponse.json({ overview });
}
