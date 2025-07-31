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
  const endpoint = `https://app.raynet.cz/api/v2/company`;

  const username = "adam.bardzak@gmail.com";
  const apiKey = "crm-cf60344128c64a85a0344128c61a85b4";
  const basicAuth = Buffer.from(`${username}:${apiKey}`).toString("base64");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${basicAuth}`,
    "X-Instance-Name": "socialmat",
  };

  const agent = new https.Agent({ rejectUnauthorized: false });

  // Build Raynet payload in correct format
  const payload: RaynetClientPayload = {
    name: name || "jmeno",
    rating: rating || "A",
    state: state || "A_POTENTIAL",
    role: role || "A_SUBSCRIBER",
    notice: notice || "Získáno přes lead magnet e-book.",
    addresses: [
      {
        address: {
          name: name || "",
        },
        contactInfo: {
          email: email,
        },
      },
    ],
  };

  console.log(
    "Raynet request payload (JSON string):",
    JSON.stringify(payload, null, 2)
  );
  console.log("Raynet request headers:", headers);
  console.log("Raynet request endpoint:", endpoint);

  try {
    const res = await axios.post(endpoint, payload, {
      headers,
      httpsAgent: agent,
      validateStatus: () => true,
    });

    console.log("Raynet response:", {
      status: res.status,
      statusText: res.statusText,
      data: res.data,
      headers: res.headers,
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
