import Movies from "../pages/Movies";
import AddPage from "../pages/AddPage"
import DetailPage from "../pages/DetailPage"
import MoviesRoot from "../pages/MoviesRoot";

export const ROUTES = [
    {
        path:"/",
        element: <MoviesRoot />,
        children:[
            {
                index:true,
                element: <Movies />
            },
            {
                path:"add-movies",
                element: <AddPage />
                
            },
            {
                path:'detail',
                element: <DetailPage />
            }

        ]
    }

]