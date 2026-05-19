const Productdetails = ({ product }) => {
  return (
    <div className="min-h-70 w-screen  bg-gray-900 flex p-4">
      {/* product image */}
      <div className="min-h-full w-[25%] border-r-2 border-gray-700 flex justify-center items-center">
        <div className="h-50 w-37.5 overflow-hidden">
          <img
            src={product.image}
            alt="mobile"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* product details */}
      <div className="min-h-full w-[50%] border-r-2 border-gray-700 flex flex-col p-2">
        <div>
          <h2>{product.title}</h2>
          <p className="mt-2 text-gray-500 text-[12px]">
            {"⭐" + product.rating + " | " + product.reviews}
          </p>
        </div>
        <div className="p-5 text-[13px]">
          <ul className="list-disc">
            {product.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="text-green-400">
          <p className="text-[12px] mb-0.5">{product.offers.exchangeOffer}</p>
          <p className="text-[11px]">{product.offers.bankOffer}</p>
        </div>
      </div>

      {/* price */}
      <div className="min-h-full w-[25%] flex justify-center items-center ">
        <div className="flex flex-col items-end">
          <p>{product.price}</p>
          <p className="text-[10px] line-through">{product.originalPrice}</p>
          <p className="text-[12px]">{product.discount}</p>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
