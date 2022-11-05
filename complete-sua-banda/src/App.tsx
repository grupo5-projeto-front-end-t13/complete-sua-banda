<<<<<<< HEAD
// import { RegisterBand } from "./pages/RegisterBand";
import { AllRoutes } from "./routes/AllRoutes";
=======
import { RegisterBand } from "./pages/RegisterBand";
import { RegisterMusician } from "./pages/RegisterMusician";
>>>>>>> 4e2016f6945c2c2779ef1c5dfe954ccf776ef541
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <AllRoutes />
=======
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
>>>>>>> 4e2016f6945c2c2779ef1c5dfe954ccf776ef541
    </>
  );
};

export default App;
