import * as Sentry from "@sentry/browser";
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../css/line-scale.css";
import { authenticate } from "./actions/auth";
import Winampify from "./components";
import store from "./store";
import { getParams } from "./utils/common";

export const persistor = persistStore(store, null, () => {
  if (store.getState().auth.accessToken && store.getState().auth.refreshToken) {
    store.dispatch(
      authenticate(
        store.getState().auth.accessToken,
        store.getState().auth.refreshToken
      )
    );
  }
});

if (process.env.NODE_ENV === "production")
  Sentry.init({
    dsn: "https://6ee628e2853b493ca3872c3b9daf766d@sentry.io/1469964"
  });

if (window.name === "PopupWindow") {
  // If we're here, it means we came back from the server. Let's pass tokens to parent.
  const params = getParams(window.location.search);
  if (params.length === 2) {
    const accessToken = params[0].slice(13);
    const refreshToken = params[1].slice(14);

    const windowOpener: Window = window.opener;
    if (windowOpener) {
      windowOpener.postMessage(`${accessToken}:${refreshToken}`, "*");
      window.close();
    }
  }
  render(null, document.getElementById("app"));
} else {
  // tslint:disable-next-line: no-console
  console.log(`ENV = ${process.env.NODE_ENV}`);

  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Winampify />
      </PersistGate>
    </Provider>,
    document.getElementById("app")
  );
}
