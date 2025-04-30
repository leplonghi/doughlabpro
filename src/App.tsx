
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

// Import toast components
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
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
            
            {/* Toast notifications */}
            <Toaster />
            <SonnerToaster />
          </AuthProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
