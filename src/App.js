import './App.css';
import Home from './components/Home';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Details from './components/Details';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path='' element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='movies/:type/:id' element={<Details />} />
          {/* <Route to='/' element='Home.jsx' /> */}
      </Routes>
    </div>
  );
}

export default App;
