import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";

//hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";
//layouts
import MainLayout from "./layouts/MainLayout";

//components
import AdminNavbar from "./components/AdminNavbar";

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import Admin from "./pages/Admin";
import Products from "./pages/ProductsResult";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

import "./App.scss";
import "./components/Fontawesomeicon";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <AdminNavbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/products"
          render={() => (
            <MainLayout>
              <Products />
            </MainLayout>
          )}
        />
        <Route
          path="/products/:filterType"
          render={() => (
            <MainLayout>
              <Products />
            </MainLayout>
          )}
        />

        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <MainLayout>
              <Cart />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/account"
          render={() => (
            <WithAuth>
              <MainLayout>
                <MyAccount />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/about"
          render={() => (
            <MainLayout>
              <About />
            </MainLayout>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <MainLayout>
                <Admin />
              </MainLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
