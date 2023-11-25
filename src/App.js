import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AllPage from "./pages/allGames/AllPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGames } from "./redux/allGamesSlice/allGamesSlice";
import GamePage from "./pages/singleGame/GamePage";
import PcPlatform from "./pages/pcPage/PcPlatform";
import MobilePlatform from "./pages/mobilePage/MobilePlatform";
import ByCategory from "./pages/categoriesGames/ByCategory";
import ProtectedRoutes from "./protected-routes/ProtectedRoutes";
import { getNews } from "./redux/newsSlice/NewsSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all",
        element: (
          <ProtectedRoutes>
            <AllPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/platform/pc",
        element: (
          <ProtectedRoutes>
            <PcPlatform />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/platform/mobile&web",
        element: (
          <ProtectedRoutes>
            <MobilePlatform />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/category/:cate",
        element: (
          <ProtectedRoutes>
            <ByCategory />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/game/:id",
        element: (
          <ProtectedRoutes>
            <GamePage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
    dispatch(getNews());
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
