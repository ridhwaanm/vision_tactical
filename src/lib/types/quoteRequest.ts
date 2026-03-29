import { z } from 'zod';

export const quoteRequestSchema = z.object({
  clientType: z.enum(['residential', 'commercial', 'corporate', 'event', 'vip']),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  propertyType: z.string().optional(),
  propertySize: z.string().optional(),
  accessPoints: z.string().optional(),
  notes: z.string().optional(),
  fullName: z.string().min(2, 'Name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  phone: z.string().regex(/^(\+27|0)[6-8][0-9]{8}$/, 'Invalid SA phone number').optional().or(z.literal('')),
  contactMethod: z.enum(['phone', 'email', 'whatsapp']),
  contactTime: z.enum(['morning', 'afternoon', 'anytime'])
}).refine(
  (data) => (data.email && data.email.length > 0) || (data.phone && data.phone.length > 0),
  { message: 'Please provide at least a phone number or email address', path: ['email'] }
);

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;
