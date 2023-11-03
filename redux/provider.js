"use client"

import getStore from "./store";
import { Provider } from "react-redux";
import React from "react";

export function ReduxProvider({children}) {
    const store = getStore();

    return <Provider store={store}>{children}</Provider>
}