import { useState } from 'react';
import { supabase } from '../supabaseClient';
import {Link, useNavigate} from 'react-router-dom';

const CreateEvent = () => {
    
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    // const [creator, setCreator] = useState('');
    const navigate = useNavigate();
    
    const createEvent = async () => {

        const { data, error } = await supabase
            .from('events')
            .insert([
                {  title: title, date: date, description: description, qrcode: `https://api.qrserver.com/v1/create-qr-code/?data=${title}&size=150x150`,  created_by:'bcd2b9f4-2ffc-4ec8-a141-c14ac6575e72'  },
            ])
            .select()

        if (error) {
            alert('Insert failed');
            console.log(error.message);
        } else {
            console.log(data);
                navigate('/feed')
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
                                        {/*<Link to="/feed">*/}
                                            <button className="button" id="create" onClick={createEvent}>Create an Event</button>
                                        {/*</Link>*/}

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