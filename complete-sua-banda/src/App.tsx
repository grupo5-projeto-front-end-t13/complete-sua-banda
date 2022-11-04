import { GlobalStyle } from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
    </>
  );
};

export default App;
