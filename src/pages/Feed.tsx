import {useState} from "react";
import {Link} from "react-router-dom";

function Feed() {
    const [modalImage, setModalImage] = useState<string | null>(null);

    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const src = event.currentTarget.src;
        setModalImage(src); // Ouvre la modale avec l'image sélectionnée
    };

    const closeModal = () => {
        setModalImage(null); // Ferme la modale
    };
    
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
      <div className="columns is-multiline">
          
        <div className="column is-one-third">
          <figure className="image is-square">
            <img src="img/9.jpg" alt="Image 1" className="modal-trigger" onClick={handleImageClick}/>
          </figure>
        </div>
        
        <div className="column is-one-third">
          <figure className="image is-square">
            <img src="img/8.jpg" alt="Image 2" className="modal-trigger"/>
          </figure>
        </div>
        
        <div className="column is-one-third">
          <figure className="image is-square">
            <img src="img/7.jpg" alt="Image 3" className="modal-trigger"/>
          </figure>
        </div>
        
        <div className="column is-one-third">
          <figure className="image is-square">
            <img src="img/4.jpg" alt="Image 4" className="modal-trigger"/>
          </figure>
        </div>
        
        <div className="column is-one-third">
          <figure className="image is-square">
            <img src="img/5.jpg" alt="Image 5" className="modal-trigger"/>
          </figure>
        </div>
        
        <div className="column is-one-third">
          <figure className="image is-square">
            <img src="img/6.jpg" alt="Image 6" className="modal-trigger"/>
          </figure>
        </div>
        
        <div className="column is-one-third">
            <figure className="image is-square">
              <img src="img/3.jpg" alt="Image 7" className="modal-trigger"/>
            </figure>
          </div>

        <div className="column is-one-third">
            <figure className="image is-square">
              <img src="img/2.jpg" alt="Image 8" className="modal-trigger"/>
            </figure>
          </div>
          
        <div className="column is-one-third">
            <figure className="image is-square">
              <img src="img/1.jpg" alt="Image 9" className="modal-trigger"/>
            </figure>
          </div>
      </div>
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
            
    {/*<div className="modal" id="imageModal">*/}
    {/*    <span className="modal-close" id="modalClose">&times;</span>*/}
    {/*    <img className="modal-content" id="modalImage" src="" alt=""/>*/}
    {/*</div>*/}

            {modalImage && (
                <div
                    className="modal"
                    id="imageModal"
                    style={{ display: "block" }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeModal();
                    }}
                >
          <span className="modal-close" id="modalClose" onClick={closeModal}>
            &times;
          </span>
                    <img className="modal-content" id="modalImage" src={modalImage} alt="" />
                </div>
            )}
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