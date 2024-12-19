import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const navigate = useNavigate();

    const createEvent = async () => {

        const { data, error } = await supabase
            .from('events')
            .insert([
                {  title: 'someValueTitle', created_by: 'bcd2b9f4-2ffc-4ec8-a141-c14ac6575e72'  },
            ])
            .select()

        if (error) {
            alert('Insert failed');
            console.log(data, error);
        } else {
            console.log('Logged in:' );
            navigate('/' );
        }
    };


    return (
        <div>
            <h1>event</h1>
            <input
                type="email"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="password"
                placeholder="creator"
                value={creator}
                onChange={(e) => setCreator(e.target.value)}
            />
            <button onClick={createEvent}>Login</button>
            <p>
                Don't have an account? <a href="/ ">Register</a>
            </p>

        </div>
    );
};

export default CreateEvent;