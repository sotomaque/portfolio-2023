import { z } from 'zod';

export async function getAboutSection() {
  const schema = z.object({
    overview: z.string(),
  });

  try {
    const result = await fetch('/api/about');
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
