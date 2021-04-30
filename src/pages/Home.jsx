import React from "react";

//hooks
import { useOpenFood } from "../hooks/useOpenFood";
import { useOrders } from "../hooks/useOrders";
import { useTitle } from "../hooks/useTitle";
import { useAuthentication } from "../hooks/useAuthentication";
import { useOrderDialog } from "../hooks/useOrderDialog";

//components
import { NavBar } from "../components/NavBar/NavBar";
import { Banner } from "../components/Banner/Banner";
import { Menu } from "../components/Menu/Menu";
import { FoodDialog } from "../components/FoodDialog/FoodDialog";
import { Order } from "../components/Order/Order";
import { OrderDialog } from "../components/Order/OrderDialog";

export const Home = () => {
  const auth = useAuthentication();
  const openFood = useOpenFood();
  const orders = useOrders();
  const orderDialog = useOrderDialog();
  useTitle({ openFood: openFood.openFood, orders: [...orders.orders] });

  return (
    <>
      <NavBar {...auth} />
      <OrderDialog {...orderDialog} {...orders} />
      <Order {...orders} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
      <FoodDialog {...openFood} {...orders} />
    </>
  );
};
