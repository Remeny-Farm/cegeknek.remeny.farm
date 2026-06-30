const MAILERLITE_SUBSCRIBERS_URL =
  "https://connect.mailerlite.com/api/subscribers";

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-origin": "https://cegeknek.remeny.farm",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type",
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function cleanText(value, max = 600) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: jsonHeaders });
    }

    const url = new URL(request.url);
    if (request.method !== "POST" || url.pathname !== "/api/lead") {
      return jsonResponse({ ok: false, error: "not_found" }, 404);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ ok: false, error: "invalid_json" }, 400);
    }

    if (cleanText(payload.website, 80)) {
      return jsonResponse({ ok: true });
    }

    const email = cleanText(payload.email, 160).toLowerCase();
    const name = cleanText(payload.name, 160);
    const company = cleanText(payload.company, 180);
    const teamSize = cleanText(payload.teamSize, 80);
    const location = cleanText(payload.location, 180);
    const packageInterest = cleanText(payload.packageInterest, 180);
    const perspective = cleanText(payload.perspective, 80);
    const championshipInterest = payload.championshipInterest ? "igen" : "nem";
    const privacyConsent = payload.privacyConsent ? "igen" : "nem";
    const message = cleanText(payload.message, 1000);

    if (!isEmail(email) || !company) {
      return jsonResponse({ ok: false, error: "missing_required_fields" }, 422);
    }

    const mailerLiteBody = {
      email,
      fields: {
        name,
        company,
        ceges_tyukcsapat_dolgozoi_letszam: teamSize,
        ceges_tyukcsapat_iroda_helyszin: location,
        ceges_tyukcsapat_csomag: packageInterest,
        ceges_tyukcsapat_nezopont: perspective,
        ceges_tyukcsapat_konstruktorok_bajnoksaga: championshipInterest,
        ceges_tyukcsapat_adatkezeles: privacyConsent,
        ceges_tyukcsapat_megjegyzes: message,
        referrer: "cegeknek.remeny.farm",
      },
      groups: [env.MAILERLITE_GROUP_ID],
      status: "active",
    };

    const response = await fetch(MAILERLITE_SUBSCRIBERS_URL, {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.MAILERLITE_API_KEY}`,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(mailerLiteBody),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(
        "MailerLite lead submit failed",
        response.status,
        detail.slice(0, 500),
      );
      return jsonResponse({ ok: false, error: "mailer_submit_failed" }, 502);
    }

    return jsonResponse({ ok: true });
  },
};
