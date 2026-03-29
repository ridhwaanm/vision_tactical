import type { Actions, RequestHandler } from '@sveltejs/kit';
import { sendQuoteRequestEmail, sendQuoteConfirmationEmail } from '$lib/server/email';

// Handle JSON API requests
export const POST: RequestHandler = async ({ request }) => {
  try {
    const formData = await request.json();

    // Generate reference number
    const reference = 'VT-' + Date.now().toString().slice(-8);

    // Send email to admin
    const emailResult = await sendQuoteRequestEmail({
      reference,
      clientType: formData.clientType,
      services: formData.services,
      propertyType: formData.propertyType,
      propertySize: formData.propertySize,
      accessPoints: formData.accessPoints,
      notes: formData.notes,
      fullName: formData.fullName,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      contactMethod: formData.contactMethod,
      contactTime: formData.contactTime
    });

    if (!emailResult.success) {
      console.error('Failed to send quote email:', emailResult.error);
    }

    // Send confirmation email to client (only if they provided an email)
    if (formData.email) {
      const confirmResult = await sendQuoteConfirmationEmail(
        formData.email,
        reference,
        formData.fullName
      );

      if (!confirmResult.success) {
        console.error('Failed to send confirmation email:', confirmResult.error);
      }
    }

    return new Response(JSON.stringify({ success: true, reference }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Quote submission error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to submit quote request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
