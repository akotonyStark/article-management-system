import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div>
        <aside>Sidebar</aside>
        <nav>Navbar</nav>
        <Outlet/>
        
    </div>
  )
}

export default RootLayout