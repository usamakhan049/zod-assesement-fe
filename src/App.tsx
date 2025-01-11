import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import Layout from "@components/Layout/Layout";
import { ThemeProvider } from "@context/ThemeContext";
import { OctokitProvider } from "@context/OctokitContext";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "@components/Error/ErrorPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OctokitProvider>
        <ThemeProvider>
          <ErrorBoundary fallback={<ErrorPage />}>
            <Layout>
              <AppRoutes />
            </Layout>
          </ErrorBoundary>
        </ThemeProvider>
      </OctokitProvider>
    </QueryClientProvider>
  );
}

export default App;
