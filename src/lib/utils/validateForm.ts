import { z } from 'zod';
import { contactFormSchema } from '$lib/types/contactForm';
import { quoteRequestSchema } from '$lib/types/quoteRequest';

export { contactFormSchema, quoteRequestSchema };

/**
 * Validate contact form data
 */
export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}

/**
 * Validate quote request data
 */
export function validateQuoteRequest(data: unknown) {
  return quoteRequestSchema.safeParse(data);
}

/**
 * Phone number validation for South African numbers
 */
export const saPhoneSchema = z
  .string()
  .regex(/^(\+27|0)[6-8][0-9]{8}$/, 'Invalid South African phone number');

/**
 * Email validation
 */
export const emailSchema = z.string().email('Invalid email address');
