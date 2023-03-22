import { createBrowserRouter } from "react-router-dom";
import { App } from "../App/index";
import { Footer } from "../components/Footer";
import { CadasLivro } from "../pages/CadastroLivro/index";
import { Emprestimo } from "../pages/Emprestimos";

import { Home } from "../pages/Home";
import { Lista } from "../pages/Lista";
import { PageError } from "../pages/PageError";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageError/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/emprestimos", element: <Emprestimo/>},
            {path: "/lista", element: <Lista/>},
           
        ]
    }
   
]);