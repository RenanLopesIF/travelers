import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';

import About from './pages/About';
import { Home } from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
