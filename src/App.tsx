
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import * as React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthProvider from "./components/AuthProvider";
import { AuthGuard } from "./components/auth/AuthGuard";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import '@/i18n/i18n';
import Header from "./components/Header";

const Sauce = lazy(() => import("./pages/Sauce"));
const Toppings = lazy(() => import("./pages/Toppings"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Auth = lazy(() => import("./pages/Auth"));
const Profile = lazy(() => import("./pages/Profile"));

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <TooltipProvider>
              <Header />
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Navigate to="/auth" replace />} />
                <Route path="/auth" element={
                  <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                    <Auth />
                  </Suspense>
                } />
                <Route path="/privacy" element={
                  <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                    <Privacy />
                  </Suspense>
                } />
                <Route path="/home" element={
                  <AuthGuard>
                    <Index />
                  </AuthGuard>
                } />
                <Route path="/sauce" element={
                  <AuthGuard>
                    <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                      <Sauce />
                    </Suspense>
                  </AuthGuard>
                } />
                <Route path="/toppings" element={
                  <AuthGuard>
                    <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                      <Toppings />
                    </Suspense>
                  </AuthGuard>
                } />
                <Route path="/profile" element={
                  <AuthGuard>
                    <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                      <Profile />
                    </Suspense>
                  </AuthGuard>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
