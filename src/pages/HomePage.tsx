import {Link} from "react-router-dom";
import LoginPage from "../components/LoginPage.tsx";
import SignOutButton from "../components/SignOutButton.tsx";

function HomePage() {
    return (
        <>
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="../">
                                    <img src="./src/assets/img/lgo.svg" alt="Logo"/>
                                </a>
                                <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
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
                        <div className="columns is-vcentered">
                            <div className="column is-5">
                                <figure className="image is-4by3">
                                    <img src="./src/assets/img/FamilySnap.svg" alt="Description"/>
                                </figure>
                            </div>
                            <div className="column is-6 is-offset-1" id="glasslp">
                                <LoginPage />
                                <SignOutButton />
                                <p className="white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec mauris
                                    turpis. Praesent id sapien semper, posuere eros in, faucibus urna. Vestibulum
                                    condimentum sapien varius, malesuada metus in, egestas nibh.
                                    <br/>
                                    <Link to="/create">
                                        <button className="button" id="create">Create an Event</button>
                                    </Link>
                                    <p className="has-text-centered or">or</p>
                                    <input className="input" type="text" placeholder="Paste Your Code"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;
