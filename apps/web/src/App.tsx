import "./App.css";
import StartWork from "./components/StartWork/StartWork";

function App() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <h2 className="mb-12 text-3xl font-bold">Hello</h2>
      <section className="mb-32 text-center">
        <StartWork name="Pinto Alon" />
      </section>
    </div>
  );
}

export default App;
