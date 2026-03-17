import { getServiceBySlug, getAllServices } from '$lib/data/services';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    throw error(404, 'Service not found');
  }

  // Get related service details
  const relatedServices = service.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter(Boolean);

  return {
    service,
    relatedServices
  };
}
