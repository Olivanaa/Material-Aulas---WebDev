import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";
import Configuracoes from "../pages/Configuracoes";
import Dashboard from "../pages/Dashboard";
import Relatorios from "../pages/Relatorios"
import PageNotFound from "../pages/PageNotFound"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout/>,
        errorElement:<PageNotFound/>,
        children: [
            {
                index: true,
                element:<Dashboard/>
            },
            {                    
                path:"configuracoes",
                element: <Configuracoes/>
            },
            {
                path:"relatorios",
                element:<Relatorios/>
            }            
        ]
    }

])

// createBrowserRouter, função que recebe um array de objetos, como objeto sera umma rota
// tem dois atributos principais, path, element - path, nome da rota, element qual componente vai ser carregado quando acessar a path
// children, todo que tiver no pai, vai ter no filho, nested, preciso dizer onde os filhos vão abrir, outlet, uma janela, vai abrir o conteudo nesta janela
//index, qual é o primeiro componente que vai abrir, o filho padrao