import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Index from "./pages/Index";
import CaseStudyHomepage from "./pages/CaseStudyHomepage";
import CaseStudyDesignSystem from "./pages/CaseStudyDesignSystem";
import CaseStudyQuickReads from "./pages/CaseStudyQuickReads";
import CaseStudyMatchPage from "./pages/CaseStudyMatchPage";
import BlogDesignSystem from "./pages/BlogDesignSystem";
import BlogAIPortfolio from "./pages/BlogAIPortfolio";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter basename="/prernachhajer">
        <RedirectHandler />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />

          <Route
            path="/case-study/homepage"
            element={<CaseStudyHomepage />}
          />

          <Route
            path="/case-study/design-system"
            element={<CaseStudyDesignSystem />}
          />

          <Route
            path="/case-study/quick-reads"
            element={<CaseStudyQuickReads />}
          />

          <Route
            path="/case-study/match-page"
            element={<CaseStudyMatchPage />}
          />

          <Route
            path="/blog/design-system"
            element={<BlogDesignSystem />}
          />

          <Route
            path="/blog/ai-portfolio"
            element={<BlogAIPortfolio />}
          />

          <Route
            path="/resume"
            element={<Resume />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
