import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
