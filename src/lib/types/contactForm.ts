import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+27|0)[6-8][0-9]{8}$/, 'Invalid SA phone number'),
  subject: z.enum(['general', 'quote', 'complaint', 'partnership', 'media', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
