import { Route, Routes } from "react-router-dom";
import Games from "./Games";
import Home from "./Home";
import Profile from "./Profile";
import Stores from "./Stores";

const routes = [
    {
      path: '/',
      Element: Home,
    },
    {
      path: '/games',
      Element: Games,
    },
    {
      path: '/stores',
      Element: Stores,
    },
    {
      path: '/profile',
      Element: Profile,
    },
  ];
  
  const AppRoutes = () => (
    <Routes>
      {routes.map(({ path, Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  );
  
  export default AppRoutes;