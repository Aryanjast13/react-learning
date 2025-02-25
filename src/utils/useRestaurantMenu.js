import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfoList, setResInfoList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`
      https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.9917964&lng=76.9859077&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER
    `);
    const json = await data.json();
    setResInfoList(json.data);
  };

  return resInfoList;
};

export default useRestaurantMenu;
