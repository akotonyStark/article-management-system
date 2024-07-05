import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { ChakraProvider } from "@chakra-ui/react";
import Articles from "./pages/Articles";
import CreateArticle from "./pages/CreateArticle";
import Login from "./pages/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/new-article" element={<CreateArticle />} />
        </Route>

        <Route index path="/login" element={<Login />} />
      </Route>
    )
  );

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
