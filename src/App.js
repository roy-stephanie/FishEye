import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Photographers from './views/photographers/Photographers';
import Photographer from './views/photographer/Photographer';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Photographers />} />
            <Route path='/photographer/:id' element={<Photographer />} />
            <Route path='/post' element={<div></div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
