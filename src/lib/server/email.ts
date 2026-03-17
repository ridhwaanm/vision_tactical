import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_FORM_TO_EMAIL } from '$env/static/private';

const resend = new Resend(RESEND_API_KEY);

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

/**
 * Send an email using Resend
 */
export async function sendEmail({
  to,
  subject,
  html,
  from = 'Vision Tactical <noreply@visiontactical.co.za>'
}: SendEmailOptions) {
  try {
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html
    });

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}

/**
 * Send contact form email
 */
export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const html = `
    <h2>New Contact Form Submission</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Subject</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.subject}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.message}</td>
      </tr>
    </table>
  `;

  return sendEmail({
    to: CONTACT_FORM_TO_EMAIL,
    subject: `Contact Form: ${formData.subject}`,
    html
  });
}

/**
 * Send quote request email
 */
export async function sendQuoteRequestEmail(formData: {
  reference: string;
  clientType: string;
  services: string[];
  propertyType: string;
  propertySize: string;
  accessPoints: string;
  existingSecurity: string[];
  notes?: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  contactMethod: string;
  contactTime: string;
}) {
  const html = `
    <h2>New Quote Request - ${formData.reference}</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Reference</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.reference}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.fullName}</td>
      </tr>
      ${formData.companyName ? `<tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company Name</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.companyName}</td>
      </tr>` : ''}
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Client Type</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.clientType}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Services</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.services.join(', ')}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Property Type</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.propertyType}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Property Size</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.propertySize}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Access Points</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.accessPoints}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Existing Security</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.existingSecurity.join(', ') || 'None'}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Preferred Contact</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.contactMethod} - ${formData.contactTime}</td>
      </tr>
      ${formData.notes ? `<tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Notes</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.notes}</td>
      </tr>` : ''}
    </table>
  `;

  return sendEmail({
    to: CONTACT_FORM_TO_EMAIL,
    subject: `Quote Request: ${formData.reference} - ${formData.fullName}`,
    html
  });
}

/**
 * Send confirmation email to client
 */
export async function sendQuoteConfirmationEmail(clientEmail: string, reference: string, clientName: string) {
  const html = `
    <h2>Thank You for Your Quote Request</h2>
    <p>Dear ${clientName},</p>
    <p>Thank you for contacting Vision Tactical. We have received your quote request.</p>
    <p><strong>Reference Number:</strong> ${reference}</p>
    <p>A member of our team will contact you within 24 hours to discuss your requirements.</p>
    <p>For emergencies, please call us directly on 084 222 2222.</p>
    <p>Best regards,<br>Vision Tactical Team</p>
  `;

  return sendEmail({
    to: clientEmail,
    subject: `Quote Request Received - ${reference}`,
    html
  });
}
