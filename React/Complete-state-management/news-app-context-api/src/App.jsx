import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <div>
      <Navbar />

      <main className="pt-2">
        <Category />
        <News />
      </main>

      <Footer />
    </div>
  );
}

export default App;
