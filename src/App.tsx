import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <NavBar />
      <Spinner />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
