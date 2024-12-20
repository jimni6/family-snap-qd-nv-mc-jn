import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";

const SignOutButton = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<any | null>(null); // Utilisez un type adapté à votre projet

    const handleLogout = async () => {
        const {error} = await supabase.auth.signOut();
        if (error) {
            alert('Error logging out');
        } else {
            navigate('/'); // Redirect to login page after logout
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            const {data, error} = await supabase.auth.getUser();

            if (error) {
                console.error('Error fetching user:', error.message);
                return;
            }

            setUser(data?.user ?? null); // Définir l'utilisateur ou null si non connecté
        };

        fetchUser();
    }, []);

    if (!user) {
        return
    }

    return <button className="button" onClick={handleLogout}>Logout</button>
};

export default SignOutButton;