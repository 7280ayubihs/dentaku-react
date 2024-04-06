import React from "react";
import { createRoot }  from "react-dom/client";
import { Home } from "@pages/Home"

const App = () => {
    return(
        <Home/>
    );
};

const root = createRoot(document.getElementById("root"))
root.render(<App/>);
