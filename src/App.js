import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./containers/Home/Home.tsx";
import Login from "./containers/Login/Login.tsx";
import MainLayout from "./components/Layout/MainLayout";
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import { sagaMiddleware } from "./middleware";
import rootSaga from "./sagas";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <Router>
          <div>
            <MainLayout>
              <Switch>
                <Route path="/login">
                  <Login exact />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </MainLayout>
          </div>
        </Router>
      </StylesProvider>
    </Provider>
  );
}

sagaMiddleware.run(rootSaga)