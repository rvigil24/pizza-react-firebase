import React, { useState } from "react";

//components
import { NavBar } from "../components/NavBar/NavBar";
import { Banner } from "../components/Banner/Banner";
import { Menu } from "../components/Menu/Menu";
import { FoodDialog } from "../components/FoodDialog/FoodDialog";
import { Order } from "../components/Order/Order";

export const Home = () => {
  const [openFood, setOpenFood] = useState(null);

  return (
    <>
      <NavBar />
      <Order />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
      <FoodDialog setOpenFood={setOpenFood} openFood={openFood} />
    </>
  );
};
