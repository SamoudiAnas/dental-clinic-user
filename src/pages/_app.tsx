import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
  );
}
