import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import Root from "Core/root";
import store from "Redux/store/store";
import history from "Core/history";
import i18n from "I18n";

import "Styles/root.scss";

ReactDOM.createRoot(document.getElementById("react")).render(
  <React.Fragment>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading">
        <Root store={store} history={history}></Root>
      </Suspense>
    </I18nextProvider>
  </React.Fragment>
);
