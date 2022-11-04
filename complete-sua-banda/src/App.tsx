import { RegisterBand } from "./pages/RegisterBand";
import { RegisterMusician } from "./pages/RegisterMusician";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <RegisterMusician />
=======
      <ToastContainer />
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
>>>>>>> 28a5349a52f9e953bdd802ccd0b3b6d7f11c0091
    </>
  );
};

export default App;
