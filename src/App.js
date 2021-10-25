import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
