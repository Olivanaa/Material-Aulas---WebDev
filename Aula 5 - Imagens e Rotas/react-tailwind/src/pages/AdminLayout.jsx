import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
// import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen p-6">    
        {/* <img src={logo} alt="" />    
        <Dashboard/> */}
        <Outlet/>
      </div>
    </div>
  );
}


//biblioteca para rotas
// npm i react-router-dom

//só atualiza o oulet, para aparecer o conteudo dos filhos configurados em appRoutes
