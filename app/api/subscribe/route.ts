import { NextRequest, NextResponse } from "next/server";

const BOOK_LISTS: Record<string, string | undefined> = {
  "quiet-equation": process.env.BREVO_LIST_ID,
  "body-story": process.env.BREVO_LIST_ID_BODY_STORY,
  "alpha-problem": process.env.BREVO_LIST_ID_ALPHA_PROBLEM,
};

// All ebook list IDs — used to check if the contact has already claimed a book
function getAllEbookListIds(): number[] {
  return Object.values(BOOK_LISTS)
    .filter((v): v is string => Boolean(v))
    .map((v) => parseInt(v))
    .filter((n) => !isNaN(n));
}

export async function POST(req: NextRequest) {
  const { email, book } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const rawListId = BOOK_LISTS[book] || process.env.BREVO_LIST_ID;
  const listId = parseInt(rawListId || "3");
  const allEbookLists = getAllEbookListIds();

  // ── Step 1: Check if contact already exists and has claimed a book ──
  try {
    const checkRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: "GET",
      headers: { "api-key": apiKey },
    });

    if (checkRes.status === 200) {
      const contact = await checkRes.json();
      const existingListIds: number[] = contact.listIds || [];
      const alreadyOnEbookList = existingListIds.some((id) => allEbookLists.includes(id));

      if (alreadyOnEbookList) {
        return NextResponse.json(
          {
            error: "already_claimed",
            message: "You've already claimed a free ebook with this email. Check your inbox (and spam folder).",
          },
          { status: 409 }
        );
      }
    }
    // 404 = contact doesn't exist yet, proceed normally
  } catch {
    // If the check fails, log it but continue — better to err on the side of delivery
  }

  // ── Step 2: Add the contact to the chosen list ──
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
