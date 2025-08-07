// export default function Home() {
//   return (
//     <main style={{ padding: "2rem", textAlign: "center" }}>
//       <h1>Welcome to My Farcaster Mini App</h1>
//       <p>This is the homepage of your mini app project.</p>
//       <p>To experience the frame, try visiting <code>/frame</code>.</p>
//     </main>
//   );
// }
"use client";

import { Toaster } from "../components/ui/ui/toaster";
import { Toaster as Sonner } from "../components/ui/ui/sonner";
import { TooltipProvider } from "../components/ui/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
