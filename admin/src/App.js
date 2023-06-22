import './App.scss';
import Home from './pages/home/Home';
import New from './pages/new/New';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/new' element={<New/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
