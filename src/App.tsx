import '../src/index.css';
import { Routes, Route } from 'react-router-dom';
import  CreateEvent  from './pages/CreateEvent';
import HomePage from "./pages/HomePage.tsx";
import Feed from "./pages/Feed.tsx";
import Share from "./pages/Share.tsx";
import AddToHomeScreen from "./components/BeforeInstallPrompt.tsx";
import PhotoUploader from './pages/PhotosUploader.tsx';
import Add from "./pages/Add.tsx";


function App() {

  return (
    <>
        <AddToHomeScreen />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/share" element={<Share />} />
            <Route path="/photo" element={<PhotoUploader />} />
            <Route path="/add" element={<Add />} />
        </Routes>
    </>
  )
}

export default App
