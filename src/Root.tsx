/* eslint-disable global-require */
import { FC, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Web3ContextProvider } from "./hooks/web3Context";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { initLocale } from "./locales";

import App from "./App";
import store from "./store";
import { Landing } from "./views";

const Root: FC = () => {
  useEffect(() => {
    initLocale();
  }, []);

  return (
    <Web3ContextProvider>
      <Provider store={store}>
        <I18nProvider i18n={i18n}>
          <BrowserRouter basename={"/"}>
            <Switch>
              <Route path="/landing">
                <Landing></Landing>
              </Route>
              <App />
            </Switch>
          </BrowserRouter>
        </I18nProvider>
      </Provider>
    </Web3ContextProvider>
  );
};

export default Root;
