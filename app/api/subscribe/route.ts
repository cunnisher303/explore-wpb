import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = parseInt(process.env.BREVO_LIST_ID || "3");

  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    // 201 = created, 204 = updated (contact already existed)
    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true });
    }

    const data = await res.json();
    // Brevo returns 400 with "duplicate_parameter" if contact already on list
    if (data?.code === "duplicate_parameter") {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
