import './App.css';
import Home from './components/Home';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import NotFound from './components/NotFound';
import Detail from './components/Detail';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='movies/detail/:id' element={<Detail />} />
          {/* <Route to='/' element='Home.jsx' /> */}
      </Routes>
    </div>
  );
}

export default App;
