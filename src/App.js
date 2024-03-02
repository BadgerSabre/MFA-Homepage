import './App.css';
import Header from './Components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/About'>About</a>
        </li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
