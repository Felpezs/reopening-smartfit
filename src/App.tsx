import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import Legend from "./components/Legend/LegendContainer";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="w-[80%] max-w-screen-lg my-20 flex flex-col gap-10">
        <section className="w-full">
          <QueryClientProvider client={queryClient}>
            <Form />
          </QueryClientProvider>
        </section>
        <section className="w-full font-bold">
          <Legend />
        </section>
      </main>
    </div>
  );
}

export default App;
