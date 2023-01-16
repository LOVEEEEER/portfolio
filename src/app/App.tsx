import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routes";

function App() {
  const elements = useRoutes(routes);
  return (
    <>
      {elements}
      <ToastContainer />
    </>
  );
}

export default App;
