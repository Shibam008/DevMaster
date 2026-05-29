/* eslint-disable react-hooks/set-state-in-effect */
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const resp = await axios.get("https://fakestoreapi.com/products");
    setAllProducts(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ProductCard prod={allProducts} />
    </>
  );
};

const ProductCard = ({ prod }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-5 gap-5 p-5">
      {prod.map((item) => {
        return (
          <div key={item.id} onClick={()=>navigate(`/product/${item.id}`)} className="bg-gray-700 p-3 rounded-md cursor-pointe group">
            <img
              src={item.image}
              alt="product-image"
              className="aspect-square object-contain mb-2"
            />
            <div className="border-t mt-2">
              <p className="line-clamp-2 mt-3 group-hover:text-sky-500">{item.description}</p>
              <div className="mt-2 flex gap-2 items-center text-sm">
                <p className="bg-green-700  flex items-center rounded-md  px-1">
                  <span className="text-xs">⭐</span>
                  <span>{item?.rating?.rate}</span>
                </p>
                <p>{item?.rating?.count}</p>
              </div>
              <p className="mt-1 text-gray-300">{item.price} Rs</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
