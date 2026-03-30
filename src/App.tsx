import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudyCricinfo from "./pages/CaseStudyCricinfo";
import CaseStudyDesignSystem from "./pages/CaseStudyDesignSystem";
import CaseStudyQuickReads from "./pages/CaseStudyQuickReads";
import BlogDesignSystem from "./pages/BlogDesignSystem";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study/cricinfo" element={<CaseStudyCricinfo />} />
          <Route path="/case-study/design-system" element={<CaseStudyDesignSystem />} />
          <Route path="/case-study/quick-reads" element={<CaseStudyQuickReads />} />
          <Route path="/blog/design-system" element={<BlogDesignSystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
