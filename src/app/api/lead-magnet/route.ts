import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  instagramHandle: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Všechna povinná pole musí být vyplněna" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Neplatný formát emailu" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send welcome email with e-book
    // 3. Add to email marketing list
    // 4. Send notification to admin

    // For demo purposes, we'll simulate these actions
    console.log("New lead captured:", {
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      instagramHandle: data.instagramHandle,
      timestamp: new Date().toISOString(),
      source: "lead-magnet-funnel",
      ebookDelivered: true,
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response with e-book download info
    return NextResponse.json({
      success: true,
      message: "E-book byl úspěšně odeslán na váš email",
      data: {
        downloadUrl: "/ebook.html",
        ebookTitle: "Proměňte svůj Instagram v automat na peníze",
        nextStep: "thank-you",
      },
    });
  } catch (error) {
    console.error("Error processing lead magnet request:", error);
    return NextResponse.json(
      { error: "Došlo k chybě při zpracování požadavku" },
      { status: 500 }
    );
  }
}

// Handle GET requests to return e-book info
export async function GET() {
  return NextResponse.json({
    title: "Proměňte svůj Instagram v automat na peníze",
    description:
      "Kompletní průvodce jak generovat stabilní příjem z Instagramu",
    value: "1.500 Kč",
    pages: "40+",
    downloadUrl: "/ebook.html",
    format: "HTML/PDF",
  });
}
