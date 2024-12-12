import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fetch from './Fetch';  // Assuming Fetch is a valid component
import Axios from './Axios';  // Assuming Axios is a valid component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use element prop with JSX */}
        <Route path="/" element={<Fetch />} />
        <Route path="/Axios" element={<Axios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
