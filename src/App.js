import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import ListPage from "./pages/listPage/ListPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/listPage" component={ListPage} />
    </BrowserRouter>
  );
}

export default App;
