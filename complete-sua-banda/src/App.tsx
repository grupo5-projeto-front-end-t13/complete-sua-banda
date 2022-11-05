// import { RegisterBand } from "./pages/RegisterBand";
import { AllRoutes } from "./routes/AllRoutes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="colored"
      />
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </>
  );
};

export default App;
