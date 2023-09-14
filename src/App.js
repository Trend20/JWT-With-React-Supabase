import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
        <div className="app">
            <h3>
                Implementing JSON Authentication in React and Supabase Application.
            </h3>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/register' element={<Signup />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
