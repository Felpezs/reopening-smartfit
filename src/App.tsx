import Form from "./components/Form/Form";
import Header from "./components/Header";
import Legend from "./components/Legend/LegendContainer";
import Cards from "./components/Card/Cards";
import { LocationsProvider } from "./context/LocationsContext";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="my-20 flex w-full max-w-screen-lg flex-col gap-10 px-5 sm:w-[80%] sm:px-0">
        <LocationsProvider>
          <section className="w-full">
            <Form />
          </section>
          <section className="w-full font-bold">
            <Legend />
          </section>
          <section>
            <Cards />
          </section>
        </LocationsProvider>
      </main>
    </div>
  );
}

export default App;
