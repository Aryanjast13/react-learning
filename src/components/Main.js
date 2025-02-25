import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

import Restaurant, { withPromotedLabel } from "./Restaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Main = () => {
  const [listofRestaurants, setlistofRestaurant] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const RestaurantPromoted = withPromotedLabel(Restaurant);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>you are offline,please check your internet connection</h1>;

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listofRestaurants == undefined || listofRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="main-container w-[98vw]  mx-auto">
      <div className="filter-container w-[96vw]  mx-auto my-3">
        <div className="search-container flex gap-20 p-4">
          <input
            className="form bg-white outline-none   "
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search bg-green-400 py-2 px-6 rounded-lg text-white shadow-lg text-lg hover:bg-green-300"
            onClick={() => {
              setFilterResList(
                listofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
          <button
            className="filter-btn bg-green-400 py-2 px-6 rounded-lg text-white shadow-lg text-lg hover:bg-green-300"
            onClick={() => {
              const filterList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setlistofRestaurant(filterList);
            }}
          >
            Top Rating Restaurant
          </button>
          <div>
            <label>UserName :</label>
            <input
              className="border p-2 ml-1"
              type="text"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="res-container w-[96vw]  mx-auto my-3 p-3 pt-1  flex flex-wrap gap-8">
        {filterResList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {false ? (
              <RestaurantPromoted resData={restaurant} />
            ) : (
              <Restaurant resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
