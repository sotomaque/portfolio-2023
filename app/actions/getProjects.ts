import { z } from 'zod';

export async function getProjects() {
  const schema = z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      tags: z.array(
        z.object({
          name: z.string(),
        })
      ),
      image: z.string(),
      source_code_link: z.string().optional(),
      demo_link: z.string().optional(),
    })
  );

  try {
    const result = await fetch('/api/projects');
    const { projects } = await result.json();
    const validated = schema.parse(projects);
    return validated;
  } catch (error) {
    console.error(error);
    return [];
  }
}
