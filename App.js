import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";

const Grocery=lazy(()=>import("./src/components/Grocery"))

const About=lazy(()=>import("./src/components/About"))

const App = () => {
    return (
        <div className="App">
             <Header />
             <Outlet />
            <Footer />
        </div>
    );
};

export default App;

const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<App />,
    errorElement: <Error />,
    children:[
        {
            path:"/",
            element:<Body />
        }
        ,
        {
            path:"/about",
            element:<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu />
        }
    ]
    },
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);