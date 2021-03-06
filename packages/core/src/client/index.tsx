import React from "react";
import { hydrate } from "react-dom";
import { loadableReady } from "@loadable/component";
import { hydrate as hydrateEmotion } from "emotion";
import App from "../app";

export default ({ namespaces }) => {
  const ids = document.getElementById("__EMOTION_HYDRATATION_IDS__");
  if (ids) hydrateEmotion(JSON.parse(ids.innerHTML));
  else
    console.warn(
      "Emotion ids for hydratation not found. If you need help please visit https://community.frontity.org."
    );
  loadableReady(() => {
    hydrate(
      <App namespaces={namespaces} />,
      window.document.getElementById("root")
    );
  });
};
