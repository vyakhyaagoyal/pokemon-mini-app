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
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": "https://pokemon-mini-app.vercel.app/",
  },
};

export default function FramePage() {
  // Nothing to render, only metadata for Warpcast to read
  return null;
}
