async function sendEmail(_options) {
  return { success: true, data: null };
}
async function sendContactEmail(formData) {
  return sendEmail();
}
async function sendQuoteRequestEmail(formData) {
  `
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
      </tr>` : ""}
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
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.services.join(", ")}</td>
      </tr>
      ${formData.propertyType ? `<tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Property Type</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.propertyType}</td>
      </tr>` : ""}
      ${formData.propertySize ? `<tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Property Size</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.propertySize}</td>
      </tr>` : ""}
      ${formData.accessPoints ? `<tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Access Points</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.accessPoints}</td>
      </tr>` : ""}
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Preferred Contact</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.contactMethod} - ${formData.contactTime}</td>
      </tr>
      ${formData.notes ? `<tr>
        <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Notes</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${formData.notes}</td>
      </tr>` : ""}
    </table>
  `;
  return sendEmail({
    subject: `Quote Request: ${formData.reference} - ${formData.fullName}`
  });
}
async function sendQuoteConfirmationEmail(clientEmail, reference, clientName) {
  return sendEmail();
}
export {
  sendQuoteRequestEmail as a,
  sendQuoteConfirmationEmail as b,
  sendContactEmail as s
};
