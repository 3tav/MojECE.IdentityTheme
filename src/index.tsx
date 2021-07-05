import * as React from "react";
import { render } from "react-dom"
import App from './App'

const rootElement = document.getElementById("root")
if(rootElement) console.log(rootElement)
render(<App />, rootElement)
