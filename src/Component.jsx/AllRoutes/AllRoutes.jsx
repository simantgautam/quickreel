import React from "react";
import Home from "../Home";
import { Route, Routes } from "react-router-dom";

function AllRoutes(props) {
  const route = [
    {
      path: "/",
      element: (
        <>
          <Home comp={1} />
        </>
      ),
    },
  ];
  return (
    <>
      <Routes>
        {route.map((elem, i) => {
          return <Route key={i} path={elem.path} element={elem.element} />;
        })}
      </Routes>
    </>
  );
}

export default AllRoutes;
