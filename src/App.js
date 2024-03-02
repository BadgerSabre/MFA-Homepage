import './App.css';
import Header from './Components/Header/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Coaches from './Pages/Coaches';
import Fencing from './Pages/Fencing';
import FAQ from './Pages/FAQ';
import Policies from './Pages/Policies';
import Calendar from './Pages/Calendar';
import NoPage from './Pages/NoPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Coaches' element={<Coaches />}></Route>
          <Route path='/Sport' element={<Fencing />}></Route>
          <Route path='/FAQ' element={<FAQ />}></Route>
          <Route path='/Policies' element={<Policies />}></Route>
          <Route path='/Calendar' element={<Calendar />}></Route>
          <Route path='*' element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
