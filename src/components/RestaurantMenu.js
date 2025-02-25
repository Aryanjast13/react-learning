import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const resInfoList = useRestaurantMenu(resId); //fetching the data using custom hook;

  // displaying the data on screen

  if (resInfoList === null) return <Shimmer />;

  const { text } = resInfoList?.cards[0]?.card?.card;
  const { costForTwoMessage } = resInfoList?.cards[2]?.card?.card.info;

  const { itemCards } =
    resInfoList.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log(resInfoList);

  const categories =
    resInfoList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return itemCards == undefined ? (
    <Shimmer />
  ) : (
    <div className="restaurantMenu text-center">
      <h1 className=" font-bold text-2xl mt-5">{text}</h1>
      <h2 className=" font-medium text-md mt-2">{costForTwoMessage}</h2>
      {/* category accordions  */}
      {categories.map((c, index) => (
        <RestaurantCategory
          key={c.card.card.title}
          data={c}
          setShowIndex={() => setShowIndex(index)}
          showItems={index == showIndex ? true : false}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
