import '../src/index.css';
import { Routes, Route } from 'react-router-dom';
import  CreateEvent  from './pages/CreateEvent';
import HomePage from "./pages/HomePage.tsx";
import Feed from "./pages/Feed.tsx";
import Share from "./pages/Share.tsx";
import Add from "./pages/Add.tsx";
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from "./pages/RegisterPage.tsx";
import AddToHomeScreen from "./components/BeforeInstallPrompt.tsx";


function App() {

  return (
    <>
        <AddToHomeScreen />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>}/>
            <Route path="/feed/:id" element={<ProtectedRoute><Feed /></ProtectedRoute>}/>
            <Route path="/feed/:id/share" element={<ProtectedRoute><Share /></ProtectedRoute>}/>
            <Route path="/feed/:id/add" element={<ProtectedRoute><Add /></ProtectedRoute>}/>

        </Routes>
    </>
  )
}

export default App
