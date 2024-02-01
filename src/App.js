import React from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Hero from "./components/hero";
import SubMenu from "./components/submenu";
import { useGlobalContext } from "./context"; 
function App() {
  const context = useGlobalContext(); 
  return (
   <>
   <NavBar />
   <SideBar />
   <Hero />
   <SubMenu />
   
   
   </>
  );
}

export default App;
