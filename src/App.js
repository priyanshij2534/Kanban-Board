import './App.css';
import Navbar from './components/Navbar';
import Grouping from './components/Grouping';
import ContextProvider from './ContextAPI/ContextProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Grouping groupBy={"Status"} />} />
            <Route path="/user" element={<Grouping groupBy={"Users"} />} />
            <Route path="/priority" element={<Grouping groupBy={"Priority"} />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
