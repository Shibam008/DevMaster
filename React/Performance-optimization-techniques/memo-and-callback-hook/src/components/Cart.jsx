import { useMemo, useState } from "react";

/* eslint-disable no-empty */
const Cart = () => {
  const [cart, setCart] = useState(0);

  const expensiveCal = () => {
    for (let i = 1; i < 2000000000; i++) { }
    return "ok";
  };

//   expensiveCal()

    useMemo(()=>{
        const result = expensiveCal()
        return result;
    }, [cart])

  return (
    <div>
      <p>{cart}</p>
      <button onClick={() => setCart((prev) => prev + 1)}>Add to cart</button>
    </div>
  );
};

export default Cart;


//* useMemo is used to memoized value