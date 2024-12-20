import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {supabase} from "../supabaseClient.ts";
import logo from '../assets/img/lgo.svg';

function Share() {

    const { id } = useParams()
    const [qrCode, setQrCode] = useState('')
    const [codeId, setCodeId] = useState('')
    
    useEffect(() => {
        const fetchQrCOde = () => {
            
            const linkToEvent = `https://family-snap-qd-nv-mc-jn.vercel.app/feed/${id}`
            const qrCode = `https://api.qrserver.com/v1/create-qr-code/?data=${linkToEvent}&size=150x150`
            setQrCode(qrCode)
        }

        const fetchCodeUnique  = async() => {
            const {data, error} = await supabase
                .from('events')
                .select('code_unique')
                .eq('id', id);

            if(data) {
                setCodeId(data[0].code_unique)
                
            } else (
                console.log(error?.message)
            )
        }
        fetchQrCOde()
        fetchCodeUnique()
        
    }, [id]);
    
    return (
        <>
        
        <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item" >
                            <img src={logo} alt="Logo"/>
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
                <Link to={`/feed/${id}`}>
                    <div id="close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#ffffff" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
                        </svg>
                    </div>
                </Link>

                <div className="column is-6 is-offset-3" id="glassshare">

                    <h1 className="title">
                        Share with your Friends
                        
                    </h1>
                    <div className="">
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                
                                <div id="code">{codeId}</div>
                        </p>
                        
                        </div>
                        <div className="field is-grouped">
                            <p className="control is-expanded">

                                <div id="qrcode"><img src={`${qrCode}`} alt=""/></div>

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