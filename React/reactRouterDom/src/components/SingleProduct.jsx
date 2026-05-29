/* eslint-disable react-hooks/set-state-in-effect */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader.jsx";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-20">
      <img
        src={product.image}
        alt="product-image"
        className="aspect-square object-contain mb-2"
      />
      <div className="border-t mt-2">
        <p className="mt-3">{product.description}</p>
        <div className="mt-2 flex gap-2 items-center text-sm">
          <p className="bg-green-700  flex items-center rounded-md  px-1">
            <span className="text-xs">⭐</span>
            <span>{product?.rating?.rate}</span>
          </p>
          <p>{product?.rating?.count}</p>
        </div>
        <p className="mt-1 text-gray-300">{product.price} Rs</p>
      </div>
    </div>
  );
};

export default SingleProduct;
