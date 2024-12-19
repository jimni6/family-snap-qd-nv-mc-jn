import { useState } from 'react';
import { supabase } from '../supabaseClient';
import {Link, useNavigate} from 'react-router-dom';

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
            {/*<h1>event</h1>*/}
            {/*<input*/}
            {/*    type="email"*/}
            {/*    placeholder="title"*/}
            {/*    value={title}*/}
            {/*    onChange={(e) => setTitle(e.target.value)}*/}
            {/*/>*/}
            {/*<input*/}
            {/*    type="password"*/}
            {/*    placeholder="creator"*/}
            {/*    value={creator}*/}
            {/*    onChange={(e) => setCreator(e.target.value)}*/}
            {/*/>*/}
            {/*<button onClick={createEvent}>Login</button>*/}
            {/*<p>*/}
            {/*    Don't have an account? <a href="/ ">Register</a>*/}
            {/*</p>*/}

            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="index.html">
                                    <img src="./src/assets/img/lgo.svg" alt="Logo"/>
                                </a>

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
                                        <input className="input form" type="text" placeholder="Title"/>
                                        <input className="input form" type="text" placeholder="Date"/>
                                        <input className="input form" type="text" placeholder="Description"/>
                                        <Link to="/feed">
                                            <button className="button" id="create">Create an Event</button>
                                        </Link>

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