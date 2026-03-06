import type { PageLoad } from './$types';
import eventTypes from '$lib/data/event-types.json';

export const load: PageLoad = ({ params }) => {
  const event = (eventTypes as any[]).find(e => e.slug === params.slug);

  return { event };
};
