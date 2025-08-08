// src/app/frame/page.tsx
import { redirect } from "next/navigation";

export const metadata = {
  title: "Pokemon Mini App",
  description: "A Farcaster frame for Pokémon fun!",
  openGraph: {
    title: "Pokemon Mini App",
    images: ["https://pokemon-mini-app.vercel.app/image.png"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://pokemon-mini-app.vercel.app/image.png",
    "fc:frame:button:1": "Play Now",
    "fc:frame:post_url": "https://pokemon-mini-app.vercel.app/",
  },
};

// Detect if request is from Warpcast bot
export default function FramePage() {
  if (typeof window !== "undefined") {
    const userAgent = navigator.userAgent.toLowerCase();
    const isWarpcastBot = userAgent.includes("warpcast");
    if (!isWarpcastBot) {
      redirect("/"); // redirect normal users to your game page
    }
  }

  // Nothing to show — just metadata for Warpcast
  return null;
}
