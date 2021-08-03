import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Container from "./Components/Container/Container.jsx";
import Spinner from "./Components/Loader/Loader";

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage.jsx" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import(
    "./views/MoviesPage/MoviesPage.jsx" /* webpackChunkName: "MoviePage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner></Spinner>}>
        <Switch>
          <Route path='/' exact>
            <HomePage></HomePage>
          </Route>
          <Route path='/movies' exact>
            <MoviesPage></MoviesPage>
          </Route>
          <Route path='/movies/:movieId'>
            <MovieDetailsPage />
          </Route>
        </Switch>{" "}
      </Suspense>
      <ToastContainer></ToastContainer>
    </Container>
  );
}

export default App;
