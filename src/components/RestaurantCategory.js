import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-green-50 mx-auto my-4 py-4 px-8  ">
        <div
          className="flex justify-between font-bold text-lg mb-2"
          onClick={handleClick}
        >
          <span>
            {data.card.card.title} ({data.card.card.itemCards.length})
          </span>
          <span>↓</span>
        </div>
        <div>{showItems && <ItemList items={data.card.card.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
