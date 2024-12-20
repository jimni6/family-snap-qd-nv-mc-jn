import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user);
            setLoading(false);
        };

        checkSession();
    }, []);

    if (loading) return <div>Loading...</div>;

    // Redirect to login if no user is logged in
    return user ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;

