import { createBrowserRouter } from "react-router";

import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),

        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffeeDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
    ],
  },
]);
