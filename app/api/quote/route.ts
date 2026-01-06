// app/api/quote/route.ts
// This is not a Next.js API route. Remove Next.js imports and types.

export async function POST(request: any, response?: any) {
  try {
    const body = await request.json();
    const { quoteData, formData } = body;

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.zip) {
      return response?.json(
        { error: 'Missing required fields' },
        { status: 400 }
      ) || { error: 'Missing required fields', status: 400 };
    }

    // Calculate total
    let total = quoteData.treatmentPrice + quoteData.bedroomPrice;
    quoteData.addonPrices.forEach((price: number) => {
      total += price;
    });

    // Here you can integrate with your CRM/Email service
    // Examples below:

    // 1. Send email notification (using Resend, SendGrid, etc.)
    // await sendEmail({
    //   to: 'info@a2pestpros.com',
    //   subject: `New Quote Request - ${formData.name}`,
    //   html: generateEmailHTML(quoteData, formData, total),
    // });

    // 2. Save to database
    // await db.quotes.create({
    //   data: {
    //     ...formData,
    //     ...quoteData,
    //     total,
    //     createdAt: new Date(),
    //   },
    // });

    // 3. Send to CRM (HubSpot, Salesforce, etc.)
    // await fetch('https://api.hubspot.com/crm/v3/objects/deals', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     properties: {
    //       dealname: `Bed Bug Quote - ${formData.name}`,
    //       amount: total,
    //       pipeline: 'default',
    //       dealstage: 'appointmentscheduled',
    //     },
    //   }),
    // });

    // 4. Send SMS notification (using Twilio)
    // await twilioClient.messages.create({
    //   body: `New quote request from ${formData.name}. Total: $${total}. Phone: ${formData.phone}`,
    //   from: process.env.TWILIO_PHONE_NUMBER,
    //   to: '+18044897465',
    // });

    // For now, just log it
    console.log('Quote Submission:', {
      quoteData,
      formData,
      total,
      timestamp: new Date().toISOString(),
    });

    return response?.json({
      success: true,
      message: 'Quote submitted successfully',
      total,
    }) || { success: true, message: 'Quote submitted successfully', total };

  } catch (error) {
    console.error('Quote submission error:', error);
    return response?.json(
      { error: 'Failed to submit quote' },
      { status: 500 }
    ) || { error: 'Failed to submit quote', status: 500 };
  }
}

// Helper function to generate email HTML
function generateEmailHTML(quoteData: any, formData: any, total: number) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2F6B4F 0%, #1E4533 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .price-box { background: white; padding: 20px; border-left: 4px solid #2F6B4F; margin: 20px 0; }
        .total { font-size: 24px; font-weight: bold; color: #2F6B4F; margin-top: 20px; }
        .contact-info { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
        table { width: 100%; border-collapse: collapse; }
        td { padding: 8px; border-bottom: 1px solid #eee; }
        .label { font-weight: bold; width: 40%; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🐛 New Bed Bug Quote Request</h1>
          <p>A2 Pest Pros - Richmond, VA</p>
        </div>
        
        <div class="content">
          <h2>Contact Information</h2>
          <div class="contact-info">
            <table>
              <tr>
                <td class="label">Name:</td>
                <td>${formData.name}</td>
              </tr>
              <tr>
                <td class="label">Phone:</td>
                <td><a href="tel:${formData.phone}">${formData.phone}</a></td>
              </tr>
              <tr>
                <td class="label">Email:</td>
                <td>${formData.email || 'Not provided'}</td>
              </tr>
              <tr>
                <td class="label">ZIP Code:</td>
                <td>${formData.zip}</td>
              </tr>
              <tr>
                <td class="label">Best Time to Call:</td>
                <td>${formData.callTime}</td>
              </tr>
            </table>
          </div>

          <h2>Treatment Details</h2>
          <div class="price-box">
            <table>
              <tr>
                <td class="label">Treatment Type:</td>
                <td>${quoteData.treatment === 'heat' ? 'Heat Treatment' : quoteData.treatment === 'chemical' ? 'Chemical Treatment' : 'Undecided'}</td>
              </tr>
              <tr>
                <td class="label">Bedrooms:</td>
                <td>${quoteData.bedrooms}</td>
              </tr>
              <tr>
                <td class="label">Add-ons:</td>
                <td>${quoteData.addons.length > 0 ? quoteData.addons.join(', ') : 'None'}</td>
              </tr>
            </table>
            
            <div class="total">
              Estimated Total: $${total.toLocaleString()}
            </div>
          </div>

          <p><strong>⏰ Action Required:</strong> Call customer within 1 hour at <a href="tel:${formData.phone}">${formData.phone}</a></p>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Quote submitted on ${new Date().toLocaleString('en-US', { 
              timeZone: 'America/New_York',
              dateStyle: 'full',
              timeStyle: 'short'
            })}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}