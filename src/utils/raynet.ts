// Raynet CRM API integration utility
// Replace 'YOUR_API_KEY' and 'YOUR_COMPANY_URL' with your actual Raynet CRM credentials

export async function sendToRaynetCRM({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}) {
  const apiKey =
    process.env.RAYNET_API_KEY || "crm-09ab64de32ee4ae0ab64de32eebae00e";
  const companyUrl = process.env.RAYNET_COMPANY_URL || "YOUR_COMPANY_URL";

  // Raynet API endpoint for creating a new lead/contact
  const endpoint = `${companyUrl}/api/v2/Leads`; // Example endpoint, adjust as needed

  const payload = {
    name,
    email,
    phone,
    note: message,
    // Add other fields as needed
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `ApiKey ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to send data to Raynet CRM");
  }

  return await res.json();
}
