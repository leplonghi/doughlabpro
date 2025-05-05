
import * as React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";

import AuthProvider from "./components/AuthProvider";
import LoadingSpinner from "./components/ui/loading-spinner";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import { AuthGuard } from "./components/auth/AuthGuard";
import { Toaster } from "sonner";
import { DoughGuideProvider } from "./context/DoughGuideContext";

// Lazy-loaded components
const Sauce = lazy(() => import("./pages/Sauce"));
const Toppings = lazy(() => import("./pages/Toppings"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const Auth = lazy(() => import("./pages/Auth"));
const Profile = lazy(() => import("./pages/Profile"));
const Upgrade = lazy(() => import("./pages/Upgrade"));
const Home = lazy(() => import("./pages/Home"));
const DoughCalculator = lazy(() => import("./components/DoughCalculator"));
const Learn = lazy(() => import("./pages/Learn"));
const School = lazy(() => import("./pages/School"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={
        <Suspense fallback={<LoadingSpinner />}>
          <AuthGuard fallbackPath="/landing">
            <Home />
          </AuthGuard>
        </Suspense>
      } />
      <Route path="/landing" element={<Index />} />
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
      
      {/* Learn pages */}
      <Route path="/learn" element={
        <Suspense fallback={<LoadingSpinner />}>
          <Learn />
        </Suspense>
      } />
      <Route path="/school" element={
        <Suspense fallback={<LoadingSpinner />}>
          <School />
        </Suspense>
      } />
      
      {/* Protected routes */}
      <Route path="/profile" element={
        <AuthGuard>
          <Suspense fallback={<LoadingSpinner />}>
            <Profile />
          </Suspense>
        </AuthGuard>
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// App component with correct React hooks context
const App = () => {
  // Create queryClient explicitly before rendering
  const queryClient = React.useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  }), []);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <TooltipProvider>
            <BrowserRouter>
              <AuthProvider>
                <DoughGuideProvider>
                  <AppRoutes />
                  <Toaster />
                </DoughGuideProvider>
              </AuthProvider>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
