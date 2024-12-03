import React from "react";
import { Slot } from "expo-router";
import { AppProvider } from "../scripts/AppContext";

export default Layout = () => {
    return(
        <AppProvider>
            <Slot />
        </AppProvider>
    )
}