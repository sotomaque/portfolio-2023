import { z } from 'zod';

export async function getWorkExperience() {
  const schema = z.array(
    z.object({
      title: z.string(),
      company_name: z.string(),
      icon: z.string(),
      iconBg: z.string(),
      date: z.string(),
      points: z.array(z.string()),
    })
  );

  try {
    const result = await fetch('http://localhost:3000/api/experiences');
    const { experiences } = await result.json();
    const validated = schema.parse(experiences);
    return validated;
  } catch (error) {
    console.error(error);
    return [];
  }
}
