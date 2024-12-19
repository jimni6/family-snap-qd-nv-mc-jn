import { Routes, Route } from 'react-router-dom';
import  CreateEvent  from './pages/CreateEvent';


import './App.css'

function App() {


    return (

        <Routes>
            <Route path="/create" element={<CreateEvent />} />
        </Routes>

    );
}

export default App
