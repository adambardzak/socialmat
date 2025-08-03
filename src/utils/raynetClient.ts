// utils/raynetClient.ts
import axios from "axios";
import https from "https";

// Rozhraní pro vstupní data klienta
interface RaynetClientPayload {
  name: string;
  rating: "A" | "B" | "C";
  state: "A_POTENTIAL" | "B_ACTUAL" | "C_DEFERRED" | "D_UNATTRACTIVE";
  role: "A_SUBSCRIBER" | "B_PARTNER" | "C_SUPPLIER" | "D_RIVAL";
  notice?: string;
  addresses?: Array<{
    address?: {
      name?: string;
      street?: string;
      city?: string;
      province?: string;
      zipCode?: string;
      country?: string;
      lat?: number;
      lng?: number;
    };
    contactInfo?: {
      email?: string;
      email2?: string;
      fax?: string;
      otherContact?: string;
      tel1?: string;
      tel1Type?: string;
      tel2?: string;
      tel2Type?: string;
      www?: string;
      doNotSendMM?: boolean;
    };
    territory?: number;
  }>;
  tags?: string[];
  customFields?: Record<string, string>;
}

// Raynet CRM API klient pro vytvoření nového klienta
export async function createRaynetClient({
  name,
  rating,
  state,
  role,
  notice,
  email,
  phone,
  street,
  city,
  province,
  zipCode,
  country,
}: {
  name: string;
  rating?: "A" | "B" | "C";
  state?: "A_POTENTIAL" | "B_ACTUAL" | "C_DEFERRED" | "D_UNATTRACTIVE";
  role?: "A_SUBSCRIBER" | "B_PARTNER" | "C_SUPPLIER" | "D_RIVAL";
  notice?: string;
  email: string;
  phone?: string;
  street?: string;
  city?: string;
  province?: string;
  zipCode?: string;
  country?: string;
}) {
  const endpoint = `https://app.raynet.cz/api/v2/company/`;

  const username = process.env.RAYNET_USERNAME;
  const apiKey = process.env.RAYNET_API_KEY;

  if (!username || !apiKey) {
    throw new Error(
      "RAYNET_USERNAME and RAYNET_API_KEY environment variables are required"
    );
  }

  const basicAuth = Buffer.from(`${username}:${apiKey}`).toString("base64");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${basicAuth}`,
    "X-Instance-Name": "socialmat",
  };

  const agent = new https.Agent({ rejectUnauthorized: false });

  // Build Raynet payload in correct format according to API spec
  const payload = {
    name: name.trim(), // Required field at root level
    rating: rating || "A", // Required
    state: state || "A_POTENTIAL", // Required
    role: role || "A_SUBSCRIBER", // Required
    notice: notice || "Získáno přes lead magnet e-book.",
    addresses: [
      {
        address: {
          name: "Kontaktní adresa", // Address name, not person name
          street: street || "",
          city: city || "",
          province: province || "",
          zipCode: zipCode || "",
          country: country || "CZ",
        },
        contactInfo: {
          email: email,
          tel1: phone || "",
          tel1Type: phone ? "BUSINESS" : "",
        },
      },
    ],
  };

  try {
    const res = await axios({
      method: "put", // Changed to PUT as per API spec
      url: endpoint,
      data: payload,
      headers,
      httpsAgent: agent,
      validateStatus: () => true,
    });

    if (res.status < 200 || res.status >= 300) {
      throw new Error(
        `Raynet API error: ${res.status} ${res.statusText} - ${JSON.stringify(
          res.data
        )}`
      );
    }

    return res.data;
  } catch (err) {
    console.error("Raynet error:", err);
    throw new Error(
      "Failed to create Raynet client: " +
        (err instanceof Error ? err.message : "Unknown error")
    );
  }
}
