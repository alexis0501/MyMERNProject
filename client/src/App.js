import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/View/MainPage';
import Purchase from './components/View/Purchase'
import Create from './components/View/Create'
import View from './components/View/View'
import NoPage from './components/View/NoPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<NoPage/>} />
        <Route path='/:error' element={<NoPage/>} />
        <Route path='/home' element={<MainPage/>} />
        <Route path='/create' element={<Create />} />
        <Route path='/purchase/:id' element={<Purchase/>} />
        <Route path='/view/:id' element={<View/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
