import React, { useEffect, useState } from 'react';
import {supabase} from "../supabaseClient.ts";

// Define the structure of a Photo object
type Photo = {
    id: string; // UUID
    url: string;
};

type PhotosProps = {
    eventId: string; // UUID of the event to filter photos
};

const Photos: React.FC<PhotosProps> = ({ eventId }) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [modalImage, setModalImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                const { data, error } = await supabase
                    .from('photos')
                    .select('id, url')
                    .eq('event_id', eventId); // Filter by event_id

                if (error) {
                    throw new Error(error.message);
                }

                setPhotos(data || []); // Default to an empty array if no data
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, [eventId]); // Re-run the effect if eventId changes

    if (loading) return <p>Loading photos...</p>;
    if (error) return <p>Error: {error}</p>;


    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const src = event.currentTarget.src;
        setModalImage(src); // Ouvre la modale avec l'image sélectionnée
    };

    const closeModal = () => {
        setModalImage(null); // Ferme la modale
    };

    return (
        <div className="columns is-multiline">
            {photos.map((photo) => (
                <div className="column is-one-third">
                    <figure className="image is-square">
                        <img key={photo.id} src={photo.url} alt={`Photo ${photo.id}`} className="modal-trigger" onClick={handleImageClick}/>
                    </figure>
                </div>
            ))}
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
        </div>
    );
};

export default Photos;
