import React from "react";
import { RouterProvider } from "react-router-dom";
import RouterObject from "./util/router";

//24.11.27 지은 [완료] : react-router-dom 신기능 CreateBorwserRouter 적용 
function App() {
  return <RouterProvider router={RouterObject} />;
}

export default App;
