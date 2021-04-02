import './App.css';
import Admin from './component/admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Checkout from './component/checkout/Checkout';
import Orders from './component/orders/Orders';
import Login from './component/Login/Login';
import Nav from './component/nav/Nav';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import NotFound from './component/NotFound/NotFound';
import ManageProducts from './component/ManageProducts/ManageProducts';
import AddItems from './component/AddItems/AddItems';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route path="/admin/addItems">
              <AddItems />
            </Route>
            <PrivateRoute path="/admin/manageItems">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>

    </UserContext.Provider >
  );
}

export default App;
