import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

function Layout() {


  return (
    <div className="layout">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout
