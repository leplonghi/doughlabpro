
import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";

import AuthProvider from "./components/AuthProvider";
import LoadingSpinner from "./components/ui/loading-spinner";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Import Sonner Toaster component
import { Toaster } from "@/components/ui/toaster";

// Lazy-loaded components
const Sauce = lazy(() => import("./pages/Sauce"));
const Toppings = lazy(() => import("./pages/Toppings"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const Auth = lazy(() => import("./pages/Auth"));
const Profile = lazy(() => import("./pages/Profile"));
const Upgrade = lazy(() => import("./pages/Upgrade"));
const DoughCalculator = lazy(() => import("./components/DoughCalculator"));

// Create query client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
        <TooltipProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/auth" replace />} />
              <Route path="/home" element={<Index />} />
              <Route path="/auth" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Auth />
                </Suspense>
              } />
              <Route path="/upgrade" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Upgrade />
                </Suspense>
              } />
              <Route path="/privacy" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Privacy />
                </Suspense>
              } />
              <Route path="/terms" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Terms />
                </Suspense>
              } />
              <Route path="/contact" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Contact />
                </Suspense>
              } />
              <Route path="/profile" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Profile />
                </Suspense>
              } />
              <Route path="/calculator" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <DoughCalculator />
                </Suspense>
              } />
              <Route path="/sauce" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Sauce />
                </Suspense>
              } />
              <Route path="/toppings" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Toppings />
                </Suspense>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* Single toast notification system using Sonner */}
            <Toaster />
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
