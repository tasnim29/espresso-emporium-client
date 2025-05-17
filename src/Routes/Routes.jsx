import { createBrowserRouter } from "react-router";

import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";
import Update from "../Components/Update";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import Users from "../Components/Users";

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
      {
        path: "/coffeeUpdate/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: Update,
      },
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:3000/users"),
        Component: Users,
      },
    ],
  },
]);
