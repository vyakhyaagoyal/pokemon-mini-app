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
    "fc:frame:post_url": "https://pokemon-mini-app.vercel.app/api/frame",
  },
};

export default function FramePage() {
  return null; // no redirect, no rendering, just metadata
}
