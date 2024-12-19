import '../src/App.css';

function Create() {

    return (
        <>
        
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
                                <a href="create.html"><button className="button" id="create">Create an Event</button></a>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        
    </section>
        
        </>
)
    }

export default Create