/* istanbul ignore file */
import React, { Suspense } from "react"
import { createRoot } from "react-dom/client"
import { Home } from "./components/home/home"

import "./css/body.css"
import "./css/fonts.css"

const container = document.getElementById("root") as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  </React.StrictMode>
)
