import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="text-center  p-10">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 mx-auto text-right ">
        <button
          className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={() => dispatch(clearCart())}
        >
          ClearCart
        </button>
        <button
          className="bg-black text-white px-4 py-2 ml-10 rounded-lg"
          onClick={() => dispatch(removeItem())}
        >
          removeItem
        </button>
      </div>
      <div className="w-6/12 mx-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
