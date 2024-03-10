import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"
import { HashRouter } from "react-router-dom"
import { About } from "../about/about"
import { Maintenance } from "./maintenance"
import { ResumeViewer } from "./resume-viewer"

/**
 * This is the main entry point into the front-facing application.
 *
 * The application is loaded via 'chunks' (Googe: webpack code-splitting), but
 * once the application is loaded up front, there is no loading time latency.
 *
 * Once procedural is running, the home page allows selection between procedural
 * and intercept.
 */
export const Home = () => {
  if (process.env.REACT_APP_MAINTENANCE === "true") {
    return <Maintenance />
  }

  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeViewer />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
