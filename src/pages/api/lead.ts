import type { APIRoute } from 'astro';

// Type definitions
interface LeadData {
  company: string;
  city: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
  privacy: string;
}

interface ResendEmailPayload {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Environment variables
const LEAD_MODE = import.meta.env.LEAD_MODE || 'make'; // 'make' or 'resend'
const MAKE_WEBHOOK_URL = import.meta.env.MAKE_WEBHOOK_URL || '';
const RESEND_API_KEY = import.meta.env.RESEND_API_KEY || '';
const LEAD_TO_EMAIL = import.meta.env.LEAD_TO_EMAIL || 'info@temetkezespro.hu';
const LEAD_FROM_EMAIL = import.meta.env.LEAD_FROM_EMAIL || 'noreply@temetkezespro.hu';
const ALLOWED_ORIGINS = (import.meta.env.ALLOWED_ORIGINS || '').split(',').map((o: string) => o.trim());

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone format (Hungarian phone numbers)
 */
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+36|06)?[\s-]?(?:\d{1,2})[\s-]?\d{3}[\s-]?\d{3,4}$/;
  return phoneRegex.test(phone);
}

/**
 * Validate lead data
 */
function validateLeadData(data: Partial<LeadData>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.company || data.company.trim().length < 2) {
    errors.push('Cégnév megadása kötelező (legalább 2 karakter)');
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.push('Település megadása kötelező (legalább 2 karakter)');
  }

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Kapcsolattartó neve kötelező (legalább 2 karakter)');
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.push('Érvényes telefonszám megadása kötelező');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Érvényes e-mail cím megadása kötelező');
  }

  if (data.privacy !== 'on' && data.privacy !== 'true') {
    errors.push('Adatkezelési hozzájárulás megadása kötelező');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Send lead data to Make.com webhook
 */
async function sendToMake(data: LeadData): Promise<{ success: boolean; error?: string }> {
  if (!MAKE_WEBHOOK_URL) {
    return { success: false, error: 'Make webhook URL nincs beállítva' };
  }

  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'TemetkezésPro Landing',
      }),
    });

    if (!response.ok) {
      throw new Error(`Make webhook hiba: ${response.status} ${response.statusText}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Make webhook hiba:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ismeretlen hiba történt'
    };
  }
}

/**
 * Send lead data via Resend email
 */
async function sendViaResend(data: LeadData): Promise<{ success: boolean; error?: string }> {
  if (!RESEND_API_KEY) {
    return { success: false, error: 'Resend API kulcs nincs beállítva' };
  }

  const emailSubject = `Új érdeklődő: ${data.company} - ${data.name}`;

  const emailTextBody = `
Új érdeklődő az TemetkezésPro landing oldalról!

Cégnév: ${data.company}
Település: ${data.city}
Kapcsolattartó: ${data.name}
Telefon: ${data.phone}
E-mail: ${data.email}
Megjegyzés: ${data.message || 'Nincs megjegyzés'}

Időpont: ${new Date().toLocaleString('hu-HU')}
Forrás: TemetkezésPro Landing
  `.trim();

  const emailHtmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #64748b; }
    .value { color: #0f172a; margin-top: 5px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">🎉 Új érdeklődő!</h1>
      <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">TemetkezésPro Landing oldal</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Cégnév</div>
        <div class="value">${data.company}</div>
      </div>
      <div class="field">
        <div class="label">Település</div>
        <div class="value">${data.city}</div>
      </div>
      <div class="field">
        <div class="label">Kapcsolattartó neve</div>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <div class="label">Telefonszám</div>
        <div class="value"><a href="tel:${data.phone.replace(/\s/g, '')}">${data.phone}</a></div>
      </div>
      <div class="field">
        <div class="label">E-mail cím</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      ${data.message ? `
      <div class="field">
        <div class="label">Megjegyzés</div>
        <div class="value">${data.message}</div>
      </div>
      ` : ''}
      <div class="footer">
        <p>Beérkezés időpontja: ${new Date().toLocaleString('hu-HU')}</p>
        <p>Forrás: TemetkezésPro Landing oldal</p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();

  const emailPayload: ResendEmailPayload = {
    from: LEAD_FROM_EMAIL,
    to: LEAD_TO_EMAIL,
    subject: emailSubject,
    text: emailTextBody,
    html: emailHtmlBody,
  };

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        `Resend API hiba: ${response.status} ${response.statusText}${errorData ? ` - ${JSON.stringify(errorData)}` : ''}`
      );
    }

    return { success: true };
  } catch (error) {
    console.error('Resend email hiba:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ismeretlen hiba történt'
    };
  }
}

/**
 * POST endpoint to handle lead form submissions
 */
export const POST: APIRoute = async ({ request }) => {
  // CSRF Protection: Check origin
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  if (ALLOWED_ORIGINS.length > 0 && ALLOWED_ORIGINS[0] !== '') {
    const isAllowedOrigin = origin && ALLOWED_ORIGINS.some((allowed: string) => origin.includes(allowed));
    const isAllowedReferer = referer && ALLOWED_ORIGINS.some((allowed: string) => referer.includes(allowed));

    if (!isAllowedOrigin && !isAllowedReferer) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Érvénytelen forrás'
        }),
        {
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  }

  // Parse request body
  let data: Partial<LeadData>;
  try {
    data = await request.json();
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Érvénytelen JSON formátum'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // Validate data
  const validation = validateLeadData(data);
  if (!validation.valid) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Validációs hiba',
        errors: validation.errors
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const leadData = data as LeadData;

  // Send data based on configured mode
  let result: { success: boolean; error?: string };

  if (LEAD_MODE === 'resend') {
    result = await sendViaResend(leadData);
  } else {
    result = await sendToMake(leadData);
  }

  // Return response
  if (result.success) {
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Köszönjük az érdeklődését! Hamarosan felvesszük Önnel a kapcsolatot.'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } else {
    console.error('Lead submission hiba:', result.error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Hiba történt az üzenet küldése közben. Kérjük, próbálja újra később.'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

// Prerender configuration
export const prerender = false;
