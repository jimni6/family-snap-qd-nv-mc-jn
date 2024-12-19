import '../src/index.css';
import { Routes, Route } from 'react-router-dom';
import  CreateEvent  from './pages/CreateEvent';
import HomePage from "./pages/HomePage.tsx";
import Feed from "./pages/Feed.tsx";
import Share from "./pages/Share.tsx";
import Add from "./pages/Add.tsx";



function App() {

    const id = '0958f13d-62fd-47e0-9b76-fcbf60af466b'
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/share" element={<Share id={id}/>} />
            <Route path="/add" element={<Add />} />
        </Routes>
    </>
  )
}

export default App
