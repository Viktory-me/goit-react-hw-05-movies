import { Switch, Route } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import "./App.css";
import HomePage from "./views/HomePage/HomePage.jsx";
import MoviesPage from "./views/MoviesPage/MoviesPage.jsx";

function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <HomePage></HomePage>
        </Route>
        <Route path='/movies'>
          <MoviesPage></MoviesPage>
        </Route>
      </Switch>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
