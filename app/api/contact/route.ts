import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.name || !data.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // TODO: wire this up to an email provider (e.g. Resend) or CRM.
  console.log("New catering inquiry:", data);

  return NextResponse.json({ ok: true });
}
