import React from "react";
import Routes from "./Routes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Routes />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
