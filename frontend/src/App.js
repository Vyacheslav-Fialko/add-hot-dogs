import React from "react";
import Header from "./Header/Header";
import AllProduct from "./AllProduct/AllProduct";


function App() {


  return (
    <React.Fragment>
      <Header />
      <div className="wraper">
        <h2 className="wraper__title">All hot-dogs</h2>
        <AllProduct />
      </div>
    </React.Fragment>
  );
}

export default App;
