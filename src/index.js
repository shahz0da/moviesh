import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Popular from './pages/Dropdowns/Movies/Popular';
import PopularPeople from './pages/Dropdowns/People/PopularPeople';
import TVShows from './pages/Dropdowns/TVShows/TVShows';
import Home from './pages/Home/Home';
import Search from './pages/Home/Search';
import PeopleDetail from './pages/Details/PeopleDetail';
import MovieDetails from './pages/Details/MovieDetails';
import TVDetails from './pages/Details/TVDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='/movies/:url' element={<Popular />} />
            <Route path='/tv/:url' element={<TVShows />} />
            <Route path='/person' element={<PopularPeople/>} />
            <Route path='/search/:query' element={<Search />} />
            <Route path='/peopleDetail/:id' element={<PeopleDetail/>} />
            <Route path='/movieDetails/:id' element={<MovieDetails/>}/>
            <Route path='/tvDetails/:id' element={<TVDetails/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
