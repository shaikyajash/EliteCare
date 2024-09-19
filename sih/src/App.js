import "./App.css";
import router from "./services/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen justify-center items-center bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
