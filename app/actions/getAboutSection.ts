import { z } from 'zod';

export async function getAboutSection() {
  const schema = z.object({
    overview: z.string(),
    services: z.array(
      z.object({
        title: z.string(),
        icon: z.string(),
      })
    ),
  });

  try {
    const result = await fetch('http://localhost:3000/api/about');
    const json = await result.json();
    const validated = schema.parse(json);
    return validated;
  } catch (error) {
    console.error(error);
    return {
      overview: '',
      services: [],
    };
  }
}
