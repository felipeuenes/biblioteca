import { createBrowserRouter } from "react-router-dom";
import { App } from "../App/index";
import { CadasLivro } from "../pages/CadastroLivro/index";
import { Emprestimo } from "../pages/Emprestimos";

import { Home } from "../pages/Home";
import { PageError } from "../pages/PageError";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageError/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/cadastroLivros", element: <CadasLivro/>},
            {path: "/emprestimos", element: <Emprestimo/>},
           
        ]
    }
   
]);