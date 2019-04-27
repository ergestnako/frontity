import { Actions } from "../../types";

const actions: Actions = {
  set: ({ state }, pathOrObj) => {
    const path = typeof pathOrObj === "string" ? pathOrObj : pathOrObj.path;
    const page = typeof pathOrObj === "string" ? null : pathOrObj.page;

    state.path = path;
    state.page = page;

    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
    }
  }
};

export default actions;
