import Form from "./components/Form/Form";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="w-[80%] max-w-screen-lg my-20">
        <section className="w-full">
          <Form />
        </section>
      </main>
    </div>
  );
}

export default App;
