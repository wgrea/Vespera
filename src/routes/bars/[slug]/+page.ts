// src/routes/bars/[slug]/+page.ts
import type { PageLoad } from './$types';
import barTypes from '$lib/data/bar-types.json';

export const load: PageLoad = ({ params }) => {
  const bar = (barTypes as any[]).find(b => b.slug === params.slug);
  return { bar };
};
