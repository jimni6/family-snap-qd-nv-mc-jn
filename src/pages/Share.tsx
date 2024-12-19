import {Link} from "react-router-dom";

function Share() {

    return (
        <>
        
        <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" >
                            <img src="img/lgo.svg" alt="Logo"/>
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
            
            <div className="container has-text-centered contshare">
                <Link to="/feed"><div id="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></div></Link>

                <div className="column is-6 is-offset-3" id="glassshare">

                    <h1 className="title">
                        Share with your Friends
                        
                    </h1>
                    <div className="">
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                
                                <div id="code">UPHV693SJI</div>
                        </p>
                        
                        </div>
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                
                                <div id="qrcode"><img src="img/qr.png" alt=""/></div>
                            </p>
                        
                        </div>
                    </div>
                </div>
                <br/>
            </div>
            </div>
    </section>
        
        </>
)
    }

export default Share