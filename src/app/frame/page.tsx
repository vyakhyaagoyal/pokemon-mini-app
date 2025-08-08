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
    // Uncomment these if you later add interactivity
    // "fc:frame:button:1": "Start",
    // "fc:frame:post_url": "https://pokemon-mini-app.vercel.app/api/frame",
  },
};

export default function FramePage() {
  // This page is only for metadata, so we don't render any visible content
  return null;
}
