import React from "react";
import ReactDom from "react-dom";
import App from "./section/App";
import { createRoot } from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<div><App /></div>);