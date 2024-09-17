import "./App.css";
import router from "./services/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="felx w-full h-screen justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
