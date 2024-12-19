import '../src/index.css';
import { Routes, Route } from 'react-router-dom';
import  CreateEvent  from './pages/CreateEvent';
import HomePage from "./pages/HomePage.tsx";
import Feed from "./pages/Feed.tsx";
import Share from "./pages/Share.tsx";
import AddToHomeScreen from "./components/BeforeInstallPrompt.tsx";



function App() {

  return (
    <>
        <AddToHomeScreen />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/share" element={<Share />} />
        </Routes>
    </>
  )
}

export default App
