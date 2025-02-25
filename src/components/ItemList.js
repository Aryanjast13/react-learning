import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch(); //

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-gray-300  border-b-2 text-left flex justify-between p-10 text-gray-700"
        >
          <div className="w-9/12">
            <div className="font-medium mb-1">
              <span>{item.card.info.name}</span>-
              <span>{item.card.info.price / 100}Rs</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative cursor-pointer ">
            <img
              className="rounded-lg"
              src={CDN_URL + item.card.info.imageId}
              alt=""
            />
            <button
              className="absolute  bg-black text-white py-2 px-4 rounded-lg right-0 bottom-0"
              onClick={() => dispatch(addItem(item))}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
