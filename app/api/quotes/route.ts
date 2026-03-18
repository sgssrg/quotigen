import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit") || "1";

  try {
    // Server-side fetch: browser never sees the insecure HTTP call
    const response = await axios.get(
      `http://api.quotable.io/quotes/random?limit=${limit}`,
    );
    return NextResponse.json(response.data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch quotes" },
      { status: 500 },
    );
  }
}
