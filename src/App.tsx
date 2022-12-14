import classNames from "classnames"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Header } from "./components/Header"
import { SidebarMenu } from "./components/SidebarMenu"
import { Router } from "./Router"

export const App = () => {

  const page = useLocation()
  const [sidebar, setSidebar] = useState(false)
  return (
    <>
    {sidebar ? <SidebarMenu closeFun={setSidebar} /> : <></>}
      <div className={classNames("flex flex-col bg-cover bg-no-repeat bg-black pt-8 medium:pt-0 bg-fixed xl:pt-12  items-center min-h-screen w-screen", {
        "bg-homeMobile tablet:bg-homeTablet desktop:bg-homeDestkop gap-16 desktop:gap-36": page.pathname === "/",
        "bg-destinationMobile tablet:bg-destinationTablet desktop:bg-destinationDestkotp gap-12": page.pathname === "/destination",
        "bg-crewMobile tablet:bg-crewTablet desktop:bg-crewDesktop justify-between": page.pathname === "/crew",
        "bg-technologyMobile tablet:bg-technologyTablet desktop:bg-technologyDesktop": page.pathname === "/technology"
      })}>

        <Header funSidebar={setSidebar} />
        <Router />
      </div>
    </>


  )
}