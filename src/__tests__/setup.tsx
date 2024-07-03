import { LocationsProvider } from "@/context/LocationsContext";
import { RenderOptions, render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const Providers = ({ children }: React.PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <LocationsProvider>{children}</LocationsProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui: React.ReactNode, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
