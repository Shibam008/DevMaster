import "./App.css";
import Productdetails from "./components/Productdetails.jsx";
import productData from "./data.json";

function App() {
  const productInfo = productData;

  return (
    <div className="min-h-screen min-w-screen bg-black text-white flex flex-col gap-5">
      {productInfo.map((product, idx) => (
        <div key={idx} className="">
          <Productdetails product={product} />
        </div>
      ))}
    </div>
  );
}

export default App;
