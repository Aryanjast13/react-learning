import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name:{name}</h2>
      <h2>Location:haryana</h2>
    </div>
  );
};
export default User;
