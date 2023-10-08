import ReactDom from 'react-dom/client'
import App from './App'
import React from "react"
import "./index.css" 

const rootEL = document.getElementById("root") as HTMLElement
const root = ReactDom.createRoot(rootEL)

root.render(
<React.StrictMode>
  <App /> 
</React.StrictMode>
);