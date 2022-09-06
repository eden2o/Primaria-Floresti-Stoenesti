import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import Header from "./Header"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="siteContainer">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
