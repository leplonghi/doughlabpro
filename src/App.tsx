
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import * as React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import AuthProvider from "./components/AuthProvider";
import { AuthGuard } from "./components/auth/AuthGuard";
import LoadingSpinner from "./components/ui/loading-spinner";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

// Lazy-loaded components
const Sauce = lazy(() => import("./pages/Sauce"));
const Toppings = lazy(() => import("./pages/Toppings"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const Auth = lazy(() => import("./pages/Auth"));
const Profile = lazy(() => import("./pages/Profile"));
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
    <React.StrictMode>
      <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <BrowserRouter>
              <AuthProvider>
                <TooltipProvider>
                  <Toaster />
                  <Sonner />
                  <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<Index />} />
                    <Route path="/auth" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <Auth />
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
                    <Route path="/calculator" element={
                      <Suspense fallback={<LoadingSpinner />}>
                        <DoughCalculator />
                      </Suspense>
                    } />
                    <Route path="/sauce" element={
                      <AuthGuard>
                        <Suspense fallback={<LoadingSpinner />}>
                          <Sauce />
                        </Suspense>
                      </AuthGuard>
                    } />
                    <Route path="/toppings" element={
                      <AuthGuard>
                        <Suspense fallback={<LoadingSpinner />}>
                          <Toppings />
                        </Suspense>
                      </AuthGuard>
                    } />
                    <Route path="/profile" element={
                      <AuthGuard>
                        <Suspense fallback={<LoadingSpinner />}>
                          <Profile />
                        </Suspense>
                      </AuthGuard>
                    } />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </TooltipProvider>
              </AuthProvider>
            </BrowserRouter>
          </I18nextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
