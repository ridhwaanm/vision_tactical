import { a as getServiceBySlug } from "../../../../chunks/services.js";
import { error } from "@sveltejs/kit";
async function load({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    throw error(404, "Service not found");
  }
  const relatedServices = service.relatedServices.map((slug) => getServiceBySlug(slug)).filter(Boolean);
  return {
    service,
    relatedServices
  };
}
export {
  load
};
