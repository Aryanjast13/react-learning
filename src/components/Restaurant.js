import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Restaurant = (props) => {
  const { resData } = props;
  const { info } = resData;
  const { name, avgRatingString, sla, cuisines, cloudinaryImageId } = info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card w-[230px] h-[340px] hover:shadow-2xl rounded-2xl bg-gray-100 break-words pt-1  ">
      <img
        className="w-[205px]  mx-auto h-40 object-center object-cover rounded-lg mb-2 mt-2"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="pl-2 text-gray-800 font-medium">
        <h3 id="name" className="font-bold">
          {name}
        </h3>

        <h5 id="rating">{avgRatingString} stars </h5>
        <h5 id="delivery">{sla.deliveryTime} mins</h5>

        <h5 id="cuisine">{cuisines.slice(0, 2).join(",")}</h5>
        <h5>User : {loggedInUser}</h5>
      </div>
    </div>
  );
};

export const withPromotedLabel = (Restaurant) => {
  return (props) => {
    const { resData } = props;

    return (
      <div>
        <label>p</label>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default Restaurant;
