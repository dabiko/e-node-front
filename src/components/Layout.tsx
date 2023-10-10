import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
}

export default Layout
