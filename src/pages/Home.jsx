import React from "react";

//hooks
import { useOpenFood } from "../hooks/useOpenFood";
import { useOrders } from "../hooks/useOrders";

//components
import { NavBar } from "../components/NavBar/NavBar";
import { Banner } from "../components/Banner/Banner";
import { Menu } from "../components/Menu/Menu";
import { FoodDialog } from "../components/FoodDialog/FoodDialog";
import { Order } from "../components/Order/Order";

export const Home = () => {
  const openFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
      <NavBar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
      <FoodDialog {...openFood} {...orders} />
    </>
  );
};
