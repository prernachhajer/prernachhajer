import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import CaseStudyHomepage from "./pages/CaseStudyHomepage";
import CaseStudyDesignSystem from "./pages/CaseStudyDesignSystem";
import CaseStudyQuickReads from "./pages/CaseStudyQuickReads";
import CaseStudyMatchPage from "./pages/CaseStudyMatchPage";
import CaseStudyMatchPageScaffold from "./pages/CaseStudyMatchPageScaffold";

import BlogDesignSystem from "./pages/BlogDesignSystem";
import BlogAIPortfolio from "./pages/BlogAIPortfolio";

import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <HashRouter>
        <ScrollToTop />

        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Case Studies */}
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
            path="/case-study/match-page-redesign"
            element={<Navigate to="/case-study/match-page" replace />}
          />


          <Route
            path="/case-study/match-page-scaffold"
            element={<CaseStudyMatchPageScaffold />}
          />


          {/* Blog */}
          <Route
            path="/blog/design-system"
            element={<BlogDesignSystem />}
          />

          <Route
            path="/blog/ai-portfolio"
            element={<BlogAIPortfolio />}
          />

          {/* Resume */}
          <Route path="/resume" element={<Resume />} />

          {/* Anything else */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
