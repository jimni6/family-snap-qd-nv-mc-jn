import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert('Error logging out');
        } else {
            navigate('/'); // Redirect to login page after logout
        }
    };

    return (
            <button onClick={handleLogout}>Logout</button>
    );
};

export default SignOutButton;