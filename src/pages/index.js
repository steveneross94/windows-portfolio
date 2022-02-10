import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";

const mainStyles = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "9fr 1fr",  
  justifyContent: "space-between",
  height: "100vh",
  width: "100vw",
  background: "#018281"
}

const IndexPage = () => {
  return (
    <div style={mainStyles}>
      <div>Landing Page</div>
      <Navbar />
    </div>
  )
}

export default IndexPage
