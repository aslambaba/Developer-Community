
import React from "react"
import Header from "./header"
import Footer from './footer';
import "./style/layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}


export default Layout
