import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerificationCodeScreen from "./screens/VerificationCodeScreen";
import OrderPreviewScreen from "./screens/OrderPreviewScreen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <VerificationCodeScreen />,
    },
    {
      path: "/help",
      element: <h1>Help Page</h1>,
    },
    {
      path: "/order",
      element: <OrderPreviewScreen />,
    },
    { path: "/buy", element: <h1>Buy now</h1> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
