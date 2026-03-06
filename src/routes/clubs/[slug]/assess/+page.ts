import type { PageLoad } from './$types';
import clubTypes from '$lib/data/club-types.json';

export const load: PageLoad = ({ params }) => {
  const club = (clubTypes as any[]).find(c => c.slug === params.slug);

  return { club };
};
