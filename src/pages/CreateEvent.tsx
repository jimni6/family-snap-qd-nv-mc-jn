import { useState } from 'react';
import { supabase } from '../supabaseClient';
import {Link, useNavigate} from 'react-router-dom';

function CreateEvent() {

    const getUserId = async () => {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
            console.error('Error fetching user:', error.message);
            return;
        }

        if (data?.user) {
            const userId = data.user.id; // Get the user's unique ID
            console.log('Authenticated User ID:', userId);
            return userId;
        } else {
            console.log('No user is authenticated.');
            return null;
        }
    };
    
    
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();
    
    const createEvent = async () => {

        const { data, error } = await supabase
            .from('events')
            .insert([
                {  title: title, date: date, description: description, created_by: await getUserId()},
            ])
            .select('id')

        if (error) {
            alert('Insert failed');
            console.log(error.message);
        } else if (data && data.length > 0) {
            const id = data[0].id;

            // Use React Router's navigate function
            navigate(`/feed/${id}`);
        }
    }

    return (
        <div>

            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <Link to="/" className="navbar-item" >
                                    <img src="./src/assets/img/lgo.svg" alt="Logo"/>
                                </Link>

                            </div>
                            <div id="navbarMenu" className="navbar-menu">
                                <div className="navbar-end">
                                    <div className="tabs is-right">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3" id="glasscreate">
                            <h1 className="title">
                                Create an Event
                            </h1>
                            <div className="">
                                <div className="field is-grouped">
                                    <p className="control is-expanded">
                                        <input className="input form" type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)}/>
                                        <input className="input form" type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)}/>
                                        <input className="input form" type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                                        <button className="button" id="create" onClick={createEvent}>Create an Event</button>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CreateEvent;