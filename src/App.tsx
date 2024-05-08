import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import routes from "./routes";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route) => {
              switch (route.layout) {
                case "main":
                  return (
                    <Route exact path={route.path} key={route.path}>
                      <Main>
                        <route.component />
                      </Main>
                    </Route>
                  );
                case "auth":
                  return (
                    <Route exact path={route.path} key={route.path}>
                      <Auth>
                        <route.component />
                      </Auth>
                    </Route>
                  );
                default:
                  return null;
              }
            })}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
