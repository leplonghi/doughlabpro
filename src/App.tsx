
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import * as React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthProvider from "./components/AuthProvider";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Sauce = lazy(() => import("./pages/Sauce"));
const Toppings = lazy(() => import("./pages/Toppings"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Auth = lazy(() => import("./pages/Auth"));

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/auth" element={
                  <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                    <Auth />
                  </Suspense>
                } />
                <Route path="/" element={<Index />} />
                <Route path="/sauce" element={
                  <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                    <Sauce />
                  </Suspense>
                } />
                <Route path="/toppings" element={
                  <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                    <Toppings />
                  </Suspense>
                } />
                <Route path="/privacy" element={
                  <Suspense fallback={<div className="flex justify-center p-8">Loading...</div>}>
                    <Privacy />
                  </Suspense>
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
