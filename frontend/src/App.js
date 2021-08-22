import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddReview from './components/add-review';
import Login from './components/login';
import Movie from './components/movie';
import MoviesList from './components/movies-list';

function App() {
  return (
    <div className="App">
      <Login />
      <AddReview />
      <MoviesList />
      <Movie />
    </div>
  );
}

export default App;
