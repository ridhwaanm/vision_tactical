import type { RequestHandler } from '@sveltejs/kit';
import { sendContactEmail } from '$lib/server/email';

// Handle JSON API requests
export const POST: RequestHandler = async ({ request }) => {
  try {
    const formData = await request.json();

    // Send email to admin
    const emailResult = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    });

    if (!emailResult.success) {
      console.error('Failed to send contact email:', emailResult.error);
      return new Response(JSON.stringify({ success: false, error: 'Failed to send message' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
