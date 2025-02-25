import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="head-container flex w-[98vw] justify-between items-center my-4 mx-auto shadow-lg bg-green-200 ">
      <div className=" w-25">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items w-fit px-10 ">
        <ul className="flex gap-4 font-medium text-gray-800 text-lg">
          <li>OnlineStatus:{onlineStatus ? "green" : "red"}</li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">
            {" "}
            <Link to="/cart">Cart</Link> ({cartItems.length}items)
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
