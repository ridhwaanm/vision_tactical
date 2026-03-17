import { z } from 'zod';

export const quoteRequestSchema = z.object({
  clientType: z.enum(['residential', 'commercial', 'corporate', 'event', 'vip']),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  propertyType: z.string().min(1),
  propertySize: z.string().min(1),
  accessPoints: z.string().min(1),
  existingSecurity: z.array(z.string()),
  notes: z.string().optional(),
  fullName: z.string().min(2, 'Name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+27|0)[6-8][0-9]{8}$/, 'Invalid SA phone number'),
  contactMethod: z.enum(['phone', 'email', 'whatsapp']),
  contactTime: z.enum(['morning', 'afternoon', 'anytime'])
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;
