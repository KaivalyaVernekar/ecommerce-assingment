import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { fetchAPIData } from "./api/index";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";

// Components
import Navbar from "./components/Navbar/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setApiData(await fetchAPIData());
    };
    fetchAPI();
  }, []);
  console.log(apiData);

  const sideDrawerHandler = () => {
    setSideToggle(true);
  };

  const backdropHandler = () => {
    setSideToggle(false);
  };

  //trying to get productid from child to parent
  /*const productIDHandler = (idValue) => {
  return idValue;
}*/

  return (
    <Router>
      <Navbar click={sideDrawerHandler} />
      <SideDrawer show={sideToggle} click={backdropHandler} />
      <Backdrop show={sideToggle} click={backdropHandler} />
      <main className="app">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage homeData={apiData} />}
          />
          <Route
            exact
            path="/product/:id"
            component={() => <ProductPage productData={apiData} />}
          />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
