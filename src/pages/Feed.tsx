import {Link} from "react-router-dom";
import Photos from "../components/Photos.tsx";

function Feed() {
    const eventId = '3f99a97f-c833-491b-b90f-efab309c349d'; // Replace with the UUID of the event you want
    
    return (
        <>

    <section className="section section-feed">

    <div className="container">
        <div id="feed-text">
      <h1 className="title-feed">New Year Eve Party</h1>
      <h2>31/12/2024</h2>
      <h3>Join us for a night of fun and celebration as we ring in the new year!</h3>
    </div>
    <div id="share">
        <Link to="/share">
            <button className="button btn-share" id="create">Share</button>
        </Link>
    </div>
        <Photos eventId={eventId}/>
    </div>
    </section>
    <footer>
        <Link to="/share">
            <div id="block-add">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="white" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                </svg>
            </div>
        </Link>
    </footer>
            
    <div className="modal" id="imageModal">
        <span className="modal-close" id="modalClose">&times;</span>
        <img className="modal-content" id="modalImage" src="" alt=""/>
    </div>
    {/*<script>*/}
    {/*    document.querySelectorAll('.modal-trigger').forEach(item => {*/}
    {/*        item.addEventListener('click', event => {*/}
    {/*            const modal = document.getElementById('imageModal');*/}
    {/*            const modalImg = document.getElementById('modalImage');*/}
    {/*            modal.style.display = 'block';*/}
    {/*            modalImg.src = event.target.src;*/}
    {/*        })*/}
    {/*    });*/}
    
    {/*    document.getElementById('modalClose').addEventListener('click', () => {*/}
    {/*        document.getElementById('imageModal').style.display = 'none'*/}
    {/*    });*/}
    
    {/*    window.addEventListener('click', event => {*/}
    {/*        const modal = document.getElementById('imageModal');*/}
    {/*        if (event.target === modal) {*/}
    {/*            modal.style.display = 'none'*/}
    {/*        }*/}
    {/*    });*/}
    {/*</script>*/}
        
        </>
)
    }

export default Feed