import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./Component/Layout/Layout";
import { Home } from "./Component/Home/Home";
import { Plans } from "./Component/Plans/Plans";
import { ContactUs } from "./Component/ContactUs/ContactUs";
import { Apartment } from "./Component/Apartments/Apartment";
import { AboutUs } from "./Component/AboutUs/AboutUs";
import { BedorRoom } from "./Component/AllRooms/BedorRoom/BedorRoom";
import { NahelRoom } from "./Component/AllRooms/NahelRoom/NahelRoom";
import { EllanRoom } from "./Component/AllRooms/EllanRoom/EllanRoom";
import { SafaRoom } from "./Component//AllRooms/SafaRoom/SafaRoom";
import { MasterRooms } from "./Component/MasterRoom/MasterRoom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import load from "../src/Animation/home.json";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "apartment", element: <Apartment /> },
        { path: "plans", element: <Plans /> },
        { path: "contact", element: <ContactUs /> },
        { path: "about", element: <AboutUs /> },
        { path: "masterrooms", element: <MasterRooms /> },
        { path: "bedorroom", element: <BedorRoom /> },
        { path: "ellanroom", element: <EllanRoom /> },
        { path: "nahelroom", element: <NahelRoom /> },
        { path: "safaroom", element: <SafaRoom /> },
      ],
    },
  ]);

  return (
    <>
      {loading ? (
        <div className="row ">
          <Lottie animationData={load} className="animatLoad " />
        </div>
      ) : (
        <RouterProvider router={routes} />
      )}
    </>
  );
}

export default App;
