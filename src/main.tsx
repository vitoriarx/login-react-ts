import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./globals.css";
import { AuthProvider } from "./contexts/auth/provider";

const divRoot = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(divRoot).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
