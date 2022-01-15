import React from "react";

type FruitPropsType = {
  name: string;
  cost: string;
};
const FruitCart: React.FC<FruitPropsType> = (props) => {
  const { name, cost } = props;
  return (
    <div>
      <h1>{name}</h1>
      <span>{cost}</span>
    </div>
  );
};
export default FruitCart;
