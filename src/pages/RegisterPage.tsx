import { useState } from 'react';
import { supabase } from '../supabaseClient';
import {Link, useNavigate} from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            alert('Registration failed');
        } else {
            alert('Registration successful! Please log in.');
            navigate('/');
        }
    };

    return (

        <div>
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <Link to="/" className="navbar-item">
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
                                Create an Account
                            </h1>
                            <div className="">
                                <div className="field is-grouped">
                                    <p className="control is-expanded">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button className="button" id="create" onClick={handleRegister}>Create an
                                            Account
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>



)
    ;
};

export default RegisterPage;
