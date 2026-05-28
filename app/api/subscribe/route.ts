import { NextRequest, NextResponse } from "next/server";

const BOOK_LISTS: Record<string, string | undefined> = {
  "quiet-equation": process.env.BREVO_LIST_ID,
  "body-story": process.env.BREVO_LIST_ID_BODY_STORY,
  "alpha-problem": process.env.BREVO_LIST_ID_ALPHA_PROBLEM,
};

export async function POST(req: NextRequest) {
  const { email, book } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  // Determine list — fall back to quiet-equation list if book isn't recognized
  const rawListId = BOOK_LISTS[book] || process.env.BREVO_LIST_ID;
  const listId = parseInt(rawListId || "3");

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
        attributes: {
          EBOOK_CHOICE: book || "quiet-equation",
        },
      }),
    });

    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true });
    }

    const data = await res.json();
    if (data?.code === "duplicate_parameter") {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
