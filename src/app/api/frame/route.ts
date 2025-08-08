import { NextResponse } from "next/server";

export async function POST() {
  // This will redirect the Warpcast user out to your game
  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: "https://pokemon-mini-app.vercel.app/", // game page
    },
  });
}
