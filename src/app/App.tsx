import { useEffect, useRef } from "react";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const contentRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const elements = useRoutes(routes);
  useEffect(() => {
    setTimeout(() => {
      contentRef.current.classList.add("visible");
    }, 200);
  }, []);
  return (
    <div className="content" ref={contentRef}>
      {elements}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
