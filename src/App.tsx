import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./components/Form/Form";
import Header from "./components/Header";

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
      <main className="w-[80%] max-w-screen-lg my-20">
        <section className="w-full">
          <QueryClientProvider client={queryClient}>
            <Form />
          </QueryClientProvider>
        </section>
      </main>
    </div>
  );
}

export default App;
