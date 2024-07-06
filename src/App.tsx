import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Articles from "./pages/Articles";
import CreateArticle from "./pages/CreateArticle";
import Login from "./pages/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import RootBoundary from "./RootBoundary";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<RootBoundary />}>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Articles />} />
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
